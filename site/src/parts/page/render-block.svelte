<!-- @component RenderBlock

A block that renders HTML and LaTeX content.
-->

<script lang="ts">

import Markdown from "svelte-exmarkdown";
import { gfmPlugin } from "svelte-exmarkdown/gfm";
import remarkMath from "remark-math-6.0";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";

import type { Block } from "#scripts/types";

import Katex from "#parts/katex.svelte";
import Desmos from "#parts/desmos.svelte";


interface Props {
  source?:
      string | string[]
    | Block | Block[];
}

let { source }: Props = $props();


const plugins = [
  gfmPlugin(),
  { remarkPlugin: remarkMath },
  { rehypePlugin: rehypeRaw },
  { rehypePlugin: rehypeSlug },
  { rehypePlugin: rehypeKatex },
];

</script>


{#snippet block(source: Block | string)}
  {#if source.kind === "latex"}
    <Katex text={source.content} />

  {:else if source.kind === "desmos"}
    <div style:padding="2rem 0">
      <Desmos
        options={{ expressionsCollapsed: false }}
        blocks={
          source.content
            .split("<br><br>")
            .map(line => ({
              kind: "desmos",
              content: line,
            }))
        }
        height="69vh"
      />
    </div>

  {:else}
    <Markdown md={source.content ?? source} {plugins} />

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
    {@const _ = console.warn("Integrity: `<RenderBlock>` received nothing to render")}

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
