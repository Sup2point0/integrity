<!-- @component ProgressBar -->

<script lang="ts">
  
import { onMount } from "svelte";

interface Props {
  value: number;
  total?: number;
}

let { value, total = 1 }: Props = $props();


// let frac = $derived(value / total);
let frac = Math.random();
// let frac = 1;

let live = $state(false);

let self: HTMLElement;

onMount(() => {
  let observer = new IntersectionObserver(entries => {
    for (let entry of entries) {
      if (entry.isIntersecting) {
        live = true;
      }
    }
  });

  observer.observe(self);
});

</script>


<div class="progress-bar">
  <div class="juice"
    bind:this={self}
    style:--frac={frac}
    style:width="{live ? Math.round(100 * frac) : 0}%"
  >
  </div>
</div>


<style lang="scss">

.progress-bar {
  width: 100%;
  height: 1.5rem;
  background: $col-hover;
  transform: skew(-20deg);
}

.juice {
  height: 1.5rem;
  background: linear-gradient(to right in oklch, $col-deut, $col-yay 75%);
  background-size: calc(100% * 1 / var(--frac));
  transition: width 1s cubic-bezier(0.19, 1, 0.22, 1) 0.75s;
}

</style>
