<script lang="ts">

import "#styles/essence.scss";

import Nav from "#parts/core/nav.svelte";

import { fade } from "svelte/transition";
import { onMount } from "svelte";


let active = true;


onMount(() => {
  setTimeout(() => {
    active = false;
  }, 1000);
})

</script>


<Nav />

<slot />

{#if active}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <aside class="overlay"
    on:click={() => { active = false; }}
    transition:fade={{ duration: 500 }}
  >
    <div class="content">
      <h1> integrity </h1>
      <p> by Sup#2.0 </p>
    </div>
  </aside>
{/if}


<style lang="scss">

aside.overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: $col-prot;
}

div.content {
  text-align: center;
}


h1 {
  color: white;
}

p {
  color: white;
}

</style>
