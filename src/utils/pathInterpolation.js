import * as THREE from 'three';

/**
 * Smoothstep easing function for cinematic camera motion
 * Creates smooth acceleration and deceleration
 * @param {number} t - Normalized time [0, 1]
 * @returns {number} Eased value [0, 1]
 */
export function smoothstep(t) {
  // Clamp t to [0, 1]
  t = Math.max(0, Math.min(1, t));
  // Hermite interpolation: 3t² - 2t³
  return t * t * (3 - 2 * t);
}

/**
 * Quintic easing for even smoother motion
 * @param {number} t - Normalized time [0, 1]
 * @returns {number} Eased value [0, 1]
 */
export function smootherstep(t) {
  t = Math.max(0, Math.min(1, t));
  // 6t⁵ - 15t⁴ + 10t³
  return t * t * t * (t * (t * 6 - 15) + 10);
}

/**
 * Linear interpolation
 * @param {number} a - Start value
 * @param {number} b - End value
 * @param {number} t - Interpolation factor [0, 1]
 * @returns {number} Interpolated value
 */
export function lerp(a, b, t) {
  return a + (b - a) * t;
}

/**
 * Catmull-Rom spline interpolation for smooth path through control points
 * Unlike Bezier, this passes exactly through all control points
 * 
 * @param {THREE.Vector3[]} points - Array of control points (positions)
 * @param {number} t - Normalized time [0, 1] along entire path
 * @returns {THREE.Vector3} Interpolated position
 */
