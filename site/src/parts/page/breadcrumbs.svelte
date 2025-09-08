<!-- @component Breadcrumbs

A bar of slash-separated `<Link>`s for navigation.
-->

<script lang="ts">

import Link from "#parts/ui/link.svelte";
import CopyClicky from "#parts/page/copy-clicky.svelte";
import SaveButtons from "#parts/page/save-buttons.svelte";

interface Props {
  levels: {
    text: string,
    intern?: string,
    link?: string,
  }[];
  copy?: boolean;
  shard?: string;
}

let { levels, copy = false, shard }: Props = $props();

</script>


<nav class="breadcrumbs">
  <div class="left">
    {#each levels.entries() as [i, { text, intern, link }]}
      {#if i === levels.length -1}
        <div class="current"> {text} </div>
      
      {:else}
        <Link {text} {intern} {link} />
        <div class="separator">/</div>
      
      {/if}
    {/each}

    {#if copy}
      <div style:margin-left="0.25em">
        <CopyClicky value={levels.at(-1)?.text} />
      </div>
    {/if}
  </div>

  {#if shard}
    <div class="right">
      <SaveButtons {shard} />
    </div>
  {/if}
</nav>


<style lang="scss">

nav.breadcrumbs {
  width: 100%;
  padding: 0.5em 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}

.left {
  width: max-content;
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;

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
}

.right {
  display: flex;
  flex-direction: row;
}

</style>
