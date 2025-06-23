<script lang="ts">

import sample from "@stdlib/random-sample";

import { speedrun } from "#scripts/stores";
import { derivatives } from "#src/data/speedrun-questions";

import type { Question } from "#scripts/types";

import Clicky from "#parts/ui/clicky.svelte";
import Line from "#parts/page/line.svelte";
import Katex from "#parts/katex.svelte";
import AnswerCards from "#parts/ui/answer-cards.svelte";


/* pause by default for if the user reloads or reopens the tab */
$speedrun.run.running = false;

// TODO filter
const questions = (
  sample(derivatives.based, { size: derivatives.based.length, replace: false})
);

let question: Partial<Question> | null = $state(null);


function start_speedrun()
{
  next_question();
  $speedrun.run.started = true;
  $speedrun.run.running = true;
}

function next_question()
{
  question = questions.splice(0, 1)[0];
  // @ts-ignore
  question.options = question.options?.map((latex, index) => ({ index, latex }));
}

function check_answer(idx: number)
{
  $speedrun.run.state = "check";
}

function pause_speedrun()
{}

function unpause_speedrun()
{
  if (question === null) {
    // question = $speedrun.run.questions_hist.at(-1);
    next_question();  // TEMP
  }
}

function quit_speedrun()
{}

</script>


<nav class:live={$speedrun.run.started}>
  <section class="left">
    <Clicky text="End" action={quit_speedrun} />
  </section>

  <section class="centre">
    <Clicky text="Pause" action={pause_speedrun} />
  </section>

  <section class="right">
    <Clicky text="Next" action={next_question} />
  </section>
</nav>

{#if $speedrun.run.started}
  {#if $speedrun.run.running}
    <div class="question">
      <Katex text={question.question} />

      <Line />
    </div>

    <AnswerCards {question} submit={check_answer} />
  
  {:else}
    <div style="
      height: 90vh;
      display: flex;
      justify-content: center;
      align-items: center;
    ">
      <Clicky text="Resume" action={unpause_speedrun} />
    </div>

  {/if}

{:else}
  <div style="
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
  ">
    <Clicky text="Start" action={start_speedrun} />
  </div>

{/if}


<style lang="scss">

nav {
  width: 100%;
  padding-top: 2rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: stretch;

  section {
    flex-grow: 1;
    display: flex;
    flex-flow: row wrap;

    &.left { justify-content: start; }
    &.right { justify-content: end; }
    &.centre { justify-content: center; }
  }

  &:not(.live) {
    pointer-events: none;
    opacity: 20%;
  }
}

.question {
  padding: 2rem 0 0;
  font-size: 400%;
}

</style>
