<!-- @component Desmos

An embedded Desmos window that handles initialisation when the element scrolls into view.
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
    desmos.setExpressions([]);
    
    if (Array.isArray(blocks)) {
      desmos.setExpressions(
        blocks
          .map((block, i) => parse_block(block, i))
          .filter(each => each !== undefined)
      );
    } else {
      desmos.setExpression(parse_block(blocks, 1));
    }
  }

  return true;
}

function parse_block(block: Block, index: number): object | undefined
{
  /* split parts */
  let parts = block.content?.split(" : ");
  let content = parts.at(-1);

  let sequence: string | string[];
  if (parts.length > 1) {
    sequence = parts.slice(0, -1);
  } else {
    sequence = parts.at(0)!;
  }

  /* parse control sequences */
  let control: {
    [sequence: string]: object | boolean | undefined;
  } = {};

  function apply_sequence(sequence: string)
  {
    control.viewport_bounds = parse_sequence(sequence, "viewport");
    if (control.viewport_bounds) {
      desmos.setMathBounds(control.viewport_bounds);
    }

    for (let each of ["asympt", "base", "dashed", "hidden"]) {
      if (sequence.includes("\\" + each)) {
        control[each] = control[each] || true;
      }
    }

    for (let each of ["style", "slider", "animate"]) {
      control[each] = parse_sequence(sequence, each);
    }
  }

  if (Array.isArray(sequence)) {
    sequence.forEach(apply_sequence);
  } else {    
    apply_sequence(sequence);
  }
  
  /* build expression */
  if (
    parts.length === 0
    || sequence[0] === "\\" && content[0] === "\\"
  ) return undefined;

  return {
    id: `graph-${index}`,
    latex: content === "" ? " " : content,

    hidden: control.hidden,

    color: (
      control.style?.colour ??
      (control.asympt || control.base) ? Desmos.Colors.BLACK :
      cols.next().value
    ),

    lineOpacity: (
      control.style?.opacity ??
      (control.asympt || control.base) ? 0.3 :
      0.9
    ),

    lineStyle: (
      (control.dashed || control.asympt) ? Desmos.Styles.DASHED :
      Desmos.Styles.SOLID
    ),

    sliderBounds: control.slider,

    playing: control?.animate?.playing ?? false,
  };
}

function parse_sequence(source: string, sequence: string): object | undefined
{
  if (!source.includes(sequence)) return;

  let pattern = (
    String.raw`(?<=\\`
    + sequence
    + String.raw`)\{.+\}`
  );

  let out = source.match(pattern)?.at(0);
  if (out === undefined) return;

  out = out.replaceAll(/([a-zA-Z]+):/g, String.raw`"$1":`);
  if (out === undefined) return;

  let res: object;

  try {
    res = JSON.parse(out);
  }
  catch {
    return;
  }

  return res;
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
