import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// A note for the engineers who open the console.
console.log(
  "%c SHUSHIL PANT — FIELD NOTES %c\n\nReact 19 · TypeScript · Tailwind 4 · Vite\nSource: github.com/shushilpant/shushilpant.github.io",
  "background:#ffb454;color:#08090c;font-family:monospace;font-weight:bold;padding:4px 8px;",
  "color:#a49f93;font-family:monospace;"
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
