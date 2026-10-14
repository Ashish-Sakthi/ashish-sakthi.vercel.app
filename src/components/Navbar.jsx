import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { profile } from "../data/portfolio";
import Scramble from "./Scramble";

const NAV_LINKS = [
  { label: "Now building", to: "featured" },
  { label: "Projects", to: "projects" },
  { label: "Experience", to: "experience" },
  { label: "About", to: "about" },
  { label: "Contact", to: "contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
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

  // highlight whichever section sits across the middle of the viewport
  useEffect(() => {
    if (location.pathname !== "/") {
      setActive(null);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    const ids = ["top", ...NAV_LINKS.map((l) => l.to)];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [location.pathname]);

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

          <div className="hidden md:flex col-span-9 justify-end gap-6">
            {NAV_LINKS.map((l) => (
              <button
                key={l.to}
                onClick={() => goToSection(l.to)}
                aria-current={active === l.to ? "true" : undefined}
                className={`relative uppercase transition-colors hover:text-fg ${
                  active === l.to ? "text-fg" : "text-fg-2"
                }`}
              >
                <span
                  className={`absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-1 bg-fg transition-opacity duration-300 ${
                    active === l.to ? "opacity-100" : "opacity-0"
                  }`}
                />
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

      {/* Mobile menu: frosted full-screen sheet */}
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
