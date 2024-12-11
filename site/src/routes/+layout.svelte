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
  if (typeof(sessionStorage) === "undefined") return;

  if (sessionStorage.getItem("integrity.here")) {
    active = false;
  } else {
    sessionStorage.setItem("integrity.here", "hi");
    setTimeout(() => { active = false; }, 600);
  }
});

</script>


<Nav />

<div class="layout">
  <main>
    <slot>
      <p> Uh, something went wrong! </p>
    </slot>
  </main>
</div>

<Footer />

{#if active}
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <aside class="overlay"
    onclick={() => { active = false; }}
    onkeydown={e => { if (["Space", "Escape"].includes(e.key)) active = false; }}
    transition:fade={{ duration: 500, easing: quadIn }}
  >
    <div class="content">
      <h1> integrity </h1>
      <p> by Sup#2.0 </p>
    </div>

    <small> If you’re reading this, JavaScript has probably broken. </small>
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
  background-color: #3c8dbc;  // fallback
  background-color: $col-prot;
  // fallback if JavaScript fails to avoid soft-blocking site
  animation: 0.5s cubic-bezier(0.11, 0, 0.5, 0) forwards fade-delete;
  animation-delay: 3.6s;
  
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
    padding: 3em;
    flex-grow: 0;
    color: rgb(black, 25%);
    font-size: 90%;
    opacity: 0;
    animation: 1s delayed-fade forwards;
    animation-delay: 1.2s;
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
