import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  esbuild: {
    supported: {
      "top-level-await": true,
    },
  },
  server: {
    fs: {
      allow: [".."],
    },
    open: process.env.BROWSER = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  },
});
