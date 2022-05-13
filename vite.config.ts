import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(async ({ command }) => ({
  plugins: [
    command === "serve" && (await import("@vitejs/plugin-react")).default(),
  ].filter(Boolean),
}));
