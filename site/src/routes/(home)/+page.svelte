<script lang="ts">

import Site from "#scripts/site";

import Card from "#parts/ui/card.svelte";
import QuestionCard from "#parts/ui/card.question.svelte";
import Link from "#parts/ui/link.svelte";
import Clicky from "#parts/ui/clicky.svelte";
import Line from "#parts/page/line.svelte";
import Katex from "#parts/katex.svelte";

import Header from "#parts/core/header.svelte";


const featured = Site.get_featured();

</script>


<svelte:head>
  <title> Integrity · Sup#2.0 </title>
  <meta name="description" content="All my hand-crafted maths questions!" />
</svelte:head>


<section class="browse">
  <Header title="What fun are we having today?" />

  <div class="topics">
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
    <!-- <Card title="Guess the Graph"
      intern="questions/guess-graph"
      pict="previews/guess-graph.png"
    />
    <Card title="Addvent"
      intern="questions/addvent"
      pict="previews/addvent-text.png"
    /> -->
  </div>

  <div class="centre">
    <Clicky text="View More" intern="questions" />
  </div>
</section>

<section class="featured">
  <Header title="Featured" />
  
  <div class="questions">
    {#each featured as question}
      <QuestionCard {question}
        latex={question.question.kind === "latex" ? question.question.content : ""}
        style="row"
      />
    {/each}
  </div>
  
  <div class="centre">
    <Clicky text="View All" intern="questions/all" />
  </div>
</section>

<Line />

<section>
  <a href="https://xkcd.com/2117">
    <img alt="XKCD 2117: Differentiation and Integration"
      src="https://imgs.xkcd.com/comics/differentiation_and_integration.png"
    />
  </a>

  <div class="centre">
    <Link text="XKCD, 2117" link="https://xkcd.com/2117" />
  </div>
</section>

<Line />


<style lang="scss">

section {
  margin: 0 0 4rem;
  text-align: center;
}

.browse .topics {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.featured .questions {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}


.centre {
  width: max-content;
  margin: 2rem auto 0;
}

</style>
