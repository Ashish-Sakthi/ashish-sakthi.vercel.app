import { useEffect, useRef } from "react";

/**
 * A Sudarshana chakra — the spinning weapon from Unleash The Avatar —
 * built as a point cloud and rasterised to ASCII every frame:
 * rotate → perspective-project → z-buffer per character cell →
 * Lambert shade → map brightness to a glyph ramp.
 *
 * Pointer position tilts it; a click throws extra spin that decays.
 */

const RAMP = " .':-=+*#%@";
const TAU = Math.PI * 2;

function buildChakra() {
  const p = [];
  const add = (x, y, z, nx, ny, nz) => p.push(x, y, z, nx, ny, nz);

  // torus in the XY plane, axis = Z
  const torus = (R, r, nu, nv) => {
    for (let i = 0; i < nu; i++) {
      const u = (i / nu) * TAU;
      const cu = Math.cos(u);
      const su = Math.sin(u);
      for (let j = 0; j < nv; j++) {
        const v = (j / nv) * TAU;
        const cv = Math.cos(v);
        const sv = Math.sin(v);
        add((R + r * cv) * cu, (R + r * cv) * su, r * sv, cv * cu, cv * su, sv);
      }
    }
  };

  torus(1.0, 0.085, 320, 18); // outer rim
  torus(0.64, 0.045, 220, 12); // inner rim
  torus(0.2, 0.065, 90, 14); // hub

  // hub caps
  for (let r = 0; r < 0.2; r += 0.012) {
    const n = Math.max(6, Math.floor(r * 220));
    for (let i = 0; i < n; i++) {
      const a = (i / n) * TAU;
      add(r * Math.cos(a), r * Math.sin(a), 0.05, 0, 0, 1);
      add(r * Math.cos(a), r * Math.sin(a), -0.05, 0, 0, -1);
    }
  }

  // spokes between hub and inner rim
  const SPOKES = 12;
  for (let s = 0; s < SPOKES; s++) {
    const a = (s / SPOKES) * TAU;
    const dx = Math.cos(a);
    const dy = Math.sin(a);
    const px = -dy; // perpendicular, in plane
    const py = dx;
    for (let t = 0.26; t < 0.6; t += 0.008) {
      for (let k = 0; k < 10; k++) {
        const v = (k / 10) * TAU;
        const cv = Math.cos(v);
        const sv = Math.sin(v);
        const rr = 0.022;
        add(dx * t + px * rr * cv, dy * t + py * rr * cv, rr * sv, px * cv, py * cv, sv);
      }
    }
  }

  // swept blades around the rim
  const BLADES = 18;
  const H = 0.022;
  for (let b = 0; b < BLADES; b++) {
    const a0 = (b / BLADES) * TAU;
    const w = (TAU / BLADES) * 0.78;
    const pt = (r, a) => [r * Math.cos(a), r * Math.sin(a)];
    const B1 = pt(1.06, a0);
    const B2 = pt(1.06, a0 + w);
    const T = pt(1.46, a0 + w * 1.35);
    const STEPS = 26;
    for (let i = 0; i <= STEPS; i++) {
      for (let j = 0; j <= STEPS - i; j++) {
        const s = i / STEPS;
        const t = j / STEPS;
        const q = 1 - s - t;
        const x = B1[0] * q + B2[0] * s + T[0] * t;
        const y = B1[1] * q + B2[1] * s + T[1] * t;
        add(x, y, H, 0, 0, 1);
        add(x, y, -H, 0, 0, -1);
      }
    }
    // leading edge, so blades read when seen edge-on
    for (let i = 0; i <= 40; i++) {
      const t = i / 40;
      const x = B2[0] + (T[0] - B2[0]) * t;
      const y = B2[1] + (T[1] - B2[1]) * t;
      const ex = T[1] - B2[1];
      const ey = -(T[0] - B2[0]);
      const el = Math.hypot(ex, ey);
      for (let k = -1; k <= 1; k++) add(x, y, k * H, ex / el, ey / el, 0);
    }
  }

  return new Float32Array(p);
}

