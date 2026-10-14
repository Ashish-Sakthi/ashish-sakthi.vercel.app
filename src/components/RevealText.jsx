import { useEffect, useRef } from "react";

/**
 * Headline that rises into place word by word, each word sliding up out
 * of its own clipping box. `parts` lets one headline mix tones, e.g.
 * [["Unleash\n"], ["The ", "text-fg-3"], ["Avatar"]]; "\n" breaks the line.
 */
export default function RevealText({
  as = "span",
  parts,
  text,
  className = "",
  delay = 0,
  stagger = 55,
  immediate = false,
}) {
  const Tag = as;
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (immediate) {
      requestAnimationFrame(() => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [immediate]);

  const segments = parts ?? [[text]];
  let i = 0;
  const label = segments.map(([t]) => t.replace(/\n/g, " ")).join("");

  return (
    <Tag ref={ref} aria-label={label} className={`reveal-words ${className}`}>
      {segments.map(([t, cls], si) =>
        t.split(/(\n| )/).map((w, wi) => {
          if (w === "\n") return <br key={`${si}-${wi}`} />;
          if (w === " ") return " ";
          if (!w) return null;
          const d = delay + i++ * stagger;
          return (
            <span key={`${si}-${wi}`} className="rw" aria-hidden="true">
              <span className={`rw-i ${cls ?? ""}`} style={{ transitionDelay: `${d}ms` }}>
                {w}
              </span>
            </span>
          );
        })
      )}
    </Tag>
  );
}
