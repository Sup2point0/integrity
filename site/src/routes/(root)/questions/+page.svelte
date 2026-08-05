<script lang="ts">

import Site from "#scripts/site";

import { Meta, Breadcrumbs, Header } from "#parts/core";
import { Card, CardsContainer } from "#parts/ui";

</script>


<Meta title="Questions"
  desc="Hundreds of practice questions on various topics in mathematics"
/>


<Breadcrumbs levels={[
  { text: "Integrity", link: Site.root },
  { text: "Questions" },
]} />

<Header title="Questions" />

<CardsContainer>
  <Card title="Integrals"
    intern="questions/integrals"
    latex={String.raw`\int f(x) \, dx`}
  />
  <Card title="Graph Drawing"
    intern="questions/graph-drawing"
    pict="previews/graph-drawing.png"
  />
  <Card title="Completing the Square"
    intern="questions/complete-square"
    latex={String.raw`a(x - p)^2 + q`}
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
</CardsContainer>
