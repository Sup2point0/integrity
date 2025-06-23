<!-- @component AnswerCards

Cards for selecting the answer to a multiple-choice question.
-->

<script lang="ts">

import sample from "@stdlib/random-sample";

import type { Question } from "#scripts/types";

import Katex from "#parts/katex.svelte";


interface Props {
  question: Question | Partial<Question>;
  submit: (idx: number) => void;
}

let { question, submit }: Props = $props();


let options = $derived(
  question.options
    ? sample(question.options, { size: question.options.length, replace: false })
    : []
);

$inspect(options);

</script>


<div class="answer-cards">
  {#each options as option}
    <button class="answer-card"
      onclick={() => submit(option.index)}
    >
      <Katex text={option.latex} inline={false} />
    </button>
  {/each}
</div>


<style lang="scss">

.answer-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

button.answer-card {
  min-width: 16em;
  min-height: 8em;
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
}

</style>
