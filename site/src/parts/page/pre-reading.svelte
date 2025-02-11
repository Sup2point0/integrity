<!-- @component PreReading

Links to pre-reading material for the current page.
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
  You’ll need to know the content in the following articles:
  
  {#each paths as path}
    {@const data = Site.pages[path]}

    <a href="{base}/{data?.dest}">{data?.head}</a>
  {/each}
</Banner>
