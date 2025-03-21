<script lang="ts">

import Site from "#src/scripts/site";
import { userprefs } from "#scripts/stores";

import ProgressBar from "./progress-bar.svelte";

import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Meta from "#parts/page/meta.svelte";


const total_questions = Site.get_list_of_all_questions().length;

</script>


<Meta title="Data"
  desc="Your personal statistics on Integrity"
/>


<Breadcrumbs levels={[
  { text: "Integrity", link: Site.root },
  { text: "Data" },
]} />


<Header title="Data" capt="Your personal statistics" />

<div class="stats">
  <section>
    <div class="row">
      <p class="label"> Questions Solved </p>
      <p class="count"> <span>{$userprefs.solved.size}</span> of {total_questions} </p>
    </div>
    <ProgressBar value={$userprefs.solved.size / total_questions} />
  </section>
  
  <section>
    <div class="row">
      <p class="label"> Questions Starred </p>
      <p class="count"> <span>{$userprefs.starred.size}</span> of {total_questions} </p>
    </div>
    <ProgressBar value={$userprefs.starred.size / total_questions} />
  </section>
  
  <section>
    <div class="row">
      <p class="label"> Questions Flagged </p>
      <p class="count"> <span>{$userprefs.flagged.size}</span> of {total_questions} </p>
    </div>
    <ProgressBar value={$userprefs.flagged.size / total_questions} />
  </section>
</div>


<style lang="scss">

.stats {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

section {
  width: 80%;
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
