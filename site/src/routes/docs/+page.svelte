<script lang="ts">

import Card from "#parts/ui/card.svelte";

import Site from "#src/scripts/site";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Meta from "#parts/meta.svelte";

</script>


<Meta title="Topics"
  desc="Practice questions on various topics in mathematics"
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
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  text-align: center;
}

</style>
