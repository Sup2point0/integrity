import adapter from "@sveltejs/adapter-static";
import { sveltePreprocess } from "svelte-preprocess";

import { mdsvex } from "mdsvex";
import rehypeSlug from "rehype-slug";
import remarkFootnotes from "remark-footnotes";
import remarkIndexFootnotes from "remark-numbered-footnote-labels";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex-svelte";

import scss_config from "./scss-config.js";
import { correct_hast_tree, render_katex_blocks } from "./preprocess-latex.js";
import { remark_alerts } from "./preprocess-alerts.js";

import site_pages from "./src/data/site.json" with { type: "json" };
import dyna_scriptures from "./src/data/scriptures.json" with { type: "json" };


function get_paths_of_index(index)
{
  return (
    Object.values(site_pages.index[index].pages)
      .map(path => site_pages.pages[path])
      .map(page => `/${page.dest}`)
  );
}


const mdsvex_config =
{
  extensions: [".svx", ".md"],
  remarkPlugins: [
    remarkFootnotes,
    remarkIndexFootnotes,
    remark_alerts,
    remarkMath,
    render_katex_blocks
  ],
  rehypePlugins: [
    rehypeSlug,
    correct_hast_tree,
    rehypeKatex,
  ],
};

const svelte_config =
{
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

        ...get_paths_of_index("graph-drawing"),
        ...get_paths_of_index("library"),

        (() => {
          console.log(...get_paths_of_index("library"));
          return "/";
        })(),

        ...(Object.entries(dyna_scriptures).flatMap(
          ([chapter, pages]) => Object.keys(pages).map(
            page => (
              chapter === "graph-drawing" ?
                `/scriptures/graph-drawing/dyna/${page}`
              :
                `/desmos/gamedev/${chapter.toLowerCase()}/${page}`
            )
          )
        )),
      ],
    },
  },

  preprocess: [
    mdsvex(mdsvex_config),
    sveltePreprocess({
      extensions: [".svelte"],
      scss: scss_config,
    }),
  ],
  
  onwarn: (warning, handler) => {
    if (
      warning.code !== "css_unused_selector" &&
      warning.code !== "component_name_lowercase"
    ) {
      handler(warning);
    }
  },
};

export default svelte_config;
