import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import { PassThrough } from 'stream';
import fs from 'fs';
import path from 'path';
import os from 'os';

// Set ffmpeg path
ffmpeg.setFfmpegPath(ffmpegInstaller.path);

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' })); // Increased limit for image data
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Global variables for the current export session
let videoStream = null;
let ffmpegCommand = null;
let isRecording = false;
let frameCount = 0;
let currentOutputPath = null;
let ffmpegFinished = null;
let isCancelling = false;  // Flag to suppress error handling during cancel

app.post('/start-export', (req, res) => {
    if (isRecording) {
        return res.status(400).json({ error: 'Recording already in progress' });
    }

    const { fps = 30, filename = 'output.mp4' } = req.body;
    
    // Store the output path in OS temp directory (not project folder)
    const tempDir = os.tmpdir();
    currentOutputPath = path.join(tempDir, filename);
    
    console.log(`Starting export: ${filename} at ${fps} fps`);
    console.log(`Output path: ${currentOutputPath}`);
    isRecording = true;
    isCancelling = false;
    frameCount = 0;

    // Create a PassThrough stream to pipe data to ffmpeg
    videoStream = new PassThrough();

    // Create a promise that resolves when FFmpeg finishes
    ffmpegFinished = new Promise((resolve, reject) => {
        // Initialize FFmpeg
        ffmpegCommand = ffmpeg(videoStream)
            .inputFormat('image2pipe')
            .inputFPS(fps)
            .outputOptions([
                '-c:v libx264',
                '-pix_fmt yuv420p',
                '-preset fast',
                '-crf 18',  // High quality
                '-movflags +faststart'
            ])
            .output(currentOutputPath)
            .on('start', (commandLine) => {
                console.log('FFmpeg process started:', commandLine);
            })
            .on('progress', (progress) => {
                console.log('FFmpeg progress:', progress.frames, 'frames');
            })
            .on('error', (err) => {
                // Don't log error if we're cancelling - it's expected
                if (!isCancelling) {
                    console.error('FFmpeg error:', err.message);
                }
                isRecording = false;
                // Resolve instead of reject to prevent unhandled rejection
                resolve({ error: true, cancelled: isCancelling });
            })
            .on('end', () => {
                console.log('FFmpeg processing finished');
                console.log(`Video saved to: ${currentOutputPath}`);
                isRecording = false;
                resolve({ error: false, cancelled: false });
            });

        ffmpegCommand.run();
    });

    res.json({ message: 'Export started', filename });
});

app.post('/export-frame', (req, res) => {
    if (!isRecording || !videoStream) {
        return res.status(400).json({ error: 'No recording session active' });
    }

    const { image } = req.body;
    
    if (!image) {
        return res.status(400).json({ error: 'No image data provided' });
    }

    try {
        // Handle both JPEG and PNG formats
        let base64Data = image;
        if (image.startsWith('data:image/jpeg;base64,')) {
            base64Data = image.replace(/^data:image\/jpeg;base64,/, '');
        } else if (image.startsWith('data:image\/png;base64,')) {
            base64Data = image.replace(/^data:image\/png;base64,/, '');
        }
        
        const buffer = Buffer.from(base64Data, 'base64');
        
        // Write to stream
        videoStream.write(buffer);
        frameCount++;
        
        if (frameCount % 30 === 0) {
            console.log(`Received frame ${frameCount}`);
        }
        
        res.json({ success: true, frame: frameCount });
    } catch (err) {
        console.error('Error writing frame:', err);
        res.status(500).json({ error: 'Failed to write frame' });
    }
});

app.post('/finalize-video', async (req, res) => {
    if (!videoStream) {
        return res.status(400).json({ error: 'No recording session active' });
    }

    console.log(`Finalizing video with ${frameCount} frames...`);
    
    // End the stream, which signals FFmpeg to finish
    videoStream.end();
    
    try {
        // Wait for FFmpeg to actually finish encoding
        console.log('Waiting for FFmpeg to complete...');
        const result = await ffmpegFinished;
        
        if (result?.error && !result?.cancelled) {
            console.error('FFmpeg failed during finalization');
            return res.status(500).json({ error: 'Video encoding failed' });
        }
        
        console.log('FFmpeg completed successfully');
        
        // Verify file exists and get size
        if (fs.existsSync(currentOutputPath)) {
            const stat = fs.statSync(currentOutputPath);
            console.log(`Video file size: ${(stat.size / (1024 * 1024)).toFixed(2)} MB`);
        }
    } catch (err) {
        console.error('FFmpeg failed:', err);
        return res.status(500).json({ error: 'Video encoding failed' });
    } finally {
        videoStream = null;
        ffmpegCommand = null;
        ffmpegFinished = null;
    }

    res.json({ 
        message: 'Video finalized and saved to disk.',
        outputPath: currentOutputPath,
        filename: path.basename(currentOutputPath)
    });
});

