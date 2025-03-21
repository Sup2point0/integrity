<script>
  
import { fade, slide } from "svelte/transition";
import { expoOut } from "svelte/easing";

import Clicky from "#src/parts/ui/clicky.svelte";
  
import { onMount } from "svelte";
import { base } from "$app/paths";

let { children } = $props();


let scrollY = $state(0);

onMount(() => {
  window.addEventListener("scroll", () => {
    scrollY = window.scrollY;
  })
})

</script>


{@render children?.()}

<div class="up" class:live={scrollY > 500}>
  <Clicky action={() => {
    window.scrollTo({ top: 200, behavior: "smooth" });
  }}>
    <img class="arrow" alt="/" src="{base}/arrow.svg" />
  </Clicky>
</div>


<style lang="scss">

.up {
  // display: none;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  opacity: 0%;
  transform: translateY(0.25rem);
  transition: all 0.12s cubic-bezier(0.6, 0.04, 0.98, 0.335);  // ease-in circ

  &.live {
    display: block;
    opacity: 100%;
    transform: none;
  }
}

img.arrow {
  max-width: 0.5em;
  opacity: 50%;
  transform: rotate(180deg) scaleX(125%) scaleY(175%) translateY(0.12em);
}

</style>
