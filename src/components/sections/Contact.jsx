import { useState } from "react";
import { Mail, Linkedin, Github, FileText, Copy, Check } from "lucide-react";
import { profile } from "../../data/portfolio";
import { Tile } from "../ui";

const LINKS = [
  {
    icon: Mail,
    tone: "blue",
    label: "Email",
    value: profile.socials.email,
    href: `mailto:${profile.socials.email}`,
  },
  {
    icon: Linkedin,
    tone: "violet",
    label: "LinkedIn",
    value: "in/iamashishsakthi",
    href: profile.socials.linkedin,
  },
  {
    icon: Github,
    tone: "neutral",
    label: "GitHub",
    value: "Ashish-Sakthi",
    href: profile.socials.github,
  },
  {
    icon: FileText,
    tone: "green",
    label: "Resume",
    value: "View on Google Drive",
    href: profile.resumeUrl,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.socials.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      /* clipboard unavailable — ignore */
    }
  };

  return (
    <section id="contact" className="pt-12 sm:pt-14 pb-10">
      <div className="shell">
        <div className="reveal panel p-6 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-extrabold tracking-[-0.03em] leading-[1.05]">
                Let's build something together.
              </h2>
              <p className="mt-3 text-fg-2 max-w-lg">
                Open to gameplay programming roles, collaborations and
                interesting Unreal Engine challenges. I usually reply within a
                day.
              </p>
            </div>
            <div className="flex gap-2 shrink-0">
              <a href={`mailto:${profile.socials.email}`} className="btn btn-light">
                <Mail size={15} /> Say hello
              </a>
              <button onClick={copyEmail} className="btn btn-quiet">
                {copied ? <Check size={15} /> : <Copy size={15} />}
                {copied ? "Copied" : "Copy email"}
              </button>
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="well panel-hover p-4 flex items-center gap-3.5 min-w-0"
              >
                <Tile icon={l.icon} tone={l.tone} small />
                <span className="min-w-0">
                  <span className="block text-sm font-semibold">{l.label}</span>
                  <span className="block text-xs text-fg-2 truncate">
                    {l.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <footer className="mt-10 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-fg-3">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>Built with React &amp; Tailwind</span>
        </footer>
      </div>
    </section>
  );
}
