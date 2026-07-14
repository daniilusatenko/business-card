import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { profile } from "@/data";
import App from "./App";

document.title = `${profile.name} — ${profile.role}`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
