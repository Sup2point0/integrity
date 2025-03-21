<script lang="ts">

import Card from "#parts/ui/card.svelte";

import Site from "#src/scripts/site";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Meta from "#parts/page/meta.svelte";

</script>


<Meta title="Challenges" />


<Breadcrumbs levels={[
  { text: "Integrity", link: Site.root },
  { text: "Challenges" },
]} />

<Header title="Challenges" />


<div class="content">
  <Card title="MIT Integration Bee" intern="challenges/mit-ib" />
  <Card title="UNSW Integration Bee" intern="challenges/unsw-ib" />
  <Card title="0–100 Year Challenge" intern="challenges/year" />
</div>


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
