import { profile, featuredGame } from "../../data/portfolio";
import { scrollToId } from "../../lib/scroll";
import AsciiChakra from "../AsciiChakra";
import Scramble from "../Scramble";

const LINKS = [
  { label: "Email", href: `mailto:${profile.socials.email}` },
  { label: "LinkedIn", href: profile.socials.linkedin },
  { label: "GitHub", href: profile.socials.github },
  { label: "Resume", href: profile.resumeUrl },
];

export default function Hero() {
  return (
    <section id="top" className="pt-28 sm:pt-36">
      <div className="shell">
        <p className="label mb-4 sm:mb-6">
          <Scramble text={`${profile.role} — ${profile.location}`} />
        </p>

        <h1 className="font-medium tracking-[-0.055em] leading-[0.84] text-[clamp(3.2rem,11.6vw,12rem)] -ml-[0.04em]">
          {profile.name}
        </h1>

        <div className="mt-10 sm:mt-14 grid grid-cols-12 gap-x-6 gap-y-10 border-t border-line pt-8">
          <div className="col-span-12 md:col-span-7 lg:col-span-6">
            <p className="text-[clamp(1.35rem,2.2vw,1.9rem)] leading-[1.25] tracking-[-0.02em]">
              I write combat, enemy AI and boss systems in Unreal Engine 5 and
              C++.{" "}
              <span className="text-fg-3">
                Right now that's{" "}
                <button
                  onClick={() => scrollToId("featured")}
                  className="text-fg link"
                >
                  {featuredGame.title}
                </button>{" "}
                at {featuredGame.studio}, coming to PlayStation 5 and PC.
              </span>
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 label">
              {LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="!text-fg hover:!text-fg-2 transition-colors"
                >
                  <Scramble text={`${l.label} ↗`} hover />
                </a>
              ))}
            </div>
          </div>

          {/* the chakra from the game — a small interactive accent, not the whole page */}
          <div className="hidden md:block md:col-span-5 lg:col-start-8 relative h-64 lg:h-72 cursor-crosshair">
            <AsciiChakra />
          </div>
        </div>
      </div>
    </section>
  );
}
