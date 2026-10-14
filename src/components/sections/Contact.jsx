import { useState } from "react";
import { profile } from "../../data/portfolio";
import { scrollToId } from "../../lib/scroll";
import { SectionHead } from "../ui";
import Scramble from "../Scramble";

const SOCIALS = [
  { label: "LinkedIn", href: profile.socials.linkedin },
  { label: "GitHub", href: profile.socials.github },
  { label: "Resume", href: profile.resumeUrl },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.socials.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable; the mailto link still works */
    }
  };

  return (
    <section id="contact" className="pt-28 sm:pt-40">
      <div className="shell">
        <SectionHead title="Contact" />

        <h2 className="reveal font-medium tracking-[-0.055em] leading-[0.86] text-[clamp(3rem,10.5vw,10.5rem)] -ml-[0.04em]">
          Working on
          <br />
          <span className="text-fg-3">a game?</span>
        </h2>
        <p className="reveal mt-8 max-w-[44ch] text-lg text-fg-2 leading-relaxed">
          I'm open to gameplay programming roles and Unreal Engine work. Email
          is the quickest way to reach me.
        </p>

        <div className="reveal mt-14 grid grid-cols-12 gap-x-6 gap-y-8 items-end">
          <div className="col-span-12 md:col-span-9">
            <span className="label block mb-3">Email</span>
            <a
              href={`mailto:${profile.socials.email}`}
              className="text-[clamp(1.35rem,3.6vw,3.25rem)] tracking-[-0.03em] leading-none break-all"
            >
              <span className="link">{profile.socials.email}</span>
            </a>
          </div>
          <button
            onClick={copyEmail}
            className="col-span-12 md:col-span-3 md:justify-self-end label !text-fg hover:!text-fg-2 transition-colors"
          >
            [ <Scramble key={String(copied)} text={copied ? "Copied" : "Copy email"} /> ]
          </button>
        </div>

        <footer className="mt-28 sm:mt-40 border-t border-line pt-4 pb-8 grid grid-cols-12 gap-x-6 gap-y-3 label">
          <span className="col-span-12 md:col-span-3">
            © {new Date().getFullYear()} {profile.name}
          </span>
          <div className="col-span-12 md:col-span-6 flex gap-6">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="!text-fg-2 hover:!text-fg transition-colors"
              >
                <Scramble text={`${s.label} ↗`} hover />
              </a>
            ))}
          </div>
          <button
            onClick={() => scrollToId("top")}
            className="col-span-12 md:col-span-3 md:justify-self-end hover:!text-fg transition-colors text-left"
          >
            Back to top ↑
          </button>
        </footer>
      </div>
    </section>
  );
}