// Download endpoint - serves the video file for browser download
// IMPORTANT: Deletes temp file after download - only user's saved copy persists
app.get('/download-video', (req, res) => {
    console.log('Download request received');
    console.log('Current output path:', currentOutputPath);
    
    if (!currentOutputPath) {
        console.log('No output path set');
        return res.status(404).json({ error: 'No video file available' });
    }

    // Check if file exists
    if (!fs.existsSync(currentOutputPath)) {
        console.log('File does not exist:', currentOutputPath);
        return res.status(404).json({ error: 'Video file not found' });
    }

    const filename = path.basename(currentOutputPath);
    const tempFilePath = currentOutputPath; // Store for deletion
    const stat = fs.statSync(tempFilePath);
    
    console.log(`Serving file: ${filename} (${(stat.size / (1024 * 1024)).toFixed(2)} MB)`);

    res.setHeader('Content-Type', 'video/mp4');
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);

    const readStream = fs.createReadStream(tempFilePath);
    
    // Delete temp file after stream finishes (user will save via file picker)
    readStream.on('close', () => {
        if (fs.existsSync(tempFilePath)) {
            try {
                fs.unlinkSync(tempFilePath);
                console.log('Temp file deleted after download:', tempFilePath);
            } catch (e) {
                console.warn('Could not delete temp file:', e.message);
            }
        }
        // Reset path since file is gone
        currentOutputPath = null;
    });
    
    readStream.pipe(res);
});

// Get video file info
app.get('/video-info', (req, res) => {
    if (!currentOutputPath || !fs.existsSync(currentOutputPath)) {
        return res.status(404).json({ error: 'No video file available' });
    }

    const stat = fs.statSync(currentOutputPath);
    res.json({
        filename: path.basename(currentOutputPath),
        path: currentOutputPath,
        size: stat.size,
        sizeFormatted: `${(stat.size / (1024 * 1024)).toFixed(2)} MB`
    });
});

// Cancel export - kills FFmpeg and cleans up partial files
app.post('/cancel-export', async (req, res) => {
    console.log('Cancel export requested');
    
    if (!isRecording && !videoStream && !ffmpegCommand) {
        return res.json({ message: 'No export in progress' });
    }
    
    // Set cancelling flag to suppress error handling
    isCancelling = true;
    const receivedFrames = frameCount;
    
    try {
        // End the stream gracefully first
        if (videoStream) {
            try {
                videoStream.destroy();
            } catch (e) {
                // Ignore stream errors
            }
            videoStream = null;
        }
        
        // Kill FFmpeg process if running
        if (ffmpegCommand) {
            console.log('Killing FFmpeg process...');
            try {
                ffmpegCommand.kill('SIGTERM'); // Use SIGTERM for graceful shutdown
            } catch (e) {
                // FFmpeg might already be dead, that's fine
            }
            ffmpegCommand = null;
        }
        
        // Wait a moment for FFmpeg to actually die
        await new Promise(r => setTimeout(r, 200));
        
        // Clean up partial output file
        if (currentOutputPath && fs.existsSync(currentOutputPath)) {
            console.log('Removing partial file:', currentOutputPath);
            try {
                fs.unlinkSync(currentOutputPath);
                console.log('Partial file removed');
            } catch (e) {
                console.warn('Could not remove partial file:', e.message);
            }
        }
        
        // Reset state
        isRecording = false;
        frameCount = 0;
        ffmpegFinished = null;
        
        console.log('Export cancelled and cleaned up');
        res.json({ message: 'Export cancelled', framesReceived: receivedFrames });
        
    } catch (err) {
        console.error('Error during cancel:', err);
        // Reset state anyway
        isRecording = false;
        videoStream = null;
        ffmpegCommand = null;
        ffmpegFinished = null;
        
        res.json({ message: 'Export cancelled with errors', error: err.message });
    } finally {
        // Reset cancelling flag after a delay
        setTimeout(() => {
            isCancelling = false;
        }, 500);
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        isRecording, 
        frameCount,
        hasOutputPath: !!currentOutputPath
    });
});

// Global error handler to prevent server crashes
app.use((err, req, res, next) => {
    console.error('Express error:', err);
    res.status(500).json({ error: 'Internal server error' });
});

// Handle uncaught exceptions to keep server running
process.on('uncaughtException', (err) => {
    console.error('Uncaught exception (server continues):', err.message);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled rejection (server continues):', reason);
});

// Create HTTP server with reference for graceful shutdown
const server = app.listen(port, () => {
    console.log(`Export server running at http://localhost:${port}`);
    console.log(`Temp directory: ${os.tmpdir()}`);
});

// Graceful shutdown handling
function gracefulShutdown(signal) {
    console.log(`\n${signal} received. Shutting down gracefully...`);
    
    // Clean up any active export
    if (videoStream) {
        try {
            videoStream.destroy();
        } catch (e) {}
        videoStream = null;
    }
    
    if (ffmpegCommand) {
        try {
            ffmpegCommand.kill('SIGTERM');
        } catch (e) {}
        ffmpegCommand = null;
    }
    
    // Clean up temp file if exists
    if (currentOutputPath && fs.existsSync(currentOutputPath)) {
        try {
            fs.unlinkSync(currentOutputPath);
            console.log('Cleaned up temp file:', currentOutputPath);
        } catch (e) {}
    }
    
    // Close server
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
    
    // Force exit after 3 seconds if server doesn't close
    setTimeout(() => {
        console.log('Forcing exit...');
        process.exit(0);
    }, 3000);
}

// Listen for shutdown signals
process.on('SIGINT', () => gracefulShutdown('SIGINT'));   // Ctrl+C
process.on('SIGTERM', () => gracefulShutdown('SIGTERM')); // kill command
