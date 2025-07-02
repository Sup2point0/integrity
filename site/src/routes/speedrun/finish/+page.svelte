<script lang="ts">

import { speedrun } from "#src/scripts/stores";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";

</script>


<Meta title="Finish · Speedrun"
  desc="Speedrun finished, let’s go."
/>


<Breadcrumbs levels={[
  { text: "Speedrun", intern: "speedrun" },
  { text: "Finish" },
]} />

<Header title="Speedrun Results" />


<p>
  Finished
</p>
