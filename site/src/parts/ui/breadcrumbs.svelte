<!-- @component Breadcrumbs

A bar of slash-separated `<Link>`s for navigation.
-->

<script lang="ts">

import Link from "#parts/ui/link.svelte";


interface Props {
  levels: {
    text: string,
    intern?: string,
  }[];
}

let { levels }: Props = $props();

</script>


<nav class="breadcrumbs">
  {#each levels.entries() as [i, level]}
    {#if i == levels.length -1}
      <div class="current"> {level.text} </div>
    
    {:else}
      <Link text={level.text} intern={level.intern} />
      <div class="separator">/</div>
    
    {/if}
  {/each}
</nav>


<style lang="scss">

nav.breadcrumbs {
  padding: 0.5em 0;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
}

.current {
  padding: 0.5em;
  color: $col-text;
  font-weight: 400;
}

.separator {
  margin: 0 0.5em;
  @include font-ui;
  color: $col-text-deut;
}

</style>
