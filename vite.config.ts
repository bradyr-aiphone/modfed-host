import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";

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
          requiredVersion: "18.3.1",
        },
        "react-dom": {
          requiredVersion: "18.3.1",
        },
        "react-router-dom": {
          requiredVersion: "6.3.0",
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
