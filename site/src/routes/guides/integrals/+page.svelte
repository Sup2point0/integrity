<script lang="ts">

import Site from "#scripts/site";

import Content from "./integrals.svx";

import ArticleArray from "#parts/page/article-array.svelte";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Line from "#parts/page/line.svelte";

</script>


<Meta title="Integration · Guides" />


<Breadcrumbs levels={[
  { text: "Guides", intern: "guides" },
  { text: "Integration" }
]} />

<Header title="Integration" />


<article>
  <Content />
</article>

<Line />

<section>
  <ArticleArray paths={Site.index.integrals.pages.filter(path => !(
       Site.index.antiderivatives.pages.includes(path)
    || Site.index.methods.pages.includes(path)
    // || Site.index.strategies.pages.includes(path)
    || Site.index.collections.pages.includes(path)
    || Site.index.adventures.pages.includes(path)
  ))} />
</section>

<section>
  <h2 id="antiderivatives"> Antiderivatives </h2>
  <ArticleArray paths={Site.index.antiderivatives.pages} />
</section>

<section>
  <h2 id="methods"> Methods </h2>
  <ArticleArray paths={Site.index.methods.pages} />
</section>

<!-- <section>
  <h2 id="strategies"> Strategies </h2>
  <ArticleArray paths={Site.index.strategies.pages} />
</section> -->

<section>
  <h2 id="collections"> Collections </h2>
  <ArticleArray paths={Site.index.collections.pages} />
</section>

<section>
  <h2 id="adventures"> Adventures </h2>
  <ArticleArray paths={Site.index.adventures.pages} />
</section>


<style lang="scss">

section {
  margin: 0 0 4rem;
  text-align: center;
}

h2 {
  margin: 1em 0;
  padding: 0 0.1em 0.25em;
  @include font-serif;
  font-weight: 400;
  font-size: 200%;
}

</style>
