<!-- @component AnswerCards

Cards for selecting the answer to a multiple-choice question.
-->

<script lang="ts">

import sample from "@stdlib/random-sample";

import { speedrun } from "#src/scripts/stores";

import type { Question } from "#scripts/types";

import Katex from "#parts/katex.svelte";
import Desmos from "#parts/desmos.svelte";


interface Props {
  question: Question | Partial<Question>;
}

let { question }: Props = $props();


let options = $derived(
  question.options
    ? sample(question.options, { size: Object.keys(question.options).length, replace: false })
    : []
);

</script>


<div class="answer-cards">
  {#each options as option}
    <button
      class={{
        correct: ($speedrun.run.state === "correct" && option.index === 0),
        incorrect: ($speedrun.run.state !== "correct" && $speedrun.run.answers.has(option.index))
      }}
      onclick={() => $speedrun.submit_answer(option.index)}
      disabled={
        ($speedrun.run.state === "correct" && option.index !== 0) || undefined
      }
    >
      {#if question.topic === "graph-drawing"}
        {#key question.shard}
          <Desmos
            blocks={{ kind: "desmos", content: option.latex }}
            options={{ showXAxis: true, showYAxis: true }}
            controls={false}
            bounds={question["graph-bounds"]}
            height="25vh"
          />
        {/key}

      {:else}
        <Katex text={option.latex} inline={false} />

      {/if}
    </button>
  {/each}
</div>


<style lang="scss">

.answer-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

button {
  min-width: 16em;
  min-height: 6em;
  padding: 0.75em;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @include font-ui;
  color: $col-text;
  font-size: 150%;
  text-decoration: none;
  background: light-dark(white, black);
  border: 1px solid $col-line-fallback;
  border: 1px solid $col-line;
  border-radius: 0.5em;
  box-shadow: 0 2px 2px -0.5px $col-line;

  @include interact(
    $hover: $col-card-hover,
    $click: $col-card-click,
    $t: 0.16,
  );
  @include focus-outline;

  &.incorrect, &.correct {
    pointer-events: none;
    border: none;
    box-shadow: none;
  }

  &.incorrect { background: color-mix(in oklch, $col-no, transparent 80%); }
  &.correct { background: color-mix(in oklch, $col-yes, transparent 75%); }

  &[disabled] {
    pointer-events: none;
    opacity: 20%;
  }
}

</style>
