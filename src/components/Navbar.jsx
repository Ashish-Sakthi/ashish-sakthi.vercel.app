import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Github, Linkedin, Mail, Menu, X, FileText } from "lucide-react";
import { profile } from "../data/portfolio";

const NAV_LINKS = [
  { label: "About", to: "about" },
  { label: "Experience", to: "experience" },
  { label: "Featured", to: "featured" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToSection = (id) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-200 ${
        scrolled || open
          ? "border-line bg-bg/70 backdrop-blur-xl backdrop-saturate-150"
          : "border-transparent"
      }`}
    >
      <nav className="shell h-16 flex items-center justify-between gap-6">
        <Link
          to="/"
          onClick={() => goToSection("top")}
          className="flex items-center gap-3 shrink-0"
        >
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-white/[0.06] border border-white/10 text-[13px] font-bold">
            A
          </span>
          <span className="text-[15px] font-semibold text-fg-2">
            <span className="text-fg">Ashish Sakthi</span>
            <span className="hidden lg:inline"> · Gameplay Programmer</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <button
              key={l.to}
              onClick={() => goToSection(l.to)}
              className="h-8 px-3 rounded-lg text-sm font-medium text-fg-2 hover:text-fg hover:bg-white/[0.05] transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="icon-btn hidden sm:grid"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="icon-btn hidden sm:grid"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${profile.socials.email}`}
            aria-label="Email"
            className="icon-btn hidden sm:grid"
          >
            <Mail size={16} />
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light !h-9 ml-1"
          >
            <FileText size={15} />
            Resume
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="icon-btn md:hidden"
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden shell pb-4 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <button
              key={l.to}
              onClick={() => goToSection(l.to)}
              className="text-left h-11 px-3 rounded-lg text-[15px] font-medium text-fg-2 hover:text-fg hover:bg-white/[0.05]"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
