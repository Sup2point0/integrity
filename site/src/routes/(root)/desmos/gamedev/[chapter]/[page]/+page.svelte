<script>

import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import DynamicScriptureView from "#parts/base/dynamic-scripture.svelte";

import { page } from "$app/state";

</script>


<Breadcrumbs levels={[
  { text: "Desmos", intern: "desmos" },
  { text: "Game Development", intern: "desmos/gamedev" },
  { text: page.data.chapter, intern: `desmos/gamedev/${page.data.chapter.toLowerCase()}` },
  { text: page.data.title },
]} />


<DynamicScriptureView />
