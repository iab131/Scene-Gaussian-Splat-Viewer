import * as THREE from 'three';

/**
 * Auto-frame the camera to fit the splat scene
 * @param {Object} splat - The splat mesh object
 * @param {THREE.PerspectiveCamera} camera - The camera
 * @param {OrbitControls} controls - The orbit controls
 */
export function performAutoFrame(splat, camera, controls) {
  if (!splat || !camera || !controls) return;

  // Get scene bounds
  const center = splat.center?.clone() ?? new THREE.Vector3();
  const radius = splat.radius ?? 5;

  // Calculate required distance to fit scene in view
  const fov = THREE.MathUtils.degToRad(camera.fov);
  const distance = (radius / Math.tan(fov / 2)) * 1.8;

  // Get current camera direction (preserve rotation)
  const currentDirection = new THREE.Vector3();
  camera.getWorldDirection(currentDirection);
  
  // Position camera at the calculated distance from center, along current view direction
  camera.position.copy(center).sub(currentDirection.multiplyScalar(distance));

  // Update near/far planes based on scene size
  camera.near = Math.max(0.01, distance / 100);
  camera.far = distance * 100;
  camera.updateProjectionMatrix();

  // Update controls target to center (camera rotation stays the same)
  controls.target.copy(center);
  controls.update();
}

/**
 * Reset the camera to default position
 * @param {THREE.PerspectiveCamera} camera - The camera
 * @param {OrbitControls} controls - The orbit controls
 */
export function resetCameraView(camera, controls) {
  if (!camera || !controls) return;
  
  // Reset camera to default position
  camera.position.set(0, 1, 1);
  camera.lookAt(0, 0, 0);
  camera.updateProjectionMatrix();
  
  // Reset controls target to origin
  controls.target.set(0, 1, 0);
  controls.update();
}
