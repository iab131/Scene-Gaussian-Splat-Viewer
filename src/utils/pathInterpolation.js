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
 * Normalize an angle to the range [-PI, PI]
 * @param {number} angle - Angle in radians
 * @returns {number} Normalized angle
 */
function normalizeAngle(angle) {
  while (angle > Math.PI) angle -= 2 * Math.PI;
  while (angle < -Math.PI) angle += 2 * Math.PI;
  return angle;
}

/**
 * Get the shortest angular difference between two angles
 * Handles wraparound (e.g., 359° → 1° goes through 0 not 180)
 * @param {number} from - Start angle in radians
 * @param {number} to - End angle in radians
 * @returns {number} Shortest angular difference
 */
function shortestAngleDiff(from, to) {
  const diff = normalizeAngle(to - from);
  return diff;
}

/**
 * Interpolate angle with shortest path (handles wraparound)
 * @param {number} from - Start angle in radians
 * @param {number} to - End angle in radians
 * @param {number} t - Interpolation factor [0, 1]
 * @returns {number} Interpolated angle
 */
function lerpAngle(from, to, t) {
  const diff = shortestAngleDiff(from, to);
  return normalizeAngle(from + diff * t);
}

/**
 * Extract yaw and pitch from a quaternion
 * This decomposes the quaternion into yaw (Y rotation) and pitch (X rotation)
 * Roll (Z rotation) is discarded to enforce world-up orientation
 * 
 * @param {THREE.Quaternion} quaternion - Input rotation
 * @returns {{ yaw: number, pitch: number }} Yaw and pitch in radians
 */
function extractYawPitch(quaternion) {
  // Convert quaternion to Euler angles in YXZ order
  // YXZ order: yaw first, then pitch, then roll
  // This is the standard FPS camera order
  const euler = new THREE.Euler().setFromQuaternion(quaternion, 'YXZ');
  
  return {
    yaw: euler.y,    // Rotation around world Y axis (left/right)
    pitch: euler.x   // Rotation around local X axis (up/down)
  };
}

/**
 * Build a quaternion from yaw and pitch (roll is always 0)
 * This enforces world-up orientation by never allowing roll
 * 
 * @param {number} yaw - Yaw in radians
 * @param {number} pitch - Pitch in radians
 * @returns {THREE.Quaternion} Orientation quaternion with no roll
 */
function buildQuaternionFromYawPitch(yaw, pitch) {
  // Clamp pitch to prevent gimbal lock/flip at poles
  // Maximum look up/down is 89 degrees
  const maxPitch = Math.PI / 2 - 0.01; // ~89.4 degrees
  const clampedPitch = Math.max(-maxPitch, Math.min(maxPitch, pitch));
  
  // Create Euler with roll = 0 (this is the key constraint!)
  const euler = new THREE.Euler(clampedPitch, yaw, 0, 'YXZ');
  return new THREE.Quaternion().setFromEuler(euler).normalize();
}

/**
 * Interpolate through multiple quaternions using yaw/pitch decomposition
 * This ELIMINATES camera roll by:
 * 1. Extracting yaw/pitch from each keyframe quaternion
 * 2. Interpolating yaw and pitch separately with angle wraparound
 * 3. Rebuilding quaternion with roll = 0
 * 
 * @param {THREE.Quaternion[]} quaternions - Array of rotation quaternions
 * @param {number} t - Normalized time [0, 1]
 * @returns {THREE.Quaternion} Interpolated rotation (no roll)
 */
