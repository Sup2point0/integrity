<!-- @component Desmos

A graph rendered by Desmos.
-->

<script lang="ts">

import type { Block } from "#scripts/types";

import { onMount } from "svelte";

interface Props {
  blocks: Block | Block[];
  controls?: boolean;
  ratio?: number;
  bounds?: number;
}

let { blocks, controls = true, ratio = 1, bounds = controls ? undefined : 2 }: Props = $props();


let desmos: any | false | null = $state(null);
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

  console.info("sup guys, don’t worry, I have seen this notice – when I originally emailed Desmos asking for a production key, they told me I could just use the prototype key, so it’s all good o7");
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
    expressions: controls, keypad: false,
    graphPaper: false, showGrid: controls,
    settingsMenu: controls,
    lockViewport: !controls, zoomButtons: controls,
    showXAxis: controls, showYAxis: controls,
    xAxisNumbers: controls, yAxisNumbers: controls,
  });

  if (bounds) {
    desmos.setMathBounds({
      left: -bounds, right: bounds,
      bottom: -bounds, top: bounds,
    });
  }

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


<div class="desmos"
  bind:this={self}
  style:aspect-ratio={ratio}
>
  {#if desmos === false}
    Error loading Desmos preview =(
  {:else if !live}
    Loading...
  {/if}
</div>


<style lang="scss">

.desmos {
  width: 100%;
  min-width: 12rem;
  max-width: 100%;
}

</style>
