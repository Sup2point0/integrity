<script>

import DynamicScriptureView from "#parts/base/dynamic-scripture.svelte";
import { Breadcrumbs } from "#parts/core";

import { page } from "$app/state";

</script>


<Breadcrumbs levels={[
  { text: "Scriptures", intern: "scriptures" },
  { text: "Graph Drawing", intern: "scriptures/graph-drawing" },
  { text: page.data.title },
]} />


<DynamicScriptureView />
