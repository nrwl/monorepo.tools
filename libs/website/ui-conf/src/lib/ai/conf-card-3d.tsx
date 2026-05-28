import { useEffect, useRef } from 'react';

const SLOGAN = 'AI ♥ MONOREPOS · A FREE HALF-DAY CONFERENCE';
const LAUNCH_TXT = 'TUE · 23 JUN 2026';
const WORDMARK = 'AI ♥ Monorepos';

const NODE_LAYOUT = [
  { xp: -0.34, yp: 0.1, size: 0.4, id: 'monoA' },
  { xp: 0.34, yp: 0.1, size: 0.4, id: 'monoB' },
  { xp: 0.0, yp: 0.22, size: 0.46, id: 'shared' },
  { xp: -0.16, yp: -0.06, size: 0.28, id: 'libA' },
  { xp: 0.18, yp: -0.06, size: 0.28, id: 'libB' },
  { xp: -0.34, yp: -0.2, size: 0.34, id: 'mobile' },
  { xp: 0.34, yp: -0.2, size: 0.34, id: 'api' },
] as const;

const EDGES: Array<[number, number]> = [
  [0, 2],
  [1, 2],
  [3, 2],
  [4, 2],
  [0, 3],
  [1, 4],
  [5, 2],
  [6, 2],
  [5, 6],
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

export function ConfCard3D() {
  const stageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stage = stageRef.current;
    if (!stage) return;
    let stopped = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      const THREE = await import('three');
      if (stopped) return;

      const scene = new THREE.Scene();
      const CARD_W = 5;
      const CARD_H = CARD_W / 1.45;

      const camera = new THREE.PerspectiveCamera(34, 1.45, 0.1, 100);
      camera.position.set(0, 0, 7);
      camera.lookAt(0, 0, 0);

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.toneMapping = THREE.NoToneMapping;
      stage.appendChild(renderer.domElement);

      const resize = () => {
        const r = stage.getBoundingClientRect();
        renderer.setSize(r.width, r.height, false);
        camera.aspect = r.width / r.height;
        camera.updateProjectionMatrix();
      };
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(stage);

      const root = new THREE.Group();
      scene.add(root);

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

      const tex = createCardTexture(THREE);
      cardMat.map = tex;
      cardMat.emissiveMap = tex;
      cardMat.needsUpdate = true;

      const nodes = NODE_LAYOUT.map((n) => ({
        ...n,
        x: n.xp * CARD_W,
        y: n.yp * CARD_H,
        zBase: n.size * 0.5 + 0.02,
      }));

      const cubeMeshes: THREE.Group[] = [];
      const innerMeshes: THREE.Mesh[] = [];
      const wireMeshes: THREE.LineSegments[] = [];

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
        const outer = new THREE.Mesh(outerGeo, outerMat);
        outer.castShadow = true;
        outer.receiveShadow = true;
        g.add(outer);

        const wireGeo = new THREE.EdgesGeometry(outerGeo);
        const wireMat = new THREE.LineBasicMaterial({
          color: 0xb4c2af,
          transparent: true,
          opacity: 0,
        });
        const wire = new THREE.LineSegments(wireGeo, wireMat);
        g.add(wire);
        wireMeshes.push(wire);

        const innerGeo = new THREE.BoxGeometry(
          n.size * 0.5,
          n.size * 0.5,
          n.size * 0.5,
        );
        const innerMat = new THREE.MeshStandardMaterial({
          color: 0x1a1d17,
          roughness: 0.4,
          metalness: 0.3,
          transparent: true,
          opacity: 0,
        });
        const inner = new THREE.Mesh(innerGeo, innerMat);
        inner.castShadow = true;
        g.add(inner);
        innerMeshes.push(inner);

        root.add(g);
        cubeMeshes.push(g);
      }

      const edgeLines: THREE.Line[] = [];
      const travelDots: THREE.Mesh[] = [];
      for (const [a, b] of EDGES) {
        const pa = cubeMeshes[a].position.clone();
        const pb = cubeMeshes[b].position.clone();
        const geo = new THREE.BufferGeometry().setFromPoints([pa, pb]);
        const mat = new THREE.LineDashedMaterial({
          color: 0xfbbf24,
          dashSize: 0.1,
          gapSize: 0.07,
          transparent: true,
          opacity: 0,
        });
        const line = new THREE.Line(geo, mat);
        line.computeLineDistances();
        root.add(line);
        edgeLines.push(line);

        const dot = new THREE.Mesh(
          new THREE.SphereGeometry(0.04, 12, 12),
          new THREE.MeshBasicMaterial({
            color: 0xfbbf24,
            transparent: true,
            opacity: 0,
          }),
        );
        (dot.userData as { t: number }).t = Math.random();
        root.add(dot);
        travelDots.push(dot);
      }

      scene.add(new THREE.AmbientLight(0xffffff, 0.45));
      scene.add(new THREE.HemisphereLight(0xfbe6a0, 0x05080a, 0.35));

      const flashlight = new THREE.SpotLight(
        0xfff0c4,
        6,
        8,
        Math.PI * 0.18,
        0.55,
        1.4,
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

        const baseX = -0.55;
        const baseY = -0.14;
        tiltTarget.x = baseX + ndc.y * 0.08;
        tiltTarget.y = baseY + ndc.x * 0.18;

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

      const clock = new THREE.Clock();
      let raf = 0;

      const tick = () => {
        const dt = Math.min(0.05, clock.getDelta());
        const t = clock.elapsedTime;

        hover += (hoverTarget - hover) * Math.min(1, dt * 5);
        tilt.x += (tiltTarget.x - tilt.x) * Math.min(1, dt * 5);
        tilt.y += (tiltTarget.y - tilt.y) * Math.min(1, dt * 5);
        root.rotation.x = tilt.x;
        root.rotation.y = tilt.y;

        cursorWorld.lerp(cursorTarget, Math.min(1, dt * 10));

        const lightHeight = 1.6;
        flashlight.position.set(cursorWorld.x, cursorWorld.y, lightHeight);
        flashlight.target.position.set(cursorWorld.x, cursorWorld.y, 0);
        flashlight.intensity = 7 * hover;
        flashlight.visible = hover > 0.01;

        for (let i = 0; i < cubeMeshes.length; i++) {
          const n = nodes[i];
          const cube = cubeMeshes[i];

          const dx = cursorWorld.x - n.x;
          const dy = cursorWorld.y - n.y;
          const dist = Math.hypot(dx, dy);
          const pull = Math.max(0, 1 - dist / 2.4);
          const pullEased = pull * pull;

          const targetZ = n.zBase + hover * (0.1 + pullEased * 0.85);
          const drag = 0.12 * hover * pullEased;
          const targetX = n.x + dx * drag;
          const targetY = n.y + dy * drag;

          cube.position.x +=
            (targetX - cube.position.x) * Math.min(1, dt * 6);
          cube.position.y +=
            (targetY - cube.position.y) * Math.min(1, dt * 6);
          cube.position.z +=
            (targetZ - cube.position.z) * Math.min(1, dt * 6);

          const leanX = pullEased * hover * dy * 0.25;
          const leanY = pullEased * hover * -dx * 0.25;
          cube.rotation.x +=
            (leanX - cube.rotation.x) * Math.min(1, dt * 4);
          cube.rotation.y +=
            (leanY - cube.rotation.y) * Math.min(1, dt * 4);

          const outerMat = (cube.children[0] as THREE.Mesh)
            .material as THREE.MeshStandardMaterial;
          outerMat.opacity = 0.55 * hover;
          (wireMeshes[i].material as THREE.LineBasicMaterial).opacity =
            0.95 * hover;
          (innerMeshes[i].material as THREE.MeshStandardMaterial).opacity =
            hover;

          const s = 1 + Math.sin(t * 2 + i) * 0.04 * hover;
          innerMeshes[i].scale.setScalar(s);
        }

        for (let i = 0; i < EDGES.length; i++) {
          const [a, b] = EDGES[i];
          const pa = cubeMeshes[a].position;
          const pb = cubeMeshes[b].position;
          const line = edgeLines[i];
          const positions = line.geometry.attributes
            .position as THREE.BufferAttribute;
          positions.setXYZ(0, pa.x, pa.y, pa.z);
          positions.setXYZ(1, pb.x, pb.y, pb.z);
          positions.needsUpdate = true;
          line.computeLineDistances();
          (line.material as THREE.LineDashedMaterial).opacity = 0.85 * hover;

          const dot = travelDots[i];
          const ud = dot.userData as { t: number };
          ud.t = (ud.t + dt * 0.4) % 1;
          dot.position.lerpVectors(pa, pb, ud.t);
          (dot.material as THREE.MeshBasicMaterial).opacity = hover;
        }

        renderer.render(scene, camera);
        raf = requestAnimationFrame(tick);
      };
      tick();

      cleanup = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        stage.removeEventListener('mouseenter', onEnter);
        stage.removeEventListener('mouseleave', onLeave);
        stage.removeEventListener('mousemove', onMove);
        renderer.dispose();
        if (renderer.domElement.parentElement === stage) {
          stage.removeChild(renderer.domElement);
        }
      };
    })();

    return () => {
      stopped = true;
      cleanup?.();
    };
  }, []);

  return (
    <div
      ref={stageRef}
      style={{
        position: 'relative',
        width: 'min(960px, 94vw)',
        aspectRatio: '1.45 / 1',
        margin: '0 auto',
        cursor: 'pointer',
        filter:
          'drop-shadow(0 45px 55px rgba(0,0,0,0.65)) drop-shadow(0 15px 25px rgba(0,0,0,0.45))',
      }}
    />
  );
}

