<script>

import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import DynamicScriptureView from "#parts/base/dynamic-scripture.svelte";

import { page } from "$app/state";

</script>


<Breadcrumbs levels={[
  { text: "Scriptures", intern: "scriptures" },
  { text: "Graph Drawing", intern: "scriptures/graph-drawing" },
  { text: page.data.title },
]} />


<DynamicScriptureView />
