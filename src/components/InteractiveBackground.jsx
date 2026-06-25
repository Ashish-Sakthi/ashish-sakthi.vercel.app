import { useEffect, useRef } from "react";

/**
 * Liquid-glass backdrop:
 *  - flowing aurora "blobs" (electric blue / cyan / azure) that drift and
 *    parallax with scroll — these are what the frosted glass panels refract.
 *  - a soft cool glow that follows the cursor.
 *  - film grain for a premium, filmic finish.
 *  - a custom cursor (desktop / fine pointers only).
 */
export default function InteractiveBackground() {
  const cursorBlobRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (finePointer) document.body.classList.add("has-custom-cursor");

    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");
    const blob = cursorBlobRef.current;

    const target = { x: window.innerWidth / 2, y: window.innerHeight * 0.3 };
    let ringX = target.x;
    let ringY = target.y;
    let blobX = target.x;
    let blobY = target.y;
    let raf;

    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (dot) {
        dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
      const t = e.target;
      const interactive =
        t.closest && t.closest('a, button, [role="button"], input, textarea');
      if (ring) ring.classList.toggle("is-hover", !!interactive);
    };

    const tick = () => {
      ringX += (target.x - ringX) * 0.18;
      ringY += (target.y - ringY) * 0.18;
      blobX += (target.x - blobX) * 0.08;
      blobY += (target.y - blobY) * 0.08;
      if (ring) {
        ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      if (blob) {
        blob.style.setProperty("--cx", `${blobX}px`);
        blob.style.setProperty("--cy", `${blobY}px`);
      }
      raf = requestAnimationFrame(tick);
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--scroll-y", window.scrollY);
        ticking = false;
      });
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    if (!reduceMotion) raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div className="aurora" aria-hidden="true">
        <div className="aurora-inner">
          <span className="aurora-blob b1" />
          <span className="aurora-blob b2" />
          <span className="aurora-blob b3" />
        </div>
      </div>
      <div ref={cursorBlobRef} className="aurora-cursor" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <div className="cursor-ring" aria-hidden="true" />
      <div className="cursor-dot" aria-hidden="true" />
    </>
  );
}
