<script lang="ts">

import Site from "#src/scripts/site";

import Card from "#parts/ui/card.svelte";

import Meta from "#parts/meta.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
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
  <Card title="Addvent"
    intern="questions/addvent"
    pict="previews/addvent-text.png"
  />
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
