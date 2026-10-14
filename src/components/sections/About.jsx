import { profile, skills } from "../../data/portfolio";
import { SectionHead } from "../ui";

export default function About() {
  return (
    <section id="about" className="pt-28 sm:pt-40">
      <div className="shell">
        <SectionHead title="About" />

        <p className="reveal max-w-[22ch] sm:max-w-[26ch] text-[clamp(1.75rem,3.6vw,3.4rem)] leading-[1.08] tracking-[-0.03em]">
          I work on the systems that hold a game together.{" "}
          <span className="text-fg-3">
            How you fight and what fights back, what you unlock, the quests
            that move the story along, and the save that remembers all of it.
          </span>
        </p>

        {/* three equal columns; tops share one hairline, bottoms line up */}
        <div className="mt-16 sm:mt-20 grid grid-cols-12 gap-x-6 gap-y-10 md:items-stretch">
          <figure className="reveal col-span-12 sm:col-span-6 md:col-span-4 relative aspect-[4/5] md:aspect-auto md:min-h-[24rem] overflow-hidden rounded-[3px] bg-white/[0.03] group">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </figure>

          <div className="reveal col-span-12 md:col-span-4 border-t border-line pt-4 space-y-5 text-fg-2 leading-relaxed">
            {profile.bio.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>

          <div className="reveal col-span-12 md:col-span-4 flex flex-col">
            <dl>
              {profile.facts.map(([k, v]) => (
                <div
                  key={k}
                  className="grid grid-cols-[6.5rem_1fr] gap-4 py-2.5 border-t border-line text-sm first:pt-4"
                >
                  <dt className="label pt-0.5">{k}</dt>
                  <dd className="text-fg">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-auto pt-10 border-b border-line pb-4">
              <h3 className="label mb-3">Toolkit</h3>
              <ul className="grid grid-cols-2 gap-x-4 font-mono text-[12.5px] leading-[1.9] text-fg-2">
                {skills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
