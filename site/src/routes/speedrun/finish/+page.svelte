<script lang="ts">

import { speedrun } from "#scripts/stores";
import * as utils from "#scripts/utils";

import Clicky from "#parts/ui/clicky.svelte";
import ProgressBar from "#parts/ui/progress-bar.svelte";
import Tag from "#parts/ui/tag.svelte";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Line from "#parts/page/line.svelte";
import Section from "#parts/page/section.svelte";
import QuestionArray from "#parts/page/question-array.svelte";


let seen = $derived(
  $speedrun.run.question_hist.map(q => q.shard)
);
let answered = $derived(
  $speedrun.run.question_hist.filter(q => q.correct !== null)
);
let correct = $derived(
  $speedrun.run.question_hist.filter(q => q.correct === true)
);

</script>


<Meta title="Finish · Speedrun"
  desc="Speedrun finished, let’s go."
/>


<Breadcrumbs levels={[
  { text: "Speedrun", intern: "speedrun" },
  { text: "Finish" },
]} />

<Header title="Speedrun Results" />


{#if $speedrun.run.finished}

<div class="container results">
  <div class="col left">
    <div class="row">
      <p class="label"> Time </p>
      <p class="value"> <span>{utils.display_time($speedrun.run.elapsed)}</span> </p>
    </div>
    
    <div class="row">
      <p class="label"> Question Seen </p>
      <p class="value"> <span>{seen.length}</span> </p>
    </div>
  </div>

  <div class="col right">
    <section>
      <div class="row">
        <p class="label"> Questions Answered </p>
        <p class="value">
          <span>{answered.length}</span> of {seen.length}
        </p>
      </div>
      <ProgressBar value={answered.length / seen.length} />
    </section>

    <section>
      <div class="row">
        <p class="label"> Questions Correct </p>
        <p class="value">
          <span>{correct.length}</span> of {seen.length}
        </p>
      </div>
      <ProgressBar value={correct.length / seen.length} />
    </section>
  </div>
</div>

<Line width="80%" margin="1rem auto" />
<div class="utils">
  <Clicky text="Export Run Data" action={() => {
    utils.download_json_file($speedrun.to_json(), "integrity.run.json");
  }} />
</div>

<Section title="Statistics">
  <div class="container">
    <div class="col left">
      <section>
        <div class="row">
          <div>
            <p class="label"> Accuracy </p>
            <p class="caption"> The proportion of questions you answered which were correct (ignores skipped questions). </p>
          </div>
          <p class="value"> <span>{utils.round(100 * correct.length / answered.length, 1)}%</span> </p>
        </div>
        <ProgressBar value={correct.length / answered.length} />
      </section>
    </div>

    <div class="col right">

    </div>
  </div>
</Section>

<Section title="Questions">
  <QuestionArray shards={seen} />
</Section>

<Section title="Configuration">
  <div class="row">
    <p class="label"> Topic </p>
    <p class="value"> <span>{$speedrun.topic ?? "?"}</span> </p>
  </div>
  
  <div class="row">
    <p class="label"> Difficulties </p>
    <p class="value">
      {#each Object.entries($speedrun.difficulties).filter(([diff, state]) => state) as [diff, state]}
        <Tag kind={diff} tag={diff} />
      {/each}
    </p>
  </div>
</Section>

{:else}

<article>
  <p> Oops, no recently finished speedruns! </p>
  <p> Head over to <a href="init">Setup</a> to start a new speedrun. </p>
</article>

{/if}



<style lang="scss">

.container {
  padding: 0 4rem 2rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  gap: 4rem;

  .col {
    flex-grow: 1;
    display: flex;
    flex-flow: column nowrap;

    &.left { gap: 1rem; }
    &.right { gap: 2rem; }
  }
}

.row {
  padding: 0 0 1rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 120%;

    &.label {
      padding-bottom: 0.25em;
    }

    &.caption {
      color: $col-text-deut;
      font-size: 90%;
    }

    &.value {
      color: $col-text-deut;

      span {
        font-weight: 400;
        color: $col-prot;
      }
    }
  }
}

.results {
  padding-top: 2rem;
  padding-bottom: 3rem;
}

.utils {
  padding-bottom: 2rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

</style>
