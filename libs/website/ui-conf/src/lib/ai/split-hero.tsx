import type * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { PALETTE, FONTS, CONF } from './data';

// Node footprints in scene units (x, y on the ground plane). Cubes elevate
// straight up out of these squares on hover.
const NODE_LAYOUT = [
  { x: -1.7, y: 0.55, size: 0.6, id: 'monoA' },
  { x:  1.7, y: 0.55, size: 0.6, id: 'monoB' },
  { x:  0.0, y: 1.15, size: 0.72, id: 'shared' },
  { x: -0.85, y: -0.25, size: 0.44, id: 'libA' },
  { x:  0.9, y: -0.25, size: 0.44, id: 'libB' },
  { x: -1.7, y: -1.05, size: 0.52, id: 'mobile' },
  { x:  1.7, y: -1.05, size: 0.52, id: 'api' },
] as const;

const EDGES: [number, number][] = [
  [0, 2], [1, 2], [3, 2], [4, 2],
  [0, 3], [1, 4],
  [5, 2], [6, 2], [5, 6],
];

export function SplitHero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const host = hostRef.current;
    if (!stage || !host) return;

    let mounted = true;
    let cleanupFn: (() => void) | null = null;

    (async () => {
      const THREE = await import('three');
      if (!mounted) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
      camera.position.set(0, 0, 10);
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
      stage.appendChild(canvas);

      // root group: tilts back so the ground recedes; cubes rise toward viewer
      const root = new THREE.Group();
      scene.add(root);

      const BASE_TILT_X = -0.62;
      const BASE_TILT_Y = -0.12;

      function resize() {
        const r = stage.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) return;
        renderer.setSize(r.width, r.height, false);
        const aspect = r.width / r.height;
        camera.aspect = aspect;
        // pull the camera back far enough that the whole graph (plus the
        // on-hover elevation and shadows) always fits — no edge clipping.
        const vFOV = (camera.fov * Math.PI) / 180;
        const halfH = 2.5;
        const halfW = 2.2;
        const distH = halfH / Math.tan(vFOV / 2);
        const distW = halfW / (Math.tan(vFOV / 2) * aspect);
        camera.position.z = Math.max(distH, distW);
        camera.updateProjectionMatrix();
        // wide (desktop): shove the graph to the right, let it bleed slightly
        // left under the title. narrow (mobile): center it and raise it up.
        if (aspect >= 1.1) {
          root.position.set(1.2, -0.65, 0);
        } else {
          root.position.set(0, 1.2, 0);
        }
      }
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(stage);

      // shadow-catching ground plane at z=0
      const ground = new THREE.Mesh(
        new THREE.PlaneGeometry(16, 16),
        new THREE.ShadowMaterial({ opacity: 0.3 }),
      );
      ground.receiveShadow = true;
      root.add(ground);

      type Node = {
        x: number;
        y: number;
        size: number;
        group: THREE.Group;
        outerMat: THREE.MeshStandardMaterial;
        wireMat: THREE.LineBasicMaterial;
        innerMat: THREE.MeshStandardMaterial;
        inner: THREE.Mesh;
        liftZ: number;
      };
      const nodes: Node[] = [];

      // flat square frame (outer square minus inner hole) → a border with real
      // thickness, so it stays crisp regardless of the GPU's 1px line limit.
      function frameMesh(
        half: number,
        thickness: number,
        color: number,
        opacity: number,
      ) {
        const s = new THREE.Shape();
        s.moveTo(-half, -half);
        s.lineTo(half, -half);
        s.lineTo(half, half);
        s.lineTo(-half, half);
        s.lineTo(-half, -half);
        const ih = half - thickness;
        const hole = new THREE.Path();
        hole.moveTo(-ih, -ih);
        hole.lineTo(-ih, ih);
        hole.lineTo(ih, ih);
        hole.lineTo(ih, -ih);
        hole.lineTo(-ih, -ih);
        s.holes.push(hole);
        return new THREE.Mesh(
          new THREE.ShapeGeometry(s),
          new THREE.MeshBasicMaterial({
            color,
            transparent: true,
            opacity,
            side: THREE.DoubleSide,
          }),
        );
      }

      NODE_LAYOUT.forEach((n, i) => {
        // ---- flat "engraved" tile shown at rest (outer + inner square) ----
        const tile = new THREE.Group();
        tile.position.set(n.x, n.y, 0.004);

        const outerFrame = frameMesh(
          n.size / 2,
          Math.max(0.02, n.size * 0.045),
          0xcbd5e1,
          0.7,
        );
        tile.add(outerFrame);

        const innerHalf = n.size * 0.18;
        const innerFill = new THREE.Mesh(
          new THREE.PlaneGeometry(innerHalf * 2, innerHalf * 2),
          new THREE.MeshBasicMaterial({
            color: 0x0b1220,
            transparent: true,
            opacity: 0.6,
          }),
        );
        innerFill.position.z = -0.001;
        tile.add(innerFill);
        tile.add(
          frameMesh(innerHalf, Math.max(0.015, n.size * 0.04), 0x94a3b8, 0.85),
        );
        root.add(tile);

        // ---- the cube that rises out of the square on hover ----
        const g = new THREE.Group();
        g.position.set(n.x, n.y, n.size * 0.5);

        const outerGeo = new THREE.BoxGeometry(n.size, n.size, n.size);
        const outerMat = new THREE.MeshStandardMaterial({
          color: 0x475569,
          transparent: true,
          opacity: 0,
          roughness: 0.5,
          metalness: 0.2,
        });
        const outer = new THREE.Mesh(outerGeo, outerMat);
        outer.castShadow = true;
        outer.receiveShadow = true;
        g.add(outer);

        const wireMat = new THREE.LineBasicMaterial({
          color: 0xf59e0b,
          transparent: true,
          opacity: 0,
        });
        g.add(new THREE.LineSegments(new THREE.EdgesGeometry(outerGeo), wireMat));

        const innerMat = new THREE.MeshStandardMaterial({
          color: 0xf59e0b,
          emissive: 0xf59e0b,
          emissiveIntensity: 0.35,
          roughness: 0.3,
          metalness: 0.4,
          transparent: true,
          opacity: 0,
        });
        const inner = new THREE.Mesh(
          new THREE.BoxGeometry(n.size * 0.5, n.size * 0.5, n.size * 0.5),
          innerMat,
        );
        inner.castShadow = true;
        g.add(inner);

        root.add(g);
        nodes.push({
          x: n.x,
          y: n.y,
          size: n.size,
          group: g,
          outerMat,
          wireMat,
          innerMat,
          inner,
          liftZ: 0.7 + (i % 3) * 0.18,
        });
      });

      // edges + travel dots between cube centers
      const edgeLines: THREE.Line[] = [];
      const edgeMats: THREE.LineDashedMaterial[] = [];
      const dots: THREE.Mesh[] = [];
      const dotMats: THREE.MeshBasicMaterial[] = [];
      for (const [a, b] of EDGES) {
        const mat = new THREE.LineDashedMaterial({
          color: 0xf59e0b,
          dashSize: 0.12,
          gapSize: 0.08,
          transparent: true,
          opacity: 0.18,
        });
        edgeMats.push(mat);
        const line = new THREE.Line(
          new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(),
            new THREE.Vector3(),
          ]),
          mat,
        );
        line.computeLineDistances();
        root.add(line);
        edgeLines.push(line);

        const dotMat = new THREE.MeshBasicMaterial({
          color: 0xfcd34d,
          transparent: true,
          opacity: 0,
        });
        dotMats.push(dotMat);
        const dot = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 12), dotMat);
        dot.userData.t = Math.random();
        root.add(dot);
        dots.push(dot);
      }

      // lighting
      scene.add(new THREE.AmbientLight(0xffffff, 0.5));
      scene.add(new THREE.HemisphereLight(0xbfdbfe, 0x0b1120, 0.4));

      const key = new THREE.DirectionalLight(0xfff0c4, 2.2);
      key.position.set(2.5, 4, 5);
      key.castShadow = true;
      key.shadow.mapSize.set(1536, 1536);
      key.shadow.camera.near = 0.5;
      key.shadow.camera.far = 24;
      key.shadow.camera.left = -7;
      key.shadow.camera.right = 7;
      key.shadow.camera.top = 7;
      key.shadow.camera.bottom = -7;
      key.shadow.bias = -0.0006;
      key.shadow.radius = 5;
      root.add(key);
      root.add(key.target);
      key.target.position.set(0, 0, 0);

      // interaction: hover gates the elevation; the cursor (projected onto the
      // ground plane) drives per-cube pull/lift/lean — same model as the card,
      // which is what makes the raise + settle-back feel smooth.
      const raycaster = new THREE.Raycaster();
      const ndc = new THREE.Vector2();
      const groundPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const cursorWorld = new THREE.Vector3();
      const cursorTarget = new THREE.Vector3();
      let hover = 0;
      let hoverTarget = 0;
      const tiltTarget = { x: BASE_TILT_X, y: BASE_TILT_Y };
      const tilt = { x: BASE_TILT_X, y: BASE_TILT_Y };
      const onEnter = () => (hoverTarget = 1);
      const onLeave = () => {
        hoverTarget = 0;
        tiltTarget.x = BASE_TILT_X;
        tiltTarget.y = BASE_TILT_Y;
      };
      const onMove = (e: MouseEvent) => {
        const r = host.getBoundingClientRect();
        ndc.x = ((e.clientX - r.left) / r.width) * 2 - 1;
        ndc.y = -(((e.clientY - r.top) / r.height) * 2 - 1);
        tiltTarget.x = BASE_TILT_X + ndc.y * 0.1;
        tiltTarget.y = BASE_TILT_Y + ndc.x * 0.18;
        // unproject the cursor onto z=0 and convert to root-local node space
        raycaster.setFromCamera(ndc, camera);
        const hit = new THREE.Vector3();
        if (raycaster.ray.intersectPlane(groundPlane, hit)) {
          root.updateMatrixWorld();
          cursorTarget.copy(root.worldToLocal(hit.clone()));
        }
      };
      host.addEventListener('mouseenter', onEnter);
      host.addEventListener('mouseleave', onLeave);
      host.addEventListener('mousemove', onMove);

      const clock = new THREE.Clock();
      let rafId = 0;

      const tick = () => {
        if (!mounted) return;
        const dt = Math.min(0.05, clock.getDelta());
        const t = clock.elapsedTime;

        // ease hover + tilt, and glide the cursor toward its target — every
        // motion is a critically-damped lerp so nothing snaps.
        hover += (hoverTarget - hover) * Math.min(1, dt * 5);
        tilt.x += (tiltTarget.x - tilt.x) * Math.min(1, dt * 5);
        tilt.y += (tiltTarget.y - tilt.y) * Math.min(1, dt * 5);
        root.rotation.x = tilt.x;
        root.rotation.y = tilt.y;
        cursorWorld.lerp(cursorTarget, Math.min(1, dt * 10));

        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          const restZ = n.size * 0.5;

          // distance from cursor → cubes near the pointer pop higher and drift
          // toward it; all cubes share a base lift so the whole graph rises.
          const dx = cursorWorld.x - n.x;
          const dy = cursorWorld.y - n.y;
          const dist = Math.hypot(dx, dy);
          const pull = Math.max(0, 1 - dist / 2.8) ** 2;

          const bob = Math.sin(t * 1.2 + i) * 0.05 * hover;
          const targetZ = restZ + hover * (n.liftZ + pull * 0.7) + bob;
          const drag = 0.1 * hover * pull;
          const targetX = n.x + dx * drag;
          const targetY = n.y + dy * drag;

          const k = Math.min(1, dt * 6);
          n.group.position.x += (targetX - n.group.position.x) * k;
          n.group.position.y += (targetY - n.group.position.y) * k;
          n.group.position.z += (targetZ - n.group.position.z) * k;

          // lean toward the cursor (eased) instead of a constant spin
          const leanX = pull * hover * dy * 0.22;
          const leanY = pull * hover * -dx * 0.22;
          n.group.rotation.x += (leanX - n.group.rotation.x) * Math.min(1, dt * 4);
          n.group.rotation.y += (leanY - n.group.rotation.y) * Math.min(1, dt * 4);

          n.outerMat.opacity = 0.5 * hover;
          n.wireMat.opacity = 0.9 * hover;
          n.innerMat.opacity = hover;
          n.inner.scale.setScalar(1 + Math.sin(t * 2 + i) * 0.05 * hover);
          // hide the cube entirely at rest so it neither renders nor casts a
          // shadow — only the flat square footprint shows when not hovering.
          n.group.visible = hover > 0.01;
        }

        for (let i = 0; i < EDGES.length; i++) {
          const [a, b] = EDGES[i];
          const pa = nodes[a].group.position;
          const pb = nodes[b].group.position;
          const pos = edgeLines[i].geometry.attributes.position;
          pos.setXYZ(0, pa.x, pa.y, pa.z);
          pos.setXYZ(1, pb.x, pb.y, pb.z);
          pos.needsUpdate = true;
          edgeLines[i].computeLineDistances();
          edgeMats[i].opacity = 0.18 + 0.55 * hover;

          const dot = dots[i];
          dot.userData.t = (dot.userData.t + dt * 0.35) % 1;
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
        host.removeEventListener('mouseenter', onEnter);
        host.removeEventListener('mouseleave', onLeave);
        host.removeEventListener('mousemove', onMove);
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
      ref={hostRef}
      className="relative overflow-hidden"
      style={{ background: PALETTE.bg, minHeight: 'min(78vh, 720px)' }}
    >
      {/* full-bleed animation layer (behind content, never clipped) */}
      <div
        ref={stageRef}
        className="pointer-events-none absolute inset-0 z-0"
      />

      {/* content layer — always in front of the animation */}
      <div className="relative z-10 flex min-h-[inherit] flex-col justify-end px-5 pb-12 pt-16 md:justify-center md:px-14 md:pl-20 lg:pl-32">
        <div className="flex max-w-[560px] flex-col items-start text-left">
          <h1
            className="text-[44px] tracking-[-1.5px] sm:text-[60px] md:text-[80px] md:tracking-[-3px]"
            style={{
              fontFamily: FONTS.display,
              fontWeight: 700,
              lineHeight: 0.98,
              margin: 0,
              color: PALETTE.text,
            }}
          >
            AI{' '}
            <span style={{ color: PALETTE.pink, fontFamily: FONTS.body }}>♥</span>{' '}
            Monorepos
          </h1>
          <p
            className="mt-6 text-base md:text-[20px]"
            style={{
              fontFamily: FONTS.body,
              color: PALETTE.text,
              maxWidth: 520,
              lineHeight: 1.5,
              opacity: 0.9,
            }}
          >
            A half-day virtual conference for engineers working at the
            intersection of monorepos and agentic AI.
          </p>
          <div className="mt-8 flex w-full max-w-[360px] flex-col items-stretch gap-4 sm:w-auto sm:max-w-none sm:flex-row sm:items-center">
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
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              SEE AGENDA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
