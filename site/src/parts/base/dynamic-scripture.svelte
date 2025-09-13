<!-- @component DynamicScriptureView

The fully implemented dynamic scripture viewer.
-->

<script lang="ts">
  
import { dyna_scriptures } from "#scripts/data";
import type { Block, DynamicScripture } from "#scripts/types";

import Desmos from "#parts/desmos.svelte";
import DesmosAPI from "#parts/desmos-api.svelte";
import Clicky from "#parts/ui/clicky.svelte";

import Meta from "#parts/page/meta.svelte";
import Header from "#parts/core/header.svelte";
import RenderBlock from "#parts/page/render-block.svelte";

import { untrack } from "svelte";
import { slide, fade } from "svelte/transition";
import { expoOut } from "svelte/easing";
import { page, navigating } from "$app/state";

import { goto, onNavigate } from "$app/navigation";


let data: DynamicScripture = $derived(page.data as DynamicScripture);
let sections_list = $derived(Object.values(data.sections));


let started = $state(false);
let current_section = $state(0);
let current_subsection = $state(0);

let next_disabled = $derived(
  current_section === sections_list.length -1 &&
  current_subsection === sections_list.at(-1)!.subsections.length -1
);

let shown_subsections = $derived(
  sections_list[current_section]
  .subsections.slice(0, current_subsection +1)
);
let desmos_blocks: Block[] | null = $state(null);

let article_viewport: HTMLElement | null = null;


$effect(() => {
  current_section;
  current_subsection;

  untrack(() => {
    let subsection = sections_list[current_section].subsections[current_subsection];
    if (subsection[0].kind === "desmos") {
      desmos_blocks = (subsection[0].content
        .split("<br><br>")
        .map(line => ({
          kind: "desmos",
          content: line,
        }))
      );
    }
    else {
      if (current_subsection === 0) {
        desmos_blocks = null;
      }
    }

    if (article_viewport) {
      article_viewport.scrollTo({ top: article_viewport.scrollHeight, behavior: "smooth" });
    }
  });
});

$effect(() => {
  page.url;

  untrack(() => {
    started = false;
    current_section = 0;
    current_subsection = 0;
  });
});

onNavigate(async (navigation) => {
  if (!document.startViewTransition) return;

  let url = navigating.to?.url.toString();
  let parts = url?.split("/");

  if (parts?.at(-4) === "desmos" || parts?.at(-3) === "gamedev") {
    return new Promise(resolve => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  }
});


function next_subsection()
{
  if (next_disabled) return;

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

<svelte:window onkeydown={e => {
  if (!started) {
    started = true;
    return;
  }
  
  if (e.key === "Enter" && e.shiftKey) {
    next_subsection();
  }
}} />


{#if started}
  <div in:fade={{ duration: 250, delay: 250 }}>
    <Header title={data.title}
      capt="Last Updated {new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "long",
        year: "2-digit"
      }).format(data.update ?? undefined)}"
    />

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
      <div class="half left">
        <article bind:this={article_viewport}>
          {#each shown_subsections as subsection, idx (subsection)}
            <div class="padding-container"
              in:fade={{ duration: 250 }}
              out:slide={{ duration: 500, easing: expoOut }}
            >
              <!-- yes, it is a tad confusing to use <section> for each subsection, but... -->
              <section class="sub gamedev"
                class:live={idx === shown_subsections.length -1}
              >
                {#each subsection as source}
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

          {#if next_disabled && data.next}
            <Clicky text="Next Up: {dyna_scriptures[data.chapter.toLowerCase()][data.next].title}"
              action={() => goto(`/desmos/gamedev/${data.chapter.toLowerCase()}/${data.next}`)}
            />
          {:else}
            <Clicky text="Next"
              action={next_subsection}
              disabled={next_disabled}
            />
          {/if}
        </nav>
      </div>

      <div class="half right">
        {#key desmos_blocks}
          <Desmos blocks={desmos_blocks} options={{ expressionsCollapsed: false }} height="70vh" />
        {/key}
      </div>
    </div>
  </div>

{:else}
  <aside class="overlay" out:fade={{ duration: 250 }}>
    <header>
      <h1> {data.title} </h1>

      {#if data.desc}
        <div class="desc">
          <RenderBlock source={data.desc} />
        </div>
      {/if}
    </header>

    <nav class="lower">
      <div></div>
      <Clicky text="Start" action={() => { started = true; }} />
    </nav>
  </aside>

{/if}


<style lang="scss">

@use 'sass:color';


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

    &.live .juice {
      background: $col-deut;
    }

    &.done .juice {
      background: $col-prot;

      @include interact(
        $hover: color-mix(in oklch, $col-prot, black 8%),
        $click: color-mix(in oklch, $col-prot, black 16%),
      );
    }

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
  padding-bottom: 3rem;
  display: flex;
  flex-flow: row nowrap;
  gap: 3rem;

  .half {
    width: 50%;
    height: 70vh;
  }
}

article {
  max-height: 70vh;
  padding-right: 0.5rem;
  padding-bottom: 1rem;
  display: flex;
  flex-flow: column nowrap;
  overflow-y: scroll;

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
    background: $col-hover;
    opacity: 50%;
  }
  
  &.live {
    opacity: 100%;
    box-shadow: 0 1px 4px $col-line;
  }
}

:global(section.gamedev:has(aside)) {
  color: color.change($col-yes, $lightness: 40%);
  background: color.change($col-yes, $alpha: 12%);
}

nav.lower {
  padding-top: 1rem;
  flex-flow: row nowrap;
  justify-content: space-between;
}


aside.overlay {
  padding: 3rem 5rem;
  margin-top: 3rem;
  height: 70vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  border-radius: 1em;
  box-shadow: 0 1px 4px $col-line;

  h1 {
    padding-bottom: 1em;
    @include font-serif;
    font-size: 400%;
  }

  .desc {
    font-size: 125%;
  }

  nav.lower {
    font-size: 150%;
  }
}

</style>
