import { useEffect, useRef } from "react";

/**
 * Animated topographic contour lines. A slowly evolving 3D simplex
 * noise field is traced with marching squares at a set of iso levels;
 * the pointer adds a soft hill, so the lines ring around the cursor.
 * Every fourth line is an "index contour", drawn a little brighter,
 * like on a real survey map.
 */

// ---- 3D simplex noise (after Stefan Gustavson) ----------------------
const GRAD = [
  [1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0],
  [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1],
  [0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1],
];
const PERM = new Uint8Array(512);
{
  const p = Array.from({ length: 256 }, (_, i) => i);
  let seed = 1337;
  for (let i = 255; i > 0; i--) {
    seed = (seed * 16807) % 2147483647;
    const j = seed % (i + 1);
    [p[i], p[j]] = [p[j], p[i]];
  }
  for (let i = 0; i < 512; i++) PERM[i] = p[i & 255];
}
const F3 = 1 / 3;
const G3 = 1 / 6;

function noise3(x, y, z) {
  const s = (x + y + z) * F3;
  const i = Math.floor(x + s);
  const j = Math.floor(y + s);
  const k = Math.floor(z + s);
  const t = (i + j + k) * G3;
  const x0 = x - (i - t);
  const y0 = y - (j - t);
  const z0 = z - (k - t);
  let i1, j1, k1, i2, j2, k2;
  if (x0 >= y0) {
    if (y0 >= z0) [i1, j1, k1, i2, j2, k2] = [1, 0, 0, 1, 1, 0];
    else if (x0 >= z0) [i1, j1, k1, i2, j2, k2] = [1, 0, 0, 1, 0, 1];
    else [i1, j1, k1, i2, j2, k2] = [0, 0, 1, 1, 0, 1];
  } else if (y0 < z0) [i1, j1, k1, i2, j2, k2] = [0, 0, 1, 0, 1, 1];
  else if (x0 < z0) [i1, j1, k1, i2, j2, k2] = [0, 1, 0, 0, 1, 1];
  else [i1, j1, k1, i2, j2, k2] = [0, 1, 0, 1, 1, 0];

  const corners = [
    [x0, y0, z0, 0, 0, 0],
    [x0 - i1 + G3, y0 - j1 + G3, z0 - k1 + G3, i1, j1, k1],
    [x0 - i2 + 2 * G3, y0 - j2 + 2 * G3, z0 - k2 + 2 * G3, i2, j2, k2],
    [x0 - 1 + 3 * G3, y0 - 1 + 3 * G3, z0 - 1 + 3 * G3, 1, 1, 1],
  ];
  const ii = i & 255;
  const jj = j & 255;
  const kk = k & 255;
  let n = 0;
  for (const [cx, cy, cz, di, dj, dk] of corners) {
    let tt = 0.6 - cx * cx - cy * cy - cz * cz;
    if (tt > 0) {
      const g = GRAD[PERM[ii + di + PERM[jj + dj + PERM[kk + dk]]] % 12];
      tt *= tt;
      n += tt * tt * (g[0] * cx + g[1] * cy + g[2] * cz);
    }
  }
  return 32 * n;
}

// ---- marching squares edge pairs per case ---------------------------
// edges: 0 top, 1 right, 2 bottom, 3 left
const CASES = [
  [], [[3, 2]], [[2, 1]], [[3, 1]], [[0, 1]], [[0, 1], [3, 2]], [[0, 2]], [[0, 3]],
  [[0, 3]], [[0, 2]], [[0, 3], [2, 1]], [[0, 1]], [[3, 1]], [[2, 1]], [[3, 2]], [],
];

export default function Contours({ className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const host = canvas.parentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let W = 0;
    let H = 0;
    let S = 18; // grid cell in px
    let cols = 0;
    let rows = 0;
    let field = new Float32Array(0);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvas.getBoundingClientRect();
      W = r.width;
      H = r.height;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      S = W < 768 ? 16 : 18;
      cols = Math.ceil(W / S) + 1;
      rows = Math.ceil(H / S) + 1;
      field = new Float32Array(cols * rows);
    };

    // pointer hill, eased so the rings drift rather than snap
    const target = { x: -9999, y: -9999, a: 0 };
    const hill = { x: -9999, y: -9999, a: 0 };

    const LEVELS = [];
    for (let v = -0.95; v <= 1.6; v += 0.13) LEVELS.push(v);

    const draw = (t) => {
      const z = t * 0.000045;
      const fx = 0.0021;
      const R2 = 2 * 170 * 170;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * S;
          const y = r * S;
          const dx = x - hill.x;
          const dy = y - hill.y;
          field[r * cols + c] =
            noise3(x * fx, y * fx, z) + hill.a * 0.85 * Math.exp(-(dx * dx + dy * dy) / R2);
        }
      }

      ctx.clearRect(0, 0, W, H);
      ctx.lineWidth = 1;
      ctx.lineJoin = "round";

      LEVELS.forEach((iso, li) => {
        ctx.beginPath();
        for (let r = 0; r < rows - 1; r++) {
          for (let c = 0; c < cols - 1; c++) {
            const a = field[r * cols + c];
            const b = field[r * cols + c + 1];
            const cc = field[(r + 1) * cols + c + 1];
            const d = field[(r + 1) * cols + c];
            const idx = (a > iso ? 8 : 0) | (b > iso ? 4 : 0) | (cc > iso ? 2 : 0) | (d > iso ? 1 : 0);
            if (idx === 0 || idx === 15) continue;
            const x0 = c * S;
            const y0 = r * S;
            const pt = (e) => {
              switch (e) {
                case 0: return [x0 + (S * (iso - a)) / (b - a), y0];
                case 1: return [x0 + S, y0 + (S * (iso - b)) / (cc - b)];
                case 2: return [x0 + (S * (iso - d)) / (cc - d), y0 + S];
                default: return [x0, y0 + (S * (iso - a)) / (d - a)];
              }
            };
            for (const [e1, e2] of CASES[idx]) {
              const p1 = pt(e1);
              const p2 = pt(e2);
              ctx.moveTo(p1[0], p1[1]);
              ctx.lineTo(p2[0], p2[1]);
            }
          }
        }
        ctx.strokeStyle = li % 4 === 0 ? "rgba(255,255,255,0.13)" : "rgba(255,255,255,0.055)";
        ctx.stroke();
      });
    };

    let raf = 0;
    let running = false;
    const loop = (now) => {
      hill.x += (target.x - hill.x) * 0.06;
      hill.y += (target.y - hill.y) * 0.06;
      hill.a += (target.a - hill.a) * 0.04;
      draw(now);
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (running || reduce) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      target.x = e.clientX - r.left;
      target.y = e.clientY - r.top;
      if (hill.a < 0.01) {
        hill.x = target.x;
        hill.y = target.y;
      }
      target.a = 1;
    };
    const onLeave = () => {
      target.a = 0;
    };

    resize();
    draw(performance.now());
    const ro = new ResizeObserver(() => {
      resize();
      draw(performance.now());
    });
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()));
    io.observe(canvas);
    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVis);
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 w-full h-full ${className}`}
    />
  );
}
