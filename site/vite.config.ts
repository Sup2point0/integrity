import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";


// yes, I prefer Edge's smooth scrolling :P
if (process.argv.includes("--open")) {
  process.env.BROWSER = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
}


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
  },
});
