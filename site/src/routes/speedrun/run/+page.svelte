<script lang="ts">

import sample from "@stdlib/random-sample";

import Site from "#scripts/site";
import { speedrun } from "#scripts/stores";
import type { InternalError } from "#scripts/types";

import { display_time } from "#scripts/utils";

import Katex from "#parts/katex.svelte";
import Clicky from "#parts/ui/clicky.svelte";
import Tag from "#parts/ui/tag.svelte";
import AnswerCards from "#parts/ui/answer-cards.svelte";

import Meta from "#parts/page/meta.svelte";
import Line from "#parts/page/line.svelte";

import { fade } from "svelte/transition";
import { onMount } from "svelte";


let errors: InternalError[] = $state([]);

/* pause by default for if the user reloads or reopens the tab */
$speedrun.run.running = false;


onMount(() => {
  if (!$speedrun.created) {
    errors = [{ code: "NULL" }];
    return;
  }

  errors = $speedrun.check_errors();
  if (errors.length) {
    return;
  }

  create_question_pool();
});


function create_question_pool()
{
  if ($speedrun.run.question_pool?.length) return;

  let questions = Object.keys(Site.questions[$speedrun.topic!].questions);
  questions = sample(questions, { replace: false});

  $speedrun.run.question_pool = questions;
}

</script>


<Meta title="{$speedrun.run.started ? display_time($speedrun.run.elapsed) + ' · ' : ''}Speedrun">
  <script src="https://www.desmos.com/api/v1.10/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
</Meta>

<svelte:window onblur={() => $speedrun.prefs.pause_onblur && $speedrun.pause()} />


<!-- UPPER CONTROLS -->
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


{#if errors.length}
  <!-- ERROR SCREEN -->
  <div class="cover" style:padding-top="4rem">
    <article>
      {#if errors[0].code === "NULL"}
        <p> No active speedrun! </p>

        <div style:height="4rem"></div>
        <Clicky text="Create a New Speedrun" intern="speedrun/init" />
      
      {:else}
        <p> Uh oh, speedrun configuration has some issues! Please try creating the speedrun again. </p>
        <br>
        <p> The following errors were found: </p>

        <ul>
          {#each errors as error}
            <li> {error.message} </li>
          {/each}
        </ul>

        <div style:height="4rem"></div>
        <Clicky text="Back to Setup" intern="speedrun/init" />
      {/if}
    </article>
  </div>

{:else}
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
            <!-- QUESTION CONTENT -->
            {@const question = $speedrun.run.question}
            
            <div class="question">
              {#if question.topic === "derivatives"}
                <Katex text="{
                  String.raw`\frac{d}{dx} \ `}{
                  question.question as string
                }" />
              {:else if question.topic === "integrals"}
                <Katex text={question.question.content} />
              {:else if question.topic === "graph-drawing"}
                <Katex text={question.question.content} />
              {:else}
                <Katex text={typeof question.question === "string" ? question.question : question.question.content} />
              {/if}
  
              <Line />
            </div>
  
            <AnswerCards {question} />
          
          {:else}
            <div class="cover" style:height="75vh">
              <p> Um, we seem to be out of questions? </p>
            </div>
          
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
    <!-- LOWER CONTROLS -->
    <div class="info"
      transition:fade={{ duration: 250 }}
    >
      <section class="left">
        <p class="question-number">
          Question {$speedrun.run.question_hist.length}
        </p>
  
        {#if $speedrun.run.question?.difficulty}
          {@const diff = $speedrun.run.question.difficulty}
          <Tag kind={diff} tag={diff} />
        {/if}
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
{/if}


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

  .left {
    font-size: 120%;
    
    .question-number {
      padding-bottom: 0.4em;
      color: $col-text-deut;
      font-size: 1.5rem;
    }
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
