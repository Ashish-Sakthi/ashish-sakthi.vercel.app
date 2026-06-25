import { FaLinkedin, FaGithub, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { profile } from "../../data/portfolio";

export default function Contact() {
  const links = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: profile.socials.email,
      href: `mailto:${profile.socials.email}`,
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "in/iamashishsakthi",
      href: profile.socials.linkedin,
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "Ashish-Sakthi",
      href: profile.socials.github,
    },
  ];

  return (
    <section id="contact" className="relative pt-24 sm:pt-28 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="reveal card-glow rounded-3xl overflow-hidden">
          {/* thin top accent hairline instead of a loud glow */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 p-8 sm:p-12 lg:p-14 items-center">
            {/* left — pitch */}
            <div>
              <p className="section-eyebrow mb-4">// Get in touch</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.05]">
                Let's build something{" "}
                <span className="gradient-text">unforgettable</span>
              </h2>
              <p className="mt-5 text-gray-400 max-w-md">
                Open to gameplay programming roles, collaborations and
                interesting Unreal Engine challenges. I usually reply within a
                day.
              </p>
              <a
                href={`mailto:${profile.socials.email}`}
                className="btn-primary mt-8"
              >
                Say hello
                <FaArrowRight size={14} />
              </a>
            </div>

            {/* right — contact rows */}
            <div className="flex flex-col divide-y divide-white/8 border border-white/10 rounded-2xl overflow-hidden bg-white/[0.015]">
              {links.map((l) => {
                const Icon = l.icon;
                return (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 px-5 py-5 hover:bg-blue-400/[0.05] transition-colors"
                  >
                    <span className="grid place-items-center w-11 h-11 rounded-xl border border-white/10 bg-white/5 text-sky-300 group-hover:border-blue-400/40 transition-colors">
                      <Icon size={17} />
                    </span>
                    <span className="min-w-0 flex-grow">
                      <span className="block text-xs text-gray-500">
                        {l.label}
                      </span>
                      <span className="block text-sm text-gray-200 truncate">
                        {l.value}
                      </span>
                    </span>
                    <FaArrowRight
                      size={13}
                      className="text-gray-600 group-hover:text-sky-300 group-hover:translate-x-1 transition-all"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <footer className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <span className="font-brand tracking-widest text-gray-400">
            ASHISH<span className="text-blue-400">.</span>SAKTHI
          </span>
          <span>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </span>
        </footer>
      </div>
    </section>
  );
}
