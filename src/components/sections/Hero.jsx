import { profile, featuredGame } from "../../data/portfolio";
import { scrollToId } from "../../lib/scroll";
import Contours from "../Contours";
import RevealText from "../RevealText";
import Scramble from "../Scramble";

const LINKS = [
  { label: "Email", href: `mailto:${profile.socials.email}` },
  { label: "LinkedIn", href: profile.socials.linkedin },
  { label: "GitHub", href: profile.socials.github },
  { label: "Resume", href: profile.resumeUrl },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36 pb-4 sm:pb-24">
      {/* topographic field behind the type; fades out toward the next section */}
      <Contours className="[mask-image:linear-gradient(to_bottom,black_55%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black_55%,transparent)]" />

      <div className="shell relative">
        <p className="label mb-4 sm:mb-6">
          <Scramble text={`${profile.role}, ${profile.location}`} />
        </p>

        <RevealText
          as="h1"
          immediate
          delay={120}
          stagger={90}
          text={profile.name}
          className="block font-medium tracking-[-0.055em] leading-[0.84] text-[clamp(3rem,13.4vw,20rem)] -ml-[0.04em]"
        />

        <div className="reveal mt-10 sm:mt-16 grid grid-cols-12 gap-x-6 gap-y-8 border-t border-line pt-8 items-end">
          <p className="col-span-12 md:col-span-8 lg:col-span-6 text-[clamp(1.35rem,2.2vw,2.4rem)] leading-[1.25] tracking-[-0.02em]">
            I build the systems a whole game runs on in Unreal Engine 5 and
            C++, from combat and enemies to quests, progression and saves.{" "}
            <span className="text-fg-3">
              Right now that's{" "}
              <button
                onClick={() => scrollToId("featured")}
                className="text-fg link"
              >
                {featuredGame.title}
              </button>{" "}
              at {featuredGame.studio}, where I also own the PS5 port and PC
              performance.
            </span>
          </p>

          <div className="col-span-12 md:col-span-4 lg:col-start-9 lg:col-span-4 md:justify-self-end flex flex-wrap gap-x-6 gap-y-2 label">
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
      </div>
    </section>
  );
}
