<!-- @component Nav -->

<script lang="ts">

import { pick_random_question } from "#scripts/utils";

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
      <Link text="Graph Drawing" intern="questions/graph-drawing" />
      <Link text="Completing the Square" intern="questions/complete-square" />
      <Link text="Guess the Graph" intern="questions/guess-graph" />
      <Link text="Addvent" intern="questions/addvent" />
      <Link text="Special" intern="questions/special" />
    </NavLink>

    <NavLink text="Explore" intern="explore">
      <Link text="All Questions" intern="questions/all" />
      <Link text="Random Question" button={() => {
        window.location.href = `${base}/question/${pick_random_question()}`;
      }} />
      <Link text="Speedrun" intern="speedrun" />
      <Link text="Workspace" intern="workspace" />
    </NavLink>

    <NavLink text="Docs" intern="docs" collapse={true}>
      <Link text="Shards" intern="docs/shards" />
      <Link text="Tags" intern="docs/tags" />
    </NavLink>

    <NavLink text="Guides" intern="guides">
      <Link text="S-I+G-N Errors" intern="guides/sign" />
      <Link text="Integrals" intern="guides/integrals" />
      <!-- <Link text="Graph Drawing" intern="graph-drawing" /> -->
      <Link text="Completing the Square" intern="guides/complete-square" />
      <Link text="Desmos" intern="guides/desmos" />
    </NavLink>

    <NavLink text="Info" intern="info" collapse={true}>
      <Link text="About" intern="info/synopsis" />
      <Link text="FAQ" intern="info/faq" />
      <Link text="decoded" intern="info/decoded" />
      <Link text="Privacy" intern="info/privacy" />
      <Link text="License" intern="info/license" />
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
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
  flex-wrap: nowrap;
  gap: 0.5rem;
  background-color: $col-nav;
  border-bottom: 1px solid $col-line;
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
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;

  &.centre {
    flex: 1 1 auto;
    column-gap: 0.5rem;
  }
}

</style>
