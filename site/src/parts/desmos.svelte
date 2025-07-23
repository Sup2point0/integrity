<!-- @component Desmos

A graph rendered by Desmos.
-->

<script lang="ts">

import type { Block } from "#scripts/types";

import { onMount } from "svelte";

interface Props {
  blocks?: Block | Block[] | null;
  options?: object;
  controls?: boolean;
  height?: string;
  ratio?: number;
  bounds?: number | {
    left?: number, right?: number, bottom?: number, top?: number,
  };
}

let {
  blocks,
  options = {},
  controls = true,
  height,
  ratio,
  bounds = controls ? undefined : 2,
}: Props = $props();


let config = {
  expressions: controls, expressionsCollapsed: true,
  graphPaper: false, showGrid: controls,
  keypad: false, settingsMenu: controls,
  lockViewport: !controls, zoomButtons: controls,
  showXAxis: controls, showYAxis: controls,
  xAxisNumbers: controls, yAxisNumbers: controls,
};

Object.assign(config, options);


let desmos: any | false | null = $state(null);
let live = $state(false);
let self: HTMLElement;

const cols = col_picker();


onMount(() => {
  new IntersectionObserver(entries => {
    for (let entry of entries) {
      if (entry.isIntersecting && !live) {
        live = try_load_desmos();
      }
    }
  }).observe(self);
});

function* col_picker()
{
  const colours = Object.values(Desmos.Colors);

  let idx: number;
  let out: any;
  let last: any;

  while (true) {
    idx = Math.floor(Math.random() * colours.length);
    out = colours[idx];
    
    if (out === last) {
      continue
    } else {
      last = out;
      yield out;
    }
  }
}

function try_load_desmos()
{
  try {
    Desmos;
  } catch {
    desmos = false;
    return false;
  }

  desmos = Desmos.GraphingCalculator(self, config);

  if (typeof bounds === "number") {
    desmos.setMathBounds({
      left: -bounds, right: bounds,
      bottom: -bounds, top: bounds,
    });
  } else if (bounds) {
    desmos.setMathBounds(bounds);
  }

  if (blocks) {
    if (Array.isArray(blocks)) {
      desmos.setExpressions(blocks.map((block, i) => parse_block(block, i)));
    } else {
      desmos.setExpressions([parse_block(blocks, 0)]);
    }
  }

  return true;
}

function parse_block(block: Block, index: number): object | undefined
{
  let parts = block.content?.split(" : ");
  let control = parts.at(0)!;
  let content = parts.at(-1);

  if (control.includes("\\viewport")) {    
    let bounds = control.match(/(?<=\\viewport\{)\{.+\}(?=\})/)?.at(0);
    bounds = bounds?.replaceAll(/([a-zA-Z]+):/, '"1":');
    console.log("bounds =", bounds);
    
    desmos.setMathBounds(JSON.parse(bounds));
  }
  
  if (parts.length === 0 || content === "") return undefined;

  return {
    id: `graph-${index}`,
    latex: content,
    color: control.includes("\\asympt") ? Desmos.Colors.BLACK : cols.next().value,
    hidden: control.includes("\\hidden"),
    lineOpacity: control.includes("\\asympt") ? 0.4 : undefined,
    lineStyle: (control.includes("\\dashed") || control.includes("\\asympt")) ? Desmos.Styles.DASHED : Desmos.Styles.SOLID,
  };
}

</script>


<div class="desmos"
  class:live
  bind:this={self}
  style:height={height}
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
  opacity: 0;
  transition: opacity 0.24s ease-out 0.05s;

  &.live {
    opacity: 1;
  }
}

</style>
