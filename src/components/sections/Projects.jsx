import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../../data/portfolio";
import { SectionHead } from "../ui";

/**
 * Work index — big type rows. On fine pointers a frosted preview of the
 * hovered project trails the cursor with a little spring lag.
 */
export default function Projects() {
  const [active, setActive] = useState(null);
  const preview = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const target = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    let raf;
    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };
    const tick = () => {
      pos.x += (target.x - pos.x) * 0.14;
      pos.y += (target.y - pos.y) * 0.14;
      const tilt = Math.max(-8, Math.min(8, (target.x - pos.x) * 0.06));
      if (preview.current) {
        preview.current.style.transform = `translate3d(${pos.x + 20}px, ${pos.y - 260}px, 0) rotate(${tilt}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="projects" className="pt-28 sm:pt-40">
      <div className="shell">
        <SectionHead index="04" title="Selected work" note={`${projects.length} prototypes`} />

        <ul
          className="group/list border-b border-line"
          onMouseLeave={() => setActive(null)}
        >
          {projects.map((p, i) => (
            <li key={p.id} className="reveal border-t border-line first:border-t-0">
              <Link
                to={`/projects/${p.id}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group grid grid-cols-12 gap-x-6 gap-y-3 items-baseline py-6 sm:py-8 transition-opacity duration-300 md:group-hover/list:opacity-30 md:hover:!opacity-100"
              >
                <span className="col-span-2 md:col-span-3 label tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="col-span-10 md:col-span-6 text-[clamp(1.9rem,5vw,4.5rem)] font-medium tracking-[-0.045em] leading-[0.95] transition-transform duration-500 md:group-hover:translate-x-3">
                  {p.name}
                </span>
                <span className="col-start-3 col-span-10 md:col-start-auto md:col-span-3 md:text-right label leading-relaxed">
                  {p.technologies.join(" / ")}
                  <span className="hidden md:inline text-fg"> ↗</span>
                </span>

                {/* touch screens get an inline thumbnail instead of the cursor preview */}
                <img
                  src={p.image}
                  alt=""
                  loading="lazy"
                  className="md:hidden col-start-3 col-span-10 mt-3 w-full aspect-video object-cover rounded-[3px]"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* cursor-trailing preview */}
      <div
        ref={preview}
        aria-hidden="true"
        className={`hidden md:block fixed top-0 left-0 z-30 pointer-events-none transition-opacity duration-300 ${
          active === null ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="frost rounded-md p-1.5 w-[340px]">
          <div className="relative aspect-video overflow-hidden rounded-[3px] bg-black">
            {projects.map((p, i) => (
              <img
                key={p.id}
                src={p.image}
                alt=""
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                  active === i ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <div className="label flex justify-between px-1 pt-1.5 pb-0.5">
            <span className="!text-fg-2">
              {active !== null && projects[active].name}
            </span>
            <span>View case study</span>
          </div>
        </div>
      </div>
    </section>
  );
}
