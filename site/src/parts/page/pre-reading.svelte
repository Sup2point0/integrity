<!-- @component `PreReading`

A banner containing links to pre-reading material for the current page.
-->

<script lang="ts">

import Site from "#scripts/site";

import Banner from "#parts/page/banner.svelte";

import { base } from "$app/paths";


interface Props {
  paths: string[]
}

let { paths }: Props = $props();

</script>


<Banner title="Pre-Reading Material">
  For this scripture, you’ll need to be familiar with content from:
  
  {#each paths as path, i}
    {@const data = Site.pages[path]}

    {#if i > 0} , {/if}
    <a href="{base}/{data?.dest}">{data?.head ?? "<Unwritten>"}</a>
  {/each}
</Banner>


<style lang="scss">

a {
  @include underline-link;
}

</style>
