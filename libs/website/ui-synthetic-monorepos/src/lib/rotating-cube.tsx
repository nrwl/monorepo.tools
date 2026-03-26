'use client';
import { useEffect, useRef } from 'react';

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface RotatingCubeProps {
  cx: number;
  cy: number;
  size: number;
  innerSize: number;
  color: string;
  innerColor: string;
  speed: number;
  opacity?: number;
  angleOffset?: number;
  /** Controls how solid the face fills are. 0 = wireframe only, 1 = fully opaque faces. Default ~0.08/0.18 */
  outerFillOpacity?: number;
  innerFillOpacity?: number;
  /** Override the fill color for outer cube faces (defaults to stroke color) */
  outerFaceFillColor?: string;
  canvasWidth: number;
  canvasHeight: number;
}

function projectPoint(
  p: Point3D,
  cx: number,
  cy: number,
  perspective: number
): { x: number; y: number } {
  const scale = perspective / (perspective + p.z);
  return {
    x: cx + p.x * scale,
    y: cy + p.y * scale,
  };
}

function rotateY(p: Point3D, angle: number): Point3D {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    x: p.x * cos - p.z * sin,
    y: p.y,
    z: p.x * sin + p.z * cos,
  };
}

function rotateX(p: Point3D, angle: number): Point3D {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    x: p.x,
    y: p.y * cos - p.z * sin,
    z: p.y * sin + p.z * cos,
  };
}

function getCubeVertices(halfSize: number): Point3D[] {
  const s = halfSize;
  return [
    { x: -s, y: -s, z: -s },
    { x: s, y: -s, z: -s },
    { x: s, y: s, z: -s },
    { x: -s, y: s, z: -s },
    { x: -s, y: -s, z: s },
    { x: s, y: -s, z: s },
    { x: s, y: s, z: s },
    { x: -s, y: s, z: s },
  ];
}

const CUBE_EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 0],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 4],
  [0, 4],
  [1, 5],
  [2, 6],
  [3, 7],
];

// Face vertex indices (quads)
const CUBE_FACES: number[][] = [
  [0, 1, 2, 3], // front
  [4, 5, 6, 7], // back
  [0, 1, 5, 4], // top
  [2, 3, 7, 6], // bottom
  [0, 3, 7, 4], // left
  [1, 2, 6, 5], // right
];

function faceNormalZ(
  projected: { x: number; y: number }[],
  face: number[]
): number {
  const a = projected[face[0]];
  const b = projected[face[1]];
  const c = projected[face[2]];
  return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
}

