<!-- @component DesmosPreview

A graph rendered by Desmos.
-->

<script lang="ts">

import type { Block } from "#scripts/types";

import { onMount } from "svelte";

interface Props {
  blocks: Block | Block[];
  bounds?: number;
}

let { blocks, bounds = 2 }: Props = $props();


let desmos: any | false | null = null;
let live = $state(false);
let self: HTMLElement;

onMount(() => {
  let observer = new IntersectionObserver(entries => {
    for (let entry of entries) {
      if (entry.isIntersecting && !live) {
        live = try_load_desmos();
      }
    }
  });

  observer.observe(self);
});

function try_load_desmos()
{
  try {
    Desmos;
  } catch {
    desmos = false;
    return false;
  }

  desmos = Desmos.GraphingCalculator(self, {
    expressions: false, keypad: false,
    graphPaper: false, showGrid: false,
    settingsMenu: false,
    lockViewport: true, zoomButtons: false,
    showXAxis: false, showYAxis: false,
    xAxisNumbers: false, yAxisNumbers: false,
  });
  desmos.setMathBounds({
    left: -bounds, right: bounds,
    bottom: -bounds, top: bounds,
  });

  if (Array.isArray(blocks)) {
    desmos.setExpressions(
      blocks.map((block, i) => ({
        id: `graph-${i}`,
        latex: block.content,
        color: pick_col()
      }))
    );
  } else {
    desmos.setExpressions([
      { id: "graph", latex: blocks.content, color: pick_col() }
    ]);
  }

  return true;
}

function pick_col()
{
  return Object.values(Desmos.Colors).sort(() => Math.random() - 0.5)[0];
}

</script>


<div class="desmos-preview"
  bind:this={self}
>
  {#if desmos === false}
    Error loading Desmos preview =(
  {:else if !live}
    Loading...
  {/if}
</div>


<style lang="scss">

.desmos-preview {
  width: 100%;
  min-width: 12rem;
  max-width: 100%;
  aspect-ratio: 1;
}

</style>
