<script lang="ts">

import sample from "@stdlib/random-sample";

import Site from "#scripts/site";

import Changes from "./changes.svx";

import Header from "#parts/core/header.svelte";
import Line from "#parts/page/line.svelte";
import Link from "#parts/ui/link.svelte";
import Clicky from "#parts/ui/clicky.svelte";
import Card from "#parts/ui/card.svelte";
import QuestionArray from "#parts/page/question-array.svelte";
import ArticleArray from "#src/parts/page/article-array.svelte";

import { onMount } from "svelte";


const all_featured_questions = Site.get_featured_questions();
const all_featured_scriptures = Site.get_featured_scriptures();

// start with 1 featured on server side
let featured_questions = [
  all_featured_questions[Math.floor(Math.random() * all_featured_questions.length)]
];
let featured_scriptures = [
  all_featured_scriptures[Math.floor(Math.random() * all_featured_scriptures.length)]
];

// fill in more randomly on client side
onMount(() => {
  featured_questions = sample(all_featured_questions, { size: 3, replace: false });
  featured_scriptures = sample(all_featured_scriptures, { size: 3, replace: false });
});

</script>


<svelte:head>
  <title> Integrity · Sup#2.0 </title>
  <meta name="description" content="Lovingly handcrafted maths questions for the intellectually adventurous. Features 200+ challenging integrals, plus problems on completing the square, graph drawing and more!" />
</svelte:head>


<section class="browse">
  <Header title="What fun are we having today?" />

  <div class="topics">
    <Card title="Integrals"
      intern="questions/integrals"
      latex={String.raw`\int f(x)\ dx`}
    />
    <Card title="Graph Drawing"
      intern="questions/graph-drawing"
      pict="previews/graph-drawing.png"
    />
    <Card title="Cool Graphs"
      intern="questions/cool-graphs"
      pict="previews/cool-graphs.png"
    />
  </div>

  <div class="centre">
    <Clicky text="View More" intern="questions" />
  </div>
</section>

<section class="whats-new">
  <Header title="What’s New" />

  <article style:text-align="left">
    <Changes />
  </article>
</section>

<section class="featured">
  <Header title="Featured" />
  
  <QuestionArray questions={featured_questions} />
  
  <div class="centre">
    <Clicky text="View All" intern="questions/all" />
  </div>
</section>

<section class="featured">
  <Header title="Scriptures" />

  <ArticleArray pages={featured_scriptures} />
  
  <div class="centre">
    <Clicky text="View All" intern="scriptures" />
  </div>
</section>

<section class="featured">
  <Header title="Places to Visit" />

  <ArticleArray pages={[
    Site.pages["docs/fun-facts.md"],
    { dest: "trails", head: "Trails", capt: "Statistics of <em>Integrity</em>" },
    { dest: "data", head: "Your Data", capt: "Your personal statistics on <em>Integrity</em>" },
  ]} />
  
  <div class="centre">
    <Clicky text="Explore More" intern="explore" />
  </div>
</section>

<Line />

<section>
  <a target="_blank" href="https://xkcd.com/2117">
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
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
}

.featured {
  .scriptures {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 1rem;
  }
}

.centre {
  width: max-content;
  margin: 2rem auto 0;
}

:global(article strong em) {
  display: block;
  color: $col-deut;
  font-style: normal;
}

</style>
