import { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';

/**
 * Creates a text sprite for labeling keyframes
 * Editor-only: always visible, no depth testing
 */
function createTextSprite(text, fontSize = 48) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  
  canvas.width = 128;
  canvas.height = 64;
  
  // Draw background circle
  context.fillStyle = 'rgba(20, 30, 50, 0.85)';
  context.beginPath();
  context.arc(64, 32, 28, 0, Math.PI * 2);
  context.fill();
  
  // Draw border
  context.strokeStyle = '#00ccff';
  context.lineWidth = 3;
  context.beginPath();
  context.arc(64, 32, 28, 0, Math.PI * 2);
  context.stroke();
  
  // Draw text
  context.fillStyle = '#ffffff';
  context.font = `bold ${fontSize}px Arial`;
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(text, 64, 34);
  
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  
  const spriteMaterial = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: false,  // Always on top
    depthWrite: false,
    sizeAttenuation: true
  });
  
  const sprite = new THREE.Sprite(spriteMaterial);
  sprite.scale.set(0.4, 0.2, 1);
  sprite.frustumCulled = false;
  sprite.renderOrder = 999; // Render last (on top)
  
  return sprite;
}

/**
 * Creates frustum line segment positions for LineSegmentsGeometry
 */
function createFrustumPositions(keyframe, aspect = 16/9, size = 0.4) {
  const { fov } = keyframe;
  
  const near = 0.05 * size;
  const far = 1.0 * size;
  
  const halfFovRad = (fov * Math.PI) / 360;
  const halfHeight = Math.tan(halfFovRad) * far;
  const halfWidth = halfHeight * aspect;
  
  const nearHalfHeight = Math.tan(halfFovRad) * near;
  const nearHalfWidth = nearHalfHeight * aspect;
  
  // Vertices in local space (camera looking down -Z)
  const nbl = [-nearHalfWidth, -nearHalfHeight, -near];
  const nbr = [nearHalfWidth, -nearHalfHeight, -near];
  const ntr = [nearHalfWidth, nearHalfHeight, -near];
  const ntl = [-nearHalfWidth, nearHalfHeight, -near];
  
  const fbl = [-halfWidth, -halfHeight, -far];
  const fbr = [halfWidth, -halfHeight, -far];
  const ftr = [halfWidth, halfHeight, -far];
  const ftl = [-halfWidth, halfHeight, -far];
  
  // Line segment pairs
  const positions = [
    // Near plane
    ...nbl, ...nbr,
    ...nbr, ...ntr,
    ...ntr, ...ntl,
    ...ntl, ...nbl,
    // Far plane
    ...fbl, ...fbr,
    ...fbr, ...ftr,
    ...ftr, ...ftl,
    ...ftl, ...fbl,
    // Connecting edges
    ...nbl, ...fbl,
    ...nbr, ...fbr,
    ...ntr, ...ftr,
    ...ntl, ...ftl,
  ];
  
  return positions;
}

/**
 * Creates a camera gizmo with thick lines and number label
 * All materials have depthTest: false for always-on-top rendering
 */
