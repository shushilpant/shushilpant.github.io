import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// For the curious.
console.log(
  "%cField notes, set in type.%c\nIf you're reading this, we'd probably get along → shushil.pant@outlook.com",
  "font-family:Georgia,serif;font-style:italic;font-size:14px;color:#1a1712;",
  "font-family:monospace;font-size:11px;color:#56514a;"
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
