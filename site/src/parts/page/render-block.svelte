<!-- @component RenderBlock

A block that renders HTML and LaTeX content from a list of `Block`s.
-->

<script lang="ts">

import katex from "katex";

import { split_latex } from "#scripts/utils";
import type { Block } from "#scripts/types";

import Katex from "#parts/katex.svelte";
import Desmos from "#parts/desmos.svelte";


interface Props {
  source: Partial<Block> | Partial<Block>[] | undefined;
}

let { source }: Props = $props();

</script>


{#snippet block(source: Block)}
  {#if source.kind === "latex"}
    <Katex text={source.content} />

  {:else if source.kind === "desmos"}
    <div style:padding="2rem 0">
      <Desmos
        options={{ expressionsCollapsed: false }}
        blocks={
          source.content.split("<br><br>")
          .map(line => ({
            kind: "desmos",
            content: line,
          }))
        }
        height="70vh"
      />
    </div>

  {:else}
    {#each split_latex(source.content) as chunk}
      {@html chunk}
    {/each}

  {/if}
{/snippet}

<div class="block-content">
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

.block-content {
  :global(strong) {
    font-weight: 400;
  }

  :global(a) {
    @include underline-link;
  }
}

</style>
