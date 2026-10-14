import { Link } from "react-router-dom";
import { projects } from "../../data/portfolio";
import { SectionHead } from "../ui";

export default function Projects() {
  return (
    <section id="projects" className="pt-28 sm:pt-40">
      <div className="shell">
        <SectionHead title="Selected work" />

        <ul className="group/list border-b border-line">
          {projects.map((p) => (
            <li key={p.id} className="reveal border-t border-line first:border-t-0">
              <Link
                to={`/projects/${p.id}`}
                className="group grid grid-cols-12 gap-x-6 gap-y-6 items-center py-8 sm:py-10 transition-opacity duration-300 md:group-hover/list:opacity-35 md:hover:!opacity-100"
              >
                <div className="col-span-12 md:col-span-7 lg:col-span-8">
                  <h3 className="text-[clamp(2rem,5vw,4.5rem)] font-medium tracking-[-0.045em] leading-[0.95] transition-transform duration-500 md:group-hover:translate-x-3">
                    {p.name}
                  </h3>
                  <p className="mt-5 max-w-[52ch] text-fg-2 leading-relaxed">
                    {p.description}
                  </p>
                  <p className="mt-5 label !text-fg-2">
                    {p.technologies.join(" / ")}
                  </p>
                </div>

                <div className="col-span-12 md:col-span-5 lg:col-span-4 overflow-hidden rounded-[3px] bg-white/[0.03]">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="w-full aspect-[16/10] object-cover grayscale brightness-90 transition duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-[1.03]"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
