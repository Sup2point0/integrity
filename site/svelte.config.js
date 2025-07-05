import adapter from "@sveltejs/adapter-static";
import { sveltePreprocess } from "svelte-preprocess";

import { mdsvex } from "mdsvex";
import rehypeSlug from "rehype-slug";
import remarkFootnotes from "remark-footnotes";
import remarkIndexFootnotes from "remark-numbered-footnote-labels";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex-svelte";

import scss_config from "./scss-config.js";
import { correct_hast_tree, render_katex_blocks } from "./latex-config.js";


const config = {
  extensions: [".svelte", ".svx", ".md"],
  
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
    },
    prerender: {
      handleHttpError: "warn",
      handleMissingId: "ignore",
      entries: [
        "/",
        "/speedrun/finish",
        "/trails/integrity",
        "/scriptures/desmos/gamedev/prerequisites/graphs",
      ]
    },
  },

  preprocess: [
    mdsvex({
      extensions: [".svx", ".md"],
      remarkPlugins: [
        remarkFootnotes,
        remarkIndexFootnotes,
        remarkMath,
        render_katex_blocks
      ],
      rehypePlugins: [
        rehypeSlug,
        correct_hast_tree,
        rehypeKatex,
      ],
    }),
    sveltePreprocess({
      extensions: [".svelte"],
      scss: scss_config,
    }),
  ],
  
  onwarn: (warning, handler) => {
    if (
      warning.code === "css_unused_selector" ||
      warning.code === "component_name_lowercase"
    ) {
      return;
    }
    handler(warning);
  },
};

export default config;