function createCameraGizmo(keyframe, index, resolution) {
  const group = new THREE.Group();
  group.name = `frustum-gizmo-${index}`;
  group.userData.isGizmo = true;
  group.userData.keyframeIndex = index;
  group.frustumCulled = false;
  group.renderOrder = 999; // Render last

  // --- Frustum wireframe ---
  const positions = createFrustumPositions(keyframe);
  
  const frustumGeometry = new LineSegmentsGeometry();
  frustumGeometry.setPositions(positions);
  
  const frustumMaterial = new LineMaterial({
    color: 0x00aaff,
    linewidth: 3,
    resolution: resolution,
    transparent: true,
    opacity: 0.85,
    depthTest: false,  // Always on top
    depthWrite: false,
  });
  
  const frustumLine = new LineSegments2(frustumGeometry, frustumMaterial);
  frustumLine.computeLineDistances();
  frustumLine.frustumCulled = false;
  frustumLine.renderOrder = 999;
  group.add(frustumLine);
  
  // --- Up indicator ---
  const upGeometry = new LineSegmentsGeometry();
  upGeometry.setPositions([0, 0, 0, 0, 0.25, 0]);
  
  const upMaterial = new LineMaterial({
    color: 0x44ff88,
    linewidth: 4,
    resolution: resolution,
    transparent: true,
    opacity: 0.9,
    depthTest: false,  // Always on top
    depthWrite: false,
  });
  
  const upLine = new LineSegments2(upGeometry, upMaterial);
  upLine.computeLineDistances();
  upLine.frustumCulled = false;
  upLine.renderOrder = 999;
  group.add(upLine);
  
  // --- Number label ---
  const label = createTextSprite(String(index + 1));
  label.position.set(0, 0.45, 0);
  group.add(label);
  
  // Apply keyframe transform
  group.position.copy(keyframe.position);
  group.quaternion.copy(keyframe.quaternion);
  
  return group;
}

/**
 * Hook to manage camera frustum gizmos
 * Gizmos are editor-only visuals that:
 * - Never disappear (frustumCulled = false)
 * - Always render on top (depthTest = false, high renderOrder)
 * - Hidden during playback and export
 */
export function useFrustumGizmos({ 
  sceneRef, 
  keyframes = [], 
  activeKeyframeIndex = -1,
  enabled = true 
}) {
  const gizmosGroupRef = useRef(null);
  const resolutionRef = useRef(new THREE.Vector2(window.innerWidth, window.innerHeight));
  
  // Update resolution on window resize
  useEffect(() => {
    const handleResize = () => {
      resolutionRef.current.set(window.innerWidth, window.innerHeight);
      
      if (gizmosGroupRef.current) {
        gizmosGroupRef.current.traverse((obj) => {
          if (obj.material && obj.material.resolution) {
            obj.material.resolution.copy(resolutionRef.current);
          }
        });
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Initialize gizmos group
  useEffect(() => {
    const scene = sceneRef?.current;
    if (!scene) return;
    
    if (!gizmosGroupRef.current) {
      const group = new THREE.Group();
      group.name = 'camera-frustum-gizmos';
      group.userData.isEditorOnly = true;
      group.frustumCulled = false;
      group.renderOrder = 999;
      gizmosGroupRef.current = group;
      scene.add(group);
    }
    
    return () => {
      if (gizmosGroupRef.current && scene) {
        scene.remove(gizmosGroupRef.current);
        
        gizmosGroupRef.current.traverse((obj) => {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) {
            if (obj.material.map) obj.material.map.dispose();
            obj.material.dispose();
          }
        });
        
        gizmosGroupRef.current = null;
      }
    };
  }, [sceneRef]);
  
  // Update gizmos when keyframes or enabled state changes
  useEffect(() => {
    const group = gizmosGroupRef.current;
    if (!group) return;
    
    // Clear existing gizmos
    while (group.children.length > 0) {
      const child = group.children[0];
      child.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (obj.material.map) obj.material.map.dispose();
          obj.material.dispose();
        }
      });
      group.remove(child);
    }
    
    // Set visibility
    group.visible = enabled;
    
    if (!enabled) return;
    
    // Create gizmos
    keyframes.forEach((keyframe, index) => {
      const gizmo = createCameraGizmo(keyframe, index, resolutionRef.current);
      group.add(gizmo);
    });

    if (keyframes.length > 0) {
      console.log(`[FrustumGizmos] Created ${keyframes.length} gizmos (depthTest: false, frustumCulled: false)`);
    }
    
  }, [keyframes, enabled]);
  
  const getClosestKeyframeIndex = useCallback((t) => {
    if (keyframes.length === 0) return -1;
    if (keyframes.length === 1) return 0;
    
    const keyframeT = t * (keyframes.length - 1);
    return Math.round(keyframeT);
  }, [keyframes.length]);
  
  return {
    gizmosGroupRef,
    getClosestKeyframeIndex
  };
}
