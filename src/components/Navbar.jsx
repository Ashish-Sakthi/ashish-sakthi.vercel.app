import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
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
    const onScroll = () => setScrolled(window.scrollY > 24);
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
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-white/10 py-3"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <nav className="mx-auto w-full max-w-[1680px] px-4 sm:px-6 lg:px-16 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          onClick={() => goToSection("top")}
          className="group flex items-center gap-3"
        >
          <span className="grid place-items-center w-9 h-9 rounded-lg border border-blue-400/40 bg-blue-400/5 font-brand font-bold text-sky-300 group-hover:border-blue-400 transition-colors">
            A
          </span>
          <span className="font-brand text-sm sm:text-base font-bold tracking-widest text-white">
            ASHISH<span className="text-blue-400">.</span>SAKTHI
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <button
              key={l.to}
              onClick={() => goToSection(l.to)}
              className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden sm:grid place-items-center w-9 h-9 rounded-lg text-gray-300 hover:text-sky-300 hover:bg-white/5 transition-colors"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden sm:grid place-items-center w-9 h-9 rounded-lg text-gray-300 hover:text-sky-300 hover:bg-white/5 transition-colors"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !px-4 !py-2 text-sm"
          >
            <FaFileDownload size={14} />
            <span className="hidden sm:inline">Resume</span>
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="md:hidden grid place-items-center w-9 h-9 rounded-lg text-white hover:bg-white/5"
          >
            {open ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto w-full max-w-[1680px] px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <button
              key={l.to}
              onClick={() => goToSection(l.to)}
              className="text-left px-3 py-3 rounded-lg text-gray-200 hover:bg-white/5 hover:text-sky-300 transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
