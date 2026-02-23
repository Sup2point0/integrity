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

import mdsvex_config from "#src/../config/mdsvex-config";
// import { split_latex } from "#scripts/utils";
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
  // ...mdsvex_config.remarkPlugins.map(plugin => ({ remarkPlugin: plugin })),
  { remarkPlugin: remarkMath },
  { rehypePlugin: rehypeRaw },
  // ...mdsvex_config.rehypePlugins.map(plugin => ({ rehypePlugin: plugin })),
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
        height="70vh"
      />
    </div>

  {:else}
    <Markdown md={source.content ?? source} {plugins} />

    <!-- {#each split_latex(source.content ?? source) as block}
      {#if block.kind === "latex"}
        {@html block.content}
      {:else}
        <Markdown md={block.content} {plugins} />
      {/if}
    {/each} -->

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
