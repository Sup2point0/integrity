<script lang="ts">

import Site from "#scripts/site";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";

</script>


<Meta title="Differentiation · Speedrun"
  desc="..."
/>


<Breadcrumbs levels={[
  { text: "Integrity", link: Site.root },
  { text: "Speedrun", intern: "speedrun" },
  { text: "Differentiation "},
]} />

<Header title="Differentiation"
  capt="Coming Soon!"
/>
