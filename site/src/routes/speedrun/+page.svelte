<script lang="ts">

import Site from "#scripts/site";

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

<Header title="Speedrun" />

<p> Coming soon! </p>
