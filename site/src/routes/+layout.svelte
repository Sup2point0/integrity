<script lang="ts">

import "#styles/essence.scss";
import "#styles/article.scss";
import "#styles/a11y.scss";

import { search, userprefs } from "#scripts/stores";

import Nav from "#parts/core/nav.svelte";
import Footer from "#parts/core/footer.svelte";

import { page } from "$app/state";
import { fade } from "svelte/transition";
import { quadIn } from "svelte/easing";
import { onMount } from "svelte";


let { children } = $props();


let active = $state(true);


onMount(() => {
  handle_overlay();
  count_visits();
});

/** Handle removing the overlay. */
function handle_overlay()
{
  if (typeof(sessionStorage) === "undefined") return;

  if (sessionStorage.getItem("integrity.here")) {
    active = false;
  } else {
    sessionStorage.setItem("integrity.here", "pi");
    setTimeout(() => { active = false; }, 500);
  }
}

function count_visits()
{
  if ($userprefs) $userprefs.visits++;  

  if (page.url.hostname !== "localhost") {
    fetch("https://sup2point0.npkn.net/integrity", {
      method: "POST"
    });
  }
}

</script>


<Nav />

<div class="layout">
  <main class:wide={
    page.url.pathname.includes("questions") && $search.view === "grid-wide"
  }>
    {#if children}
      {@render children()}
    {:else}
      <p> Uh, something went wrong! </p>
    {/if}
  </main>
</div>

<Footer />

{#if active}
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <aside class="overlay"
    onclick={() => { active = false; }}
    onkeydown={e => { if (["Space", "Escape"].includes(e.key)) active = false; }}
    transition:fade={{ duration: 500, easing: quadIn }}
    style:animation-delay="5s"
  >
    <div class="content">
      <h1> integrity </h1>
      <p> by Sup#2.0 </p>
    </div>

    <small style:animation-delay="1.8s"> If you’re reading this, JavaScript has probably broken. </small>
    <small style:animation-delay="2.6s"> Some parts of the site may not function. </small>
  </aside>
{/if}


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

aside.overlay {
  padding: 1.5rem;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: $col-prot-fallback;
  background: light-dark(
    $col-prot,
    color-mix(in oklch, $col-prot, black 25%)
  );
  // fallback if JavaScript fails to avoid soft-blocking site
  animation: 0.5s cubic-bezier(0.11, 0, 0.5, 0) forwards fade-delete;
  
  .content {
    flex-grow: 1;
    text-align: center;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  
  h1 {
    margin-bottom: 0.5em;
    @include font-serif;
    color: white;
    font-weight: 200;
    font-size: 500%;
    animation: 1.5s cubic-bezier(0.19, 1, 0.22, 1) slide-in-upper;
    animation-iteration-count: 1;
  }

  p {
    color: rgb(white, 60%);
    font-weight: 200;
    font-size: 150%;
    animation: 1.5s cubic-bezier(0.19, 1, 0.22, 1) slide-in-lower;
    animation-iteration-count: 1;
  }

  small {
    padding-bottom: 2em;
    flex-grow: 0;
    color: rgb(black, 25%);
    font-size: 90%;
    opacity: 0;
    animation: 1s delayed-fade forwards;
  }
}


@keyframes slide-in-upper {
  from {
    opacity: 0;
    transform: translateY(-1.5rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-lower {
  from {
    opacity: 0;
    transform: translateY(1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes delayed-fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fade-delete {
  from {
    opacity: 1;
  }
  to {
    display: none;
    visibility: hidden;
    opacity: 0;
  }
}

</style>
