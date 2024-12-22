<script lang="ts">

import Site from "#src/scripts/site";
import { pick_random_question } from "#scripts/utils";

import Link from "#parts/ui/link.svelte";

import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Meta from "#parts/page/meta.svelte";

import { base } from "$app/paths";

</script>


<Meta title="Explore"
  desc="Explore the content of Integrity"
/>


<Breadcrumbs levels={[
  { text: "Integrity", link: Site.root },
  { text: "Explore" },
]} />

<Header title="Explore"
  capt="Integrity"
/>


<div class="content">
  <section class="questions">
    <h2> Questions </h2>
    <div class="links">
      <Link text="All" intern="questions/all" />
      <Link text="Integrals" intern="questions/integrals" />
      <Link text="Graph Drawing" intern="questions/graph-drawing" />
      <Link text="Completing the Square" intern="questions/complete-square" />
      <Link text="Guess the Graph" intern="questions/guess-graph" />
      <Link text="Addvent" intern="questions/addvent" />
      <Link text="Special" intern="questions/special" />
      <Link text="Random" button={() => {
        window.location.href = `${base}/question/${pick_random_question()}`;
      }} />
    </div>
  </section>

  <section class="tools">
    <h2> Tools </h2>
    <div class="links">
      <Link text="Speedrun" intern="speedrun" />
      <Link text="Workspace" intern="workspace" />
    </div>
  </section>

  <section class="docs">
    <h2> Docs </h2>
    <div class="links">
      <Link text="Shards" intern="docs/shards" />
      <Link text="Tags" intern="docs/tags" />
    </div>
  </section>

  <section class="info">
    <h2> Info </h2>
    <div class="links">
      <Link text="About" intern="info/synopsis" />
      <Link text="FAQ" intern="info/faq" />
      <Link text="decoded" intern="info/decoded" />
      <Link text="Privacy" intern="info/privacy" />
      <Link text="License" intern="info/license" />
    </div>
  </section>

  <section class="guides">
    <h2> Guides </h2>
    <div class="links">
      <Link text="Integrals" intern="" />
      <Link text="Why Draw Graphs?" intern="" />
      <Link text="Why Complete the Square?" intern="" />
      <Link text="Why Desmos?" intern="" />
    </div>
  </section>
</div>


<style lang="scss">

.content {
  margin: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 0;

  @media (max-width: 40rem) {
    justify-content: start;
  }
}

section {
  min-width: 12vw;
  padding: 0 1em;
  display: flex;
  flex-direction: column;
  align-items: collapse;

  .links {
    width: max-content;
    padding: 0 2em 1em 0;
  }
}


h2 {
  margin: 1em 0;
  padding: 0 0.1em 0.25em;
  @include font-serif;
  font-weight: 400;
  font-size: 200%;
}

</style>
