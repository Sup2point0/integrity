<script lang="ts">

import Site from "#scripts/site";

import Card from "#parts/ui/card.svelte";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";

</script>


<Meta title="Desmos"
  desc="All things Desmos"
/>


<Breadcrumbs levels={[
  { text: "Integrity", link: Site.root },
  { text: "Desmos" }
]} />

<Header title="Desmos"
  capt="All things Desmos"
/>


<div class="browse">
  <Card title="Docs"
    intern="desmos/docs"
    latex={String.raw`I_\text{desmos} \ : \ I()`}
  />
  <Card title="Game Development"
    intern="desmos/gamedev"
    latex={String.raw`g_{state} \to 1 - g_{state}`}
  />
  <!-- <Card title="Gradient Descent"
    intern="desmos/grad-desc"
    latex={String.raw`\frac{\partial}{\partial x} \ L(x)`}
  /> -->
</div>


<style lang="scss">

.browse {
  margin: 1rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
  text-align: center;
}

</style>
