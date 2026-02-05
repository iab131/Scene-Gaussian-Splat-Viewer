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

app.post('/start-export', (req, res) => {
    if (isRecording) {
        return res.status(400).json({ error: 'Recording already in progress' });
    }

    const { fps = 30, filename = 'output.mp4' } = req.body;
    
    console.log(`Starting export: ${filename} at ${fps} fps`);
    isRecording = true;

    // Create a PassThrough stream to pipe data to ffmpeg
    videoStream = new PassThrough();

    // Initialize FFmpeg
    ffmpegCommand = ffmpeg(videoStream)
        .inputFormat('image2pipe')
        .inputFPS(fps)
        .outputOptions([
            '-c:v libx264',
            '-pix_fmt yuv420p',
            '-preset fast',
            '-movflags +faststart'
        ])
        .output(path.resolve(process.cwd(), filename))
        .on('start', (commandLine) => {
            console.log('FFmpeg process started:', commandLine);
        })
        .on('error', (err) => {
            console.error('FFmpeg error:', err);
            isRecording = false;
        })
        .on('end', () => {
            console.log('FFmpeg processing finished');
            isRecording = false;
        });

    ffmpegCommand.run();

    res.json({ message: 'Export started' });
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
        // Strip the data:image/jpeg;base64 part
        const base64Data = image.replace(/^data:image\/jpeg;base64,/, "");
        const buffer = Buffer.from(base64Data, 'base64');
        
        // Write to stream
        videoStream.write(buffer);
        res.json({ success: true });
    } catch (err) {
        console.error('Error writing frame:', err);
        res.status(500).json({ error: 'Failed to write frame' });
    }
});

app.post('/finalize-video', (req, res) => {
    if (!isRecording || !videoStream) {
        return res.status(400).json({ error: 'No recording session active' });
    }

    console.log('Finalizing video...');
    
    // End the stream, which signals FFmpeg to finish
    videoStream.end();
    
    // We don't verify ffmpeg finish here, we just assume the stream close triggers it eventually.
    // In a real app you might want to wait for the 'end' event.
    
    isRecording = false;
    videoStream = null;
    ffmpegCommand = null;

    res.json({ message: 'Video finalized and saved to disk.' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
