<script lang="ts">

import Site from "#scripts/site";
import { dyna_scriptures } from "#scripts/site";
import { pick_random_question, pick_random_scripture, capitalise } from "#scripts/utils";

import Link from "#parts/ui/link.svelte";

import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Meta from "#parts/page/meta.svelte";

import { base } from "$app/paths";
import { goto } from "$app/navigation";

</script>


<Meta title="Explore"
  desc="Explore questions, tools and articles on Integrity"
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
      <Link text="Graph Drawing" intern="questions/graph-drawing" />
      <Link text="Guess the Graph" intern="questions/guess-graph" />
      <Link text="Cool Graphs" intern="questions/cool-graphs" />
      <Link text="Completing the Square" intern="questions/complete-square" />
      <Link text="Addvent" intern="questions/addvent" />
      <Link text="Special" intern="questions/special" />
    </div>
  </section>

  <section>
    <h3> Tools </h3>
    <div class="links">
      <Link text="Workspace" intern="workspace" />
      <Link text="Speedrun" intern="speedrun" dev={true} />
      <Link text="Trails" intern="trails" />
      <Link text="Your Data" intern="data" />
    </div>
  </section>

  <section>
    <h3> Docs </h3>
    <div class="links">
      <Link text="Questions" intern="docs/questions" />
      <Link text="Integrals" intern="docs/integrals" />
      <Link text="Difficulties" intern="docs/difficulties" />
      <Link text="Shards" intern="docs/shards" />
      <Link text="Tags" intern="docs/tags" />
      <Link text="Speedrun" intern="docs/speedrun" />
      <Link text="Fun Facts" intern="docs/fun-facts" />
    </div>
  </section>

  <section>
    <h3> Fun </h3>
    <div class="links">
      <Link text="MIT Integration Bee" intern="fun/mit-ib" />
      <Link text="UNSW Integration Bee" intern="fun/unsw-ib" />
      <Link text="0–100 Year Challenge" intern="fun/year" />
    </div>
  </section>

  <section>
    <h3> Info </h3>
    <div class="links">
      <Link text="About" intern="info/synopsis" />
      <Link text="FAQ" intern="info/faq" />
      <Link text="decoded" intern="info/decoded" />
      <Link text="Roadmap" intern="info/roadmap" />
      <Link text="Changelog" intern="info/changelog" />
      <Link text="Privacy" intern="info/privacy" />
      <Link text="Licence" intern="info/licence" />
    </div>
  </section>
</div>

<h2> Scriptures </h2>
<div class="content">
  <section>
    <h3> General </h3>
    <div class="links">
      <Link text="Random" action={() => {
        goto(`/${pick_random_scripture()}`);
      }} />
      <Link text="S-I+G-N Errors" intern="scriptures/general/sign" />
      <Link text="Signing Off Inequalities" intern="scriptures/general/inequalities" />
    </div>
  </section>

  <section>
    <h3> Graph Drawing </h3>
    <div class="links">
      <Link text="Why Draw Graphs?" intern="scriptures/graph-drawing/why" />
      <Link text="Fundamental Graphs for Graph Drawing" intern="scriptures/graph-drawing/collections/standard-graphs" />
      <Link text="Addition as Stacking" intern="scriptures/graph-drawing/dyna/addition" disabled={true} />
      <Link text="Subtraction as Clothes Hanging" intern="scriptures/graph-drawing/dyna/subtraction" disabled={true} />
      <Link text="Multiplication as Scaling" intern="scriptures/graph-drawing/dyna/multiplication" />
    </div>
  </section>

  <section>
    <h3> Completing the Square </h3>
    <div class="links">
      <Link text="Why Complete the Square?" intern="scriptures/complete-square/why" />
    </div>
  </section>

  <section>
    <h3> Special </h3>
    <div class="links">
      <Link text="Conjecture: You Know Haskell" intern="scriptures/special/haskell-conjecture" />
    </div>
  </section>
</div>

