<script>

import katex from "katex";

import Site from "#scripts/utils/site"

import Toggle from "#parts/ui/toggle.svelte";

import { onMount, untrack } from "svelte";


let live = $state(false);

const source = Array.from({ length: 1679 }, () => Math.round(Math.random() * 9).toString() + (Math.random() > 0.5 ? "+" : "-")).join("") + Math.round(Math.random() * 9).toString();
const check = eval(source).toString().split("");
const d = $state(Array.from({ length: 12 }, () => false));


onMount(() => {
  $Site.questions.add("s");
});

$effect(() => {
  for (let [i, v] of Object.entries(d)) {
    if (check.includes(i) && !v) return;
    if (!check.includes(i) && v) return;
  }

  untrack(() => {
    $Site.question.add("S");
    live = true;
  });
})

const graphs = [
  (x, y) => (x+1) * (x + y),
  (x, y) => 37 * (x * y + x + 2*y),
  (x, y) => 37 * Math.sin(x) * Math.sin(y),
  (x, y) => Math.round(27 * Math.sin(x*y) * Math.cos(x) * Math.cos(y)),
  (x, y) => (x+1) * (x+1) * y + y,
];

const splice = graphs[Math.floor(Math.random() * graphs.length)];

</script>


{#if live}
  <div class="grid">
    {#each { length: 30 } as _, y}
      {#each { length: 50 } as _, x}
        <div class="tile"
          style:--delay={splice(x, y)}
        ></div>
      {/each}
    {/each}
  </div>

{:else}
  <div id="top">
    {@html katex.renderToString(source)}
  </div>

  <div id="bottom">
    <Toggle text="–" value={d["-"]} toggle={() => { d["-"] = !d["-"]; }} />

    {#each { length: 10 } as _, idx}
      {@const i = idx.toString()}

      <Toggle
        text={i.toString()}
        value={d[i]}
        toggle={() => { d[i] = !d[i]; }}
      />
    {/each}
    
    <Toggle text="+" value={d["+"]} toggle={() => { d["+"] = !d["+"]; }} />
  </div>
{/if}


<style lang="scss">

@property --light {
  syntax: '<number>';
  inherits: false;
  initial-value: 0;
}

@property --chroma {
  syntax: '<number>';
  inherits: false;
  initial-value: 0;
}

@property --hue {
  syntax: '<number>';
  inherits: false;
  initial-value: 0;
}

.grid {
  padding: 2rem 0 4rem;
  display: grid;
  grid-template-columns: repeat(50, 1fr);
}

.tile {
  aspect-ratio: 1;
  background: oklch(var(--light) var(--chroma) var(--hue));
  animation:
     8s light  ease-in-out calc(var(--delay) * -0.69s),
     9s chroma ease-in-out calc(var(--delay) * -0.67s),
     6s hue    ease-in-out calc(var(--delay) * -0.65s),
    13s opac   ease-in-out calc(var(--delay) * -0.63s);
  animation-direction: alternate;
  animation-iteration-count: infinite;
}

@keyframes light {
  from { --light: 0.5; }
    to { --light: 1; }
}

@keyframes chroma {
  from { --chroma: 0.2; }
    to { --chroma: 0.5; }
}

@keyframes hue {
  from { --hue: 0; }
    to { --hue: 360; }
}

@keyframes opac {
  from { opacity: 0; }
   90% { opacity: 0; }
    to { opacity: 1; }
}

#top {
  padding-bottom: 5rem;
  user-select: none;
}

#bottom {
  padding-bottom: 5rem;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 0.5rem;
  font-size: 200%;
}

</style>
