<!-- @component RenderBlock

A block that renders HTML and LaTeX content from a list of `Block`s.
-->

<script lang="ts">

import katex from "katex";

import type { Block } from "#scripts/types";

import Katex from "#parts/katex.svelte";


interface Props {
  source: Block | Block[] | undefined;
}

let { source }: Props = $props();

</script>


{#snippet block(source: Block)}
  {#if source.kind === "latex"}
    <Katex text={source.content} />

  {:else}
    {@const chunks = source.content.split(/(\$[^$]+\$)/).map(
      chunk => (
          chunk.startsWith("$")
        ? katex.renderToString(chunk.slice(1, -1), {
            displayMode: false,
            throwOnError: false,
          })
        : chunk
      )
    )}

    {#each chunks as chunk}
      {@html chunk}
    {/each}

  {/if}
{/snippet}

<div class="content">
  {#if Array.isArray(source)}
    {#each source as each}
      {@render block(each)}

    {/each}

  {:else if source}
    {@render block(source)}

  {:else}
    <p> ... </p>

  {/if}
</div>



<style lang="scss">

.content {
  :global(strong) {
    font-weight: 400;
  }

  :global(a) {
    @include underline-link;
  }
}

</style>
