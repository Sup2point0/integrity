<script>

import { capitalise } from "#scripts/utils";

import PageContent from "#parts/base/static-page.svelte";

import { page } from "$app/state";

let data = $derived(page.data.metadata);

</script>


<PageContent levels={[
  { text: "Scriptures", intern: "scriptures" },
  { text: "Graph Drawing", intern: "scriptures/graph-drawing" },
  { text: capitalise(data.category), intern: `scriptures/graph-drawing/${data.category}` },
]} />
