import { useState, useCallback, useRef } from 'react';
import * as THREE from 'three';
import { interpolateCameraPath } from '../utils/pathInterpolation';

/**
 * Hook for camera path recording and playback
 * Stores exact camera position, rotation (quaternion), and look direction
 * 
 * @param {Object} params - Parameters
 * @param {React.RefObject} params.cameraRef - Camera reference
 * @param {React.RefObject} params.controlsRef - OrbitControls reference
 * @param {React.RefObject} params.rendererRef - Renderer reference (for walk mode detection)
 * @returns {Object} Keyframe state and control functions
 */
export function useCameraPath({ cameraRef, controlsRef, rendererRef }) {
  const [keyframes, setKeyframes] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Playback state refs
  const playbackRef = useRef(null);
  const startTimeRef = useRef(0);
  const durationRef = useRef(5000); // Default 5 second playback
  const controlsStateRef = useRef({ enabled: true });

  /**
   * Add a keyframe at the current camera position
   * Clones ALL values to ensure immutability and exact reproduction
   */
  const addKeyframe = useCallback(() => {
    const camera = cameraRef.current;
    if (!camera) return;

    // Force update camera matrices to get accurate world position/rotation
    camera.updateMatrixWorld(true);

    // Get the world direction the camera is looking at
    const direction = new THREE.Vector3();
    camera.getWorldDirection(direction);

    // Store EXACT clones of position and quaternion
    // These are deep copies that won't be affected by camera changes
    const newKeyframe = {
      // Exact world position
      position: camera.position.clone(),
      
      // Exact rotation as quaternion (normalized)
      // Quaternion preserves rotation without gimbal lock issues
      quaternion: camera.quaternion.clone().normalize(),
      
      // Also store the look direction for debugging/verification
      direction: direction.clone(),
      
      // Camera FOV
      fov: camera.fov,
      // Timestamp for ordering
      timestamp: Date.now()
    };

    setKeyframes(prev => [...prev, newKeyframe]);
  }, [cameraRef]);

  /**
   * Remove a keyframe by index
   */
  const removeKeyframe = useCallback((index) => {
    setKeyframes(prev => prev.filter((_, i) => i !== index));
  }, []);

  /**
   * Reorder keyframes (for drag-drop support)
   */
  const reorderKeyframes = useCallback((fromIndex, toIndex) => {
    setKeyframes(prev => {
      const newKeyframes = [...prev];
      const [removed] = newKeyframes.splice(fromIndex, 1);
      newKeyframes.splice(toIndex, 0, removed);
      return newKeyframes;
    });
  }, []);

  /**
   * Clear all keyframes
   */
  const clearKeyframes = useCallback(() => {
    setKeyframes([]);
  }, []);

  /**
   * Stop playback and restore controls
   */
  const stopPlayback = useCallback(() => {
    if (playbackRef.current) {
      cancelAnimationFrame(playbackRef.current);
      playbackRef.current = null;
    }

    setIsPlaying(false);

    // Restore controls state
    if (controlsRef.current) {
      controlsRef.current.enabled = controlsStateRef.current.enabled;
      
      // Update orbit controls target to current camera view
      const camera = cameraRef.current;
      if (camera) {
        const forward = new THREE.Vector3();
        camera.getWorldDirection(forward);
        controlsRef.current.target.copy(camera.position).add(forward.multiplyScalar(5));
        controlsRef.current.update();
      }
    }
  }, [cameraRef, controlsRef]);

  /**
   * Start path playback
   * @param {number} duration - Playback duration in milliseconds
   */
  const playPath = useCallback((duration = 5000) => {
    if (keyframes.length < 2) return;
    if (isPlaying) return;

    const camera = cameraRef.current;
    const controls = controlsRef.current;
    const renderer = rendererRef.current;
    
    if (!camera || !controls) return;

    // Exit walk mode if active
    if (document.pointerLockElement === renderer?.domElement) {
      document.exitPointerLock();
    }

    // Save and disable controls to prevent interference during playback
    controlsStateRef.current.enabled = controls.enabled;
    controls.enabled = false;

    // CRITICAL: Set camera to FIRST keyframe IMMEDIATELY before animation starts
    // This ensures we start at the exact recorded position and rotation
    const firstKeyframe = keyframes[0];
    camera.position.copy(firstKeyframe.position);
    camera.quaternion.copy(firstKeyframe.quaternion);
    camera.fov = firstKeyframe.fov;
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld(true);

    setIsPlaying(true);
    durationRef.current = duration;
    startTimeRef.current = performance.now();

    const animate = () => {
      const now = performance.now();
      const elapsed = now - startTimeRef.current;
      const t = Math.min(elapsed / durationRef.current, 1);

      // Get interpolated camera state from stored keyframes
      const state = interpolateCameraPath(keyframes, t, true);

      // Apply EXACT interpolated state to camera
      // Position: apply directly
      camera.position.copy(state.position);
      
      // Rotation: apply quaternion directly (already normalized in interpolation)
      camera.quaternion.copy(state.quaternion);
      
      // FOV: apply if changed
      if (camera.fov !== state.fov) {
        camera.fov = state.fov;
        camera.updateProjectionMatrix();
      }
      
      // CRITICAL: Update world matrix for frustum culling
      // Without this, the splat renderer uses stale matrices
      camera.updateMatrixWorld(true);

      if (t < 1) {
        playbackRef.current = requestAnimationFrame(animate);
      } else {
        // Playback complete
        stopPlayback();
      }
    };

    playbackRef.current = requestAnimationFrame(animate);
  }, [keyframes, isPlaying, cameraRef, controlsRef, rendererRef, stopPlayback]);

  /**
   * Seek to a specific position on the path (for timeline scrubbing)
   * Uses the same camera evaluation as Preview Play
   * @param {number} t - Normalized time [0, 1]
   */
  const seekTo = useCallback((t) => {
    if (keyframes.length < 2) return;
    
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    const renderer = rendererRef.current;
    if (!camera || !controls) return;

    // Exit walk mode if active (same as playPath)
    if (document.pointerLockElement === renderer?.domElement) {
      document.exitPointerLock();
    }

    // Disable controls during seek (prevents any interference)
    controls.enabled = false;

    // Get interpolated camera state at time t
    // Use NO easing for scrubbing (linear = more intuitive dragging)
    const state = interpolateCameraPath(keyframes, t, false);

    // Apply EXACT state to camera (same as playback loop)
    camera.position.copy(state.position);
    camera.quaternion.copy(state.quaternion);
    
    if (camera.fov !== state.fov) {
      camera.fov = state.fov;
      camera.updateProjectionMatrix();
    }
    
    // CRITICAL: Update world matrix for frustum culling
    camera.updateMatrixWorld(true);

    // Update orbit controls target to match current camera view
    // This prevents camera from snapping back when controls are re-enabled
    const forward = new THREE.Vector3();
    camera.getWorldDirection(forward);
    controls.target.copy(camera.position).add(forward.multiplyScalar(5));

    // Re-enable controls
    controls.enabled = true;
  }, [keyframes, cameraRef, controlsRef, rendererRef]);

  return {
    // State
    keyframes,
    isPlaying,
    keyframeCount: keyframes.length,
    
    // Actions
    addKeyframe,
    removeKeyframe,
    reorderKeyframes,
    clearKeyframes,
    playPath,
    stopPlayback,
    seekTo
  };
}
