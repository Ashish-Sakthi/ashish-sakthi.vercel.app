import Scramble from "./Scramble";

/**
 * Section opener: a full-width hairline with an index, a mono title
 * that decodes in, and an optional note on the right.
 */
export function SectionHead({ index, title, note }) {
  return (
    <div className="reveal border-t border-line pt-4 mb-12 sm:mb-16 grid grid-cols-12 gap-x-6 label">
      <span className="col-span-2 md:col-span-3 text-fg-2">({index})</span>
      <Scramble text={title} className="col-span-6 md:col-span-6 text-fg" />
      {note && <span className="col-span-4 md:col-span-3 text-right">{note}</span>}
    </div>
  );
}
