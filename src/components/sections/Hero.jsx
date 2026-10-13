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

      {/* soft floor so the type always reads over the glyphs */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg via-bg/70 to-transparent" />

      <div className="shell relative h-full flex flex-col justify-end pb-8 sm:pb-10 pointer-events-none">
        {/* figure caption, pinned near the chakra */}
        <div className="label absolute top-20 sm:top-24 right-5 md:right-10 text-right leading-relaxed">
          <Scramble text="Fig. 01 — Sudarshana chakra" className="text-fg-2" />
          <br />
          <span>Real-time ASCII raster · z-buffered</span>
          <br />
          <span className="hidden sm:inline">Move to tilt · click to throw</span>
        </div>

        <p className="label mb-4 sm:mb-6">
          <Scramble text={profile.role} />
        </p>

        <h1 className="font-medium tracking-[-0.055em] leading-[0.84] text-[clamp(3.6rem,13.2vw,13.5rem)] -ml-[0.04em] mix-blend-difference">
          Ashish Sakthi
        </h1>

        <div className="mt-8 sm:mt-10 grid grid-cols-12 gap-x-6 gap-y-6 items-end pointer-events-auto">
          <p className="col-span-12 md:col-span-5 text-lg sm:text-xl leading-snug text-fg-2 max-w-[34ch]">
            I build the systems players feel but never see — combat, enemy AI
            and abilities, in Unreal Engine&nbsp;5 and C++.
          </p>

          <button
            onClick={() => scrollToId("featured")}
            className="group col-span-8 md:col-span-4 text-left"
          >
            <span className="label block mb-1.5">Currently</span>
            <span className="text-fg">
              <span className="link">{featuredGame.title}</span>
              <span className="text-fg-3"> — {featuredGame.studio}</span>
            </span>
          </button>

          <button
            onClick={() => scrollToId("about")}
            className="col-span-4 md:col-span-3 justify-self-end label hover:!text-fg transition-colors"
          >
            Scroll ↓
          </button>
        </div>
      </div>
    </section>
  );
}
