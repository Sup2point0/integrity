<script lang="ts">

import sample from "@stdlib/random-sample";

import Site from "#scripts/site";
import { speedrun } from "#scripts/stores";

import { display_time } from "#scripts/utils";

import Meta from "#parts/page/meta.svelte";
import Line from "#parts/page/line.svelte";
import Katex from "#parts/katex.svelte";
import Clicky from "#parts/ui/clicky.svelte";
import AnswerCards from "#parts/ui/answer-cards.svelte";

import { fade } from "svelte/transition";
import { onMount } from "svelte";


/* pause by default for if the user reloads or reopens the tab */
$speedrun.run.running = false;


onMount(() => {
  console.log("speedrun =", $state.snapshot($speedrun));
  console.log("run =", $state.snapshot($speedrun.run));
  
  if ($speedrun.run.question_pool?.length) return;

  let questions = Object.keys(Site.questions.derivatives.questions);

  $speedrun.run.question_pool = sample(
    questions,
    { size: questions.length, replace: false}
  );
  // TODO filter
});

</script>


<Meta title="{display_time($speedrun.run.elapsed)} · Speedrun" />

<svelte:window onblur={() => $speedrun.prefs.pause_onblur && $speedrun.pause()} />


<nav>
  <section class="left">
    <Clicky text="Finish"
      action={() => $speedrun.finish()}
      disabled={!$speedrun.run.started}
    />
  </section>

  <section class="centre">
    <Clicky text="Pause"
      action={() => $speedrun.pause()}
      disabled={!$speedrun.run.started || !$speedrun.run.running}
    />
  </section>

  <section class="right">
    <Clicky text={$speedrun.run.state === "correct" ? "Next" : "Skip"}
      action={() => $speedrun.next_question()}
      disabled={!$speedrun.run.started}
    />
  </section>
</nav>

<div class="container">
  {#if !$speedrun.run.started}
    <div class="cover"
      style:height="90vh"
      transition:fade={{ duration: 250 }}
    >
      <Clicky text="Start" action={() => $speedrun.start()} />
    </div>

  {:else}
    {#if $speedrun.run.running}
      <div in:fade={{ duration: 250, delay: 250 }}>
        {#if $speedrun.run.question}
          {@const question = $speedrun.run.question}
          
          <div class="question">
            <Katex text="{
              String.raw`\frac{d}{dx} \ `}{
              question.question as string
            }" />

            <Line />
          </div>

          <AnswerCards {question} />
        
        {:else}
          <p> Um, we seem to be out of questions? </p>
        
        {/if}
      </div>
    
    {:else}
      <div class="cover"
        style:height="75vh"
        transition:fade={{ duration: 250 }}
      >
        <Clicky text="Resume" action={() => $speedrun.unpause()} />
      </div>

    {/if}

  {/if}
</div>

{#if $speedrun.run.started}
  <div class="info">
    <section class="left">
      <p class="question-number">
        Question {$speedrun.run.question_hist.length}
      </p>
    </section>

    <section class="centre">
      <p class="timer"
        class:paused={!$speedrun.run.running}
      >
        {display_time($speedrun.run.elapsed)}
      </p>
    </section>

    <section class="right">
      <p class="score">
        <span>{$speedrun.run.question_hist.filter(q => q.correct).length}</span>
        /
        {$speedrun.run.question_hist.length}
      </p>
    </section>
  </div>
{/if}

<div style:height="4rem"></div>


<style lang="scss">

nav {
  width: 100%;
  padding-top: 2rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: stretch;
  font-size: 125%;

  section {
    flex: 1 1 0;
    display: flex;
    flex-flow: row wrap;

    &.left { justify-content: start; }
    &.right { justify-content: end; }
    &.centre { justify-content: center; }
  }
}

.cover {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 125%;
}

.container {
  display: grid;

  > div {
    grid-column: 1/2;
    grid-row: 1/2;
  }
}

.question {
  padding: 2rem 0 0;
  font-size: 300%;
}

.info {
  width: 100%;
  padding-top: 4rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: stretch;
  align-items: center;

  section {
    flex: 1 1 0;
  }

  .question-number {
    color: $col-text-deut;
    font-size: 150%;
  }

  .timer {
    font-size: 300%;
    text-align: center;
    transition: color 0.12s ease-out;

    &.paused {
      color: $col-deut;
    }
  }

  .score {
    color: $col-text-deut;
    font-size: 150%;
    text-align: right;

    span {
      color: $col-prot;
    }
  }
}

</style>
