import { useCallback, useEffect, useRef, useState } from "react";

const GLYPHS = "!<>-_\\/[]{}=+*^?#%&01ABCDEFGHJKLMNPQRSTUVWXYZ";
const reduce =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Text that decodes from random glyphs: once when scrolled into view,
 * and again on hover if `hover` is set. Meant for monospace labels,
 * where the width doesn't jump while it resolves.
 */
export default function Scramble({ text, hover = false, className = "" }) {
  const [out, setOut] = useState(text);
  const ref = useRef(null);
  const raf = useRef(0);

  const run = useCallback(() => {
    if (reduce) return;
    cancelAnimationFrame(raf.current);
    const start = performance.now();
    const dur = 380 + text.length * 22;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur);
      const fixed = Math.floor(p * text.length);
      let s = "";
      for (let i = 0; i < text.length; i++) {
        const c = text[i];
        s +=
          i < fixed || c === " "
            ? c
            : GLYPHS[(Math.random() * GLYPHS.length) | 0];
      }
      setOut(s);
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
  }, [text]);

  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf.current);
    };
  }, [run]);

  return (
    <span
      ref={ref}
      onMouseEnter={hover ? run : undefined}
      aria-label={text}
      className={className}
    >
      <span aria-hidden="true">{out}</span>
    </span>
  );
}
