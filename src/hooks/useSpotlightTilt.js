import { useRef } from "react";

/**
 * Cursor-reactive 3D tilt + spotlight for a card element.
 * Spread the returned handlers on the element and attach `ref`.
 * The element should be `position: relative` and contain a
 * `<span className="card-spotlight" />` for the light to show through.
 */
export default function useSpotlightTilt(max = 7) {
  const ref = useRef(null);

  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el || reduce) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const ry = (px - 0.5) * max * 2;
    const rx = -(py - 0.5) * max * 2;
    el.style.transition = "transform 0.08s ease-out";
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
    el.style.setProperty("--spot-x", `${px * 100}%`);
    el.style.setProperty("--spot-y", `${py * 100}%`);
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.5s cubic-bezier(0.22,1,0.36,1)";
    el.style.transform = "";
  };

  return { ref, onMouseMove, onMouseLeave };
}
