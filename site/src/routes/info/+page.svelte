<script lang="ts">

import Card from "#parts/ui/card.svelte";

import Site from "#src/scripts/site";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Meta from "#parts/page/meta.svelte";

</script>


<Meta title="Info" />


<Breadcrumbs levels={[
  { text: "Integrity", link: Site.root },
  { text: "Info" },
]} />

<Header title="Info" />


<div class="content">
  <Card title="Synopsis" intern="info/synopsis" />
  <Card title="FAQ" intern="info/faq" />
  <Card title="decoded" intern="info/decoded" />
  <Card title="Privacy" intern="info/privacy" />
  <Card title="Licence" intern="info/licence" />
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
