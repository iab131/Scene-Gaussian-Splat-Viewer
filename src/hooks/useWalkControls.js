import { useEffect, useRef, useCallback, useState } from 'react';
import * as THREE from 'three';

// Pitch limits to prevent camera flipping
const MIN_PITCH = -Math.PI / 2 + 0.1;
const MAX_PITCH = Math.PI / 2 - 0.1;

/**
 * Hook to manage walk/fly camera controls with WASD + mouse look
 * @param {Object} params - Parameters
 * @param {React.RefObject} params.cameraRef - Camera reference
 * @param {React.RefObject} params.controlsRef - Orbit controls reference
 * @param {React.RefObject} params.rendererRef - Renderer reference
 * @param {React.RefObject} params.keysPressed - Movement keys state reference
 * @returns {Object} Walk mode state and controls
 */
export function useWalkControls({ cameraRef, controlsRef, rendererRef, keysPressed }) {
  const [cameraMode, setCameraMode] = useState('orbit');
  const [isPointerLocked, setIsPointerLocked] = useState(false);
  
  const euler = useRef(new THREE.Euler(0, 0, 0, 'YXZ'));
  const mouseSensitivity = useRef(0.002);

  // Reset all movement keys
  const resetKeys = useCallback(() => {
    keysPressed.current = {
      forward: false,
      backward: false,
      left: false,
      right: false,
      up: false,
      down: false
    };
  }, [keysPressed]);

  // Handle pointer lock change
  useEffect(() => {
    const handlePointerLockChange = () => {
      const isLocked = document.pointerLockElement === rendererRef.current?.domElement;
      setIsPointerLocked(isLocked);

      if (!isLocked && cameraMode === 'walk') {
        setCameraMode('orbit');

        if (controlsRef.current) {
          controlsRef.current.enabled = true;
          const camera = cameraRef.current;
          if (camera) {
            const forward = new THREE.Vector3();
            camera.getWorldDirection(forward);
            controlsRef.current.target.copy(camera.position).add(forward.multiplyScalar(5));
            controlsRef.current.update();
          }
        }

        resetKeys();
      }
    };

    document.addEventListener('pointerlockchange', handlePointerLockChange);
    return () => document.removeEventListener('pointerlockchange', handlePointerLockChange);
  }, [cameraMode, cameraRef, controlsRef, rendererRef, resetKeys]);

  // Handle mouse movement for look controls
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!isPointerLocked || !cameraRef.current) return;

      const camera = cameraRef.current;
      const movementX = event.movementX || 0;
      const movementY = event.movementY || 0;

      euler.current.setFromQuaternion(camera.quaternion);
      euler.current.y -= movementX * mouseSensitivity.current;
      euler.current.x -= movementY * mouseSensitivity.current;
      euler.current.x = Math.max(MIN_PITCH, Math.min(MAX_PITCH, euler.current.x));
      // Always keep roll at 0 to ensure level horizon (world-up constraint)
      euler.current.z = 0;

      camera.quaternion.setFromEuler(euler.current);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [isPointerLocked, cameraRef]);

  // Handle keyboard input for movement
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isPointerLocked) return;

      switch (event.code) {
        case 'KeyW': keysPressed.current.forward = true; break;
        case 'KeyS': keysPressed.current.backward = true; break;
        case 'KeyA': keysPressed.current.left = true; break;
        case 'KeyD': keysPressed.current.right = true; break;
        case 'KeyE': keysPressed.current.up = true; break;
        case 'KeyQ': keysPressed.current.down = true; break;
        default: break;
      }
    };

    const handleKeyUp = (event) => {
      switch (event.code) {
        case 'KeyW': keysPressed.current.forward = false; break;
        case 'KeyS': keysPressed.current.backward = false; break;
        case 'KeyA': keysPressed.current.left = false; break;
        case 'KeyD': keysPressed.current.right = false; break;
        case 'KeyE': keysPressed.current.up = false; break;
        case 'KeyQ': keysPressed.current.down = false; break;
        default: break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [isPointerLocked, keysPressed]);

  // Handle mouse buttons for up/down movement
  useEffect(() => {
    const handleMouseDown = (event) => {
      if (!isPointerLocked) return;
      if (event.button === 0) keysPressed.current.up = true;
      else if (event.button === 2) keysPressed.current.down = true;
    };

    const handleMouseUp = (event) => {
      if (event.button === 0) keysPressed.current.up = false;
      else if (event.button === 2) keysPressed.current.down = false;
    };

    const handleContextMenu = (event) => {
      if (isPointerLocked) event.preventDefault();
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [isPointerLocked, keysPressed]);

  // Toggle between orbit and walk mode
  const toggleCameraMode = useCallback(() => {
    if (!rendererRef.current || !cameraRef.current || !controlsRef.current) return;

    const isCurrentlyInWalkMode = document.pointerLockElement === rendererRef.current.domElement;

    if (!isCurrentlyInWalkMode) {
      setCameraMode('walk');
      controlsRef.current.enabled = false;
      
      const camera = cameraRef.current;
      console.log('Entering walk mode - camera state:',
        'up:', camera.up,
        'rotation:', camera.rotation,
        'quaternion:', camera.quaternion
      );
      
      // Extract euler angles from current camera orientation
      euler.current.setFromQuaternion(cameraRef.current.quaternion);
      // Reset roll to 0 to ensure level horizon when entering walk mode
      // This prevents camera tilt caused by export or other operations
      euler.current.z = 0;
      // Apply the corrected orientation back to the camera
      cameraRef.current.quaternion.setFromEuler(euler.current);
      
      console.log('After roll correction:',
        'up:', camera.up,
        'rotation:', camera.rotation,
        'quaternion:', camera.quaternion
      );

      rendererRef.current.domElement.requestPointerLock().catch((err) => {
        console.warn('Pointer lock request failed:', err);
        setCameraMode('orbit');
        controlsRef.current.enabled = true;
      });
    } else {
      setCameraMode('orbit');
      document.exitPointerLock();
      controlsRef.current.enabled = true;

      const camera = cameraRef.current;
      const forward = new THREE.Vector3();
      camera.getWorldDirection(forward);
      controlsRef.current.target.copy(camera.position).add(forward.multiplyScalar(5));
      controlsRef.current.update();

      resetKeys();
    }
  }, [cameraRef, controlsRef, rendererRef, resetKeys]);

  return {
    cameraMode,
    isPointerLocked,
    toggleCameraMode
  };
}
