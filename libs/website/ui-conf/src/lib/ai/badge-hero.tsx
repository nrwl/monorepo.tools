import type * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { PALETTE, FONTS, CONF, Speaker } from './data';

const SLOGAN = 'WHERE MONOREPOS MEET AGENTIC AI';

// Vertical badge proportions (width / height).
const ASPECT = 0.64;
const CARD_W = 3.4;
const CARD_H = CARD_W / ASPECT;

// Node footprints in card-space units. The graph fills the upper ~⅔ of the
// badge so the cubes rise out of the engraved squares drawn there, leaving the
// lower third for the attendee photo + name + ticket-type banner.
const NODE_LAYOUT = [
  { x: -1.0, y: 0.95, size: 0.5, id: 'monoA' },
  { x: 1.0, y: 0.95, size: 0.5, id: 'monoB' },
  { x: 0.0, y: 1.45, size: 0.56, id: 'shared' },
  { x: -0.52, y: 0.35, size: 0.34, id: 'libA' },
  { x: 0.56, y: 0.35, size: 0.34, id: 'libB' },
  { x: -1.0, y: -0.35, size: 0.42, id: 'mobile' },
  { x: 1.0, y: -0.35, size: 0.42, id: 'api' },
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

// card-space (x, y) → canvas pixel
function toPx(x: number, y: number, W: number, H: number) {
  return { px: W * (0.5 + x / CARD_W), py: H * (0.5 - y / CARD_H) };
}

type BadgeContent = {
  name: string;
  role: string;
  bannerLabel: string;
  image?: string;
};

function loadImage(src: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

async function buildBadgeTexture(
  THREE: typeof import('three'),
  content: BadgeContent,
) {
  await document.fonts.ready;
  const avatarImg = content.image ? await loadImage(content.image) : null;

  const W = 860;
  const H = Math.round(W / ASPECT);
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const ctx = c.getContext('2d')!;

  const RADIUS = 46;
  roundRect(ctx, 0, 0, W, H, RADIUS);
  ctx.clip();

  // dark badge background
  ctx.fillStyle = '#15170f';
  ctx.fillRect(0, 0, W, H);

  // ---- top row: slogan (left) + ONLINE pill (right) ----
  ctx.fillStyle = '#a3afa0';
  ctx.font = '500 24px "JetBrains Mono", monospace';
  ctx.fillText(SLOGAN, 50, 92);

  const pillX = W - 50;
  const pillCY = 82;
  const pillH = 46;
  const pillLabel = 'ONLINE';
  ctx.font = '600 23px "JetBrains Mono", monospace';
  const pillW = 40 + ctx.measureText(pillLabel).width + 22;
  roundRect(ctx, pillX - pillW, pillCY - pillH / 2, pillW, pillH, pillH / 2);
  ctx.fillStyle = 'rgba(0,0,0,0.6)';
  ctx.fill();
  ctx.strokeStyle = '#2a2d27';
  ctx.lineWidth = 1.2;
  ctx.stroke();
  ctx.fillStyle = '#22c55e';
  ctx.beginPath();
  ctx.arc(pillX - pillW + 22, pillCY, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#d1d8d1';
  ctx.fillText(pillLabel, pillX - pillW + 40, pillCY + 8);

  // ---- animation band: dashed spokes + engraved cube footprints ----
  const nodePx = NODE_LAYOUT.map((n) => {
    const { px, py } = toPx(n.x, n.y, W, H);
    return { px, py, sizePx: (n.size / CARD_W) * W };
  });

  ctx.save();
  ctx.strokeStyle = 'rgba(142,157,141,0.16)';
  ctx.lineWidth = 1.1;
  ctx.setLineDash([7, 6]);
  for (const [a, b] of EDGES) {
    const pa = nodePx[a];
    const pb = nodePx[b];
    const dx = pb.px - pa.px;
    const dy = pb.py - pa.py;
    const len = Math.hypot(dx, dy);
    const ux = dx / len;
    const uy = dy / len;
    ctx.beginPath();
    ctx.moveTo(pa.px + ux * pa.sizePx * 0.5, pa.py + uy * pa.sizePx * 0.5);
    ctx.lineTo(pb.px - ux * pb.sizePx * 0.5, pb.py - uy * pb.sizePx * 0.5);
    ctx.stroke();
  }
  ctx.restore();

  for (const np of nodePx) {
    const half = np.sizePx / 2;
    ctx.strokeStyle = 'rgba(142,157,141,0.42)';
    ctx.lineWidth = 1.2;
    ctx.strokeRect(np.px - half, np.py - half, np.sizePx, np.sizePx);

    ctx.fillStyle = 'rgba(255,255,255,0.015)';
    ctx.fillRect(np.px - half, np.py - half, np.sizePx, np.sizePx);

    const innerSize = np.sizePx * 0.34;
    const ih = innerSize / 2;
    ctx.fillStyle = 'rgba(0,0,0,0.35)';
    ctx.fillRect(np.px - ih, np.py - ih, innerSize, innerSize);
    ctx.strokeStyle = 'rgba(80,90,78,0.55)';
    ctx.lineWidth = 1;
    ctx.strokeRect(np.px - ih, np.py - ih, innerSize, innerSize);
  }

  // ---- attendee block: vertically centered in the band between the divider
  // and the banner so it neither hugs the line nor leaves a gap above the bar.
  const dividerY = Math.round(H * 0.665);
  const bannerTop = Math.round(H * 0.865);
  const blockCY = (dividerY + bannerTop) / 2;

  // thin divider above the name
  ctx.strokeStyle = 'rgba(142,157,141,0.18)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(50, dividerY);
  ctx.lineTo(W - 50, dividerY);
  ctx.stroke();

  // rounded avatar to the left of the name/role — speaker photo if provided,
  // otherwise a generic silhouette placeholder.
  const avR = 76;
  const avCX = 50 + avR;
  const avCY = Math.round(blockCY);
  ctx.save();
  ctx.beginPath();
  ctx.arc(avCX, avCY, avR, 0, Math.PI * 2);
  ctx.clip();
  if (avatarImg) {
    // cover-fit the photo into the circle
    const s = Math.max((avR * 2) / avatarImg.width, (avR * 2) / avatarImg.height);
    const dw = avatarImg.width * s;
    const dh = avatarImg.height * s;
    ctx.drawImage(avatarImg, avCX - dw / 2, avCY - dh / 2, dw, dh);
  } else {
    ctx.fillStyle = '#23261d';
    ctx.fillRect(avCX - avR, avCY - avR, avR * 2, avR * 2);
    ctx.fillStyle = '#5a6356';
    // shoulders
    ctx.beginPath();
    ctx.arc(avCX, avCY + avR * 0.62, avR * 0.66, Math.PI, Math.PI * 2);
    ctx.fill();
    // head
    ctx.beginPath();
    ctx.arc(avCX, avCY - avR * 0.22, avR * 0.36, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
  ctx.strokeStyle = '#3a3f34';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(avCX, avCY, avR, 0, Math.PI * 2);
  ctx.stroke();

  // name auto-shrinks if it would collide with the right edge
  const textX = avCX + avR + 30;
  const maxNameW = W - 50 - textX;
  let nameSize = 78;
  ctx.font = `700 ${nameSize}px "Space Grotesk", "Inter", sans-serif`;
  while (ctx.measureText(content.name).width > maxNameW && nameSize > 40) {
    nameSize -= 2;
    ctx.font = `700 ${nameSize}px "Space Grotesk", "Inter", sans-serif`;
  }

  // center the name+role group on the avatar center (blockCY) using real glyph
  // metrics, so it stays aligned regardless of how far the name shrank.
  const roleSize = 30;
  const nameFont = `700 ${nameSize}px "Space Grotesk", "Inter", sans-serif`;
  const roleFont = `500 ${roleSize}px "JetBrains Mono", monospace`;
  const GAP = 46; // name baseline → role baseline
  ctx.font = nameFont;
  const nameAsc = ctx.measureText(content.name).actualBoundingBoxAscent;
  ctx.font = roleFont;
  const roleDesc = ctx.measureText(content.role).actualBoundingBoxDescent;
  const groupH = nameAsc + GAP + roleDesc;
  const nameBaseline = Math.round(blockCY - groupH / 2 + nameAsc);

  ctx.fillStyle = '#f8fafc';
  ctx.font = nameFont;
  ctx.fillText(content.name, textX, nameBaseline);

  ctx.fillStyle = '#fbbf24';
  ctx.font = roleFont;
  ctx.fillText(content.role, textX, nameBaseline + GAP);

  // ---- bottom banner ----
  ctx.fillStyle = '#fbbf24';
  ctx.fillRect(0, bannerTop, W, H - bannerTop);
  ctx.fillStyle = '#15170f';
  ctx.font = '700 30px "JetBrains Mono", monospace';
  ctx.letterSpacing = '6px';
  const blw = ctx.measureText(content.bannerLabel).width;
  ctx.fillText(
    content.bannerLabel,
    (W - blw) / 2,
    bannerTop + (H - bannerTop) / 2 + 11,
  );
  ctx.letterSpacing = '0px';

  // rounded badge border
  ctx.strokeStyle = '#3a3f34';
  ctx.lineWidth = 2;
  roundRect(ctx, 1, 1, W - 2, H - 2, RADIUS - 4);
  ctx.stroke();

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

function BadgeStage(content: BadgeContent) {
  const stageRef = useRef<HTMLDivElement>(null);
  const { name, role, bannerLabel, image } = content;

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    let mounted = true;
    let cleanupFn: (() => void) | null = null;

    (async () => {
      const THREE = await import('three');
      if (!mounted) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(34, ASPECT, 0.1, 100);
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
      canvas.style.cursor = 'pointer';
      canvas.style.filter =
        'drop-shadow(0 45px 55px rgba(0,0,0,0.65)) drop-shadow(0 15px 25px rgba(0,0,0,0.45))';
      stage.appendChild(canvas);

      function resize() {
        const r = stage.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) return;
        renderer.setSize(r.width, r.height, false);
        const aspect = r.width / r.height;
        camera.aspect = aspect;
        const vFOV = (camera.fov * Math.PI) / 180;
        const halfH = CARD_H / 2 + 0.25;
        const halfW = CARD_W / 2 + 0.3;
        const distH = halfH / Math.tan(vFOV / 2);
        const distW = halfW / (Math.tan(vFOV / 2) * aspect);
        camera.position.z = Math.max(distH, distW);
        camera.updateProjectionMatrix();
      }
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(stage);

      const root = new THREE.Group();
      scene.add(root);

      // badge plane
      const cardMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.85,
        metalness: 0.05,
        emissive: 0xffffff,
        emissiveIntensity: 0.55,
        alphaTest: 0.5,
      });
      const cardMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(CARD_W, CARD_H, 48, 64),
        cardMat,
      );
      cardMesh.receiveShadow = true;
      root.add(cardMesh);

      buildBadgeTexture(THREE, { name, role, bannerLabel, image }).then((tex) => {
        if (!mounted) {
          tex.dispose();
          return;
        }
        cardMat.map = tex;
        cardMat.emissiveMap = tex;
        cardMat.needsUpdate = true;
      });

      // cube nodes (rise toward the camera on hover)
      const nodes = NODE_LAYOUT.map((n) => ({
        ...n,
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

      // edges + travel dots
      const edgeLines: THREE.Line[] = [];
      const edgeLineMats: THREE.LineDashedMaterial[] = [];
      const travelDots: THREE.Mesh[] = [];
      const dotMats: THREE.MeshBasicMaterial[] = [];

      for (const [a, b] of EDGES) {
        const pa = cubeMeshes[a].position.clone();
        const pb = cubeMeshes[b].position.clone();
        const lineMat = new THREE.LineDashedMaterial({
          color: 0xfbbf24,
          dashSize: 0.1,
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

      // lighting
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

      // interaction — gentle rest tilt gives the badge a hanging-card feel
      const BASE_TILT_X = 0.04;
      const BASE_TILT_Y = -0.1;
      const raycaster = new THREE.Raycaster();
      const ndc = new THREE.Vector2();
      const cardPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const cursorWorld = new THREE.Vector3(0, 0, 0);
      const cursorTarget = new THREE.Vector3(0, 0, 0);
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
        const r = stage.getBoundingClientRect();
        ndc.x = ((e.clientX - r.left) / r.width) * 2 - 1;
        ndc.y = -(((e.clientY - r.top) / r.height) * 2 - 1);
        tiltTarget.x = BASE_TILT_X + ndc.y * 0.07;
        tiltTarget.y = BASE_TILT_Y + ndc.x * 0.16;
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
          const targetZ = n.zBase + hover * (0.1 + pull * 0.85);
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
          cube.visible = hover > 0.01;
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
  }, [name, role, bannerLabel, image]);

  return (
    <div
      ref={stageRef}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 'min(440px, 86vw)',
        aspectRatio: String(ASPECT),
      }}
    />
  );
}

export interface BadgeHeroProps {
  /** Attendee name shown on the badge (ignored when `speaker` is set). */
  name?: string;
  /** Attendee role shown under the name (ignored when `speaker` is set). */
  role?: string;
  /** When provided, the badge shows the speaker's name/role/photo and a
   * "SPEAKER" banner instead of the default attendee placeholder. */
  speaker?: Speaker;
}

export function BadgeHero({ name, role, speaker }: BadgeHeroProps = {}) {
  const content: BadgeContent = speaker
    ? {
        name: speaker.name,
        role: speaker.role,
        bannerLabel: 'SPEAKER',
        image: speaker.image,
      }
    : {
        name: name ?? 'Your Name',
        role: role ?? 'AI Engineer',
        bannerLabel: 'ATTENDEE',
      };

  return (
    <div
      style={{ background: PALETTE.bg }}
      className="grid h-full grid-cols-1 items-center gap-12 px-5 py-12 md:grid-cols-2 md:gap-10 md:px-14 md:py-10 md:pl-28 lg:pl-48"
    >
      {/* left: title + subtitle + CTAs */}
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

      {/* right: vertical badge — left-aligned on desktop so it sits closer to
          the title instead of being centered in its column */}
      <div className="flex w-full justify-center md:justify-start">
        <BadgeStage {...content} />
      </div>
    </div>
  );
}

export default BadgeHero;