export function catmullRomSpline(points, t) {
  if (points.length === 0) return new THREE.Vector3();
  if (points.length === 1) return points[0].clone();
  if (points.length === 2) {
    // Linear interpolation fallback for 2 points
    return new THREE.Vector3().lerpVectors(points[0], points[1], t);
  }

  // Number of segments = points - 1
  const numSegments = points.length - 1;
  
  // Find which segment we're in
  const scaledT = t * numSegments;
  const segmentIndex = Math.min(Math.floor(scaledT), numSegments - 1);
  const localT = scaledT - segmentIndex;

  // Get the 4 control points for Catmull-Rom
  // P0, P1 are the segment endpoints; we need P-1 and P2 for the spline
  const p0 = points[Math.max(0, segmentIndex - 1)];
  const p1 = points[segmentIndex];
  const p2 = points[Math.min(points.length - 1, segmentIndex + 1)];
  const p3 = points[Math.min(points.length - 1, segmentIndex + 2)];

  // Catmull-Rom basis matrix calculation
  // q(t) = 0.5 * [(2*P1) + (-P0 + P2)*t + (2*P0 - 5*P1 + 4*P2 - P3)*t² + (-P0 + 3*P1 - 3*P2 + P3)*t³]
  const t2 = localT * localT;
  const t3 = t2 * localT;

  const result = new THREE.Vector3();
  
  // X component
  result.x = 0.5 * (
    2 * p1.x +
    (-p0.x + p2.x) * localT +
    (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 +
    (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3
  );

  // Y component
  result.y = 0.5 * (
    2 * p1.y +
    (-p0.y + p2.y) * localT +
    (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 +
    (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3
  );

  // Z component
  result.z = 0.5 * (
    2 * p1.z +
    (-p0.z + p2.z) * localT +
    (2 * p0.z - 5 * p1.z + 4 * p2.z - p3.z) * t2 +
    (-p0.z + 3 * p1.z - 3 * p2.z + p3.z) * t3
  );

  return result;
}

/**
 * Interpolate through multiple quaternions using sequential slerp
 * Ensures smooth rotation without gimbal lock
 * Uses shortest path interpolation to prevent unexpected rotation
 * 
 * @param {THREE.Quaternion[]} quaternions - Array of rotation quaternions
 * @param {number} t - Normalized time [0, 1]
 * @returns {THREE.Quaternion} Interpolated rotation
 */
export function slerpQuaternions(quaternions, t) {
  if (quaternions.length === 0) return new THREE.Quaternion();
  if (quaternions.length === 1) return quaternions[0].clone().normalize();

  // For 2 quaternions, simple slerp with shortest path check
  if (quaternions.length === 2) {
    const q1 = quaternions[0].clone().normalize();
    const q2 = quaternions[1].clone().normalize();
    
    // Ensure shortest path: if dot product is negative, negate one quaternion
    if (q1.dot(q2) < 0) {
      q2.set(-q2.x, -q2.y, -q2.z, -q2.w);
    }
    
    return new THREE.Quaternion().slerpQuaternions(q1, q2, t).normalize();
  }

  // Find which segment we're in
  const numSegments = quaternions.length - 1;
  const scaledT = t * numSegments;
  const segmentIndex = Math.min(Math.floor(scaledT), numSegments - 1);
  const localT = scaledT - segmentIndex;

  const q1 = quaternions[segmentIndex].clone().normalize();
  const q2 = quaternions[segmentIndex + 1].clone().normalize();

  // Ensure shortest path interpolation
  if (q1.dot(q2) < 0) {
    q2.set(-q2.x, -q2.y, -q2.z, -q2.w);
  }

  return new THREE.Quaternion().slerpQuaternions(q1, q2, localT).normalize();
}

/**
 * Interpolate through multiple FOV values
 * 
 * @param {number[]} fovs - Array of FOV values
 * @param {number} t - Normalized time [0, 1]
 * @returns {number} Interpolated FOV
 */
export function interpolateFov(fovs, t) {
  if (fovs.length === 0) return 65; // Default FOV
  if (fovs.length === 1) return fovs[0];
  if (fovs.length === 2) return lerp(fovs[0], fovs[1], t);

  // Linear interpolation between segments
  const numSegments = fovs.length - 1;
  const scaledT = t * numSegments;
  const segmentIndex = Math.min(Math.floor(scaledT), numSegments - 1);
  const localT = scaledT - segmentIndex;

  return lerp(fovs[segmentIndex], fovs[segmentIndex + 1], localT);
}

/**
 * Check if all quaternions in array are nearly identical
 * @param {THREE.Quaternion[]} quaternions
 * @param {number} threshold - Dot product threshold (0.9999 = very similar)
 * @returns {boolean}
 */
function areQuaternionsSimilar(quaternions, threshold = 0.9999) {
  if (quaternions.length < 2) return true;
  
  const first = quaternions[0];
  for (let i = 1; i < quaternions.length; i++) {
    // Dot product of 1.0 means identical, -1.0 means opposite (same rotation)
    const dot = Math.abs(first.dot(quaternions[i]));
    if (dot < threshold) {
      return false;
    }
  }
  return true;
}

/**
 * Get interpolated camera state at time t
 * 
 * Smooth playback is achieved through:
 * - Position: Catmull-Rom spline (passes through all keyframes smoothly)
 * - Rotation: Quaternion slerp (shortest path, no gimbal lock)
 * - FOV: Linear interpolation
 * - Timing: Smoothstep ease-in/out (cinematic acceleration/deceleration)
 * 
 * IMPORTANT: If all keyframes have the same rotation, no rotation interpolation
 * is performed - this prevents unwanted rotation when user only pans.
 * 
 * @param {Array} keyframes - Array of keyframe objects
 * @param {number} t - Normalized time [0, 1]
 * @param {boolean} useEasing - Whether to apply smoothstep easing
 * @returns {Object} { position: Vector3, quaternion: Quaternion, fov: number }
 */
export function interpolateCameraPath(keyframes, t, useEasing = true) {
  if (keyframes.length === 0) {
    return {
      position: new THREE.Vector3(),
      quaternion: new THREE.Quaternion(),
      fov: 65
    };
  }

  // Single keyframe - return it directly
  if (keyframes.length === 1) {
    return {
      position: keyframes[0].position.clone(),
      quaternion: keyframes[0].quaternion.clone().normalize(),
      fov: keyframes[0].fov
    };
  }

  // Apply smoothstep easing for cinematic motion
  // This creates smooth acceleration at start and deceleration at end
  const easedT = useEasing ? smoothstep(t) : t;

  // Extract arrays for interpolation
  const positions = keyframes.map(k => k.position);
  const quaternions = keyframes.map(k => k.quaternion);
  const fovs = keyframes.map(k => k.fov);

  // Check if all rotations are similar - if so, DON'T interpolate rotation
  // This fixes the issue where panning (without rotating) causes unwanted rotation
  const rotationIsSame = areQuaternionsSimilar(quaternions);
  
  let resultQuaternion;
  if (rotationIsSame) {
    // All keyframes have same orientation - use first one exactly
    resultQuaternion = quaternions[0].clone().normalize();
  } else {
    // Keyframes have different orientations - smoothly slerp between them
    resultQuaternion = slerpQuaternions(quaternions, easedT);
  }

  return {
    // Smooth spline path through all keyframe positions
    position: catmullRomSpline(positions, easedT),
    // Smooth rotation (slerp if different, constant if same)
    quaternion: resultQuaternion,
    // Linear FOV interpolation
    fov: interpolateFov(fovs, easedT)
  };
}
