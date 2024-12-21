<script lang="ts">

// import { renderMathInElement } from "katex/contrib/auto-render";

import Header from "#parts/core/header.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";

import { onMount } from "svelte";
import { page } from "$app/stores";


let { children } = $props();

let Article: HTMLElement;


let path = $derived($page.url.pathname.split("/").slice(-2));

const levels = [
  { text: "Guides", intern: "guides" },
  ...$page.data.index?.map(each => ({ text: each, intern: each })),
  { text: $page.data.head },
];


function render_latex() {
  console.log("rendering latex")
  if (Article && renderMathInElement) {
    console.log(Article)
    renderMathInElement(Article, {
      delimiters: [
        { left: "```math\n", right: "\n```", display: true },
        { left: "$", right: "$", display: false },
      ],
      throwOnError: true,
    });
  }
}

// onMount(() => {
//   setTimeout(render_latex, 500)
// });

</script>


<svelte:head>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.18/dist/contrib/auto-render.min.js"
    integrity="sha384-hCXGrW6PitJEwbkoStFjeJxv+fSOOQKOPbJxSfM6G5sWZjAyWhXiTIIAmQqnlLlh"
    crossorigin="anonymous"
    >
  </script>
</svelte:head>


<Breadcrumbs {levels} />

<Header title={$page.data.head} capt={$page.data.capt} />

<article bind:this={Article}>
  {@render children?.()}
</article>
