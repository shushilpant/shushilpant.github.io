import type { ReactNode } from "react";

/**
 * A red-pencil note in the manuscript gutter. Decorative voice —
 * hidden from screen readers; the facts it riffs on live in the
 * main text. A small drawn arrow points back at the content.
 */
export function MarginNote({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span aria-hidden className={`note block select-none ${className}`}>
      <svg
        width="26"
        height="14"
        viewBox="0 0 26 14"
        fill="none"
        className="mb-1 block"
      >
        <path
          d="M24 3C17 10 10 11.5 2.5 8.5M2.5 8.5l4.5-.5M2.5 8.5l2 3.8"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {children}
    </span>
  );
}
