type MarqueeProps = {
  items: string[];
};

/** Slow full-bleed ribbon of hollow display type. Purely decorative. */
export function Marquee({ items }: MarqueeProps) {
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-baseline whitespace-nowrap">
      {items.map((item) => (
        <span key={`${key}-${item}`} className="flex items-baseline">
          <span className="text-outline font-display px-7 text-[clamp(2.4rem,5.2vw,4.2rem)] font-light italic leading-none">
            {item}
          </span>
          <span className="font-mono text-sm text-amber" aria-hidden>
            *
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      aria-hidden
      className="marquee relative select-none overflow-hidden border-y border-edge py-7"
    >
      <div className="marquee-track flex w-max">
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}
