import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { profile } from "../data/portfolio";
import Scramble from "./Scramble";

const NAV_LINKS = [
  { label: "About", to: "about" },
  { label: "Experience", to: "experience" },
  { label: "Featured", to: "featured" },
  { label: "Work", to: "projects" },
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const goToSection = (id) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 border-b ${
          scrolled && !open
            ? "bg-bg/60 backdrop-blur-xl backdrop-saturate-150 border-line"
            : "border-transparent"
        }`}
      >
        <nav className="shell h-14 grid grid-cols-12 gap-x-6 items-center label">
          <Link
            to="/"
            onClick={() => goToSection("top")}
            className="col-span-6 md:col-span-3 !text-fg"
          >
            {profile.name}
          </Link>

          <span className="hidden md:flex col-span-3 items-center gap-2 text-fg-2">
            <span className="w-1.5 h-1.5 rounded-full bg-fg" />
            Open to roles
          </span>

          <div className="hidden md:flex col-span-6 justify-end gap-6">
            {NAV_LINKS.map((l) => (
              <button
                key={l.to}
                onClick={() => goToSection(l.to)}
                className="uppercase text-fg-2 hover:text-fg transition-colors"
              >
                <Scramble text={l.label} hover />
              </button>
            ))}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg hover:text-fg-2 transition-colors"
            >
              <Scramble text="Resume ↗" hover />
            </a>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="md:hidden col-span-6 justify-self-end uppercase text-fg"
          >
            {open ? "Close" : "Menu"}
          </button>
        </nav>
      </header>

      {/* Mobile menu — frosted full-screen sheet */}
      <div
        className={`md:hidden fixed inset-0 z-40 frost !border-0 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="shell pt-24 flex flex-col">
          {NAV_LINKS.map((l, i) => (
            <button
              key={l.to}
              onClick={() => goToSection(l.to)}
              className="flex items-baseline gap-4 py-3 border-b border-line text-left"
            >
              <span className="label">0{i + 1}</span>
              <span className="text-4xl font-medium tracking-tight">{l.label}</span>
            </button>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 label !text-fg"
          >
            Resume ↗
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
