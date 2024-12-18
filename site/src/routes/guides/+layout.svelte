<script>

import { page } from "$app/stores";

import Header from "#parts/core/header.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";

import { onMount } from "svelte";


let { children } = $props();


const levels = (
  $page.data.index ?
  (
    $page.data.index
      .map(each => ({ text: each, intern: $page.url.pathname }))
      .concat({ text: $page.data.head, intern: $page.url.pathname })
  ) : [
    { text: "Guides", intern: "guides" },
    { text: $page.data.head }
  ]
);


onMount(() => {
  if (typeof renderMathInElement !== "undefined") {
    renderMathInElement(document.body, {
      delimiters: [
        { left: "```math", right: "```", display: true },
        { left: "$", right: "$", display: false },
      ],
      throwOnError: false,
    });
  }
});

</script>


<svelte:head>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.18/dist/contrib/auto-render.min.js" integrity="sha384-hCXGrW6PitJEwbkoStFjeJxv+fSOOQKOPbJxSfM6G5sWZjAyWhXiTIIAmQqnlLlh" crossorigin="anonymous"></script>
</svelte:head>


<Breadcrumbs {levels} />

<Header title={$page.data.head} capt={$page.data.capt} />

<article>
  {@render children?.()}
</article>
