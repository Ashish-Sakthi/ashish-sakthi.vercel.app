import { FaBriefcase } from "react-icons/fa";
import { experience } from "../../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-28">
      <div className="mx-auto w-full max-w-[1680px] px-4 sm:px-6 lg:px-16">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <p className="section-eyebrow mb-4">// Journey</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Experience <span className="gradient-text">&amp; Milestones</span>
          </h2>
          <p className="mt-4 text-gray-400">
            A timeline of the roles, projects and recognitions shaping my craft.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-blue-400/60 via-cyan-400/40 to-transparent sm:-translate-x-1/2" />

          <div className="space-y-10">
            {experience.map((item, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`reveal relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-10 ${
                    left ? "" : "sm:[direction:rtl]"
                  }`}
                >
                  {/* node */}
                  <span className="absolute left-4 sm:left-1/2 top-6 sm:top-7 -translate-x-1/2 grid place-items-center w-7 h-7 rounded-full bg-ink border border-blue-400/60 pulse-glow z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-400" />
                  </span>

                  <div
                    className={`card-glow rounded-2xl p-6 [direction:ltr] ${
                      left ? "sm:text-right" : ""
                    }`}
                  >
                    <div
                      className={`flex items-center gap-2 mb-2 text-sky-300 ${
                        left ? "sm:justify-end" : ""
                      }`}
                    >
                      <FaBriefcase size={13} />
                      <span className="text-xs font-medium tracking-wider uppercase">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {item.role}
                    </h3>
                    <div className="text-sm text-sky-300 mb-3">
                      {item.company} · {item.location}
                    </div>
                    <p className="text-sm text-gray-300/90 leading-relaxed">
                      {item.description}
                    </p>
                    <div
                      className={`mt-4 flex flex-wrap gap-2 ${
                        left ? "sm:justify-end" : ""
                      }`}
                    >
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[0.7rem] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="hidden sm:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
