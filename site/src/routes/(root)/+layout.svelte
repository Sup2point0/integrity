<script lang="ts">

import { userprefs, search } from "#scripts/stores";

import Nav from "#parts/core/nav.svelte";
import Footer from "#parts/core/footer.svelte";

import { page } from "$app/state";


let { children } = $props();


</script>


<Nav />

<div class="layout {$userprefs.style}">
  <main class:wide={
    page.url.pathname.includes("questions/") && $search.view === "grid-wide"
    || page.data?.wide
  }>
    {#if children}
      {@render children()}
    {:else}
      <p> Uh, something went wrong! </p>
    {/if}
  </main>
</div>

<Footer />


<style lang="scss">

.layout {
  padding: 1rem 1rem 4rem;
  display: flex;
  flex-flow: column;
  align-items: center;
}

main {
  width: min(80%, 64rem);
  max-width: 100vw;
  min-height: 75vh;

  &.wide {
    width: 90%;
  }
}

</style>
