<script lang="ts">

import sample from "@stdlib/random-sample";

import Site from "#scripts/site";
import type { Question, Page } from "#scripts/types";

import Changes from "./changes.svx";
import { pick_trivia, type Trivia } from "./trivia.ts";

import Header from "#parts/core/header.svelte";
import ArticleArray from "#src/parts/page/article-array.svelte";
import Card from "#parts/ui/card.svelte";
import Clicky from "#parts/ui/clicky.svelte";
import Line from "#parts/page/line.svelte";
import Link from "#parts/ui/link.svelte";
import QuestionArray from "#parts/page/question-array.svelte";
import RenderBlock from "#parts/page/render-block.svelte";

import { onMount } from "svelte";
import { expoInOut } from "svelte/easing";
import { slide } from "svelte/transition";


const all_featured_questions = Site.get_featured_questions();
const all_featured_scriptures = Site.get_featured_scriptures();

// start with none featured on server side
let featured_trivia: Trivia = null;
let featured_questions: Question[] = [];
let featured_scriptures: Page[] = [];

// then fill in on client side
onMount(() => {
  featured_trivia = pick_trivia();
  featured_questions = sample(all_featured_questions, { size: 3, replace: false });
  featured_scriptures = sample(all_featured_scriptures, { size: 3, replace: false });
});

</script>


<svelte:head>
  <title> Integrity · Sup#2.0 </title>
  <meta name="description" content="Lovingly handcrafted maths questions for the intellectually adventurous. Features 300 challenging integrals, plus problems on completing the square, graph drawing and more!" />
</svelte:head>


{#if featured_trivia}
  <section class="trivia"
    transition:slide={{ duration: 1000, delay: 200, easing: expoInOut }}
  >
    <h2> TODAY’S TRIVIA </h2>

    <div class="centre">
      <RenderBlock source={{ content: featured_trivia.text }} />
    </div>
    
    {#if featured_trivia.note}
      <p class="note">
        <RenderBlock source={{ content: featured_trivia.note }} />
      </p>
    {/if}
  </section>
{/if}

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

  <div class="centre">
    <Clicky text="View All" intern="info/changelog" />
  </div>
</section>

<section class="featured">
  <Header title="Featured Questions" />
  
  <QuestionArray questions={featured_questions} />
  
  <div class="centre">
    <Clicky text="View All" intern="questions/all" />
  </div>
</section>

<section class="featured">
  <Header title="Featured Scriptures" />

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

.trivia {
  min-width: 40rem;
  max-width: max-content;
  padding: 1rem 3rem;
  margin-left: auto;
  margin: 0 auto 2rem;
  border: 1px solid $col-line-fallback;
  border: 1px solid $col-line;
  border-radius: 0.5em;

  h2 {
    @include font-ui;
    font-weight: 500;
    color: $col-deut;
    text-align: center;
  }

  .centre {
    width: 100%;
    margin: 1rem 0 0;
    @include font-serif;
    font-size: 150%;
    text-wrap: wrap;

    & :global(.katex) {
      font-size: 100%;
    }
  }

  p.note {
    margin-top: 1rem;
    @include font-ui;
    font-size: 90%;
    color: $col-text-deut;
  }
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
