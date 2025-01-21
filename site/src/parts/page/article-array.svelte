<!-- @component ArticleArray

Displays a list of article cards.
-->

<script lang="ts">

import ArticleCard from "#parts/ui/card.article.svelte";


interface Props {
  paths: string[];
}

let { paths }: Props = $props();

</script>


<ul>
  {#each paths as path}
    <ArticleCard page={path} />
  {/each}
</ul>


<style lang="scss">

ul {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  gap: 1rem;
}

</style>
