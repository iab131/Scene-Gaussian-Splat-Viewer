# Scene Gaussian Splat Viewer

A web-based Gaussian Splat viewer with camera path recording and MP4 video export.

[Demo Video](https://youtu.be/EPXJpeUkBSA) · [Design Notes](https://docs.google.com/document/d/1GqOC-KRD-gLKe2yLE4LjlUDY6eg_-U8Q49oFyJRiXCg/edit?usp=sharing)

## Quick Start

```bash
npm install
npm run dev
```

This starts both the frontend viewer (`localhost:5173`) and export server (`localhost:5000`).

---

## What It Does

- Load and view 3D Gaussian Splat scenes (`.ply` / `.splat` files)
- Record camera keyframes to create animation paths
- Export the path as an MP4 video

---

## ⭐ Extra Features Implemented

| Feature | Description |
|---------|-------------|
| **Timeline Editor** | Draggable keyframes, scrubber preview, camera frustum gizmos |
| **Deterministic Export** | Save/load `path.json` — re-export produces identical MP4 |
| **Progress + Cancellation** | Visible % complete, cancel button without corrupting output |

---

## Controls

| Mode | Control | Action |
|------|---------|--------|
| Orbit | Left-drag | Rotate |
| Orbit | Right-drag | Pan |
| Orbit | Scroll | Zoom |
| Walk | W/A/S/D/Q/E | Move |
| Walk | Mouse | Look |
| Walk | Esc | Exit |

---

## Tech Stack

React 19 · Vite · Three.js · [GaussianSplats3D](https://github.com/mkkellogg/GaussianSplats3D) · Tailwind CSS · Node.js · FFmpeg

---

## Detailed Documentation

<details>
<summary><strong>Usage Guide</strong></summary>

### Loading a Scene

- Drag and drop a `.ply` or `.splat` file, OR
- Click **Select .PLY File**

### Recording a Camera Path

1. Navigate to desired position
2. Click **+ Add Keyframe**
3. Repeat (minimum 2 keyframes)
4. Drag to reorder, **×** to delete

### Previewing

- **▶ Preview Play** — watch animation
- **Timeline scrubber** — drag to preview any point
- **Duration** — adjustable 1–30 seconds

### Exporting Video

1. Click **🎬 Export MP4**
2. Select duration → **Start Export**
3. Wait for progress → save file

### Saving/Loading Paths

- **💾 Save** — export keyframes + settings to `.json`
- **📂 Load** — restore from saved file

</details>

<details>
<summary><strong>Export System Details</strong></summary>

### How Export Works

1. Frames render offscreen at fixed resolution (1280×720)
2. JPEG frames sent to Node.js server
3. FFmpeg encodes to MP4 (H.264)
4. File streamed to browser, temp deleted

### Settings

| Setting | Default |
|---------|---------|
| Resolution | 1280×720 |
| FPS | 30 |
| Duration | 1–30 sec |
| Codec | H.264 |

</details>

<details>
<summary><strong>Deterministic Export</strong></summary>

### Saved Path Format (`camera-path.json`)

```json
{
  "schemaVersion": 1,
  "keyframes": [
    { "position": {...}, "quaternion": {...}, "fov": 60 }
  ],
  "exportSettings": { "duration": 5, "fps": 30, "width": 1280, "height": 720 }
}
```

### Reproducibility

Same path file + same scene + same encoder = **identical MP4 output**

</details>

<details>
<summary><strong>Architecture</strong></summary>

```
Frontend (React + Vite)          Export Server (Node.js)
├─ Viewer (3D rendering)         ├─ Receives frames
├─ Editor (keyframes, timeline)  ├─ FFmpeg encoding
└─ Export (offscreen render)     └─ Serves MP4
```

| Mode | Gizmos | Controls | Target |
|------|--------|----------|--------|
| Edit | Visible | Enabled | Screen |
| Preview | Hidden | Disabled | Screen |
| Export | Hidden | Disabled | Offscreen |

</details>

---

## License

MIT