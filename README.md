# Scene Gaussian Splat Viewer

A web-based Gaussian Splat scene viewer with an interactive camera path editor and MP4 video export. Built with React, Three.js, and a Node.js export server.

## Project Overview

This project provides an interactive viewer for 3D Gaussian Splat scenes with tools for creating cinematic camera animations. Users can:

- Load and explore Gaussian Splat scenes (`.ply` or `.splat` files)
- Record camera keyframes to define a path through the scene
- Edit timing and preview the camera animation in real-time
- Export the camera path as an MP4 video at a fixed resolution

The application solves the problem of creating smooth, reproducible camera flythroughs of 3D Gaussian Splat reconstructions without requiring external video editing software.

---

## Features

### Core Features

- **Interactive Gaussian Splat Viewer** — Real-time rendering of 3D Gaussian Splat scenes with orbit and walk camera controls
- **Camera Path Recording** — Add keyframes at any camera position to define an animation path
- **MP4 Video Export** — Render the camera path to a video file using server-side FFmpeg encoding

### Extra Implementations

#### Timeline Editor
- **Draggable keyframe list** — Reorder keyframes via drag-and-drop
- **Timeline scrubber** — Drag to preview any point along the camera path
- **Duration control** — Adjustable export duration from 1 to 30 seconds
- **Camera frustum gizmos** — Visual 3D indicators showing keyframe camera poses in the scene

#### Deterministic Export
- **Save camera path** — Export keyframes and settings to a `camera-path.json` file
- **Load camera path** — Import a saved path to restore keyframes and duration
- **Reproducible output** — Re-exporting with the same path file produces identical MP4 output (given the same environment and encoder)

#### Export Progress & Cancellation
- **Progress indicator** — Real-time percentage display during export
- **Safe cancellation** — Cancel button that stops export cleanly without corrupting output or leaving temporary files

#### Offscreen Rendering
- **Fixed-resolution export** — Video renders at a consistent resolution (default 1280×720) regardless of window size
- **Non-intrusive export** — Main viewer canvas remains unchanged during export

---

## Running the Project

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (included with Node.js)

### Installation

```bash
git clone https://github.com/iab131/Scene-Gaussian-Splat-Viewer.git
cd Scene-Gaussian-Splat-Viewer
npm install
```

### One-Command Startup

```bash
npm run dev
```

This single command automatically starts:

| Service | URL | Description |
|---------|-----|-------------|
| Frontend Viewer | `http://localhost:5173` | Interactive scene viewer |
| Export Server | `http://localhost:5000` | FFmpeg-based video encoding |

Both services start and stop together. Press `Ctrl+C` to shut down cleanly.

### Alternative Commands

| Command | Description |
|---------|-------------|
| `npm run dev:frontend` | Start only the frontend viewer |
| `npm run dev:server` | Start only the export server |
| `npm run build` | Build for production |

---

## Usage Guide

### Loading a Scene

1. Drag and drop a `.ply` or `.splat` file onto the viewer, OR
2. Click **Select .PLY File** to open a file picker

### Camera Controls

| Mode | Control | Action |
|------|---------|--------|
| Orbit | Left-click + drag | Rotate around scene |
| Orbit | Right-click + drag | Pan |
| Orbit | Scroll wheel | Zoom |
| Walk | W/A/S/D | Move forward/left/back/right |
| Walk | Mouse | Look around |
| Walk | Shift | Move faster |
| Walk | Esc | Exit walk mode |

Toggle between modes using the camera icon button.

### Recording a Camera Path

1. Navigate to your desired camera position
2. Click **+ Add Keyframe** to record the current view
3. Repeat to add more keyframes (minimum 2 required)
4. Drag keyframes in the list to reorder
5. Click the **×** button on a keyframe to delete it

### Previewing the Path

- Click **▶ Preview Play** to watch the camera animation
- Drag the **timeline scrubber** to preview any point
- Adjust **duration** using the clock icon (1–30 seconds)

### Camera Frustum Gizmos

When keyframes exist, 3D pyramid gizmos appear in the scene showing each keyframe's camera position and orientation. These help visualize the path and are hidden during preview playback and export.

### Exporting Video

1. Click **🎬 Export MP4**
2. Select duration in the dialog
3. Click **Start Export**
4. Wait for the progress bar to complete
5. Choose where to save the file in the file picker

