<script lang="ts">

import Site from "#scripts/site";
import { speedrun } from "#scripts/stores";

import Clicky from "#parts/ui/clicky.svelte";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";

</script>


<Meta title="Speedrun"
  desc="Test your mathematical speed and accuracy"
/>


<Breadcrumbs levels={[
  { text: "Integrity", link: Site.root },
  { text: "Speedrun" },
]} />

<Header title="Speedrun"
  capt="Coming Soon!"
/>


<Clicky
  text="Continue Speedrun"
  intern="speedrun/run"
  disabled={$speedrun.run && (
    !$speedrun.run.started ||
    ($speedrun.run.started && $speedrun.run.finished)
  )}
/>
<div style:height="1rem"></div>
<Clicky
  text="Create a New Speedrun"
  intern="speedrun/init"
/>


<style lang="scss">

.content {
  margin: 1rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
  text-align: center;
}

</style>
