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

<section>
  <h2> Featured </h2>
  <Card title="S-I+G-N Errors" intern="guides/sign" />
</section>

<section>
  <h2> Topics </h2>
  <Card title="Integrals" intern="guides/integrals" />
  <Card title="Completing the Square" intern="guides/complete-square" />
</section>


<style lang="scss">

section {
  margin: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  text-align: center;
}

</style>
