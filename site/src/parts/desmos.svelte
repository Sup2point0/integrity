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
      let expr = parse_block(blocks, 1);
      if (expr === undefined) {
        desmos = false;
        return false;
      }
      desmos.setExpression(expr);
    }
  }

  return true;
}

function parse_block(block: Block, index: number): object | undefined
{
  /* split parts */
  let parts = block.content?.split(" :: ");
  let content = parts.at(-1);

  let sequence: string | string[];
  if (parts.length > 1) {
    sequence = parts.slice(0, -1);
  } else {
    sequence = parts.at(0)!;
  }

  /* parse control sequences */
  let control: {
    [sequence: string]: Record<string, any> | boolean | undefined;
  } = {};

  function apply_sequence(sequence: string)
  {
    let viewport_bounds = parse_sequence(sequence, "viewport");
    if (viewport_bounds) {
      viewport_bounds.left = viewport_bounds.left ?? -10;
      viewport_bounds.bottom = viewport_bounds.bottom ?? -10;
      viewport_bounds.right = viewport_bounds.right ?? 10;
      viewport_bounds.top = viewport_bounds.top ?? 10;
      
      desmos.setMathBounds(viewport_bounds);
    }

    /* flags */
    for (let each of ["animate", "asympt", "base", "dashed", "hidden", "text"]) {
      if (sequence.includes("\\" + each)) {
        control[each] = true;
      }
    }

    /* data */
    let out;

    for (let each of ["line", "point", "slider", "label"]) {
      out = parse_sequence(sequence, each);
      if (out) {
        control[each] = out;
      }
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
    || sequence[0] === "\\" && content![0] === "\\"
  ) return undefined;

  let out = {
    id: `graph-${index}`,

    ...(!control.text && { latex: (content === "" ? " " : content) }),
    ...( control.text && { text: (content === "" ? " " : content), type: "text" }),

    hidden: control.hidden,

    color: (
      control.style?.colour
      ?? (control.asympt || control.base) ? Desmos.Colors.BLACK
      : cols.next().value
    ),

    lineOpacity: (
      control.style?.opacity
      ?? (control.asympt || control.base) ? 0.3
      : 0.9
    ),

    lineStyle: (
      (control.dashed || control.asympt) ? Desmos.Styles.DASHED
      : Desmos.Styles.SOLID
    ),

    pointStyle: (
      control.point?.style ? Desmos.Styles[control.point.style]
      : Desmos.Styles.OPEN
    ),

    sliderBounds: control.slider,

    playing: control.animate ?? false,

    label: control.label?.text ?? "",

    showLabel: control.label?.show || control.label?.text,

    labelOrientation: (
      control.label?.pos ? Desmos.LabelOrientations[control.label.pos]
      : Desmos.LabelOrientations.DEFAULT
    ),
  };

  return out;
}

function parse_sequence(source: string, sequence: string): Record<string, any> | undefined
{  
  if (!source.includes(sequence)) return;

  let pattern = (
    String.raw `(?<=\\`
    + sequence
    + String.raw `)\{.+\}`
  );

  let out = source.match(pattern)?.at(0);
  if (out === undefined) return;

  out = out.replaceAll(/([a-zA-Z]+):/g, String.raw `"$1":`);
  if (out === undefined) return;

  let res;
  try { res = JSON.parse(out); } catch { return undefined; }
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
  color: $col-text-deut;
  opacity: 0;
  transition: opacity 0.24s ease-out 0.05s;

  &.live {
    opacity: 1;
  }
}

</style>
