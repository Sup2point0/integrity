<!-- @component RenderBlock

A block that renders HTML and LaTeX content from a list of `Block`s.
-->

<script lang="ts">

import katex from "katex";

import type { Block } from "#scripts/types";

import Katex from "#parts/katex.svelte";
import Desmos from "#parts/desmos.svelte";


interface Props {
  source: Block | Block[] | undefined;
}

let { source }: Props = $props();

</script>


{#snippet block(source: Block)}
  {#if source.kind === "latex"}
    <Katex text={source.content} />

  {:else if source.kind === "desmos"}
    <div style:padding="2rem 0">
      <Desmos
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
    {@const chunks = source.content.split(/(\$[^$]+\$)/).map(
      chunk => (
          chunk.startsWith("$")
        ? katex.renderToString(chunk.slice(1, -1), {
            displayMode: false,
            throwOnError: false,
          })
        : (chunk
          .replaceAll(/(?<=^|[ \n\(])\*{3}(.+?)\*{3}($|[ \n,\.\)])/g, `<strong><em>$1</em></strong>$2`)
          .replaceAll(/(?<=^|[ \n\(])\*{2}(.+?)\*{2}($|[ \n,\.\)])/g, `<strong>$1</strong>$2`)
          .replaceAll(/(?<=^|[ \n\(])\*(.+?)\*($|[ \n,\.\)])/g, `<em>$1</em>$2`)
        )
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
