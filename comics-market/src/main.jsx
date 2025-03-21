import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./config/router/Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
