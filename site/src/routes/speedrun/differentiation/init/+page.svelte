<script lang="ts">

import Site from "#scripts/site";
import { speedrun } from "#src/scripts/stores";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Clicky from "#parts/ui/clicky.svelte";

import { onMount } from "svelte";


onMount(() => {  
  $speedrun.new_run("derivatives");
});

</script>


<Meta title="Create · Speedrun"
  desc="Create a differentiation speedrun session."
/>


<Breadcrumbs levels={[
  { text: "Integrity", link: Site.root },
  { text: "Speedrun", intern: "speedrun" },
  { text: "Differentiation", intern: "speedrun/differentiation" },
  { text: "Create" },
]} />

<Header title="Create Speedrun"
  capt="Differentiation"
/>


<Clicky text="Create Speedrun" intern="speedrun/differentiation/run" />
