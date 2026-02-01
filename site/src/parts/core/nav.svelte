<!-- @component Nav -->

<script lang="ts">

import { duality, userprefs } from "#scripts/stores";

import { pick_random_question, pick_random_scripture } from "#scripts/utils";
import { Duality } from "#scripts/types";

import NavLink from "#parts/core/nav.link.svelte";
import Clicky from "#parts/ui/clicky.svelte";
import Link from "#parts/ui/link.svelte";
import GithubIcon from "#parts/svg/github-icon.svelte";

import { base } from "$app/paths";
import { goto } from "$app/navigation";


let show_mobile_dropdown = $state(false);

</script>


<nav class="bar" class:nav={$userprefs.nav === false}>
  <section class="left">
    <NavLink
      pict="integrity-title{$duality === Duality.DARK || $userprefs.nav === false ? '-dark' : ''}.png"
      link="https://sup2point0.github.io/integrity"
    />
  </section>

  <section class="centre mobile-hide">
    <NavLink text="Questions" intern="questions">
      <Link text="Integrals" intern="questions/integrals" />
      <Link text="Graph Drawing" intern="questions/graph-drawing" />
      <Link text="Guess the Graph" intern="questions/guess-graph" />
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
      <Link text="Integrals" intern="docs/integrals" />
      <Link text="Difficulties" intern="docs/difficulties" />
      <Link text="Shards" intern="docs/shards" />
      <Link text="Tags" intern="docs/tags" />
      <Link text="Speedrun" intern="docs/speedrun" />
      <Link text="Fun Facts" intern="docs/fun-facts" />
    </NavLink>

    <NavLink text="Scriptures" intern="scriptures" hot={true}>
      <Link text="General" intern="scriptures/general" />
      <Link text="Integration" intern="scriptures/integrals" />
      <Link text="Graph Drawing" intern="scriptures/graph-drawing" dev={true} />
      <Link text="Completing the Square" intern="scriptures/complete-square" />
      <Link text="Special" intern="scriptures/special" hot={true} />
    </NavLink>

    <NavLink text="Desmos" intern="desmos" collapse={true} hot={true}>
      <Link text="Docs" intern="desmos/docs" />
      <Link text="Library" intern="desmos/library" hot={true} />
      <Link text="Polymap" intern="desmos/gamedev/polymap" dev={true} />
      <Link text="Game Development" intern="desmos/gamedev" />
      <Link text="Gradient Descent" intern="desmos/grad-desc" disabled={true} />
    </NavLink>

    <NavLink text="Fun" intern="fun" collapse={true}>
      <Link text="MIT Integration Bee" intern="fun/mit-ib" />
      <Link text="UNSW Integration Bee" intern="fun/unsw-ib" />
      <Link text="0–100 Year Challenge" intern="fun/year" />
    </NavLink>

    <NavLink text="Info" intern="info" collapse={true}>
      <Link text="About" intern="info/synopsis" />
      <Link text="FAQ" intern="info/faq" />
      <Link text="decoded" intern="info/decoded" />
      <Link text="Roadmap" intern="info/roadmap" />
      <Link text="Changelog" intern="info/changelog" />
      <Link text="Privacy" intern="info/privacy" />
      <Link text="Licence" intern="info/licence" />
    </NavLink>
  </section>

  <section class="centre mobile-show"></section>

  <section class="right mobile-hide">
    <NavLink text="GitHub"
      extern="https://github.com/Sup2point0/integrity"
    >
      {#snippet svg()} <GithubIcon /> {/snippet}
    </NavLink>
  </section>

  <section class="right mobile-show">
    <Clicky action={() => { show_mobile_dropdown = !show_mobile_dropdown; }}>
      <code class:active={show_mobile_dropdown}> ↓ </code>
    </Clicky>
  </section>
</nav>

<nav class="mobile-dropdown mobile-show" class:shown={show_mobile_dropdown}>
  <NavLink text="Questions" intern="questions" mobile={true} />
  <NavLink text="Explore" intern="explore" mobile={true} />
  <NavLink text="Docs" intern="docs" mobile={true} />
  <NavLink text="Scriptures" intern="scriptures" mobile={true} />
  <NavLink text="Desmos" intern="desmos" mobile={true} hot={true} />
  <NavLink text="Fun" intern="fun" mobile={true} />
  <NavLink text="Info" intern="info" mobile={true} />
  <NavLink text="GitHub" extern="https://github.com/Sup2point0/integrity">
    {#snippet svg()} <GithubIcon /> {/snippet}
  </NavLink>
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

nav.bar {
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

.mobile-show {
  display: none;
}


@media (max-width: 40rem) {
  nav.bar {
    padding: 0 1rem;
  }

  .mobile-show {
    display: block;
  }
  .mobile-hide {
    display: none;
  }

  nav.mobile-dropdown {
    width: max-content;
    padding: 0.5em;
    position: fixed;
    top: 4rem;
    right: 1rem;
    display: block;
    z-index: 20;
    display: flex;
    flex-flow: column nowrap;
    justify-content: stretch;
    align-items: center;
    visibility: hidden;
    opacity: 0;

    background: $col-nav-fallback;
    background: $col-nav;
    border-radius: 0.5em;
    box-shadow: 0 2px 16px -1px $col-line-fallback;
    box-shadow: 0 2px 16px -1px $col-line;
    backdrop-filter: blur(12px);
    transform: translateY(-0.4em);
    transition:
      visibility 0.12s,
      opacity 0.12s ease-out,
      transform 0.1s cubic-bezier(0.6, 0.04, 0.98, 0.335);  // ease-in circ

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      border-radius: 0.5em;
      backdrop-filter: blur(12px);
    }

    &.shown {
      visibility: visible;
      opacity: 1;
      transform: none;
      transition:
        opacity 0.16s ease-out,
        transform 0.24s cubic-bezier(0.075, 0.82, 0.165, 1);  // ease-out circ
    }
  }

  code {
    display: block;
    padding: 0.2em 0;
    transition: transform 0.16s ease-out;

    &.active {
      transform: rotate(180deg);
    }
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
