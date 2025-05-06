// src/packages/dashboard/vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "dashboard_app",
      filename: "remoteEntry.js",
      exposes: {
        "./DashboardApp": "./src/DashboardApp.jsx",
      },
      shared: ["react", "react-dom", "@tanstack/react-router"],
    }),
    tailwindcss(),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3002,
  },
  preview: {
    port: 3002,
  },
});
