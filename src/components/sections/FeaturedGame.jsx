import { useState } from "react";
import { featuredGame as game } from "../../data/portfolio";
import { SectionHead } from "../ui";

function HairlineList({ title, items }) {
  return (
    <div>
      <h3 className="label mb-3">{title}</h3>
      <ol>
        {items.map((item) => (
          <li
            key={item}
            className="py-3 border-t border-line text-[15px] leading-snug text-fg-2"
          >
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function FeaturedGame() {
  const [playing, setPlaying] = useState(false);

  const meta = [game.studio, "Soulslike", game.platforms.join(" · "), game.status];

  return (
    <section id="featured" className="pt-28 sm:pt-40">
      <div className="shell">
        <SectionHead title="Now building" />

        <h2 className="reveal font-medium tracking-[-0.055em] leading-[0.86] text-[clamp(3rem,10.5vw,10.5rem)] -ml-[0.04em]">
          Unleash
          <br />
          <span className="text-fg-3">The</span> Avatar
        </h2>

        <div className="reveal mt-8 grid grid-cols-12 gap-x-6 gap-y-2 label">
          {meta.map((m) => (
            <span key={m} className="col-span-6 md:col-span-3 text-fg-2">
              {m}
            </span>
          ))}
        </div>

        {/* trailer */}
        <div className="reveal mt-10 relative aspect-video overflow-hidden rounded-[3px] bg-black">
          {playing ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`${game.trailerUrl}${game.trailerUrl.includes("?") ? "&" : "?"}autoplay=1`}
              title={`${game.title} trailer`}
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 w-full h-full cursor-pointer"
              aria-label="Play trailer"
            >
              <img
                src={game.poster}
                alt={`${game.title} key art`}
                className="w-full h-full object-cover brightness-90 transition duration-700 group-hover:brightness-100 group-hover:scale-[1.015]"
              />
              <span className="absolute inset-0 grid place-items-center">
                <span className="frost rounded-full h-14 pl-2 pr-6 flex items-center gap-4 transition-transform duration-500 group-hover:scale-105">
                  <span className="grid place-items-center w-10 h-10 rounded-full bg-fg text-bg">
                    <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor">
                      <path d="M0 0l12 7-12 7z" />
                    </svg>
                  </span>
                  <span className="label !text-fg">Play trailer</span>
                </span>
              </span>
            </button>
          )}
        </div>

        <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="reveal col-span-12 md:col-span-4">
            <h3 className="label mb-3">The game</h3>
            <p className="border-t border-line pt-3 text-[15px] text-fg-2 leading-relaxed">
              {game.description}
            </p>
            <a
              href={game.steamUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-fg"
            >
              <span className="link">Wishlist on Steam</span> ↗
            </a>
          </div>
          <div className="reveal col-span-12 md:col-span-4">
            <HairlineList title="What I work on" items={game.contributions} />
          </div>
          <div className="reveal col-span-12 md:col-span-4">
            <HairlineList title="Game highlights" items={game.features} />
          </div>
        </div>
      </div>
    </section>
  );
}
