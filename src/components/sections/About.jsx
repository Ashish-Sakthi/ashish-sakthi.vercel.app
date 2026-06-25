import { profile, skills } from "../../data/portfolio";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-center">
          {/* Portrait */}
          <div className="reveal relative mx-auto lg:mx-0 w-72 sm:w-96 lg:w-[28rem]">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-blue-500/30 via-cyan-400/20 to-cyan-400/25 blur-2xl" />
            <div className="relative float-slow rounded-[1.6rem] p-[2px] bg-gradient-to-tr from-sky-300 via-cyan-400 to-blue-500">
              <div className="rounded-[1.5rem] overflow-hidden bg-ink">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full aspect-square object-cover object-center"
                />
              </div>
            </div>
            <div className="absolute -bottom-5 -right-3 glass rounded-xl px-4 py-3 shadow-xl">
              <div className="text-xs text-gray-400">Based in</div>
              <div className="font-display font-semibold text-white">
                {profile.location}
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="reveal section-eyebrow mb-4">// About</p>
            <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Engineering gameplay that{" "}
              <span className="gradient-text">feels alive</span>
            </h2>
            {profile.bio.map((para, i) => (
              <p
                key={i}
                className="reveal text-gray-300/90 leading-relaxed mb-4 max-w-2xl"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {para}
              </p>
            ))}

            <div className="reveal mt-8" style={{ transitionDelay: "120ms" }}>
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">
                Core Toolkit
              </div>
              <div className="flex flex-wrap gap-2.5">
                {skills.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
