import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import DashboardApp from "./DashboardApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DashboardApp />
  </StrictMode>,
);
