<script lang="ts">

import Site from "#scripts/site";

import Card from "#parts/ui/card.svelte";

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

<Header title="Speedrun"
  capt="Coming Soon!"
/>


<div class="content">
  <Card title="Differentiation"
    intern="speedrun/differentiation"
    latex={String.raw`\frac{d}{dx}\ e^x`}
  />
  <Card title="Integration"
    intern="speedrun/integration"
    latex={String.raw`\int f(x)\ dx `}
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
