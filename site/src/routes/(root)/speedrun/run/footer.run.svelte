<script>

import { speedrun } from "#scripts/stores";
import { display_time } from "#scripts/utils";

import Tag from "#parts/ui/tag.svelte";

import { fade } from "svelte/transition";

</script>


<footer class="info"
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
</footer>


<style lang="scss">

footer.info {
  width: 100%;
  padding-top: 2rem;
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
