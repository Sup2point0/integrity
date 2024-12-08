<!-- @component RenderBlock

A block that renders HTML and LaTeX content from a list of `Block`s.
-->

<script lang="ts">

import type { Block } from "#scripts/types";

import Katex from "#parts/katex.svelte";


interface Props {
  source: Block | Block[];
}

let { source }: Props = $props();

</script>


{#snippet block(source: Block)}
  {#if source.kind === "latex"}
    <Katex text={source.content} />

  {:else}
    <p> {@html source.content} </p>

  {/if}
{/snippet}

<div class="content">
  {#if Array.isArray(source)}
    {#each source as each}
      {@render block(each)}

    {/each}

  {:else}
    {@render block(source)}

  {/if}
</div>


<style lang="scss">



</style>
