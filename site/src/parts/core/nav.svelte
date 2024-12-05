<!-- @component Nav -->

<script lang="ts">

import NavLink from "#parts/core/nav.link.svelte";

</script>


<nav>
  <NavLink pict="integrity.png" />

  <NavLink text="Integrals" intern="integrals" />
  <NavLink text="Graph Drawing" intern="graphs" />
  <NavLink text="Completing the Square" intern="complete-the-square" />
  <NavLink text="Addvent" intern="addvent" />

  <NavLink text="GitHub" link="https://github.com/Sup2point0/integrity" />
</nav>


<style lang="scss">

nav {
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem 2rem;
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  backdrop-filter: blur(16px) brightness(0.96);
}

</style>
