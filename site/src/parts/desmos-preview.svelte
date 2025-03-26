<!-- @component DesmosPreview

A graph rendered by Desmos
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

let self: HTMLElement;

onMount(try_load_desmos);

function try_load_desmos()
{
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
        id: `guess-graph-question-${i}`,
        latex: block.content,
        color: pick_col()
      }))
    );
  } else {
    desmos.setExpressions([
      { id: "guess-graph-question", latex: blocks.content, color: pick_col() }
    ]);
  }
}

function pick_col()
{
  return Object.values(Desmos.Colors).sort(() => Math.random() - 0.5)[0];
}

</script>


<div class="desmos-preview"
  bind:this={self}
>
  
</div>


<style lang="scss">

.desmos-preview {
  width: 100%;
  min-width: 10rem;
  max-width: 100%;
  aspect-ratio: 1;
}

</style>
