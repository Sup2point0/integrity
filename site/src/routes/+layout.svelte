<script lang="ts">

import "#styles/essence.scss";
import "#styles/article.scss";
import "#styles/a11y.scss";

import Nav from "#parts/core/nav.svelte";
import Footer from "#parts/core/footer.svelte";

import { fade } from "svelte/transition";
import { quadIn } from "svelte/easing";
import { onMount } from "svelte";


let active = true;


onMount(() => {
  if (sessionStorage.getItem("integrity.here")) {
    active = false;
  }
  else {
    sessionStorage.setItem("integrity.here", "hi");

    setTimeout(() => {
      active = false;
    }, 600);
  }
})

</script>


<Nav />

<div class="layout">
  <main>
    <slot />
  </main>
</div>

<Footer />

{#if active}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <aside class="overlay"
    on:click={() => { active = false; }}
    transition:fade={{ duration: 500, easing: quadIn }}
  >
    <div class="content">
      <h1> integrity </h1>
      <p> by Sup#2.0 </p>
    </div>

    <small> If you’re still reading this, JavaScript might be broken. </small>
  </aside>
{/if}


<style lang="scss">

.layout {
  padding: 1rem 1rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

main {
  width: min(80%, 60rem);
  min-height: 75vh;
}

aside.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $col-prot;
  
  .content {
    flex-grow: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  h1 {
    margin-bottom: 0.5em;
    @include font-serif;
    color: white;
    font-weight: 200;
    font-size: 500%;
    animation: 1.5s slide-in-upper cubic-bezier(0.19, 1, 0.22, 1);
    animation-iteration-count: 1;
  }

  p {
    color: rgb(white, 60%);
    font-weight: 200;
    font-size: 150%;
    animation: 1.5s slide-in-lower cubic-bezier(0.19, 1, 0.22, 1);
    animation-iteration-count: 1;
  }

  small {
    padding: 1em;
    flex-grow: 0;
    color: rgb(black, 10%);
    font-size: 80%;
    opacity: 0;
    animation: 1s delayed-fade 1.2s;
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

</style>
