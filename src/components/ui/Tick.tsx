/** Blueprint registration mark — placed where hairlines meet. */
export function Tick({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      className={`pointer-events-none absolute text-bone/30 ${className}`}
    >
      <path d="M4.5 0v9M0 4.5h9" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
