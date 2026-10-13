import { profile, skills } from "../../data/portfolio";
import { SectionHead } from "../ui";

export default function About() {
  return (
    <section id="about" className="pt-28 sm:pt-40">
      <div className="shell">
        <SectionHead index="01" title="About" note={profile.location} />

        <div className="grid grid-cols-12 gap-x-6 gap-y-14">
          <p className="reveal col-span-12 md:col-start-4 md:col-span-9 text-[clamp(1.75rem,3.6vw,3.4rem)] leading-[1.08] tracking-[-0.03em] font-normal">
            Gameplay programmer who treats feel as an engineering problem.{" "}
            <span className="text-fg-3">
              I architect modular, production-ready systems — so combat lands,
              enemies think, and designers can iterate without touching C++.
            </span>
          </p>

          {/* portrait */}
          <figure className="reveal col-span-8 sm:col-span-5 md:col-span-3 group">
            <div className="overflow-hidden rounded-[3px] bg-white/[0.03]">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full aspect-[4/5] object-cover grayscale contrast-[1.08] brightness-90 transition duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-[1.02]"
              />
            </div>
            <figcaption className="label mt-3 flex justify-between">
              <span>{profile.name}</span>
              <span>Fig. 02</span>
            </figcaption>
          </figure>

          {/* bio + spec sheet */}
          <div className="reveal col-span-12 md:col-start-4 md:col-span-5 space-y-5 text-fg-2 leading-relaxed">
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

          {/* toolkit */}
          <div className="reveal col-span-12 md:col-start-10 md:col-span-3">
            <h3 className="label mb-3">Toolkit</h3>
            <ol className="font-mono text-[13px] leading-[1.9]">
              {skills.map((s, i) => (
                <li key={s} className="flex gap-3">
                  <span className="text-fg-3 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-fg-2">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
