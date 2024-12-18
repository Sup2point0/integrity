<script lang="ts">

import Site from "#scripts/site";

import Content from "../../../../guides/README.md";

import Card from "#parts/ui/card.svelte";
import Line from "#parts/page/line.svelte";

import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";

</script>


<Breadcrumbs levels={[
  { text: "Integrity", link: Site.root },
  { text: "Guides" }
]} />

<Header title="Guides" />

<article>
  <Content />
</article>

<Line />

<div class="content">
  <Card title="Integrals" intern="guides/integrals" />
  <Card title="Completing the Square" intern="guides/complete-square" />
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
