import { experience } from "../../data/portfolio";
import { SectionHead } from "../ui";

export default function Experience() {
  return (
    <section id="experience" className="pt-28 sm:pt-40">
      <div className="shell">
        <SectionHead title="Experience" />

        <ol className="border-b border-line">
          {experience.map((item) => (
            <li
              key={item.role}
              className="reveal group grid grid-cols-12 gap-x-6 gap-y-3 py-8 sm:py-10 border-t border-line first:border-t-0"
            >
              <span className="col-span-12 md:col-span-3 label pt-2 tabular-nums">
                {item.period}
              </span>

              <div className="col-span-12 md:col-span-6">
                <h3 className="text-2xl sm:text-3xl font-medium tracking-[-0.025em] leading-tight transition-transform duration-500 md:group-hover:translate-x-2">
                  {item.role}
                </h3>
                <p className="mt-1 text-fg-3">{item.company}</p>
                <p className="mt-5 text-fg-2 leading-relaxed max-w-[62ch]">
                  {item.description}
                </p>
              </div>

              <div className="col-span-12 md:col-span-3 md:text-right label pt-2 leading-relaxed">
                <div>{item.location}</div>
                <div className="mt-1 text-fg-2">{item.tags.join(" / ")}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
