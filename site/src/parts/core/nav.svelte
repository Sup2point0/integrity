<!-- @component Nav -->

<script lang="ts">

import { pick_random_question, pick_random_guide } from "#scripts/utils";

import NavLink from "#parts/core/nav.link.svelte";
import Link from "#parts/ui/link.svelte";
import GithubIcon from "#parts/svg/github-icon.svelte";

import { base } from "$app/paths";

</script>


<nav>
  <section class="left">
    <NavLink pict="integrity-title.png"
      link="https://sup2point0.github.io/integrity" />
  </section>

  <section class="centre">
    <NavLink text="Questions" intern="questions">
      <Link text="Integrals" intern="questions/integrals" />
      <Link text="Graph Drawing" intern="questions/graph-drawing" disabled={true} />
      <Link text="Completing the Square" intern="questions/complete-square" />
      <Link text="Guess the Graph" intern="questions/guess-graph" disabled={true} />
      <Link text="Cool Graphs" intern="questions/cool-graphs" />
      <Link text="Addvent" intern="questions/addvent" />
      <Link text="Special" intern="questions/special" />
      <Link text="All" intern="questions/all" />
    </NavLink>

    <NavLink text="Explore" intern="explore" hot={true}>
      <Link text="Random Question" action={() => {
        window.location.href = `${base}/question/${pick_random_question()}`;
      }} />
      <Link text="Random Guide" action={() => {
        window.location.href = `${base}/${pick_random_guide()}`;
      }} />
      <Link text="Workspace" intern="workspace" />
      <Link text="Speedrun" intern="speedrun" />
      <Link text="Trails" intern="trails" hot={true} />
      <Link text="Your Stats" intern="data" />
    </NavLink>

    <NavLink text="Docs" intern="docs" collapse={true}>
      <Link text="Questions" intern="docs/questions" />
      <Link text="Shards" intern="docs/shards" />
      <Link text="Tags" intern="docs/tags" />
      <Link text="Fun Facts" intern="docs/fun-facts" hot={true} />
    </NavLink>

    <NavLink text="Guides" intern="guides">
      <Link text="S-I+G-N Errors" intern="guides/sign" />
      <Link text="Integration" intern="guides/integrals" />
      <Link text="Graph Drawing" intern="graph-drawing" disabled={true} />
      <Link text="Completing the Square" intern="guides/complete-square" />
      <Link text="Desmos" intern="guides/desmos" disabled={true} />
    </NavLink>

    <NavLink text="Challenges" intern="challenges" collapse={true}>
      <Link text="MIT Integration Bee" intern="challenges/mit-ib" />
      <Link text="UNSW Integration Bee" intern="challenges/unsw-ib" />
      <Link text="0–100 Year Challenge" intern="challenges/year" />
    </NavLink>

    <NavLink text="Info" intern="info" collapse={true}>
      <Link text="About" intern="info/synopsis" />
      <Link text="FAQ" intern="info/faq" />
      <Link text="decoded" intern="info/decoded" />
      <Link text="Privacy" intern="info/privacy" />
      <Link text="Licence" intern="info/licence" />
    </NavLink>
  </section>

  <section class="right">
    <NavLink text="GitHub" collapse={true}
      extern="https://github.com/Sup2point0/integrity"
    >
      {#snippet svg()} <GithubIcon /> {/snippet}
    </NavLink>
  </section>
</nav>


<style lang="scss">

nav {
  width: 100%;
  margin-bottom: 1rem;
  padding: 0 5rem;
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  flex-flow: row nowrap;
  justify-content: stretch;
  align-items: center;
  gap: 0.5rem;

  background: $col-nav-fallback;
  background: $col-nav;
  border-bottom: 1px solid $col-line-fallback;
  border-bottom: 1px solid $col-line;
  box-shadow: 0 2px 2px -1px $col-line-fallback;
  box-shadow: 0 2px 2px -1px $col-line;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    backdrop-filter: blur(12px);
    z-index: -1;
  }
}

section {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  &.centre {
    flex: 1 1 auto;
    column-gap: 0.5rem;
  }
}

@media (max-width: 40rem) {
  nav {
    padding: 0 1rem;
  }
}

</style>