export default function AsciiChakra({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const pts = buildChakra();
    const N = pts.length / 6;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let W = 0;
    let Hh = 0;
    let cols = 0;
    let rows = 0;
    let cw = 7;
    let ch = 12;
    let fs = 11;
    let zbuf = new Float32Array(0);
    let lbuf = new Float32Array(0);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvas.getBoundingClientRect();
      W = r.width;
      Hh = r.height;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(Hh * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      fs = W < 640 ? 9 : 11;
      ctx.font = `${fs}px "Geist Mono", ui-monospace, monospace`;
      cw = ctx.measureText("M").width;
      ch = Math.round(fs * 1.12);
      cols = Math.ceil(W / cw);
      rows = Math.ceil(Hh / ch);
      zbuf = new Float32Array(cols * rows);
      lbuf = new Float32Array(cols * rows);
    };

    // light from upper-left, slightly in front
    const L = [-0.45, 0.55, 0.7];
    const ll = Math.hypot(...L);
    L[0] /= ll;
    L[1] /= ll;
    L[2] /= ll;

    const state = {
      spin: 0,
      spinVel: 0.9,
      tiltX: -0.95,
      tiltY: 0.25,
      tx: -0.95,
      ty: 0.25,
    };

    const draw = (time) => {
      const t = time / 1000;
      const mobile = W < 768;
      const cx = mobile ? W * 0.5 : W * 0.66;
      const cy = mobile ? Hh * 0.36 : Hh * 0.46;
      const scale = Math.min(W, Hh) * (mobile ? 0.3 : 0.27);
      const D = 4.2;

      // rotation: spin about own axis (Z), then tilt X, then Y
      const wob = reduce ? 0 : Math.sin(t * 0.5) * 0.08;
      const az = state.spin;
      const ax = state.tiltX + wob;
      const ay = state.tiltY + Math.cos(t * 0.37) * (reduce ? 0 : 0.06);
      const cz = Math.cos(az), sz = Math.sin(az);
      const cxr = Math.cos(ax), sxr = Math.sin(ax);
      const cyr = Math.cos(ay), syr = Math.sin(ay);

      zbuf.fill(-1e9);
      lbuf.fill(-1);

      for (let i = 0; i < N; i++) {
        const o = i * 6;
        // Rz
        let x = pts[o] * cz - pts[o + 1] * sz;
        let y = pts[o] * sz + pts[o + 1] * cz;
        let z = pts[o + 2];
        let nx = pts[o + 3] * cz - pts[o + 4] * sz;
        let ny = pts[o + 3] * sz + pts[o + 4] * cz;
        let nz = pts[o + 5];
        // Rx
        let y2 = y * cxr - z * sxr;
        let z2 = y * sxr + z * cxr;
        y = y2;
        z = z2;
        y2 = ny * cxr - nz * sxr;
        z2 = ny * sxr + nz * cxr;
        ny = y2;
        nz = z2;
        // Ry
        let x2 = x * cyr + z * syr;
        z2 = -x * syr + z * cyr;
        x = x2;
        z = z2;
        x2 = nx * cyr + nz * syr;
        z2 = -nx * syr + nz * cyr;
        nx = x2;
        nz = z2;

        const f = D / (D - z);
        const col = ((cx + x * f * scale) / cw) | 0;
        const row = ((cy - y * f * scale) / ch) | 0;
        if (col < 0 || row < 0 || col >= cols || row >= rows) continue;
        const k = row * cols + col;
        if (z > zbuf[k]) {
          zbuf[k] = z;
          // two-sided Lambert + ambient, with depth falloff
          const d = Math.abs(nx * L[0] + ny * L[1] + nz * L[2]);
          lbuf[k] = Math.min(1, 0.1 + d * 0.85 + z * 0.06);
        }
      }

      ctx.clearRect(0, 0, W, Hh);
      ctx.textBaseline = "top";
      const last = RAMP.length - 1;
      let dim = "";
      let bright = "";
      for (let r = 0; r < rows; r++) {
        dim = "";
        bright = "";
        let any = false;
        for (let c = 0; c < cols; c++) {
          const l = lbuf[r * cols + c];
          if (l < 0) {
            dim += " ";
            bright += " ";
            continue;
          }
          any = true;
          const g = RAMP[Math.max(1, Math.round(l * last))];
          if (l > 0.62) {
            dim += " ";
            bright += g;
          } else {
            dim += g;
            bright += " ";
          }
        }
        if (!any) continue;
        ctx.fillStyle = "#4d4d4d";
        ctx.fillText(dim, 0, r * ch);
        ctx.fillStyle = "#d4d4d4";
        ctx.fillText(bright, 0, r * ch);
      }
    };

    let raf = 0;
    let last = performance.now();
    let running = false;

    const loop = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      // ease tilt toward pointer target; decay thrown spin back to idle
      state.tiltX += (state.tx - state.tiltX) * Math.min(1, dt * 3);
      state.tiltY += (state.ty - state.tiltY) * Math.min(1, dt * 3);
      state.spinVel += (0.9 - state.spinVel) * Math.min(1, dt * 0.9);
      state.spin += state.spinVel * dt;
      draw(now);
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || reduce) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const host = canvas.parentElement;
    const onMove = (e) => {
      const r = host.getBoundingClientRect();
      const mx = (e.clientX - r.left) / r.width - 0.5;
      const my = (e.clientY - r.top) / r.height - 0.5;
      state.ty = 0.25 + mx * 1.1;
      state.tx = -0.95 + my * 0.9;
    };
    const onLeave = () => {
      state.tx = -0.95;
      state.ty = 0.25;
    };
    const onDown = (e) => {
      if (e.target.closest("a, button")) return;
      state.spinVel += 14;
    };

    resize();
    draw(0);
    document.fonts?.ready.then(() => {
      resize();
      draw(performance.now());
    });

    const ro = new ResizeObserver(() => {
      resize();
      draw(performance.now());
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) =>
      entry.isIntersecting ? start() : stop()
    );
    io.observe(canvas);

    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVis);
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    host.addEventListener("pointerdown", onDown);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      host.removeEventListener("pointerdown", onDown);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full select-none ${className}`}
    />
  );
}
