<script lang="ts">

import type { Block } from "#scripts/types";

import Desmos from "#parts/desmos.svelte";
import DesmosAPI from "#parts/desmos-api.svelte";
import Clicky from "#parts/ui/clicky.svelte";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import RenderBlock from "#parts/page/render-block.svelte";

import { untrack } from "svelte";
import { page } from "$app/state";


let data = $derived(page.data);
let capt = $derived(data.topic.charAt(0).toUpperCase() + data.topic.slice(1));

/* NOTE section and subsections have the same structure - [title, content]. Use index [0] to fetch the title text, [1] to fetch the content. */
let sections: Section[] = $derived(
  Object.entries(page.data)
  .filter(([title, _]) => title.startsWith("//"))
  .map(([title, subsection]) => [title, Object.entries(subsection)])
);

type Section = [string, Subsection[]];
type Subsection = [string, Block[]];


let current_section = $state(1);
let current_subsection = $state(0);

let shown_blocks = $derived(
  sections[current_section][1]  // array of subsections
  .slice(0, current_subsection +1)  // shown subsections
  .map(s => s[1])  // reduce to content
  .map(s => Array.isArray(s) ? s.slice(1) : [s])
  /* Some sections only have a single block, but we need to force an array for rendering */
);
$inspect("sections =", JSON.stringify(sections, undefined, 2))
$inspect("shown-blocks =", JSON.stringify(shown_blocks, undefined, 2))
let desmos_blocks = $state([]);

$effect(() => {
  current_section;
  current_subsection;

  untrack(() => {
    if (sections[current_section]) {}
    // desmos_blocks = ;
  });
});

</script>


<Meta title={data.title} />
<DesmosAPI />


<Breadcrumbs levels={[
  { text: "Scriptures", intern: "scriptures" },
  { text: "Desmos", intern: "scriptures/desmos" },
  { text: "Game Development", intern: "scriptures/desmos/gamedev" },
  { text: capt, intern: "scriptures/desmos/gamedev" },
  { text: data.title },
]} />

<Header title={data.title} {capt} />


<nav class="upper">
  {#each sections as [section, subsections], I}
    {#each subsections as _, i}
      <div class={["subsection", {
        live: current_section === I && current_subsection === i,
        done: current_section > I || (current_section === I && current_subsection > i),
        edge: i === 0,
      }]}>
        <button class="juice" onclick={() => {
          current_section = I;
          current_subsection = i;
        }}>
        </button>
        
        {#if i === 0}
          <div class="section-label">
            {section.slice(2).toUpperCase()}
          </div>
        {/if}
      </div>
    {/each}
  {/each}
</nav>

<div class="layout">
  <div class="half">
    <article>
      {#each shown_blocks as block, idx}
        {#each block as source}
          {#if source.kind === "text" || source.kind === "latex"}
            <div class:live={idx === shown_blocks.length -1}>
              <RenderBlock {source} />
            </div>
          {/if}
        {/each}
      {/each}
    </article>
  </div>
  <div class="half">
    <Desmos blocks={desmos_blocks} options={{ expressionsCollapsed: false }} height="70vh" />
  </div>
</div>

<nav class="lower">
  <Clicky text="Previous"
    action={() => {
      if (current_subsection === 0) {
        current_section--;
        current_subsection = sections[current_section][1].length -1;
      } else {
        current_subsection--;
      }
    }}
    disabled={current_section === 0 && current_subsection === 0}
  />
  <Clicky text="Next"
    action={() => {
      if (sections[current_section][1].length === current_subsection +1) {
        current_section++;
        current_subsection = 0;
      } else {
        current_subsection++;
      }
    }}
    disabled={current_section === sections.length -1 && current_subsection === sections.at(-1)!.length -1}
  />
</nav>


<style lang="scss">

nav {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;
}

nav.upper {
  width: 100%;
  padding: 2rem 0 3rem;

  .subsection {
    flex: 1 1 0;
    height: 1.25rem;
    position: relative;
    transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);  // ease-out-exp
    
    &.live {
      pointer-events: none;
      flex-grow: 2;
    }

    .juice {
      width: 100%;
      height: 100%;
      background: light-dark(rgb(black, 4%), rgb(white, 12%));
      border: none;
      transform: skew(-20deg);

      @include interact(
        light-dark(rgb(black, 8%), rgb(white, 16%)),
        light-dark(rgb(black, 12%), rgb(white, 20%)),
      );
      @include focus-outline;
    }

    &.done .juice { background: $col-prot; }
    &.live .juice { background: $col-deut; }

    &.edge {
      padding-left: 1rem;
    }

    .section-label {
      position: absolute;
      top: -2em;
      font-size: 80%;
      color: $col-text-deut;
      white-space: nowrap;
    }
  }
}

.layout {
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;

  .half {
    width: 50%;
  }
}

nav.lower {
  padding-top: 2rem;
  justify-content: space-between;
}

</style>
