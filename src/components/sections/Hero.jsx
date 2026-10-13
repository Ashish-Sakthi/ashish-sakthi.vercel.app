import { useEffect, useState } from "react";
import {
  LayoutGrid,
  Gamepad2,
  Play,
  Cpu,
  MapPin,
  Briefcase,
  Copy,
  Check,
  ArrowDown,
  ChevronRight,
  Terminal,
} from "lucide-react";
import { profile, skills, featuredGame, projects } from "../../data/portfolio";
import { Tile } from "../ui";
import { scrollToId } from "../../lib/scroll";

const playTrailer = () => {
  scrollToId("featured");
  window.dispatchEvent(new Event("play-trailer"));
};

const ACTIONS = [
  {
    key: "1",
    icon: LayoutGrid,
    tone: "blue",
    title: "View Projects",
    sub: `${projects.length} Unreal Engine prototypes`,
    run: () => scrollToId("projects"),
  },
  {
    key: "2",
    icon: Gamepad2,
    tone: "green",
    title: featuredGame.title,
    sub: `Now building at ${featuredGame.studio}`,
    run: () => scrollToId("featured"),
  },
  {
    key: "3",
    icon: Play,
    tone: "orange",
    title: "Watch Trailer",
    sub: "Soulslike · PlayStation 5 & PC",
    run: playTrailer,
  },
];

const TABS = {
  whoami: [
    ...profile.facts.map(([k, v]) => `${(k + ":").padEnd(11)}${v}`),
    "Ready. Pick an action above.",
  ],
  toolkit: skills.map((s) => `+ ${s}`),
};

export default function Hero() {
  const [tab, setTab] = useState("whoami");
  const [copied, setCopied] = useState(false);
  const lines = TABS[tab];

  // Number keys trigger the action cards, like the launcher's Ctrl shortcuts.
  useEffect(() => {
    const onKey = (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.target.closest?.("input, textarea, [contenteditable]")) return;
      ACTIONS.find((a) => a.key === e.key)?.run();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      /* clipboard unavailable — ignore */
    }
  };

  return (
    <section id="top" className="pt-24 sm:pt-28 pb-6">
      <div className="shell">
        {/* Title row */}
        <div className="reveal flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <h1 className="text-[clamp(2.75rem,7vw,4.75rem)] font-extrabold tracking-[-0.035em] leading-[0.95]">
              {profile.name}
            </h1>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="chip">
                <Briefcase size={13} /> Gameplay Programmer
              </span>
              <span className="chip">
                <Cpu size={13} /> UE_5 · C++
              </span>
              <span className="chip">
                <MapPin size={13} /> {profile.location}
              </span>
            </div>
          </div>

          <button
            onClick={() => scrollToId("contact")}
            className="panel panel-hover text-left w-full md:w-80 px-5 py-4 flex items-start gap-3"
          >
            <span className="dot dot-live mt-[7px]" />
            <span>
              <span className="block font-semibold">Available</span>
              <span className="block text-xs text-fg-3 mt-0.5">
                Open to gameplay programming roles
              </span>
            </span>
          </button>
        </div>

        <p className="reveal mt-7 max-w-2xl text-[17px] leading-relaxed text-fg-2">
          I build combat, enemy AI and ability systems in Unreal Engine 5 and
          C++ — currently shipping{" "}
          <span className="text-fg font-medium">{featuredGame.title}</span> at{" "}
          {featuredGame.studio} for PlayStation 5 and PC.
        </p>

        {/* Action cards */}
        <div className="reveal mt-8 grid sm:grid-cols-3 gap-3">
          {ACTIONS.map((a) => (
            <button
              key={a.key}
              onClick={a.run}
              className="panel panel-hover text-left p-4 flex items-center gap-4"
            >
              <Tile icon={a.icon} tone={a.tone} />
              <span className="min-w-0">
                <span className="block font-semibold truncate">{a.title}</span>
                <span className="block text-xs text-fg-2 mt-0.5 truncate">
                  {a.sub}
                </span>
              </span>
              <span className="kbd absolute top-3 right-3.5 hidden sm:block">{a.key}</span>
            </button>
          ))}
        </div>

        {/* Console */}
        <div className="reveal panel mt-3 p-3">
          <div className="flex items-center justify-between gap-2 px-1">
            <div className="flex items-center gap-1">
              {Object.keys(TABS).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`h-8 px-3 rounded-lg inline-flex items-center gap-2 text-[13px] font-semibold transition-colors ${
                    tab === t
                      ? "bg-white/[0.07] border border-white/10 text-fg"
                      : "border border-transparent text-fg-3 hover:text-fg-2"
                  }`}
                >
                  <Terminal size={13} />
                  {t}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 text-fg-3">
              <span className="kbd">{lines.length} lines</span>
              <button
                onClick={copy}
                aria-label="Copy console output"
                className="grid place-items-center w-7 h-7 rounded-md hover:bg-white/[0.06] hover:text-fg-2 transition-colors"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
              </button>
            </div>
          </div>

          <pre className="mt-2 px-2 py-3 min-h-[11.5rem] font-mono text-[12.5px] leading-[1.75] text-[#8b8b92] whitespace-pre-wrap">
            {lines.join("\n")}
          </pre>

          <div className="well flex items-center gap-3 pl-4 pr-2 h-12">
            <ChevronRight size={15} className="text-[#3fd47a] shrink-0" />
            <span className="text-sm text-fg-3 truncate">
              <span className="hidden sm:inline">Press 1, 2 or 3 to jump · </span>
              Scroll to explore
            </span>
            <button
              onClick={() => scrollToId("about")}
              aria-label="Scroll to about"
              className="ml-auto grid place-items-center w-9 h-9 rounded-full bg-white/[0.08] text-fg-2 hover:bg-white/[0.14] hover:text-fg transition-colors shrink-0"
            >
              <ArrowDown size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
