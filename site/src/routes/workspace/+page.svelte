<script lang="ts">

import { presets, preset_question } from "./presets";

import Site from "#scripts/site";
import { userprefs } from "#scripts/stores";
import type { Shard, Question } from "#scripts/types";

import Clicky from "#parts/ui/clicky.svelte";
import Select from "#parts/ui/select-dropdown.svelte";
import SelectSearch from "#parts/ui/select-search.svelte";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";

import { onMount } from "svelte";
import { page } from "$app/state";
import { base } from "$app/paths";


const questions = Site.get_list_of_all_questions();
const questions_map = Site.get_map_of_all_questions();

/** The current input of the question selector, is a question shard. */
let selected_question: string | null = null;

let desmos: any | false | null = $state(null);
let last_reset: number = Date.now();



onMount(() => {
  try_load_desmos();
});

/** Try load the question from the shard provided in the URL params. */
function try_process_url()
{
  let shard = page.url.searchParams.get("shard");
  if (shard) {
    apply_question(shard);
  }
}

/* It would be nice to separate these functions into their own file, but they interact with the page too much... */
function try_load_desmos(i: number = 0)
{
  if (i > 3) {
    desmos = false;  // fail after too many tries
    return;
  };

  try {
    desmos = Desmos.GraphingCalculator(
      document.getElementById("desmos-window")
    );
    try_process_url();
  } catch {
    setTimeout(
      () => try_load_desmos(++i),
      100 + i*i * 100
    );
  }
}

function check_desmos(): boolean
{
  if (!desmos) {
    alert("Oops, Desmos calculator hasn’t loaded!");
    return false;
  }
  return true;
}

function apply_preset(preset: string | null = null)
{
  if (preset == null) return;

  let data = presets[preset];
  if (!data) {
    alert("Oops, failed to apply preset!");
    return;
  }

  desmos.setExpressions(data);
  desmos.setDefaultState(desmos.getState());
}

function try_load_question(shard: Shard | null): Question | undefined
{
  if (!shard) {
    alert("Woah, no question shard provided!");
    return;
  }

  let question = questions_map[shard];
  if (!question) {
    alert("Hmm, question shard appears to be invalid!");
    return;
  }

  return question;
}

function apply_question(shard: Shard | null) {
  let question = try_load_question(shard);
  if (!question) return;

  desmos.setBlank();
  apply_preset(question.topic);
  preset_question(desmos, question);
}

</script>


<Meta title="Workspace"
  desc="Preset Desmos calculator for solving questions in Integrity"
>
  <script src="https://www.desmos.com/api/v1.10/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
</Meta>


<Breadcrumbs levels={[
  { text: "Integrity", link: Site.root },
  { text: "Workspace" },
]} />

<Header title="Workspace" />

<nav>
  <section id="preset">
    <small> PRESET </small>
    <Select bind:value={$userprefs["desmos-preset"]} options={{
      "Default": null,
      "Integral": "integrals",
      "Completing the Square": "complete-square"
    }} />
  </section>

  <section id="search">
    <div class="container">
      <SelectSearch text="load question"
        bind:value={selected_question}
        options={questions.map(q => q.shard)}
        onselect={value => {
          if (check_desmos()) apply_question(value);
        }}
      />
    </div>
  </section>

  <section id="reset">
    <Clicky text="RESET"
      action={() => {
        if (!check_desmos()) return;

        // Allow resets in quick succession
        if (Date.now() - last_reset > 10000) {
          if (!window.confirm("Any work will be cleared.")) {
            return;
          }
        }

        desmos.setBlank();
        apply_preset($userprefs["desmos-preset"]);
        last_reset = Date.now();
      }}
    />
  </section>
</nav>

<div id="desmos-window">
  {#if desmos === null}
    <p> Loading Desmos calculator... </p>
  {:else if desmos === false}
    <p> Oops, failed to load Desmos calculator! </p>
    <p> Please try checking your internet connection and reloading the page. </p>
  {/if}
</div>

<nav>
  <section id="left">
    <Clicky text="View Question" action={() => {
      let question = try_load_question(selected_question);

      if (question) {
        window.open(`${base}/question/${question.topic}?shard=${question.shard}`, "_blank");
      }
    }} />
  </section>

  <!-- <section id="right">
    <Clicky text="Open in Desmos" link="https://desmos.com/calculator" />
  </section> -->
</nav>

<p class="caption">
  Created with the Desmos API, used with permission kindly provided by Desmos Studio PBC!
</p>


<style lang="scss">

nav {
  margin: 1rem 0;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;

  > section {
    min-width: max-content;
    flex: 1 0;
    display: flex;
    align-items: stretch;

    &#preset {
      align-items: center;
    }
    &#search {
      justify-content: center;
      .container {
        width: max-content;
        position: relative;
      }
    }
    &#reset {
      justify-content: end;
    }

    &#right {
      justify-content: end;
    }
  }
}

#desmos-window {
  width: 100%;
  height: 80vh;
  background: $col-hover;

  p {
    padding-top: 10vh;
    color: $col-text-deut;
    text-align: center;
  }
}


small {
  padding: 0 0.5em;
  @include font-ui;
}

p.caption {
  padding-top: 2em;
  @include font-ui;
  font-weight: 200;
  color: $col-text-deut;
  font-size: 90%;
  text-align: center;
}

</style>