function drawFilledFaces(
  ctx: CanvasRenderingContext2D,
  projected: { x: number; y: number }[],
  verts3d: Point3D[],
  fillColor: string,
  fillAlpha: number
) {
  // Sort faces by average Z depth (back to front), draw all of them
  const sorted = CUBE_FACES.map((face) => ({
    face,
    avgZ: face.reduce((s, vi) => s + verts3d[vi].z, 0) / face.length,
  })).sort((a, b) => b.avgZ - a.avgZ);

  for (const { face } of sorted) {
    ctx.beginPath();
    ctx.moveTo(projected[face[0]].x, projected[face[0]].y);
    for (let i = 1; i < face.length; i++) {
      ctx.lineTo(projected[face[i]].x, projected[face[i]].y);
    }
    ctx.closePath();
    ctx.fillStyle = fillColor;
    ctx.globalAlpha = fillAlpha;
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

export function drawRotatingCube(
  ctx: CanvasRenderingContext2D,
  time: number,
  props: RotatingCubeProps
) {
  const { cx, cy, size, innerSize, color, innerColor, speed, opacity = 1, angleOffset = 0, outerFillOpacity, innerFillOpacity, outerFaceFillColor } = props;
  const perspective = 300;
  const angleY = time * speed + angleOffset;
  const tiltX = 0.25; // subtle top-down viewing angle

  // Outer cube: spin on Y first (true vertical axis), then tilt for viewing
  const outerVerts = getCubeVertices(size / 2).map((v) =>
    rotateX(rotateY(v, angleY), tiltX)
  );
  const outerProjected = outerVerts.map((v) =>
    projectPoint(v, cx, cy, perspective)
  );

  const opaqueMode = (outerFillOpacity ?? 0) >= 0.9;

  if (opaqueMode) {
    // Opaque mode: draw filled faces sorted back-to-front, then front-facing edges on top
    const sortedFaces = CUBE_FACES.map((face) => ({
      face,
      avgZ: face.reduce((s, vi) => s + outerVerts[vi].z, 0) / face.length,
    })).sort((a, b) => b.avgZ - a.avgZ);

    for (const { face } of sortedFaces) {
      // Fill face
      ctx.beginPath();
      ctx.moveTo(outerProjected[face[0]].x, outerProjected[face[0]].y);
      for (let i = 1; i < face.length; i++) {
        ctx.lineTo(outerProjected[face[i]].x, outerProjected[face[i]].y);
      }
      ctx.closePath();
      ctx.fillStyle = outerFaceFillColor ?? color;
      ctx.globalAlpha = outerFillOpacity!;
      ctx.fill();

      // Draw edges of this face on top
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.globalAlpha = opacity * 0.6;
      ctx.beginPath();
      ctx.moveTo(outerProjected[face[0]].x, outerProjected[face[0]].y);
      for (let i = 1; i < face.length; i++) {
        ctx.lineTo(outerProjected[face[i]].x, outerProjected[face[i]].y);
      }
      ctx.closePath();
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  } else {
    // Transparent mode: filled faces then all wireframe edges
    drawFilledFaces(ctx, outerProjected, outerVerts, outerFaceFillColor ?? color, outerFillOpacity ?? opacity * 0.08);

    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.globalAlpha = opacity * 0.5;
    for (const [a, b] of CUBE_EDGES) {
      ctx.beginPath();
      ctx.moveTo(outerProjected[a].x, outerProjected[a].y);
      ctx.lineTo(outerProjected[b].x, outerProjected[b].y);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  // Inner cube: skip entirely if fill opacity is explicitly 0 (black-box mode)
  if (innerFillOpacity !== 0) {
    const innerVerts = getCubeVertices(innerSize / 2).map((v) =>
      rotateX(rotateY(v, angleY), tiltX)
    );
    const innerProjected = innerVerts.map((v) =>
      projectPoint(v, cx, cy, perspective)
    );

    // Inner cube: filled faces
    drawFilledFaces(ctx, innerProjected, innerVerts, innerColor, innerFillOpacity ?? opacity * 0.18);

    // Inner cube: wireframe
    ctx.strokeStyle = innerColor;
    ctx.lineWidth = 1.5;
    ctx.globalAlpha = opacity * 0.8;
    for (const [a, b] of CUBE_EDGES) {
      ctx.beginPath();
      ctx.moveTo(innerProjected[a].x, innerProjected[a].y);
      ctx.lineTo(innerProjected[b].x, innerProjected[b].y);
      ctx.stroke();
    }

    ctx.globalAlpha = 1;
  }
}

/**
 * Standalone single rotating cube component for simple usage.
 */
export function RotatingCube({
  size = 120,
  innerSize = 50,
  color = 'rgba(239,68,68,0.4)',
  innerColor = 'rgba(148,163,184,0.7)',
  speed = 0.5,
}: {
  size?: number;
  innerSize?: number;
  color?: string;
  innerColor?: string;
  speed?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = size * 1.5;
    const h = size * 1.5;
    canvas.width = w * 2;
    canvas.height = h * 2;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.scale(2, 2);

    function draw(time: number) {
      if (!ctx) return;
      const t = time / 1000;
      ctx.clearRect(0, 0, w, h);
      drawRotatingCube(ctx, t, {
        cx: w / 2,
        cy: h / 2,
        size,
        innerSize,
        color,
        innerColor,
        speed,
        canvasWidth: w,
        canvasHeight: h,
      });
      animRef.current = requestAnimationFrame(draw);
    }

    animRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animRef.current);
  }, [size, innerSize, color, innerColor, speed]);

  return <canvas ref={canvasRef} className="block" />;
}