function createCardTexture(THREE: typeof import('three')) {
  const W = 1240;
  const H = Math.round(W / 1.45);
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const ctx = c.getContext('2d')!;

  // background
  ctx.fillStyle = '#0a1628';
  ctx.fillRect(0, 0, W, H);

  // subtle grid backdrop
  ctx.strokeStyle = 'rgba(132,160,210,0.08)';
  ctx.lineWidth = 1;
  for (let x = 0; x < W; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, H);
    ctx.stroke();
  }
  for (let y = 0; y < H; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(W, y);
    ctx.stroke();
  }

  // top-left: slogan
  ctx.fillStyle = '#94e7ff';
  ctx.font = '500 20px "JetBrains Mono", monospace';
  ctx.fillText(SLOGAN, 56, 84);

  // top-right: FREE pill
  const pillX = W - 56;
  const pillY = 78;
  const pillW = 110;
  const pillH = 36;
  ctx.beginPath();
  ctx.fillStyle = 'rgba(0,0,0,0.55)';
  roundRect(ctx, pillX - pillW, pillY - 26, pillW, pillH, pillH / 2);
  ctx.fill();
  ctx.strokeStyle = '#1f3354';
  ctx.lineWidth = 1.2;
  ctx.stroke();
  ctx.fillStyle = '#ff4d8d';
  ctx.beginPath();
  ctx.arc(pillX - pillW + 18, pillY - 8, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#f1f4fa';
  ctx.font = '600 18px "JetBrains Mono", monospace';
  ctx.fillText('FREE', pillX - pillW + 32, pillY - 2);

  const baselineY = H - 56;

  // bottom-right: launch
  ctx.fillStyle = '#ff4d8d';
  ctx.font = '600 28px "JetBrains Mono", monospace';
  const tw = ctx.measureText(LAUNCH_TXT).width;
  ctx.fillText(LAUNCH_TXT, W - 56 - tw, baselineY);
  ctx.fillStyle = '#8a96ad';
  ctx.font = '500 18px "JetBrains Mono", monospace';
  const lh = ctx.measureText('CONF').width;
  ctx.fillText('CONF', W - 56 - lh, baselineY - 36);

  // bottom-left: wordmark "AI ♥ Monorepos"
  ctx.fillStyle = '#f1f4fa';
  ctx.font = '500 56px "Space Grotesk", "Inter", sans-serif';
  ctx.fillText('AI ', 56, baselineY);
  const aiW = ctx.measureText('AI ').width;
  ctx.fillStyle = '#ff4d8d';
  ctx.fillText('♥', 56 + aiW, baselineY);
  const heartW = ctx.measureText('♥ ').width;
  ctx.fillStyle = '#f1f4fa';
  ctx.fillText(' Monorepos', 56 + aiW + heartW, baselineY);

  // connection-line backdrop
  const CARD_W_UNITS = 5;
  const nodePx = NODE_LAYOUT.map((n) => ({
    x: W * (n.xp + 0.5),
    y: H * (0.5 - n.yp),
    sizePx: (n.size / CARD_W_UNITS) * W,
  }));
  ctx.save();
  ctx.strokeStyle = 'rgba(42,212,255,0.16)';
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
    const insetA = pa.sizePx * 0.5;
    const insetB = pb.sizePx * 0.5;
    ctx.beginPath();
    ctx.moveTo(pa.x + ux * insetA, pa.y + uy * insetA);
    ctx.lineTo(pb.x - ux * insetB, pb.y - uy * insetB);
    ctx.stroke();
  }
  ctx.restore();

  // engraved cubes
  for (const n of NODE_LAYOUT) {
    const cx = W * (n.xp + 0.5);
    const cy = H * (0.5 - n.yp);
    const sizePx = (n.size / CARD_W_UNITS) * W;
    const half = sizePx / 2;

    ctx.strokeStyle = 'rgba(132,160,210,0.42)';
    ctx.lineWidth = 1.2;
    ctx.strokeRect(cx - half, cy - half, sizePx, sizePx);

    ctx.fillStyle = 'rgba(255,255,255,0.015)';
    ctx.fillRect(cx - half, cy - half, sizePx, sizePx);

    const innerSize = sizePx * 0.34;
    const ih = innerSize / 2;
    ctx.fillStyle = 'rgba(0,0,0,0.35)';
    ctx.fillRect(cx - ih, cy - ih, innerSize, innerSize);
    ctx.strokeStyle = 'rgba(80,90,120,0.55)';
    ctx.lineWidth = 1;
    ctx.strokeRect(cx - ih, cy - ih, innerSize, innerSize);
  }

  // border
  ctx.strokeStyle = '#1f3354';
  ctx.lineWidth = 2;
  roundRect(ctx, 1, 1, W - 2, H - 2, 36);
  ctx.stroke();

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

export default ConfCard3D;
