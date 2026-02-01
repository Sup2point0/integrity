<script lang="ts">

import Site from "#scripts/site";
import { search } from "#scripts/stores";
import { sync } from "#scripts/utils/sync";


import Header         from "#parts/core/header.svelte";
import Meta           from "#parts/page/meta.svelte";
import Breadcrumbs    from "#parts/page/breadcrumbs.svelte";
import Search         from "#parts/page/search.svelte";
import SearchFooter   from "#parts/page/search-footer.svelte";
import CardsContainer from "#parts/ui/container.cards.svelte";
import Clicky         from "#parts/ui/clicky.svelte";
import QuestionCard   from "#parts/ui/card.question.svelte";

import site from "#scripts/utils/site";

import { onMount } from "svelte";


const questions = Site.get_questions_of_topic("special");
const tags = Site.questions["special"].tags;

let filtered = $derived($search.filter_questions(questions));

let length: [number, number][] = $state([]);
let yorn = $state(false);


onMount(() => {
  $search.tags = Object.fromEntries(tags.map(tag => [tag, false]));
  $search.methods = {};
})

</script>


<Meta title="Special Questions"
  desc="Special one-off questions on wider areas of mathematics"
/>


<Breadcrumbs levels={[
  { text: "Questions", intern: "questions" },
  { text: "Special" },
]} />

<Header title="Special Questions" />
<Search />

<div class="content">
  {#each filtered as question (question.shard)}
    <QuestionCard {question} style="row" />
  {/each}
</div>

<SearchFooter found={filtered.length} total={questions.length} />


<div class="corn">
  <Clicky text="?" action={e => {    
    $site.question.add("e");
    sync();
    
    for (let i = 0; i < 20; i++) {
      length.push([0, 1]);
    }
    setTimeout(() => {
      for (let i = 0; i < 20; i++) {
        length[i] = [Math.random(), Math.random()];
      }
    }, 0);

    e.target?.remove();
  }} />
</div>

{#each length as [x, y], i}
  <div class="torn" class:yorn style:transform="translateX({Math.round(x*100)}vw) translateY({Math.round(y*100)}vh)">
    <Clicky text="?" action={() => { length[i] = [Math.random(), Math.random()]; let j = Math.min(Math.floor(1 / (1 - Math.random())), 100); for (let i = 0; i < j; i++) { length.push([x, y]); } setTimeout(() => { length.splice(-j, j, ...Array(j).fill().map(q => [Math.random(), Math.random()])); }, 0); if (j > 9) { $site.questions.add("E"); sync(); $search["effects"] = true; yorn = true; } }} />
  </div>
{/each}


<style lang="scss">

.content {
  display: flex;
  flex-flow: column;
  align-items: stretch;
  gap: 1rem;
}

.corn {
  position: fixed;
  left: 1rem;
  bottom: 1rem;
  transform: translateY(0.25rem);
  animation: limit cubic-bezier(0.6, 0.04, 0.98, 0.335) forwards;  // ease-in-circ
  animation-timeline: scroll();
}

@keyframes limit {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.torn {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  transition: transform cubic-bezier(0.19, 1, 0.22, 1) 0.5s;

  &.yorn {
    :global(.clicky) {
      position: relative;
      background: light-dark(white, black);
      border: none;
      border-radius: 0.4em;
      box-shadow: none;
      transform-style: preserve-3d;

      &::before {
        content: '';
        margin: -1.5px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(130deg in oklch, $col-manifold, $col-chaos) 0 0 / 100% no-repeat;
        border-radius: 0.5em;
        transform: translateZ(-1px);
      }

      &::after {
        content: '';
        position: absolute;
        inset: -1px;
        background: linear-gradient(130deg in oklch, $col-manifold, $col-chaos);
        filter: blur(4px);
        transform: translateZ(-2px);
        transition: inset 0.12s ease-out;
      }
    }
  }
}

</style>
