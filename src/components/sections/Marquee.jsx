import { skills } from "../../data/portfolio";

/** Infinite scrolling band of skills — duplicated once for a seamless loop. */
export default function Marquee() {
  const loop = [...skills, ...skills];
  return (
    <div className="relative py-8 border-y border-white/10 bg-white/[0.015]">
      <div className="marquee">
        <div className="marquee-track">
          {loop.map((s, i) => (
            <span key={i} className="marquee-item">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
