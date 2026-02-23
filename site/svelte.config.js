import adapter from "@sveltejs/adapter-static";
import { sveltePreprocess } from "svelte-preprocess";

import { mdsvex } from "mdsvex";

import mdsvex_config from "./config/mdsvex-config.js";
import scss_config from "./scss-config.js";

import site_pages from "./src/data/site.json" with { type: "json" };
import dyna_scriptures from "./src/data/dyna-scriptures.json" with { type: "json" };


function get_paths_of_index(index)
{
  return (
    Object.values(site_pages.index[index].pages)
      .map(path => site_pages.pages[path])
      .map(page => `/${page.dest}`)
  );
}


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
  
  /* @ts-ignore */
  onwarn: (warning, handler) => {
    if (!IGNORED_WARNINGS.includes(warning.code)) {
      handler(warning);
    }
  },
};

export default svelte_config;


const IGNORED_WARNINGS = [
  "css_unused_selector",
  "component_name_lowercase",
];
