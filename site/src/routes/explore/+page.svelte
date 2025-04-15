<script lang="ts">

import Site from "#src/scripts/site";
import { pick_random_question, pick_random_guide } from "#scripts/utils";

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
    <h3> Questions </h3>
    <div class="links">
      <Link text="All" intern="questions/all" />
      <Link text="Random" action={() => {
        window.location.href = `${base}/question/${pick_random_question()}`;
      }} />
      <Link text="Integrals" intern="questions/integrals" />
      <Link text="Graph Drawing" intern="questions/graph-drawing" disabled={true} />
      <Link text="Completing the Square" intern="questions/complete-square" />
      <Link text="Guess the Graph" intern="questions/guess-graph" disabled={true} />
      <Link text="Cool Graphs" intern="questions/cool-graphs" />
      <Link text="Addvent" intern="questions/addvent" />
      <Link text="Special" intern="questions/special" disabled={true} />
    </div>
  </section>

  <section>
    <h3> Tools </h3>
    <div class="links">
      <Link text="Workspace" intern="workspace" />
      <Link text="Speedrun" intern="speedrun" />
      <Link text="Data" intern="data" />
    </div>
  </section>

  <section>
    <h3> Docs </h3>
    <div class="links">
      <Link text="Shards" intern="docs/shards" />
      <Link text="Tags" intern="docs/tags" />
      <Link text="Speedrun" intern="docs/speedrun" disabled={true} />
    </div>
  </section>

  <section>
    <h3> Challenges </h3>
    <div class="links">
      <Link text="MIT Integration Bee" intern="challenges/mit-ib" />
      <Link text="UNSW Integration Bee" intern="challenges/unsw-ib" />
      <Link text="0–100 Year Challenge" intern="challenges/year" />
    </div>
  </section>

  <section>
    <h3> Info </h3>
    <div class="links">
      <Link text="About" intern="info/synopsis" />
      <Link text="FAQ" intern="info/faq" />
      <Link text="decoded" intern="info/decoded" />
      <Link text="Privacy" intern="info/privacy" />
      <Link text="License" intern="info/license" />
    </div>
  </section>
</div>

<h2> Guides </h2>
<div class="content">
  <section>
    <h3> Guides </h3>
    <div class="links">
      <Link text="Random" action={() => {
        window.location.href = `${base}/${pick_random_guide()}`;
      }} />
      <Link text="S-I+G-N Errors" intern="guides/sign" />
    </div>
  </section>

  <section>
    <h3> Integration </h3>
    <div class="links">
      <Link text="Why Integrate?" intern="guides/integrals/why" />
      <Link text="Why Is Integration Difficult?" intern="guides/integrals/why-hard" />
      <Link text="How Do We Integrate?" intern="guides/integrals/how" />
      <Link text="What Do I Do?" intern="guides/integrals/what" />
      <Link text="Standard Arsenal" intern="guides/integrals/everything-anything" />
      <Link text="Integrals You Can Only Experience Once" intern="guides/integrals/once" />
      <Link text="Epic Errors" intern="guides/integrals/epic-errors" />
    </div>
  </section>

  <section>
    <h3> Antiderivatives </h3>
    <div class="links">
      <Link text="Integrating the Logarithm" intern="guides/integrals/antiderivatives/ln" />
      <Link text="Integrating the Secant Cubed" intern="guides/integrals/antiderivatives/sec-3" />
    </div>
  </section>

  <section>
    <h3> Methods </h3>
    <div class="links">
      <Link text="Substitution" intern="guides/integrals/methods/sub" />
      <Link text="Parts" intern="guides/integrals/methods/parts" />
      <Link text="Partial Fractions" intern="guides/integrals/methods/partials" />
      <Link text="Power Partials" intern="guides/integrals/methods/power-partials" />
      <Link text="Polynomial Division" intern="guides/integrals/methods/poly-div" disabled={true} />
      <Link text="Arctan" intern="guides/integrals/methods/arctan" disabled={true} />
      <Link text="Arcsin" intern="guides/integrals/methods/arcsin" disabled={true} />
    </div>
  </section>

  <section>
    <h3> Strategies </h3>
    <div class="links">
      <Link text="Power Moves" intern="guides/integrals/strategies/power-moves" disabled={true} />
      <Link text="Split" intern="guides/integrals/strategies/split" disabled={true} />
      <Link text="Multiply" intern="guides/integrals/strategies/multiply" disabled={true} />
      <Link text="Divide" intern="guides/integrals/strategies/divide" disabled={true} />
      <Link text="Conjugate" intern="guides/integrals/strategies/conjugate" disabled={true} />
      <Link text="Spotting the Substitution" intern="guides/integrals/strategies/spot-sub" disabled={true} />
    </div>
  </section>

  <section>
    <h3> Collections </h3>
    <div class="links">
      <Link text="Standard Integrals" intern="guides/integrals/collections/standard-integrals" />
      <Link text="Matricks" intern="guides/integrals/collections/matricks" disabled={true} />
      <Link text="Epic Errors" intern="guides/integrals/collections/epic-errors" />
      <Link text="Everything & Anything" intern="guides/integrals/collections/everything-anything" />
      <Link text="Integrating into Integration" intern="guides/integrals/collections/int-int" />
      <Link text="Integrals You Can Only Experience Once" intern="guides/integrals/collections/once" />
    </div>
  </section>

  <section>
    <h3> Adventures </h3>
    <div class="links">
      <Link text="How Do I Write Integrals?" intern="" disabled={true} />
      <Link text="What Makes a Good Integral?" intern="" disabled={true} />
      <Link text="A Neat Little Integration Trick" intern="guides/integrals/adventures/neat-trick" />
      <Link text="Integration Is Like Organic Chemistry" intern="" disabled={true} />
      <Link text="Why Absolute Value the Logarithm?" intern="" disabled={true} />
      <Link text="Why -c?" intern="guides/integrals/adventures/-c" />
      <Link text="What’s This?" intern="integrity/integrity" disabled={true} />
    </div>
  </section>

  <section>
    <h3> Graph Drawing </h3>
    <div class="links">
      <Link text="Why Draw Graphs?" intern="guides/graph-drawing" disabled={true} />
    </div>
  </section>

  <section>
    <h3> Completing the Square </h3>
    <div class="links">
      <Link text="Why Complete the Square?" intern="guides/complete-square/why" />
    </div>
  </section>

  <section>
    <h3> Desmos </h3>
    <div class="links">
      <Link text="Why Desmos?" intern="guides/desmos/why" disabled={true} />
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
  flex-flow: column;
  align-items: collapse;

  .links {
    width: max-content;
    padding: 0 2em 1em 0;
  }
}


h2 {
  margin: 1em 0 0.5em;
  padding: 0 0 1em;
  @include font-serif;
  font-weight: 400;
  font-size: 200%;
  text-align: center;
  border-bottom: 1px solid $col-line;
}

h3 {
  padding: 0.5em 0.2em;
  @include font-serif;
  font-weight: 400;
  font-size: 150%;
}

</style>
