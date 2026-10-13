import { experience } from "../../data/portfolio";
import { SectionHeader, Tile } from "../ui";

export default function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-14">
      <div className="shell">
        <SectionHeader
          title="Experience"
          subtitle="Roles, projects and recognitions shaping my craft."
        />

        <div className="space-y-3">
          {experience.map((item) => (
            <article
              key={item.role}
              className="reveal panel p-5 sm:p-6 grid sm:grid-cols-[auto_1fr] gap-x-5 gap-y-4"
            >
              <Tile icon={item.icon} tone={item.tone} />
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-[17px] font-semibold">{item.role}</h3>
                  <span className="kbd">{item.period}</span>
                </div>
                <div className="text-sm text-fg-2 mt-0.5">
                  {item.company} · {item.location}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-fg-2 max-w-3xl">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
