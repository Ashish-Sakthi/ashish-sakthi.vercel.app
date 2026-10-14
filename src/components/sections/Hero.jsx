import { profile, featuredGame } from "../../data/portfolio";
import { scrollToId } from "../../lib/scroll";
import AsciiChakra from "../AsciiChakra";
import Scramble from "../Scramble";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[640px] overflow-hidden cursor-crosshair"
    >
      <AsciiChakra />

      <div className="shell relative h-full flex flex-col justify-end pb-8 sm:pb-12 pointer-events-none">
        <p className="label mb-4 sm:mb-6">
          <Scramble text={profile.role} />
        </p>

        <h1 className="font-medium tracking-[-0.055em] leading-[0.84] text-[clamp(3.2rem,11.6vw,12rem)] -ml-[0.04em] mix-blend-difference">
          {profile.name}
        </h1>

        <div className="mt-8 sm:mt-10 grid grid-cols-12 gap-x-6 gap-y-6 items-end pointer-events-auto">
          <p className="col-span-12 md:col-span-6 text-lg sm:text-xl leading-snug text-fg-2 max-w-[34ch]">
            I build the systems players feel but never see — combat, enemy AI
            and abilities, in Unreal Engine&nbsp;5 and C++.
          </p>

          <button
            onClick={() => scrollToId("featured")}
            className="col-span-12 md:col-span-6 md:justify-self-end text-left md:text-right"
          >
            <span className="label block mb-1.5">Currently</span>
            <span className="text-fg">
              <span className="link">{featuredGame.title}</span>
              <span className="text-fg-3"> — {featuredGame.studio}</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
