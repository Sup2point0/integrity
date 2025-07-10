<script lang="ts">

import Site from "#scripts/site";

import Content from "../../../../scriptures/README.md";

import Card from "#parts/ui/card.svelte";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Line from "#parts/page/line.svelte";
import ArticleArray from "#parts/page/article-array.svelte";

</script>


<Meta title="Scriptures" desc="Walkthroughs and showerthoughts on mathematics" />


<Breadcrumbs levels={[
  { text: "Integrity", link: Site.root },
  { text: "Scriptures" }
]} />

<Header title="Scriptures" />


<article>
  <Content />
</article>

<Line />

<section>
  <h2> General </h2>

  <ArticleArray paths={[
    "scriptures/general/sign.md",
    "scriptures/general/inequalities.md",
  ]} />
</section>

<section>
  <h2> Topics </h2>

  <div class="browse">
    <Card title="Integration"
      intern="scriptures/integrals"
      latex={String.raw`\int f(x) \, dx`}
    />
    <Card title="Completing the Square"
      intern="scriptures/complete-square"
      latex={String.raw`a(x-p)^2 + q`}
    />
    <Card title="Game Development in Desmos"
      intern="scriptures/desmos/gamedev"
      latex={String.raw`g_{state} \to 1 - g_{state}`}
    />
  </div>
</section>


<style lang="scss">

section {
  margin: 0 0 4rem;
  text-align: center;
}

.browse {
  margin: 1rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
}


h2 {
  margin: 1em 0;
  padding: 0 0.1em 0.25em;
  @include font-serif;
  font-weight: 400;
  font-size: 200%;
}

</style>
