<script lang="ts">

import Site from "#src/scripts/site";

import Card from "#parts/ui/card.svelte";

import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Meta from "#parts/page/meta.svelte";

</script>


<Meta title="Docs"
  desc="Documentation about Integrity features"
/>


<Breadcrumbs levels={[
  { text: "Integrity", link: Site.root },
  { text: "Docs" },
]} />

<Header title="Docs" />


<div class="content">
  <Card title="Shards" intern="docs/shards" />
  <Card title="Tags" intern="docs/tags" />
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
