<!-- @component Nav -->

<script lang="ts">

import NavLink from "#parts/core/nav.link.svelte";

</script>


<nav>
  <section class="left">
    <NavLink pict="integrity.png" />
  </section>

  <section class="centre">
    <NavLink text="Integrals" intern="integrals" />
    <NavLink text="Graph Drawing" intern="graphs" />
    <NavLink text="Completing the Square" intern="complete-the-square" />
    <NavLink text="Addvent" intern="addvent" />
  </section>

  <section class="right">
    <NavLink text="GitHub" link="https://github.com/Sup2point0/integrity" />
  </section>
</nav>


<style lang="scss">

nav {
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5em 5rem;
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  backdrop-filter: blur(16px) brightness(0.99);
}

section {
  display: flex;
  flex-direction: row;
  justify-content: center;

  &.centre {
    flex: 1 1 auto;
  }
}

</style>
