import { useEffect, useState } from "react";
import { Play, Monitor, CodeXml } from "lucide-react";
import { FaSteam } from "react-icons/fa";
import { featuredGame as game } from "../../data/portfolio";
import { SectionHeader, Tile } from "../ui";

export default function FeaturedGame() {
  const [playing, setPlaying] = useState(false);

  // The hero's "Watch Trailer" action (key 3) starts playback from afar.
  useEffect(() => {
    const play = () => setPlaying(true);
    window.addEventListener("play-trailer", play);
    return () => window.removeEventListener("play-trailer", play);
  }, []);

  return (
    <section id="featured" className="py-12 sm:py-14">
      <div className="shell">
        <SectionHeader
          title={game.title}
          subtitle={`${game.tagline} — by ${game.studio}`}
          aside={
            <div className="flex flex-wrap gap-2">
              <span className="chip">
                <span className="dot dot-live !w-1.5 !h-1.5" /> {game.status}
              </span>
              <span className="chip">
                <Monitor size={13} /> {game.platforms.join(" · ")}
              </span>
            </div>
          }
        />

        {/* Trailer */}
        <div className="reveal panel p-2">
          <div className="relative aspect-video rounded-[9px] overflow-hidden bg-black">
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
                  alt={`${game.title} key art`}
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute left-4 bottom-4 sm:left-5 sm:bottom-5 flex items-center gap-3 rounded-xl bg-black/45 backdrop-blur-xl border border-white/10 pl-2 pr-4 py-2">
                  <span className="tile tile-orange tile-sm group-hover:scale-105 transition-transform">
                    <Play size={15} fill="currentColor" />
                  </span>
                  <span className="text-left">
                    <span className="block text-sm font-semibold">
                      Watch the trailer
                    </span>
                    <span className="block text-xs text-fg-2">YouTube</span>
                  </span>
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Details */}
        <div className="mt-3 grid lg:grid-cols-[1.2fr_1fr] gap-3">
          <div className="reveal panel p-6 sm:p-7">
            <p className="text-fg-2 leading-relaxed">{game.description}</p>

            <h3 className="mt-7 kbd uppercase tracking-wider">Highlights</h3>
            <ul className="mt-2 divide-y divide-line">
              {game.features.map((f, i) => (
                <li key={f} className="flex gap-4 py-3 text-sm">
                  <span className="font-mono text-fg-3 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-fg">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal panel p-6 sm:p-7 flex flex-col">
            <div className="flex items-center gap-3">
              <Tile icon={CodeXml} tone="blue" small />
              <div>
                <h3 className="font-semibold">My contributions</h3>
                <p className="text-xs text-fg-2">What I own on the project</p>
              </div>
            </div>
            <ul className="mt-5 space-y-2.5">
              {game.contributions.map((c) => (
                <li key={c} className="flex gap-3 text-sm text-fg-2">
                  <span className="mt-[7px] w-1 h-1 rounded-full bg-fg-2 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {game.tech.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-7">
              <a
                href={game.steamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light w-full !h-11"
              >
                <FaSteam size={16} />
                Wishlist on Steam
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
