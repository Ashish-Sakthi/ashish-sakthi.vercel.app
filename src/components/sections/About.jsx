import { profile, skills } from "../../data/portfolio";
import { SectionHead } from "../ui";
import RevealText from "../RevealText";

export default function About() {
  return (
    <section id="about" className="pt-20 sm:pt-40">
      <div className="shell">
        <SectionHead title="About" />

        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <RevealText
            as="p"
            className="col-span-12 md:col-start-4 md:col-span-9 md:row-start-1 max-w-[26ch] text-[clamp(1.75rem,3.6vw,4.4rem)] leading-[1.08] tracking-[-0.03em]"
            stagger={28}
            parts={[
              ["I work on the systems that hold a game together. "],
              [
                "How you fight and what fights back, what you unlock, the quests that move the story along, and the save that remembers all of it.",
                "text-fg-3",
              ],
            ]}
          />

          {/* portrait: top aligned with the statement, stays in view while you read */}
          <figure className="reveal col-span-10 sm:col-span-6 md:col-start-1 md:col-span-3 md:row-start-1 md:row-span-2 md:self-start md:sticky md:top-24 group overflow-hidden rounded-[3px] bg-white/[0.03]">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="mono w-full aspect-[4/5] object-cover group-hover:scale-[1.02]"
            />
          </figure>

          <div className="col-span-12 md:col-start-4 md:col-span-9 md:row-start-2 grid grid-cols-9 gap-x-6 gap-y-12">
            <div className="reveal col-span-9 lg:col-span-5 space-y-5 text-fg-2 leading-relaxed">
              {profile.bio.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}

              <dl className="pt-6">
                {profile.facts.map(([k, v]) => (
                  <div
                    key={k}
                    className="grid grid-cols-[7rem_1fr] gap-4 py-2.5 border-t border-line text-sm"
                  >
                    <dt className="label pt-0.5">{k}</dt>
                    <dd className="text-fg">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="reveal col-span-9 lg:col-start-7 lg:col-span-3">
              <h3 className="label mb-3">Toolkit</h3>
              <ul className="font-mono text-[13px] leading-[1.9] text-fg-2">
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
