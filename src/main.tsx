import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App.tsx";

createRoot(document.getElementById("mfe-root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
