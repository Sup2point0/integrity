<!-- @component GraphBar -->

<script lang="ts">
  
import { onMount } from "svelte";

interface Props {
  idx: number;
  freq: number | null;
  frac: number;
}

let { idx, freq, frac }: Props = $props();


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


<div class="freq-label"
  class:live
  style:--idx={idx}
>
  {freq ?? "No data"}
</div>

<div class="graph-bar"
  bind:this={self}
  style:--frac={frac}
  style:height="{live ? Math.round(100 * frac) : 0}%"
  style:transition-delay="{50 * idx}ms"
>
</div>


<style lang="scss">

.freq-label {
  padding-bottom: 1em;
  text-align: center;
  color: $col-text-deut;
  opacity: 0;
  transition:
    opacity 0.5s ease-out calc(100ms + var(--idx) * 50ms),
    color 0.12s ease-out,
    transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  
  &.live {
    opacity: 1;
  }
}

.graph-bar {
  background: linear-gradient(to bottom in oklch, $col-deut, $col-yay 75%);
  background-size: 100% calc(100% * 1 / var(--frac));
  transform: scaleY(-1);
  transition: height 1.5s cubic-bezier(0.19, 1, 0.22, 1);
}

</style>
