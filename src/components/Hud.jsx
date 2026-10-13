import { useEffect, useRef } from "react";

const clock = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

/** A tiny in-game style stat overlay: live frame time + local time in India. */
export default function Hud() {
  const ref = useRef(null);

  useEffect(() => {
    let raf;
    let prev = performance.now();
    let avg = 16.7;
    let lastPaint = 0;

    const tick = (now) => {
      avg += (now - prev - avg) * 0.08;
      prev = now;
      if (now - lastPaint > 250 && ref.current) {
        lastPaint = now;
        const fps = Math.min(999, Math.round(1000 / avg));
        ref.current.textContent = `${String(fps).padStart(3, " ")} FPS · ${avg
          .toFixed(1)
          .padStart(4, " ")} MS · ${clock.format(new Date())} IST`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="frost hidden lg:block fixed bottom-5 right-5 z-40 rounded-full px-3.5 py-1.5"
    >
      <span ref={ref} className="label !text-fg-2 tabular-nums">
        &nbsp;
      </span>
    </div>
  );
}
