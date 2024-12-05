import adapter from "@sveltejs/adapter-static";
import { sveltePreprocess } from "svelte-preprocess";


const config = {
  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: "404.html",
      precompress: false,
      strict: true,
    }),
    paths: {
      base: process.argv.includes("dev") ? "" : process.env.BASE_PATH
    },
    alias: {
      "#src": "./src/",
      "#parts": "./src/parts",
      "#styles": "./src/styles",
      "#scripts": "./src/scripts",
      "#stores": "./src/scripts/stores",
    },
    prerender: {
      handleHttpError: "warn",
    },
  },

  preprocess: [
    sveltePreprocess({
      scss: {
        prependData: `
          @use './src/styles/mixins/~colours' as *;
          @use './src/styles/mixins/~fonts' as *;
          @use './src/styles/mixins/~interact' as *;
        `,
      }
    }),
  ],
};

export default config;
