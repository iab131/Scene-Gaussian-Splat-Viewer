import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import { PassThrough } from 'stream';
import fs from 'fs';
import path from 'path';

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
let currentOutputPath = null;  // Track the output file path
let ffmpegFinished = null;     // Promise that resolves when FFmpeg finishes

app.post('/start-export', (req, res) => {
    if (isRecording) {
        return res.status(400).json({ error: 'Recording already in progress' });
    }

    const { fps = 30, filename = 'output.mp4' } = req.body;
    
    // Store the output path
    currentOutputPath = path.resolve(process.cwd(), filename);
    
    console.log(`Starting export: ${filename} at ${fps} fps`);
    console.log(`Output path: ${currentOutputPath}`);
    isRecording = true;
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
                console.error('FFmpeg error:', err);
                isRecording = false;
                reject(err);
            })
            .on('end', () => {
                console.log('FFmpeg processing finished');
                console.log(`Video saved to: ${currentOutputPath}`);
                isRecording = false;
                resolve();
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
        await ffmpegFinished;
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
    const stat = fs.statSync(currentOutputPath);
    
    console.log(`Serving file: ${filename} (${(stat.size / (1024 * 1024)).toFixed(2)} MB)`);

    res.setHeader('Content-Type', 'video/mp4');
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);

    const readStream = fs.createReadStream(currentOutputPath);
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

app.listen(port, () => {
    console.log(`Export server running at http://localhost:${port}`);
});


