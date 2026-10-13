import { MapPin } from "lucide-react";
import { profile, skills } from "../../data/portfolio";
import { SectionHeader } from "../ui";

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-14">
      <div className="shell">
        <SectionHeader
          title="About"
          subtitle="Engineering gameplay that feels right in the hands."
        />

        <div className="grid md:grid-cols-[minmax(0,300px)_1fr] gap-3">
          <figure className="reveal panel p-2 self-start">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-full aspect-[4/5] object-cover rounded-[9px]"
            />
            <figcaption className="flex items-center justify-between px-2 pt-3 pb-1.5">
              <span className="text-sm font-semibold">{profile.name}</span>
              <span className="kbd inline-flex items-center gap-1">
                <MapPin size={12} /> {profile.location}
              </span>
            </figcaption>
          </figure>

          <div className="reveal panel p-6 sm:p-8 flex flex-col">
            <div className="space-y-5 max-w-2xl">
              {profile.bio.map((para, i) => (
                <p
                  key={i}
                  className={`leading-relaxed ${
                    i === 0 ? "text-[17px] text-fg" : "text-fg-2"
                  }`}
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-auto pt-8">
              <h3 className="kbd uppercase tracking-wider">Toolkit</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {skills.map((s) => (
                  <span key={s} className="chip !font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
