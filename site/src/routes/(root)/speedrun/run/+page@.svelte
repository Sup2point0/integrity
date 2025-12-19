<script lang="ts">

import sample from "@stdlib/random-sample";

import Site from "#scripts/site";
import { speedrun } from "#scripts/stores";
import { display_time } from "#scripts/utils";
import type { InternalError } from "#scripts/types";

import RunNav from "./nav.run.svelte";
import RunFooter from "./footer.run.svelte";
import AnswerCards from "./answer-cards.svelte";

import DesmosAPI from "#parts/desmos-api.svelte";
import Katex from "#parts/katex.svelte";
import Clicky from "#parts/ui/clicky.svelte";

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
  if (errors.length) return;

  create_question_pool();
});


function create_question_pool()
{
  if ($speedrun.run.question_pool?.length) return;

  let questions = Object.keys(Site.questions[$speedrun.topic!].questions);
  questions = sample(questions, { replace: false });

  $speedrun.run.question_pool = questions;
}

</script>


<Meta title="{$speedrun.run.started ? display_time($speedrun.run.elapsed) + ' · ' : ''}Speedrun" />
<DesmosAPI />

<svelte:window onblur={() => $speedrun.prefs.pause_onblur && $speedrun.pause()} />


<div class="layout">
  <RunNav />

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
    <div class="window">
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
                  <Katex text={question.question?.content} />
                {:else if question.topic === "graph-drawing"}
                  <Katex text={question.question?.content} />
                {:else}
                  <Katex text={typeof question.question === "string" ? question.question : question.question?.content} />
                {/if}
    
                <Line margin="2rem" />
              </div>
    
              <div class="answer-cards">
                <AnswerCards {question} />
              </div>
            
            {:else}
              <div class="cover" style:height="75vh">
                <p> We seem to be out of questions! Speedrun finished! </p>
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
      <RunFooter />
      
    {/if}
    
    <div style:height="4rem"></div>
  {/if}
</div>


<style lang="scss">

.layout {
  padding: 1rem 5vw 1rem;
}

.cover {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 125%;
}

.window {
  display: grid;

  > div {
    grid-column: 1/2;
    grid-row: 1/2;
  }

  .question {
    padding: 2rem 0 0;
    font-size: 250%;
  }
}

</style>
