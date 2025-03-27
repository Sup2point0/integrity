<script lang="ts">

import { page_data } from "../page-data.svelte.ts";
import type { Question } from "#scripts/types";

import Clicky from "#parts/ui/clicky.svelte";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";

import { onMount } from "svelte";


let question: Question | null = $derived(page_data.question);

let desmos: any | false | null = $state(null);
let self: HTMLElement;


onMount(try_load_desmos);

function try_load_desmos(i: number = 0)
{
  if (i > 3) {
    desmos = false;  // fail after too many tries
    return;
  };

  try {
    Desmos;
    if (question === null) throw new Error();

    desmos = Desmos.GraphingCalculator(self, {
      expressionsCollapsed: true,
    });

    if (Array.isArray(question.desmos)) {
      desmos.setExpressions(
        question.desmos.map((block, i) => ({
          id: `guess-graph-question-${i}`,
          latex: block.content,
          color: pick_col()
        }))
      );
    } else {
      desmos.setExpressions([
        { id: "guess-graph-question", latex: question.desmos!.content, color: pick_col() }
      ]);
    }
  } catch {
    setTimeout(
      () => try_load_desmos(++i),
      100 + i*i * 100
    );
  }
}

function reload_desmos()
{
  desmos.destroy();
  try_load_desmos();
}

function pick_col()
{
  return Object.values(Desmos.Colors).sort(() => Math.random() - 0.5)[0];
}

</script>


<Meta title="Guess the Graph">
  <script src="https://www.desmos.com/api/v1.10/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
</Meta>


<Breadcrumbs levels={[
  { text: "Questions", intern: "questions" },
  { text: "Guess the Graph", intern: "questions/guess-graph" },
  { text: question?.shard ?? "?" },
]} copy={true} shard={question?.shard} />

<Header title={question?.title} capt={question?.date_display} />

<div id="desmos-window"
  bind:this={self}
>
  {#if desmos === null}
    <p> Loading Desmos calculator... </p>
  {:else if desmos === false}
    <p> Oops, failed to load Desmos calculator! </p>
    <p> Please try checking your internet connection and reloading the page. </p>
  {/if}
</div>

<Clicky text="Reload Graph" action={reload_desmos} />
<!-- TEMP -->
<p class="caption"> Currently trying to fix an issue with the page loading the wrong graph, bear with me! </p>


<style lang="scss">

#desmos-window {
  margin: 1rem 0;
  width: 100%;
  height: 80vh;
}

p.caption {
  padding-top: 1em;
  font-size: 100%;
  color: $col-text-deut;
}

</style>
