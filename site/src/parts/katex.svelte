<!-- @component Katex

LaTeX rendered by KaTeX.
-->

<script lang="ts">

import katex from "katex";

import type { Latex } from "#scripts/types";

import { onMount } from "svelte";


interface Props {
  text: Latex | undefined;
  inline?: boolean;
  client_render?: boolean;
}

let { text, inline = false, client_render = false }: Props = $props();


const opts = {
  displayMode: !inline,
  throwOnError: false,
};


/* svelte-ignore non_reactive_update */
let self: HTMLElement | null = null;

onMount(() => {
  if (!text || !self) return;
  
  katex.render(text, self, opts);
});

</script>


{#if client_render}
  <span bind:this={self}></span>

{:else}
  {@html text && katex.renderToString(text, opts)}

{/if}