<h2> Integration </h2>
<div class="content">
  <section>
    <h3> General </h3>
    <div class="links">
      <Link text="Why Integrate?" intern="scriptures/integrals/why" />
      <Link text="Why Is Integration Difficult?" intern="scriptures/integrals/why-hard" />
      <Link text="How Do We Integrate?" intern="scriptures/integrals/how" />
      <Link text="What Do I Do?" intern="scriptures/integrals/what" />
    </div>
  </section>

  <section>
    <h3> Antiderivatives </h3>
    <div class="links">
      <Link text="Integrating the Logarithm" intern="scriptures/integrals/antiderivatives/ln" />
      <Link text="Integrating the Secant Cubed" intern="scriptures/integrals/antiderivatives/sec-3" />
    </div>
  </section>

  <section>
    <h3> Methods </h3>
    <div class="links">
      <Link text="Substitution" intern="scriptures/integrals/methods/sub" />
      <Link text="Parts" intern="scriptures/integrals/methods/parts" />
      <Link text="Partial Fractions" intern="scriptures/integrals/methods/partials" />
      <Link text="Power Partials" intern="scriptures/integrals/methods/power-partials" />
      <Link text="Polynomial Division" intern="scriptures/integrals/methods/poly-div" disabled={true} />
      <Link text="Arctan" intern="scriptures/integrals/methods/arctan" disabled={true} />
      <Link text="Arcsin" intern="scriptures/integrals/methods/arcsin" disabled={true} />
    </div>
  </section>

  <section>
    <h3> Strategies </h3>
    <div class="links">
      <Link text="Power Moves" intern="scriptures/integrals/strategies/power-moves" disabled={true} />
      <Link text="Split" intern="scriptures/integrals/strategies/split" disabled={true} />
      <Link text="Multiply" intern="scriptures/integrals/strategies/multiply" disabled={true} />
      <Link text="Divide" intern="scriptures/integrals/strategies/divide" disabled={true} />
      <Link text="Conjugate" intern="scriptures/integrals/strategies/conjugate" disabled={true} />
      <Link text="Spotting the Substitution" intern="scriptures/integrals/strategies/spot-sub" disabled={true} />
    </div>
  </section>

  <section>
    <h3> Collections </h3>
    <div class="links">
      <Link text="Standard Integrals" intern="scriptures/integrals/collections/standard-integrals" />
      <Link text="Matricks" intern="scriptures/integrals/collections/matricks" disabled={true} />
      <Link text="Epic Errors" intern="scriptures/integrals/collections/epic-errors" />
      <Link text="Everything & Anything" intern="scriptures/integrals/collections/everything-anything" />
      <Link text="Integrating into Integration" intern="scriptures/integrals/collections/int-int" />
      <Link text="Integrals You Can Only Experience Once" intern="scriptures/integrals/collections/once" />
    </div>
  </section>

  <section>
    <h3> Adventures </h3>
    <div class="links">
      <Link text="How Do I Write Integrals?" intern="scriptures/integrals/adventures/write" />
      <Link text="What Makes a Good Integral?" intern="" disabled={true} />
      <Link text="Integration Is Like Organic Chemistry" intern="" disabled={true} />
      <Link text="Why -c?" intern="scriptures/integrals/adventures/-c" />
      <Link text="Why Absolute Value the Logarithm?" intern="" disabled={true} />
      <Link text="Why Does Trig Substitution Work?" intern="" />
      <Link text="A Fun Way of Finding the Artanh Integral" intern="scriptures/integrals/adventures/artanh" />
      <Link text="A Neat Little Integration Trick" intern="scriptures/integrals/adventures/neat-trick" />
      <Link text="What’s This?" intern="integrity/integrity" disabled={true} />
    </div>
  </section>
</div>

<h2> Desmos </h2>
<div class="content">
  <section>
    <h3> Docs </h3>
    <div class="links">
      <Link text="Identifiable Identifiers" intern="desmos/docs/identifiers" />
    </div>
  </section>
</div>

<h2> Desmos Library </h2>
<div class="content">
  <section>
    <h3> Functions </h3>
    <div class="links">
      {#each Site.index.library.pages.filter(path => (
        Site.index.functions.pages.includes(path)
      )) as path}
        {@const page = Site.pages[path]}

        {#if page}
          <Link text={page.title!} intern={page.dest} />
        {/if}
      {/each}
    </div>
  </section>
  
  <section>
    <h3> Rendering </h3>
    <div class="links">
      {#each Site.index.library.pages.filter(path => (
        Site.index.rendering.pages.includes(path)
      )) as path}
        {@const page = Site.pages[path]}

        {#if page}
          <Link text={page.title!} intern={page.dest} />
        {/if}
      {/each}
    </div>
  </section>
</div>

<h2> Game Development in Desmos </h2>
<div class="content">
  <section>
    <h3> Quicklinks </h3>
    <div class="links">
      <Link text="Polymap" intern="desmos/gamedev/polymap" dev={true} />
      <Link text="Essentials" intern="desmos/gamedev/essentials" />
      <Link text="Supplementals" intern="desmos/gamedev/supplementals" />
      <Link text="Core" intern="desmos/gamedev/core" />
      <Link text="Architecture" intern="desmos/gamedev/architecture" disabled={true} />
      <Link text="Rendering" intern="desmos/gamedev/rendering" disabled={true} />
      <Link text="Advanced" intern="desmos/gamedev/advanced" disabled={true} />
      <Link text="Extras" intern="desmos/gamedev/extras" disabled={true} />
      <Link text="Examples" intern="desmos/gamedev/examples" disabled={true} />
      <a style:opacity="1%" href="{base}/questions/special/interview">...</a>
    </div>
  </section>

  {#each Object.entries(dyna_scriptures["desmos-gamedev"]) as [chapter, pages]}
    <section>
      <h3> {capitalise(chapter)} </h3>
      <div class="links">
        {#each Object.values(pages) as page}
          <Link
            text={page.title}
            intern="desmos/gamedev/{page.chapter.toLowerCase()}/{page.title.toLowerCase()}"
          />
        {/each}
      </div>
    </section>
  {/each}
</div>

<h2> Gradient Descent in Desmos </h2>
<p align="center"> Coming soon! </p>


<style lang="scss">

.content {
  padding: 1rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, max(16rem, 30%));
  justify-content: center;
  gap: 1rem;

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
