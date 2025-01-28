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


<Header title="Explore" capt="Integrity" />

<div class="content">
  <section>
    <h2> Questions </h2>
    <div class="links">
      <Link text="All" intern="questions/all" />
      <Link text="Integrals" intern="questions/integrals" />
      <Link text="Graph Drawing" intern="questions/graph-drawing" disabled={true} />
      <Link text="Completing the Square" intern="questions/complete-square" />
      <Link text="Guess the Graph" intern="questions/guess-graph" disabled={true} />
      <Link text="Addvent" intern="questions/addvent" />
      <Link text="Special" intern="questions/special" disabled={true} />
      <Link text="Random" action={() => {
        window.location.href = `${base}/question/${pick_random_question()}`;
      }} />
    </div>
  </section>

  <section>
    <h2> Tools </h2>
    <div class="links">
      <Link text="Workspace" intern="workspace" />
      <Link text="Speedrun" intern="speedrun" />
    </div>
  </section>

  <section>
    <h2> Docs </h2>
    <div class="links">
      <Link text="Shards" intern="docs/shards" />
      <Link text="Tags" intern="docs/tags" />
    </div>
  </section>

  <section>
    <h2> Info </h2>
    <div class="links">
      <Link text="About" intern="info/synopsis" />
      <Link text="FAQ" intern="info/faq" />
      <Link text="decoded" intern="info/decoded" />
      <Link text="Privacy" intern="info/privacy" />
      <Link text="License" intern="info/license" />
    </div>
  </section>

  <section>
    <h2> Guides </h2>
    <div class="links">
      <Link text="S-I+G-N Errors" intern="guides/sign" />
    </div>
  </section>

  <section>
    <h2> Integration </h2>
    <div class="links">
      <Link text="Why Integrate?" intern="guides/integrals/why" />
      <Link text="Why Is Integration Difficult?" intern="guides/integrals/why-hard" />
      <Link text="How Do We Integrate?" intern="guides/integrals/how" />
      <Link text="What Do I Do?" intern="guides/integrals/what" />
      <Link text="Standard Arsenal" intern="guides/integrals/everything-anything" />
      <Link text="A Neat Little Integration Trick" intern="guides/integrals/neat-trick" />
      <Link text="Epic Errors" intern="guides/integrals/epic-errors" />
    </div>
  </section>

  <section>
    <h2> Antiderivatives </h2>
    <div class="links">
      <Link text="Integrating the Logarithm" intern="guides/integrals/antiderivatives/ln" />
      <Link text="Integrating the Secant Cubed" intern="guides/integrals/antiderivatives/sec-3" />
    </div>
  </section>

  <section>
    <h2> Methods </h2>
    <div class="links">
      <Link text="Substitution" intern="guides/integrals/methods/sub" />
      <Link text="Power Rule" intern="guides/integrals/methods/power-rule" />
      <Link text="Parts" intern="guides/integrals/methods/parts" />
    </div>
  </section>

  <section>
    <h2> Graph Drawing </h2>
    <div class="links">
      <Link text="Why Draw Graphs?" intern="guides/graph-drawing" disabled={true} />
    </div>
  </section>

  <section>
    <h2> Completing the Square </h2>
    <div class="links">
      <Link text="Why Complete the Square?" intern="guides/complete-square/why" />
    </div>
  </section>

  <section>
    <h2> Desmos </h2>
    <div class="links">
      <Link text="Why Desmos?" intern="guides/desmos/why" disabled={true} />
    </div>
  </section>

  <section>
    <h2> Miscellaneous </h2>
    <div class="links">
      <Link text="What’s This?" intern="integrity/integrity" disabled={true} />
    </div>
  </section>
</div>


<style lang="scss">

.content {
  padding: 1rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, max(16rem, 30%));
  justify-content: center;
  row-gap: 1rem;

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
  padding: 0.5em 0.2em;
  @include font-serif;
  font-weight: 400;
  font-size: 200%;
}

</style>
