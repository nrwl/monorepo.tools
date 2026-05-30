import type * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { PALETTE, FONTS, CONF } from './data';

const SLOGAN = 'AGENTIC COLLABORATION · WITHOUT BOUNDARIES';

const NODE_LAYOUT = [
  { xp: -0.34, yp: 0.10, size: 0.40, id: 'monoA' },
  { xp:  0.34, yp: 0.10, size: 0.40, id: 'monoB' },
  { xp:  0.00, yp: 0.22, size: 0.46, id: 'shared' },
  { xp: -0.16, yp: -0.06, size: 0.28, id: 'libA' },
  { xp:  0.18, yp: -0.06, size: 0.28, id: 'libB' },
  { xp: -0.34, yp: -0.20, size: 0.34, id: 'mobile' },
  { xp:  0.34, yp: -0.20, size: 0.34, id: 'api' },
] as const;

const EDGES: [number, number][] = [
  [0, 2], [1, 2], [3, 2], [4, 2],
  [0, 3], [1, 4],
  [5, 2], [6, 2], [5, 6],
];

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

async function buildCardTexture(THREE: typeof import('three')) {
  await document.fonts.ready;

  const W = 1240;
  const H = Math.round(W / 1.45);
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const ctx = c.getContext('2d')!;

  // dark card background
  ctx.fillStyle = '#15170f';
  ctx.fillRect(0, 0, W, H);

  // top-left slogan
  ctx.fillStyle = '#a3afa0';
  ctx.font = '500 20px "JetBrains Mono", monospace';
  ctx.fillText(SLOGAN, 56, 84);

  // top-right LIVE pill
  const pillX = W - 56;
  const pillY = 78;
  const pillW = 96;
  const pillH = 36;
  roundRect(ctx, pillX - pillW, pillY - 26, pillW, pillH, pillH / 2);
  ctx.fillStyle = 'rgba(0,0,0,0.6)';
  ctx.fill();
  ctx.strokeStyle = '#2a2d27';
  ctx.lineWidth = 1.2;
  ctx.stroke();
  ctx.fillStyle = '#ef4444';
  ctx.beginPath();
  ctx.arc(pillX - pillW + 18, pillY - 8, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#d1d8d1';
  ctx.font = '600 18px "JetBrains Mono", monospace';
  ctx.fillText('LIVE', pillX - pillW + 32, pillY - 2);

  // shared baseline for bottom row
  const baselineY = H - 56;

  // bottom-right: date
  const launchTxt = 'TUE · 23 JUN 2026';
  ctx.fillStyle = '#fbbf24';
  ctx.font = '600 28px "JetBrains Mono", monospace';
  const tw = ctx.measureText(launchTxt).width;
  ctx.fillText(launchTxt, W - 56 - tw, baselineY);
  ctx.fillStyle = '#8e9d8d';
  ctx.font = '500 18px "JetBrains Mono", monospace';
  const lh = ctx.measureText('LAUNCHING').width;
  ctx.fillText('LAUNCHING', W - 56 - lh, baselineY - 36);

  // bottom-left: "AI ♥ Monorepos" title (replaces Polygraph logo)
  const titleSize = 88;
  ctx.font = `700 ${titleSize}px "Space Grotesk", "Inter", sans-serif`;
  const aiW = ctx.measureText('AI').width;
  const heartW = ctx.measureText(' ♥ ').width;
  let tx = 56;
  ctx.fillStyle = '#f8fafc';
  ctx.fillText('AI', tx, baselineY);
  tx += aiW;
  ctx.fillStyle = '#fbbf24';
  ctx.fillText(' ♥ ', tx, baselineY);
  tx += heartW;
  ctx.fillStyle = '#f8fafc';
  ctx.fillText('Monorepos', tx, baselineY);

  // dashed spoke lines between cube nodes
  const CARD_W_UNITS = 5;
  const nodePx = NODE_LAYOUT.map((n) => ({
    x: W * (n.xp + 0.5),
    y: H * (0.5 - n.yp),
    sizePx: (n.size / CARD_W_UNITS) * W,
  }));

  ctx.save();
  ctx.strokeStyle = 'rgba(142,157,141,0.16)';
  ctx.lineWidth = 1.1;
  ctx.setLineDash([7, 6]);
  for (const [a, b] of EDGES) {
    const pa = nodePx[a];
    const pb = nodePx[b];
    const dx = pb.x - pa.x;
    const dy = pb.y - pa.y;
    const len = Math.hypot(dx, dy);
    const ux = dx / len;
    const uy = dy / len;
    ctx.beginPath();
    ctx.moveTo(pa.x + ux * pa.sizePx * 0.5, pa.y + uy * pa.sizePx * 0.5);
    ctx.lineTo(pb.x - ux * pb.sizePx * 0.5, pb.y - uy * pb.sizePx * 0.5);
    ctx.stroke();
  }
  ctx.restore();

  // engraved cube icons at rest
  for (const n of NODE_LAYOUT) {
    const cx = W * (n.xp + 0.5);
    const cy = H * (0.5 - n.yp);
    const sizePx = (n.size / CARD_W_UNITS) * W;
    const half = sizePx / 2;

    ctx.strokeStyle = 'rgba(142,157,141,0.42)';
    ctx.lineWidth = 1.2;
    ctx.strokeRect(cx - half, cy - half, sizePx, sizePx);

    ctx.fillStyle = 'rgba(255,255,255,0.015)';
    ctx.fillRect(cx - half, cy - half, sizePx, sizePx);

    const innerSize = sizePx * 0.34;
    const ih = innerSize / 2;
    ctx.fillStyle = 'rgba(0,0,0,0.35)';
    ctx.fillRect(cx - ih, cy - ih, innerSize, innerSize);
    ctx.strokeStyle = 'rgba(80,90,78,0.55)';
    ctx.lineWidth = 1;
    ctx.strokeRect(cx - ih, cy - ih, innerSize, innerSize);
  }

  // rounded card border
  ctx.strokeStyle = '#3a3f34';
  ctx.lineWidth = 2;
  roundRect(ctx, 1, 1, W - 2, H - 2, 36);
  ctx.stroke();

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

export function ThreeCardHero() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    let mounted = true;

    // These are set inside the async init so the teardown can access them
    let cleanupFn: (() => void) | null = null;

    (async () => {
      const THREE = await import('three');
      if (!mounted) return;

      const CARD_W = 5;
      const CARD_H = CARD_W / 1.45;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(34, 1.45, 0.1, 100);
      camera.position.set(0, 0, 7);
      camera.lookAt(0, 0, 0);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.toneMapping = THREE.NoToneMapping;

      const canvas = renderer.domElement;
      canvas.style.display = 'block';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.cursor = 'pointer';
      canvas.style.filter =
        'drop-shadow(0 45px 55px rgba(0,0,0,0.65)) drop-shadow(0 15px 25px rgba(0,0,0,0.45))';
      stage.appendChild(canvas);

      function resize() {
        const r = stage.getBoundingClientRect();
        renderer.setSize(r.width, r.height, false);
        camera.aspect = r.width / r.height;
        camera.updateProjectionMatrix();
      }
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(stage);

      const root = new THREE.Group();
      scene.add(root);

      // Card plane
      const cardMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.85,
        metalness: 0.05,
        emissive: 0xffffff,
        emissiveIntensity: 0.55,
      });
      const cardMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(CARD_W, CARD_H, 64, 64),
        cardMat,
      );
      cardMesh.receiveShadow = true;
      root.add(cardMesh);

      buildCardTexture(THREE).then((tex) => {
        if (!mounted) { tex.dispose(); return; }
        cardMat.map = tex;
        cardMat.emissiveMap = tex;
        cardMat.needsUpdate = true;
      });

      // Cube nodes
      const nodes = NODE_LAYOUT.map((n) => ({
        ...n,
        x: n.xp * CARD_W,
        y: n.yp * CARD_H,
        zBase: n.size * 0.5 + 0.02,
      }));

      const cubeMeshes: THREE.Group[] = [];
      const outerMats: THREE.MeshStandardMaterial[] = [];
      const wireMats: THREE.LineBasicMaterial[] = [];
      const innerMeshes: THREE.Mesh[] = [];
      const innerMats: THREE.MeshStandardMaterial[] = [];

      for (const n of nodes) {
        const g = new THREE.Group();
        g.position.set(n.x, n.y, n.zBase);

        const outerGeo = new THREE.BoxGeometry(n.size, n.size, n.size);
        const outerMat = new THREE.MeshStandardMaterial({
          color: 0x6f7b6c,
          transparent: true,
          opacity: 0,
          roughness: 0.45,
          metalness: 0.18,
        });
        outerMats.push(outerMat);
        const outer = new THREE.Mesh(outerGeo, outerMat);
        outer.castShadow = true;
        outer.receiveShadow = true;
        g.add(outer);

        const wireMat = new THREE.LineBasicMaterial({
          color: 0xb4c2af,
          transparent: true,
          opacity: 0,
        });
        wireMats.push(wireMat);
        g.add(new THREE.LineSegments(new THREE.EdgesGeometry(outerGeo), wireMat));

        const innerMat = new THREE.MeshStandardMaterial({
          color: 0x1a1d17,
          roughness: 0.4,
          metalness: 0.3,
          transparent: true,
          opacity: 0,
        });
        innerMats.push(innerMat);
        const inner = new THREE.Mesh(
          new THREE.BoxGeometry(n.size * 0.5, n.size * 0.5, n.size * 0.5),
          innerMat,
        );
        inner.castShadow = true;
        g.add(inner);
        innerMeshes.push(inner);

        root.add(g);
        cubeMeshes.push(g);
      }

      // Edge lines and travel dots
      const edgeLines: THREE.Line[] = [];
      const edgeLineMats: THREE.LineDashedMaterial[] = [];
      const travelDots: THREE.Mesh[] = [];
      const dotMats: THREE.MeshBasicMaterial[] = [];

      for (const [a, b] of EDGES) {
        const pa = cubeMeshes[a].position.clone();
        const pb = cubeMeshes[b].position.clone();
        const lineMat = new THREE.LineDashedMaterial({
          color: 0xfbbf24,
          dashSize: 0.10,
          gapSize: 0.07,
          transparent: true,
          opacity: 0,
        });
        edgeLineMats.push(lineMat);
        const line = new THREE.Line(
          new THREE.BufferGeometry().setFromPoints([pa, pb]),
          lineMat,
        );
        line.computeLineDistances();
        root.add(line);
        edgeLines.push(line);

        const dotMat = new THREE.MeshBasicMaterial({
          color: 0xfbbf24,
          transparent: true,
          opacity: 0,
        });
        dotMats.push(dotMat);
        const dot = new THREE.Mesh(new THREE.SphereGeometry(0.04, 12, 12), dotMat);
        dot.userData.t = Math.random();
        root.add(dot);
        travelDots.push(dot);
      }

      // Lighting
      scene.add(new THREE.AmbientLight(0xffffff, 0.45));
      scene.add(new THREE.HemisphereLight(0xfbe6a0, 0x05080a, 0.35));

      const flashlight = new THREE.SpotLight(
        0xfff0c4, 6, 8, Math.PI * 0.18, 0.55, 1.4,
      );
      flashlight.position.set(0, 0, 2.4);
      flashlight.castShadow = true;
      flashlight.shadow.mapSize.set(1536, 1536);
      flashlight.shadow.bias = -0.0007;
      flashlight.shadow.normalBias = 0.02;
      flashlight.shadow.radius = 6;
      flashlight.shadow.camera.near = 0.4;
      flashlight.shadow.camera.far = 8;
      root.add(flashlight);
      const flashlightTarget = new THREE.Object3D();
      flashlightTarget.position.set(0, 0, 0);
      root.add(flashlightTarget);
      flashlight.target = flashlightTarget;

      // Interaction state
      const raycaster = new THREE.Raycaster();
      const ndc = new THREE.Vector2();
      const cardPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const cursorWorld = new THREE.Vector3(0, 0, 0);
      const cursorTarget = new THREE.Vector3(0, 0, 0);
      let hover = 0;
      let hoverTarget = 0;
      const tiltTarget = { x: 0, y: 0 };
      const tilt = { x: 0, y: 0 };

      const onEnter = () => (hoverTarget = 1);
      const onLeave = () => {
        hoverTarget = 0;
        tiltTarget.x = 0;
        tiltTarget.y = 0;
      };
      const onMove = (e: MouseEvent) => {
        const r = stage.getBoundingClientRect();
        ndc.x = ((e.clientX - r.left) / r.width) * 2 - 1;
        ndc.y = -(((e.clientY - r.top) / r.height) * 2 - 1);
        tiltTarget.x = -0.55 + ndc.y * 0.08;
        tiltTarget.y = -0.14 + ndc.x * 0.18;
        raycaster.setFromCamera(ndc, camera);
        const hit = new THREE.Vector3();
        raycaster.ray.intersectPlane(cardPlane, hit);
        if (hit) {
          root.updateMatrixWorld();
          const local = hit.clone();
          root.worldToLocal(local);
          cursorTarget.copy(local);
        }
      };
      stage.addEventListener('mouseenter', onEnter);
      stage.addEventListener('mouseleave', onLeave);
      stage.addEventListener('mousemove', onMove);

      // Animation loop
      const clock = new THREE.Clock();
      let rafId = 0;

      const tick = () => {
        if (!mounted) return;
        const dt = Math.min(0.05, clock.getDelta());
        const t = clock.elapsedTime;

        hover += (hoverTarget - hover) * Math.min(1, dt * 5);
        tilt.x += (tiltTarget.x - tilt.x) * Math.min(1, dt * 5);
        tilt.y += (tiltTarget.y - tilt.y) * Math.min(1, dt * 5);
        root.rotation.x = tilt.x;
        root.rotation.y = tilt.y;

        cursorWorld.lerp(cursorTarget, Math.min(1, dt * 10));

        flashlight.position.set(cursorWorld.x, cursorWorld.y, 1.6);
        flashlight.target.position.set(cursorWorld.x, cursorWorld.y, 0);
        flashlight.intensity = 7 * hover;
        flashlight.visible = hover > 0.01;

        for (let i = 0; i < cubeMeshes.length; i++) {
          const n = nodes[i];
          const cube = cubeMeshes[i];
          const dx = cursorWorld.x - n.x;
          const dy = cursorWorld.y - n.y;
          const pull = Math.max(0, 1 - Math.hypot(dx, dy) / 2.4) ** 2;
          const targetZ = n.zBase + hover * (0.10 + pull * 0.85);
          const drag = 0.12 * hover * pull;
          cube.position.x += (n.x + dx * drag - cube.position.x) * Math.min(1, dt * 6);
          cube.position.y += (n.y + dy * drag - cube.position.y) * Math.min(1, dt * 6);
          cube.position.z += (targetZ - cube.position.z) * Math.min(1, dt * 6);
          cube.rotation.x += (pull * hover * dy * 0.25 - cube.rotation.x) * Math.min(1, dt * 4);
          cube.rotation.y += (pull * hover * -dx * 0.25 - cube.rotation.y) * Math.min(1, dt * 4);
          outerMats[i].opacity = 0.55 * hover;
          wireMats[i].opacity = 0.95 * hover;
          innerMats[i].opacity = hover;
          innerMeshes[i].scale.setScalar(1 + Math.sin(t * 2 + i) * 0.04 * hover);
        }

        for (let i = 0; i < EDGES.length; i++) {
          const [a, b] = EDGES[i];
          const pa = cubeMeshes[a].position;
          const pb = cubeMeshes[b].position;
          const positions = edgeLines[i].geometry.attributes.position;
          positions.setXYZ(0, pa.x, pa.y, pa.z);
          positions.setXYZ(1, pb.x, pb.y, pb.z);
          positions.needsUpdate = true;
          edgeLines[i].computeLineDistances();
          edgeLineMats[i].opacity = 0.85 * hover;

          const dot = travelDots[i];
          dot.userData.t = (dot.userData.t + dt * 0.4) % 1;
          dot.position.lerpVectors(pa, pb, dot.userData.t);
          dotMats[i].opacity = hover;
        }

        renderer.render(scene, camera);
        rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);

      cleanupFn = () => {
        cancelAnimationFrame(rafId);
        ro.disconnect();
        stage.removeEventListener('mouseenter', onEnter);
        stage.removeEventListener('mouseleave', onLeave);
        stage.removeEventListener('mousemove', onMove);
        if (canvas.parentNode === stage) stage.removeChild(canvas);
        renderer.dispose();
      };
    })();

    return () => {
      mounted = false;
      if (cleanupFn) cleanupFn();
    };
  }, []);

  return (
    <div
      style={{
        background: PALETTE.bg,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '3rem',
        paddingBottom: '3rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
      }}
    >
      {/* Three.js card */}
      <div
        ref={stageRef}
        style={{
          position: 'relative',
          width: 'min(960px, 94vw)',
          aspectRatio: '1.45 / 1',
        }}
      />

      {/* CTA buttons */}
      <div
        className="mt-8 flex w-full max-w-[360px] flex-col items-center gap-4 sm:mt-9 sm:w-auto sm:max-w-none sm:flex-row"
      >
        <a
          href={CONF.registerUrl}
          target="_blank"
          rel="noreferrer"
          className="w-full justify-center sm:w-auto"
          style={{
            background: PALETTE.pink,
            color: PALETTE.bg,
            padding: '16px 32px',
            fontFamily: FONTS.mono,
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 1,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          RESERVE FREE TICKET →
        </a>
        <a
          href="#agenda"
          className="w-full justify-center sm:w-auto"
          style={{
            color: PALETTE.text,
            padding: '16px 24px',
            fontFamily: FONTS.mono,
            fontSize: 13,
            letterSpacing: 1,
            textDecoration: 'none',
            border: `1px solid ${PALETTE.textDim}`,
            background: 'rgba(10,22,40,0.7)',
            backdropFilter: 'blur(6px)',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          SEE AGENDA
        </a>
      </div>
    </div>
  );
}
