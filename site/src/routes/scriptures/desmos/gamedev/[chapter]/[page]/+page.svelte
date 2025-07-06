<script lang="ts">

import type { DynamicScripture } from "#scripts/types";

import Desmos from "#parts/desmos.svelte";
import DesmosAPI from "#parts/desmos-api.svelte";
import Clicky from "#parts/ui/clicky.svelte";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import RenderBlock from "#parts/page/render-block.svelte";

import { untrack } from "svelte";
import { slide } from "svelte/transition";
import { expoOut } from "svelte/easing";
import { page } from "$app/state";


let data: DynamicScripture = $derived(page.data as DynamicScripture);
let sections_list = $derived(Object.values(data.sections));


let current_section = $state(1);
let current_subsection = $state(2);

let shown_subsections = $derived(
  Object.values(data.sections)[current_section]
  .subsections.slice(0, current_subsection +1)
);
let desmos_blocks = $state([]);

$effect(() => {
  current_section;
  current_subsection;

  untrack(() => {
    // if (sections[current_section]) {}
    // desmos_blocks = ;
  });
});


function next_subsection()
{
  if (sections_list[current_section].subsections.length === current_subsection +1) {
    current_section++;
    current_subsection = 0;
  } else {
    current_subsection++;
  }
}

</script>


<Meta title={data.title} />
<DesmosAPI />


<Breadcrumbs levels={[
  { text: "Scriptures", intern: "scriptures" },
  { text: "Desmos", intern: "scriptures/desmos" },
  { text: "Game Development", intern: "scriptures/desmos/gamedev" },
  { text: data.topic, intern: "scriptures/desmos/gamedev" },
  { text: data.title },
]} />

<Header title={data.title} capt={data.topic} />


<nav class="upper">
  {#each data.sections as section, I}
    {#each section.subsections as _, i}
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
            {section.title}
          </div>
        {/if}
      </div>
    {/each}
  {/each}
</nav>

<div class="layout">
  <div class="half">
    <article>
      {#each shown_subsections as subsection, idx}
        <div class="padding-container"
          transition:slide={{ duration: 500, easing: expoOut }}
        >
          <!-- yes, it is a tad confusing to use <section> for each subsection, but... -->
          <section class="sub"
            class:live={idx === shown_subsections.length -1}
          >
            {#each subsection as source (source)}
              {#if source.kind === "text" || source.kind === "latex"}
                <RenderBlock {source} />
              {/if}
            {/each}
          </section>
        </div>
      {/each}
    </article>
    
    <nav class="lower">
      <Clicky text="Previous"
        action={() => {
          if (current_subsection === 0) {
            current_section--;
            current_subsection = sections_list[current_section].subsections.length -1;
          } else {
            current_subsection--;
          }
        }}
        disabled={current_section === 0 && current_subsection === 0}
      />
      <Clicky text="Next"
        action={next_subsection}
        disabled={current_section === sections_list.length -1 && current_subsection === sections_list.at(-1)!.subsections.length -1}
      />
    </nav>
  </div>
  <div class="half">
    <Desmos blocks={desmos_blocks} options={{ expressionsCollapsed: false }} height="70vh" />
  </div>
</div>


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
  gap: 3rem;

  .half {
    width: 50%;
  }
}

article {
  display: flex;
  flex-flow: column nowrap;

  .padding-container {
    padding-bottom: 1rem;  // instead of `gap:`, to ensure `slide` transition is smooth
  }
}

section {
  padding: 1em 1.5em;
  border-radius: 0.5em;
  transition: all 0.12s ease-out;

  &:not(.live) {
    color: $col-text-deut;
    background: $col-click;
    opacity: 50%;
  }
  
  &.live {
    background: white;
    box-shadow: 0 0 4px $col-line;
    opacity: 100%;
  }
}

nav.lower {
  padding-top: 2rem;
  justify-content: space-between;
}

</style>
