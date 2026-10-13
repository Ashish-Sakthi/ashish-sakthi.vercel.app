/** Small shared building blocks for the launcher-style UI. */

/** Glossy coloured icon square. `tone`: blue | green | orange | violet | neutral */
export function Tile({ icon, tone = "neutral", small = false }) {
  const Icon = icon;
  return (
    <span className={`tile tile-${tone} ${small ? "tile-sm" : ""}`}>
      <Icon size={small ? 16 : 19} strokeWidth={2.25} />
    </span>
  );
}

export function SectionHeader({ title, subtitle, aside }) {
  return (
    <div className="reveal flex flex-wrap items-end justify-between gap-x-6 gap-y-3 mb-6">
      <div>
        <h2 className="text-2xl sm:text-[1.75rem] font-bold tracking-tight text-fg">
          {title}
        </h2>
        {subtitle && <p className="mt-1.5 text-sm text-fg-2">{subtitle}</p>}
      </div>
      {aside}
    </div>
  );
}
