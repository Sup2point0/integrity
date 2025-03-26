<!-- @component DesmosPreview

A graph rendered by Desmos
-->

<script lang="ts">

import type { Latex } from "#scripts/types";

import { onMount } from "svelte";

interface Props {
  latex: Latex;
  bounds?: number;
}

let { latex, bounds = 2 }: Props = $props();


let desmos: any | false | null = null;

let self: HTMLElement;

onMount(try_load_desmos);

function try_load_desmos()
{
  desmos = Desmos.GraphingCalculator(self, {
    keypad: false,
    graphPaper: false,
    expressions: false,
    settingsMenu: false,
    zoomButtons: false,
    lockViewport: true,
    showGrid: false,
    showXAxis: false,
    showYAxis: false,
    xAxisNumbers: false,
    yAxisNumbers: false,
  });
  desmos.setMathBounds({
    left: -bounds,
    right: bounds,
    bottom: -bounds,
    top: bounds,
  });
  desmos.setExpressions([
    { id: "guess-graph-question", latex }
  ]);
}

</script>


<div class="desmos-preview"
  onclick={e => e.preventDefault()}
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
