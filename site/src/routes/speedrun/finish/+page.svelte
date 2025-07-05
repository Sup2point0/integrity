<script lang="ts">

import { speedrun } from "#scripts/stores";
import { display_time } from "#scripts/utils";

import ProgressBar from "#parts/ui/progress-bar.svelte";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Section from "#parts/page/section.svelte";
import QuestionArray from "#parts/page/question-array.svelte";


let seen = $derived(
  $speedrun.run.question_hist.map(q => q.shard)
);

let answered = $derived(
  $speedrun.run.question_hist.map(q => q.correct !== null)
);
let correct = $derived(
  $speedrun.run.question_hist.map(q => q.correct === true)
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


<div class="container">
  <div class="results">
    <section>
      <div class="row">
        <p class="label"> Time </p>
        <p class="count"> <span>{display_time($speedrun.run.elapsed)}</span> </p>
      </div>
    </section>
      
    <section>
      <div class="row">
        <p class="label"> Question Seen </p>
        <p class="count"> <span>{seen.length}</span> </p>
      </div>
    </section>

    <section>
      <div class="row">
        <p class="label"> Questions Answered </p>
        <p class="count">
          <span>{answered.length}</span> of {seen.length}
        </p>
      </div>
      <ProgressBar value={answered.length / seen.length} />
    </section>

    <section>
      <div class="row">
        <p class="label"> Questions Correct </p>
        <p class="count">
          <span>{correct.length}</span> of {seen.length}
        </p>
      </div>
      <ProgressBar value={correct.length / seen.length} />
    </section>
  </div>
</div>

<Section title="Questions">
  <QuestionArray shards={seen} />
</Section>


<style lang="scss">

.container {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.results {
  padding: 2rem 0;
  width: 80%;
}

section {
  padding: 1rem 0 2rem;
}

.row {
  padding: 0 0 1rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 120%;

    &.count {
      color: $col-text-deut;
    }

    span {
      font-weight: 400;
      color: $col-prot;
    }
  }
}

</style>
