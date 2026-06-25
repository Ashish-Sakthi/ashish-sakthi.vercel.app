import { useState } from "react";
import { FaPlay, FaCheckCircle, FaSteam, FaCode } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { featuredGame as game } from "../../data/portfolio";

export default function FeaturedGame() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="featured" className="relative py-24 sm:py-28">
      <div className="mx-auto w-full max-w-[1680px] px-4 sm:px-6 lg:px-16">
        <div className="reveal flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="section-eyebrow mb-4">// Now Building</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Featured <span className="gradient-text">Game</span>
            </h2>
          </div>
          <div className="font-brand text-xs tracking-[0.3em] text-gray-500">
            {game.codename}
          </div>
        </div>

        <div className="reveal card-glow rounded-3xl overflow-hidden max-w-6xl mx-auto">
          {/* Trailer — full width, true 16:9, never cropped */}
          <div className="relative w-full aspect-video bg-black">
            {playing ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`${game.trailerUrl}${
                  game.trailerUrl.includes("?") ? "&" : "?"
                }autoplay=1`}
                title={`${game.title} trailer`}
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                onClick={() => setPlaying(true)}
                className="group absolute inset-0 w-full h-full"
                aria-label="Play trailer"
              >
                <img
                  src={game.poster}
                  alt={game.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid place-items-center w-20 h-20 rounded-full glass group-hover:scale-110 transition-transform pulse-glow">
                    <FaPlay className="text-white ml-1" size={24} />
                  </span>
                </span>
                <span className="absolute bottom-4 left-5 flex items-center gap-2 text-sm text-white/90">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 live-dot" />
                  Watch the trailer
                </span>
              </button>
            )}
          </div>

          {/* Details */}
          <div className="p-7 sm:p-10">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 live-dot" />
                {game.status}
              </span>
              <span className="text-xs text-gray-400 flex items-center gap-1.5">
                <HiOutlineDesktopComputer size={15} />
                {game.platforms.join(" · ")}
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
              {game.title}
            </h3>
            {game.studio && (
              <p className="mt-1 text-xs uppercase tracking-widest text-gray-500">
                by {game.studio}
              </p>
            )}
            <p className="mt-3 text-sky-300/90">{game.tagline}</p>

            <div className="mt-8 grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* left: overview + highlights */}
              <div>
                <p className="text-sm text-gray-300/90 leading-relaxed">
                  {game.description}
                </p>
                <div className="mt-6 mb-3 text-xs font-semibold tracking-widest uppercase text-sky-300/90">
                  Game Highlights
                </div>
                <ul className="space-y-2.5">
                  {game.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-gray-200"
                    >
                      <FaCheckCircle
                        className="text-blue-400 mt-0.5 shrink-0"
                        size={14}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* right: contributions + cta */}
              <div>
                {game.contributions && (
                  <div className="rounded-2xl border border-cyan-400/25 bg-cyan-400/[0.04] p-5">
                    <div className="flex items-center gap-2 mb-3 text-sky-300">
                      <FaCode size={14} />
                      <span className="text-xs font-semibold tracking-widest uppercase">
                        My Contributions
                      </span>
                    </div>
                    <ul className="space-y-2.5">
                      {game.contributions.map((c) => (
                        <li
                          key={c}
                          className="flex items-start gap-2.5 text-sm text-gray-200"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-300 shrink-0" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {game.steamUrl && (
                  <a
                    href={game.steamUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-5 w-full justify-center"
                  >
                    <FaSteam size={18} />
                    Wishlist on Steam
                  </a>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {game.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