### Saving and Loading Paths

- **💾 Save** — Export keyframes and settings to a `.json` file
- **📂 Load** — Import a previously saved path file

---

## Export System

### How Export Works

1. **Offscreen rendering** — Frames render to a WebGL render target at fixed resolution
2. **Frame capture** — Each frame is captured as JPEG and sent to the export server
3. **Video encoding** — FFmpeg encodes frames into an MP4 file (H.264, yuv420p)
4. **Download** — The video is streamed to the browser for the user to save
5. **Cleanup** — Temporary files are automatically deleted after download

### Export Settings

| Setting | Default | Description |
|---------|---------|-------------|
| Resolution | 1280×720 | Fixed export resolution |
| FPS | 30 | Frames per second |
| Duration | 5 seconds | Configurable 1–30 seconds |
| Codec | H.264 | MP4 video format |
| Quality | CRF 18 | High quality encoding |

### Output Filename

Videos are named with a timestamp:
```
camera_render_2026-02-08T02-30-00.mp4
```

---

## Deterministic Export

### Saved Path File Format

The `camera-path.json` file contains:

```json
{
  "schemaVersion": 1,
  "createdAt": "2026-02-08T02:30:00.000Z",
  "metadata": {
    "name": "Camera Path",
    "keyframeCount": 5
  },
  "keyframes": [
    {
      "index": 0,
      "position": { "x": 1.5, "y": 2.0, "z": 3.0 },
      "quaternion": { "x": 0, "y": 0.707, "z": 0, "w": 0.707 },
      "fov": 60,
      "timestamp": 0
    }
  ],
  "exportSettings": {
    "duration": 5,
    "fps": 30,
    "width": 1280,
    "height": 720
  }
}
```

### Reproducibility

Loading a saved path and exporting will produce **identical video output** when:

- The same Gaussian Splat scene is loaded
- The same path file is used
- Export settings are unchanged
- The FFmpeg encoder version is the same

This enables reproducible renders for version control, comparison, and archival.

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     Frontend (React + Vite)                 │
├─────────────────────────────────────────────────────────────┤
│  Viewer          │  Editor            │  Export             │
│  - GS rendering  │  - Keyframe list   │  - Offscreen render │
│  - Camera ctrl   │  - Timeline        │  - Progress UI      │
│  - Orbit/Walk    │  - Frustum gizmos  │  - Cancel handling  │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ HTTP (frames, commands)
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                  Export Server (Node.js)                    │
├─────────────────────────────────────────────────────────────┤
│  - Receives JPEG frames                                     │
│  - Pipes to FFmpeg for encoding                             │
│  - Serves final MP4 for download                            │
│  - Cleans up temp files                                     │
└─────────────────────────────────────────────────────────────┘
```

### Mode Separation

| Mode | Camera Source | Gizmos | Controls | Render Target |
|------|---------------|--------|----------|---------------|
| Edit | User input | Visible | Enabled | Screen |
| Preview | Path interpolation | Hidden | Disabled | Screen |
| Export | Path interpolation | Hidden | Disabled | Offscreen |

---

## Limitations & Future Work

### Current Limitations

- Export resolution is fixed (configurable in code, not UI)
- Single scene at a time
- No audio support in exports
- Path interpolation uses Catmull-Rom splines only

### Potential Extensions

- **Resolution picker** — UI for selecting 720p, 1080p, 4K
- **Easing presets** — Ease-in, ease-out, custom curves
- **Batch export** — Export multiple paths sequentially
- **Keyframe timing** — Per-keyframe hold/ease settings
- **Scene transitions** — Cross-fade between multiple scenes
- **Audio track** — Add background music to exports

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend Framework | React 19 |
| Build Tool | Vite 7 |
| 3D Rendering | Three.js |
| Gaussian Splats | @mkkellogg/gaussian-splats-3d |
| Styling | Tailwind CSS 4 |
| Backend | Node.js + Express |
| Video Encoding | FFmpeg (via fluent-ffmpeg) |
| Process Management | concurrently |

---

## License

MIT License

---

## Acknowledgments

- [gaussian-splats-3d](https://github.com/mkkellogg/GaussianSplats3D) by Mark Kellogg
- [Three.js](https://threejs.org/)
- [FFmpeg](https://ffmpeg.org/)