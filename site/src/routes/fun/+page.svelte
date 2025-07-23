<script lang="ts">

import Card from "#parts/ui/card.svelte";

import Site from "#src/scripts/site";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Meta from "#parts/page/meta.svelte";

</script>


<Meta title="Challenges"
  desc="My solutions to various mathematical challenges"
/>


<Breadcrumbs levels={[
  { text: "Integrity", link: Site.root },
  { text: "Challenges" },
]} />

<Header title="Challenges"
  capt="My solutions to various mathematical challenges"
/>


<div class="content">
  <Card title="MIT Integration Bee"
    intern="fun/mit-ib"
    latex={String.raw`\int \frac {\sin{x}}{2e^x + \sin{x} + \cos{x}} \ dx`}
  />
  <Card title="UNSW Integration Bee"
    intern="fun/unsw-ib"
    latex={String.raw`\int_{0}^{\infin} \frac{1}{\left( x+1/x \right)^2} \ dx`}
  />
  <Card title="0–100 Year Challenge"
    intern="fun/year"
    latex={String.raw`2^{(0!+2)! + 5}`}
  />
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
