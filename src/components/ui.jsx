import Scramble from "./Scramble";

/** Section opener: a full-width hairline with a mono title that decodes in. */
export function SectionHead({ title }) {
  return (
    <div className="reveal border-t border-line pt-4 mb-12 sm:mb-16 label">
      <Scramble text={title} className="text-fg" />
    </div>
  );
}