export function slerpQuaternions(quaternions, t) {
  if (quaternions.length === 0) return new THREE.Quaternion();
  if (quaternions.length === 1) {
    // Even for single keyframe, strip any roll
    const { yaw, pitch } = extractYawPitch(quaternions[0]);
    return buildQuaternionFromYawPitch(yaw, pitch);
  }

  // Extract yaw/pitch for all keyframes
  const angles = quaternions.map(q => extractYawPitch(q));

  // For 2 keyframes, direct interpolation
  if (quaternions.length === 2) {
    const yaw = lerpAngle(angles[0].yaw, angles[1].yaw, t);
    const pitch = lerp(angles[0].pitch, angles[1].pitch, t);
    return buildQuaternionFromYawPitch(yaw, pitch);
  }

  // Find which segment we're in for multi-keyframe paths
  const numSegments = quaternions.length - 1;
  const scaledT = t * numSegments;
  const segmentIndex = Math.min(Math.floor(scaledT), numSegments - 1);
  const localT = scaledT - segmentIndex;

  // Interpolate yaw (with wraparound handling) and pitch between segment endpoints
  const yaw = lerpAngle(angles[segmentIndex].yaw, angles[segmentIndex + 1].yaw, localT);
  const pitch = lerp(angles[segmentIndex].pitch, angles[segmentIndex + 1].pitch, localT);
  
  return buildQuaternionFromYawPitch(yaw, pitch);
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
 * Check if all yaw/pitch angles are nearly identical
 * Uses extracted angles instead of quaternion dot product for more accurate comparison
 * @param {Array<{yaw: number, pitch: number}>} angles
 * @param {number} threshold - Angle threshold in radians (~0.1 degree = 0.00175 radians)
 * @returns {boolean}
 */
function areAnglesSimilar(angles, threshold = 0.003) {
  if (angles.length < 2) return true;
  
  const first = angles[0];
  for (let i = 1; i < angles.length; i++) {
    const yawDiff = Math.abs(shortestAngleDiff(first.yaw, angles[i].yaw));
    const pitchDiff = Math.abs(first.pitch - angles[i].pitch);
    if (yawDiff > threshold || pitchDiff > threshold) {
      return false;
    }
  }
  return true;
}

/**
 * Catmull-Rom spline interpolation for a single scalar value
 * Provides C1 continuity (velocity-continuous) through all control points
 * 
 * @param {number[]} values - Array of scalar values at each keyframe
 * @param {number} t - Normalized time [0, 1] along entire path
 * @returns {number} Interpolated value
 */
function catmullRomScalar(values, t) {
  if (values.length === 0) return 0;
  if (values.length === 1) return values[0];
  if (values.length === 2) return lerp(values[0], values[1], t);

  const numSegments = values.length - 1;
  const scaledT = t * numSegments;
  const segmentIndex = Math.min(Math.floor(scaledT), numSegments - 1);
  const localT = scaledT - segmentIndex;

  // Get 4 control points for Catmull-Rom
  const p0 = values[Math.max(0, segmentIndex - 1)];
  const p1 = values[segmentIndex];
  const p2 = values[Math.min(values.length - 1, segmentIndex + 1)];
  const p3 = values[Math.min(values.length - 1, segmentIndex + 2)];

  // Catmull-Rom basis calculation
  const t2 = localT * localT;
  const t3 = t2 * localT;

  return 0.5 * (
    2 * p1 +
    (-p0 + p2) * localT +
    (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 +
    (-p0 + 3 * p1 - 3 * p2 + p3) * t3
  );
}

/**
 * Catmull-Rom spline interpolation for angles with wraparound handling
 * Converts angles to unwrapped form, interpolates, then normalizes result
 * 
 * @param {number[]} angles - Array of angles in radians at each keyframe
 * @param {number} t - Normalized time [0, 1] along entire path
 * @returns {number} Interpolated angle (normalized to [-PI, PI])
 */
function catmullRomAngle(angles, t) {
  if (angles.length === 0) return 0;
  if (angles.length === 1) return angles[0];
  if (angles.length === 2) return lerpAngle(angles[0], angles[1], t);

  // Unwrap angles to prevent discontinuities across -PI/PI boundary
  // Each angle is adjusted relative to the previous to be within PI of it
  const unwrapped = [angles[0]];
  for (let i = 1; i < angles.length; i++) {
    const prev = unwrapped[i - 1];
    let curr = angles[i];
    // Adjust current angle to be within PI of previous
    while (curr - prev > Math.PI) curr -= 2 * Math.PI;
    while (curr - prev < -Math.PI) curr += 2 * Math.PI;
    unwrapped.push(curr);
  }

  // Now interpolate the unwrapped angles using Catmull-Rom
  const result = catmullRomScalar(unwrapped, t);
  
  // Normalize result back to [-PI, PI]
  return normalizeAngle(result);
}

/**
 * Interpolate yaw/pitch using Catmull-Rom splines for velocity continuity
 * This ensures motion passes smoothly through intermediate keyframes
 * without any hesitation or velocity drops at keyframe boundaries.
 * 
 * @param {Array<{yaw: number, pitch: number}>} angles - Yaw/pitch for each keyframe
 * @param {number} t - Normalized time [0, 1] (already globally eased)
 * @returns {THREE.Quaternion} Interpolated rotation (no roll)
 */
function interpolateYawPitchSmooth(angles, t) {
  if (angles.length === 0) return new THREE.Quaternion();
  if (angles.length === 1) {
    return buildQuaternionFromYawPitch(angles[0].yaw, angles[0].pitch);
  }

  // For 2 keyframes, simple linear interpolation (no spline needed)
  if (angles.length === 2) {
    const yaw = lerpAngle(angles[0].yaw, angles[1].yaw, t);
    const pitch = lerp(angles[0].pitch, angles[1].pitch, t);
    return buildQuaternionFromYawPitch(yaw, pitch);
  }

  // For 3+ keyframes, use Catmull-Rom spline for velocity continuity
  const yaws = angles.map(a => a.yaw);
  const pitches = angles.map(a => a.pitch);
  
  // Interpolate yaw with angle wraparound handling
  const yaw = catmullRomAngle(yaws, t);
  // Interpolate pitch (no wraparound needed, pitch is always in valid range)
  const pitch = catmullRomScalar(pitches, t);
  
  return buildQuaternionFromYawPitch(yaw, pitch);
}

/**
 * Get interpolated camera state at time t
 * 
 * CONTINUOUS MOTION is achieved through:
 * - Position: Catmull-Rom spline (C1 velocity-continuous through all keyframes)
 * - Rotation: Catmull-Rom interpolation of yaw/pitch (velocity-continuous)
 * - FOV: Linear interpolation
 * - Timing: Single global smoothstep ease-in/out (applied ONCE, not per-segment)
 * 
 * ROLL IS ELIMINATED:
 * - All quaternions are decomposed to yaw/pitch
 * - Roll is discarded and locked to 0
 * - Camera always maintains world-up orientation (0, 1, 0)
 * 
 * VELOCITY CONTINUITY:
 * - Camera passes through intermediate keyframes without hesitation
 * - No velocity drops at keyframe boundaries
 * - Catmull-Rom splines provide C1 continuity (matching derivatives)
 * - Yaw wraparound handled via angle unwrapping before interpolation
 * - Pitch clamping prevents gimbal flip
 * 
 * @param {Array} keyframes - Array of keyframe objects
 * @param {number} t - Normalized time [0, 1]
 * @param {boolean} useEasing - Whether to apply global smoothstep easing
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

  // Single keyframe - return it with roll stripped
  if (keyframes.length === 1) {
    const { yaw, pitch } = extractYawPitch(keyframes[0].quaternion);
    return {
      position: keyframes[0].position.clone(),
      quaternion: buildQuaternionFromYawPitch(yaw, pitch),
      fov: keyframes[0].fov
    };
  }

  // Apply smoothstep easing ONCE for the entire path (global timing)
  // This creates smooth acceleration at start and deceleration at end
  // WITHOUT causing hesitation at intermediate keyframes
  const easedT = useEasing ? smoothstep(t) : t;

  // Extract arrays for interpolation
  const positions = keyframes.map(k => k.position);
  const fovs = keyframes.map(k => k.fov);
  
  // Extract yaw/pitch from ALL keyframes (discarding any roll)
  const angles = keyframes.map(k => extractYawPitch(k.quaternion));

  // Check if all rotations are similar using yaw/pitch comparison
  // This is more accurate than quaternion dot product for roll-stripped angles
  const rotationIsSame = areAnglesSimilar(angles);
  
  let resultQuaternion;
  if (rotationIsSame) {
    // All keyframes have same orientation - use first one (roll-stripped)
    resultQuaternion = buildQuaternionFromYawPitch(angles[0].yaw, angles[0].pitch);
  } else {
    // Keyframes have different orientations - use Catmull-Rom spline interpolation
    // This provides velocity continuity through all keyframes
    resultQuaternion = interpolateYawPitchSmooth(angles, easedT);
  }

  return {
    // Smooth spline path through all keyframe positions (velocity-continuous)
    position: catmullRomSpline(positions, easedT),
    // Smooth rotation with roll locked to zero (velocity-continuous)
    quaternion: resultQuaternion,
    // Linear FOV interpolation
    fov: interpolateFov(fovs, easedT)
  };
}


