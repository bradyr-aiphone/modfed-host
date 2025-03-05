import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import deps from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        acp: {
          external: "http://localhost:5174/remoteEntry.js",
          externalType: "url",
          format: "var",
          from: "webpack",
        },
        viteApp: "http://localhost:5172/assets/remoteEntry.js",
      },
      shared: {
        react: {
          requiredVersion: deps.dependencies.react,
        },
        "react-dom": {
          requiredVersion: deps.dependencies["react-dom"],
        },
        "react-router-dom": {
          requiredVersion: deps.dependencies["react-router-dom"],
        },
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    sourcemap: true,
  },
});
