<script lang="ts">

import Card from "#parts/ui/card.svelte";

import Site from "#src/scripts/site";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Meta from "#parts/meta.svelte";

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
  <Card title="License" intern="info/license" />
</div>


<style lang="scss">

.content {
  margin: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  text-align: center;
}

</style>
