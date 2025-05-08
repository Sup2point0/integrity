<script lang="ts">

import Site from "#src/scripts/site";

import Card from "#parts/ui/card.svelte";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";

</script>


<Meta title="Topics"
  desc="Practice questions on various topics in mathematics"
/>


<Breadcrumbs levels={[
  { text: "Integrity", link: Site.root },
  { text: "Topics" },
]} />

<Header title="Topics" />

<div class="content">
  <Card title="Integrals"
    intern="questions/integrals"
    latex={"\\int f(x) \\, dx"}
  />
  <Card title="Graph Drawing"
    intern="questions/graph-drawing"
    pict="previews/graph-drawing.png"
  />
  <Card title="Completing the Square"
    intern="questions/complete-square"
    latex={"a(x - p)^2 + q"}
  />
  <Card title="Guess the Graph"
    intern="questions/guess-graph"
    pict="previews/guess-graph.png"
  />
  <Card title="Cool Graphs"
    intern="questions/cool-graphs"
    pict="previews/cool-graphs.png"
  />
  <Card title="Addvent"
    intern="questions/addvent"
    pict="previews/addvent-text.png"
  />
  <Card title="Special"
    intern="questions/special"
    latex={String.raw`\exp(x) = \sum_{n=0}^{\infin} \frac{x^n}{n!}`}
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
