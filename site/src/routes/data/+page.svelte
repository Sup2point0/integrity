<script lang="ts">

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

import Site from "#src/scripts/site";
import { userprefs } from "#scripts/stores";

import ProgressBar from "./progress-bar.svelte";
import Clicky from "#src/parts/ui/clicky.svelte";

import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Meta from "#parts/page/meta.svelte";


let checking = $state(false);
let checks = 0;

const total_questions = Site.get_list_of_all_questions().length;
const total_integrals = Site.get_questions_of_topic("integrals").length;

let seen_integrals = $derived(
  [...$userprefs.seen].filter(q => q.startsWith("s")).length);
let solved_integrals = $derived(
  [...$userprefs.solved].filter(q => q.startsWith("s")).length);


try {
  TimeAgo.addDefaultLocale(en);
} catch (e) {
  console.error(e);
}
const time_ago = new TimeAgo("en-US");


function export_prefs()
{
  $userprefs.saved = new Date().getTime();

  const data = JSON.stringify($userprefs.to_json(), null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "integrity.prefs.json";
  a.click();
}

function check_integrity()
{
  checks++;
  let errors = false;

  if ([...$userprefs.solved].some(q => [null, undefined].includes(q))) {
    errors = true;
  }

  if (errors) {
    if (confirm("Errors found! Would you like them to be automatically fixed?")) {
      fix_integrity();
    }
  } else {
    if (checks > 3 && Math.random() > 0.9) {
      confirm("Mate, are you having a bubble bath?");
    } else {
      confirm("No errors found, looking good!");
    }
  }

  checking = false;
}

function fix_integrity()
{
  // yesh yesh very smart integrity fixing
  $userprefs.seen.delete(null);
  $userprefs.seen.delete(undefined);
  $userprefs.solved.delete(null);
  $userprefs.solved.delete(undefined);
  $userprefs.flagged.delete(null);
  $userprefs.flagged.delete(undefined);
  $userprefs.starred.delete(null);
  $userprefs.starred.delete(undefined);

  $userprefs = $userprefs;
}

</script>


<Meta title="Stats"
  desc="Your personal statistics on Integrity"
/>


<Breadcrumbs levels={[
  { text: "Integrity", link: Site.root },
  { text: "Stats" },
]} />


<Header title="Your Stats" capt="Your personal statistics on <em>Integrity</em>" />

<div class="data">
  <section>
    <p> Data is all saved locally to localStorage. </p>
  </section>

  <div class="stats">
    <section>
      <div class="row">
        <p class="label"> Questions Seen </p>
        <p class="count"> <span>{$userprefs.seen?.size}</span> of {total_questions} </p>
      </div>
      <ProgressBar value={$userprefs.seen?.size / total_questions} />
    </section>

    <section>
      <div class="row">
        <p class="label"> Questions Solved </p>
        <p class="count"> <span>{$userprefs.solved?.size}</span> of {total_questions} </p>
      </div>
      <ProgressBar value={$userprefs.solved?.size / total_questions} />
    </section>

    <section>
      <div class="row">
        <p class="label"> Integrals Seen </p>
        <p class="count"> <span>{seen_integrals}</span> of {total_integrals} </p>
      </div>
      <ProgressBar value={seen_integrals / total_integrals} />
    </section>

    <section>
      <div class="row">
        <p class="label"> Integrals Solved </p>
        <p class="count"> <span>{solved_integrals}</span> of {total_integrals} </p>
      </div>
      <ProgressBar value={solved_integrals / total_integrals} />
    </section>
  </div>

  <div class="stats">
    <section>
      <div class="row">
        <p class="label"> Questions Starred </p>
        <p class="count"> <span>{$userprefs.starred?.size}</span> </p>
      </div>
    </section>
    
    <section>
      <div class="row">
        <p class="label"> Questions Flagged </p>
        <p class="count"> <span>{$userprefs.flagged?.size}</span> </p>
      </div>
    </section>
    
    <section>
      <div class="row">
        <p class="label"> Visits to <em>Integrity</em> </p>
        <p class="count"> <span>{$userprefs.visits ?? "0"}</span> </p>
      </div>
    </section>
  </div>

  <section>
    <Clicky text="Export Data" action={export_prefs} />
    <p class="caption"> Save your preferences and data as a JSON file. </p>
    {#if $userprefs.saved}
      <p class="caption"> Last saved: <span>{time_ago.format(new Date($userprefs.saved))}</span> </p>
    {/if}
  </section>

  <section>
    <Clicky text={checking ? "Checking..." : "Check Integrity"} action={() => {
      checking = true;
      setTimeout(check_integrity, 0);
    }} />
    <p class="caption"> See something questionable about your stats? Check your data for errors such as null values or invalid question shards. </p>
  </section>

  <section>
    <p> Want to flex your stats? Just drop me a message on <a target="_blank" href="https://discordapp.com/users/752972078579449888">Disc</a> ;) </p>
  </section>
</div>


<style lang="scss">

.data, .stats {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.stats {
  padding: 2rem 0;
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
  }
}

p.caption {
  padding-top: 1em;
  font-size: 100%;
  color: $col-text-deut;
}

p span {
  font-weight: 400;
  color: $col-prot;
}

a {
  @include underline-link;
}

</style>
