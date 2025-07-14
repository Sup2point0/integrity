<!-- @component Nav -->

<script lang="ts">

import { duality, userprefs } from "#scripts/stores";

import { pick_random_question, pick_random_scripture } from "#scripts/utils";
import { Duality } from "#scripts/types";

import NavLink from "#parts/core/nav.link.svelte";
import Link from "#parts/ui/link.svelte";
import GithubIcon from "#parts/svg/github-icon.svelte";

import { base } from "$app/paths";
import { goto } from "$app/navigation";

</script>


<nav class:nav={$userprefs.nav === false}>
  <section class="left">
    <NavLink
      pict="integrity-title{$duality === Duality.DARK ? '-dark' : ''}.png"
      link="https://sup2point0.github.io/integrity"
    />
  </section>

  <section class="centre">
    <NavLink text="Questions" intern="questions">
      <Link text="Integrals" intern="questions/integrals" />
      <Link text="Graph Drawing" intern="questions/graph-drawing" />
      <Link text="Guess the Graph" intern="questions/guess-graph" hot={true} />
      <Link text="Cool Graphs" intern="questions/cool-graphs" />
      <Link text="Completing the Square" intern="questions/complete-square" />
      <Link text="Addvent" intern="questions/addvent" />
      <Link text="Special" intern="questions/special" />
      <Link text="All" intern="questions/all" />
    </NavLink>

    <NavLink text="Explore" intern="explore">
      <Link text="Random Question" action={() => {
        /* `goto()` here uses undesirable Svelte-y surgical updates which don't load the question page correctly */
        window.location.href = `${base}/question/${pick_random_question()}`;
      }} />
      <Link text="Random Scripture" action={() => {
        goto(`/${pick_random_scripture()}`);
      }} />
      <Link text="Workspace" intern="workspace" />
      <Link text="Speedrun" intern="speedrun" dev={true} />
      <Link text="Trails" intern="trails" />
      <Link text="Your Data" intern="data" />
    </NavLink>

    <NavLink text="Docs" intern="docs" collapse={true}>
      <Link text="Questions" intern="docs/questions" />
      <Link text="Difficulties" intern="docs/difficulties" />
      <Link text="Shards" intern="docs/shards" />
      <Link text="Tags" intern="docs/tags" />
      <Link text="Speedrun" intern="docs/speedrun" />
      <Link text="Fun Facts" intern="docs/fun-facts" />
    </NavLink>

    <NavLink text="Scriptures" intern="scriptures" hot={true}>
      <Link text="General" intern="scriptures/general" />
      <Link text="Integration" intern="scriptures/integrals" />
      <Link text="Graph Drawing" intern="graph-drawing" disabled={true} />
      <Link text="Completing the Square" intern="scriptures/complete-square" />
      <Link text="Desmos" intern="scriptures/desmos" disabled={true} />
      <Link text="Gamedev in Desmos" intern="scriptures/desmos/gamedev" dev={true} />
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

@use 'sass:color';


@property --col-left {
  syntax: '<color>';
  initial-value: $col-nav;
  inherits: false;
}
@property --col-right {
  syntax: '<color>';
  initial-value: $col-nav;
  inherits: false;
}

nav {
  --col-left: #{$col-nav};
  --col-right: #{$col-nav};
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
  background: linear-gradient(to right in oklch, var(--col-left), var(--col-right));
  background-size: 100%;
  border-bottom: 1px solid $col-line-fallback;
  border-bottom: 1px solid $col-line;
  box-shadow: 0 2px 2px -1px $col-line-fallback;
  box-shadow: 0 2px 2px -1px $col-line;
  transition: --col-left 0.24s ease-out, --col-right 0.24s ease-out;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    backdrop-filter: blur(12px);
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

nav.nav {
  --col-left: #{color.change($col-yay, $alpha: 90%)};
  --col-right: #{color.change($col-manifold, $alpha: 90%)};

  border-bottom: none;
  box-shadow: none;

  :global(.nav-link p) {
    color: white;
  }
}


@media (prefers-reduced-transparency: reduce) {
  nav {
    background: light-dark(white, black);
  }
}

</style>
