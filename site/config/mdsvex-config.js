import remarkFootnotes from "remark-footnotes";
import remarkIndexFootnotes from "remark-numbered-footnote-labels";
import remarkMath from "remark-math";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex-svelte";

import { correct_hast_tree, render_katex_blocks } from "./preprocess-latex.js";
import { remark_alerts } from "./preprocess-alerts.js";
import { preprocess_desmos } from "./preprocess-desmos.js";


const mdsvex_config =
{
  extensions: [".svx", ".md"],
  remarkPlugins: [
    remarkFootnotes,
    remarkIndexFootnotes,
    remark_alerts,
    remarkMath,
    render_katex_blocks,
    preprocess_desmos,
  ],
  rehypePlugins: [
    rehypeSlug,
    correct_hast_tree,
    rehypeKatex,
    // inject_desmos,
  ],
};

export default mdsvex_config;
