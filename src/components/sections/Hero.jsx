import { FaArrowDown, FaGithub, FaLinkedin, FaPlay } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";
import { profile, featuredGame } from "../../data/portfolio";
import useSpotlightTilt from "../../hooks/useSpotlightTilt";

export default function Hero() {
  const tilt = useSpotlightTilt(9);
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-32 pb-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-10 items-center">
          {/* Left — copy */}
          <div className="max-w-2xl">
            <div className="reveal inline-flex items-center gap-2 chip mb-7">
              <span className="w-2 h-2 rounded-full bg-emerald-400 live-dot" />
              Available for gameplay programming roles
            </div>

            <p className="reveal section-eyebrow mb-4">{profile.role}</p>

            <h1 className="reveal font-display font-bold leading-[0.92] tracking-tight text-[clamp(2.7rem,7vw,5.6rem)]">
              <span className="text-white">Ashish </span>
              <span className="gradient-text tilt-shadow">Sakthi</span>
              <span className="text-white"> D</span>
            </h1>

            <p
              className="reveal mt-6 max-w-xl text-lg text-gray-300/90 leading-relaxed"
              style={{ transitionDelay: "80ms" }}
            >
              I craft modular, production-ready systems in Unreal Engine —
              combat, AI and the{" "}
              <span className="text-sky-300">Gameplay Ability System</span> —
              that ship AAA-quality gameplay at scale.
            </p>

            <div
              className="reveal mt-9 flex flex-wrap items-center gap-4"
              style={{ transitionDelay: "160ms" }}
            >
              <button
                onClick={() => scrollTo("featured")}
                className="btn-primary"
              >
                <HiOutlineSparkles size={18} />
                View Featured Game
              </button>
              <button onClick={() => scrollTo("projects")} className="btn-ghost">
                Browse Projects
              </button>
              <div className="flex items-center gap-2 ml-1">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="grid place-items-center w-11 h-11 rounded-lg border border-white/10 text-gray-300 hover:text-sky-300 hover:border-blue-400/50 transition-colors"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="grid place-items-center w-11 h-11 rounded-lg border border-white/10 text-gray-300 hover:text-sky-300 hover:border-blue-400/50 transition-colors"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>

            {/* Stat strip */}
            <div
              className="reveal glass mt-12 grid grid-cols-2 sm:grid-cols-4 rounded-2xl overflow-hidden max-w-xl divide-x divide-white/10"
              style={{ transitionDelay: "240ms" }}
            >
              {profile.stats.map((s) => (
                <div key={s.label} className="px-5 py-5 text-center sm:text-left">
                  <div className="font-display text-2xl sm:text-3xl font-bold gradient-text">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-gray-300/80">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — floating game panel */}
          <div className="reveal relative" style={{ transitionDelay: "200ms" }}>
            {/* ambient glows */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-blue-500/25 via-cyan-400/15 to-transparent blur-3xl rounded-[3rem] pointer-events-none" />

            <button
              ref={tilt.ref}
              onMouseMove={tilt.onMouseMove}
              onMouseLeave={tilt.onMouseLeave}
              onClick={() => scrollTo("featured")}
              className="group card-glow relative w-full rounded-[1.8rem] overflow-hidden text-left float-slow"
              aria-label="Jump to featured game"
            >
              <span className="card-spotlight" />
              <div className="relative aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/5]">
                <img
                  src={featuredGame.poster}
                  alt={featuredGame.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

                {/* top badge */}
                <span className="absolute top-4 left-4 inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full glass text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 live-dot" />
                  Now Building
                </span>

                {/* play affordance */}
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center w-16 h-16 rounded-full glass group-hover:scale-110 transition-transform pulse-glow">
                  <FaPlay className="text-white ml-1" size={20} />
                </span>

                {/* bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="font-brand text-[0.65rem] tracking-[0.3em] text-sky-300 mb-1">
                    {featuredGame.codename}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white leading-tight">
                    {featuredGame.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-300">
                    {featuredGame.tagline}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {featuredGame.platforms.map((p) => (
                      <span
                        key={p}
                        className="text-[0.7rem] px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-gray-200"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-sky-300 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[0.65rem] tracking-[0.3em] uppercase">Scroll</span>
        <FaArrowDown className="scroll-hint" size={14} />
      </button>
    </section>
  );
}
