<!-- @component ArticleArray

Displays a list of article cards.
-->

<script lang="ts">

import type { Page } from "#scripts/types";

import ArticleCard from "#parts/ui/card.article.svelte";


interface Props {
  paths?: string[];
  pages?: Page[];
}

let { paths, pages }: Props = $props();

</script>


<ul>
  {#if pages}
    {#each pages as page}
      <ArticleCard {page} />
    {/each}
  
  {:else if paths}
    {#each paths as path}
      <ArticleCard {path} />
    {/each}

  {:else}
  
  {/if}
</ul>


<style lang="scss">

ul {
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
}

</style>
