<script lang="ts">

import Site from "#scripts/site";
import { speedrun } from "#src/scripts/stores";
import type { InternalError } from "#scripts/types";

import Toggle from "#parts/ui/toggle.svelte";
import SelectDropdown from "#parts/ui/select-dropdown.svelte";
import Checkbox from "#parts/ui/checkbox.svelte";
import TickIcon from "#parts/svg/tick-icon.svelte";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Clicky from "#parts/ui/clicky.svelte";

import { onMount, untrack } from "svelte";
import { goto } from "$app/navigation";


let submitted = $state(false);
let errors: InternalError[] = $derived(submitted ? $speedrun.check_errors() : []);

$effect(() => {
  if (errors.length === 0) {
    untrack(() => {
      submitted = false;
    });
  }
});

let unchecked_diff = $derived(
  Object.values($speedrun.difficulties).some(diff => !diff)
);


onMount(() => {  
  $speedrun.new_run();
});

</script>


<Meta title="Setup · Speedrun"
  desc="Create a differentiation speedrun session."
/>


<Breadcrumbs levels={[
  { text: "Integrity", link: Site.root },
  { text: "Speedrun", intern: "speedrun" },
  { text: "Create" },
]} />

<Header title="Setup Speedrun" />


<div class="container">
  <table><tbody>
    <tr>
      <th>
        <h4> Topic </h4>
        <p> Pick the type of questions to speedrun. </p>
      </th>
      <td>
        <SelectDropdown bind:value={$speedrun.topic} options={{
          "Differentation": "derivatives",
        }} />
      </td>
    </tr>

    <tr>
      <th>
        <h4> Difficulties </h4>
        <p> Pick which difficulties of questions to include. </p>
      </th>
      <td class="flex">
        <Toggle text="UNASSIGNED"
          value={$speedrun.difficulties.null}
          toggle={() => {
            $speedrun.difficulties.null = !$speedrun.difficulties.null;
          }}
        />
        <Toggle text="BASED" kind="based"
          value={$speedrun.difficulties.based}
          toggle={() => {
            $speedrun.difficulties.based = !$speedrun.difficulties.based;
          }}
        />
        <Toggle text="INCLINE" kind="incline"
          value={$speedrun.difficulties.incline}
          toggle={() => {
            $speedrun.difficulties.incline = !$speedrun.difficulties.incline;
          }}
        />
        <Toggle text="MANIFOLD" kind="manifold"
          value={$speedrun.difficulties.manifold}
          toggle={() => {
            $speedrun.difficulties.manifold = !$speedrun.difficulties.manifold;
          }}
        />
        <Toggle text="CHAOS" kind="chaos"
          value={$speedrun.difficulties.chaos}
          toggle={() => {
            $speedrun.difficulties.chaos = !$speedrun.difficulties.chaos;
          }}
        />
      </td>
      <td>
        <Toggle text="All"
          value={!unchecked_diff}
          toggle={() => {
            let repl = unchecked_diff;
            for (let diff in $speedrun.difficulties) {
              $speedrun.difficulties[diff] = repl;
            }
          }}
        />
      </td>
    </tr>

    <tr>
      <th>
        <h4> Include </h4>
        <p> Filter what questions should be included in the speedrun. </p>
      </th>
      <td>
        {#each Object.entries($speedrun.include) as [prop, state]}
          <Toggle text={prop.toUpperCase()}
            value={state}
            toggle={() => {
              $speedrun.include[prop] = !$speedrun.include[prop];
            }}
          />
          <span></span>
        {/each}
      </td>
    </tr>

    <tr>
      <th></th>
      <td></td>
    </tr>

    <tr>
      <th>
        <h4> Pause timer when focus is lost </h4>
        <p> This is triggered whenever you change to a different tab or window. </p>
      </th>
      <td>
        <Checkbox
          cols={{ off: "#dededede", on: "oklch(61.3% 0.106 237.7)" }}
          value={() => $speedrun.prefs.pause_onblur}
          enable={() => { $speedrun.prefs.pause_onblur = true; return true; }}
          disable={() => { $speedrun.prefs.pause_onblur = false; return true; }}
        >
          <TickIcon />
        </Checkbox>
      </td>
    </tr>

    <tr>
      <th>
        <h4> Pause timer when answer submitted </h4>
        <p> Use this to prevent downtime between questions from adding to your run time. </p>
      </th>
      <td>
        <SelectDropdown bind:value={$speedrun.prefs.pause_timer_onsubmit} options={{
          "Always": "always",
          "Only When Correct": "when-correct",
          "Never": false,
        }} />
      </td>
    </tr>

    <tr>
      <th>
        <h4> Reveal correct answer if incorrect </h4>
      </th>
      <td>
        <SelectDropdown bind:value={$speedrun.prefs.reveal_answer_onsubmit} options={{
          "Always": "always",
          "After 2 Incorrect Answers": "after-2",
          "Never": false,
        }} />
      </td>
    </tr>
  </tbody></table>
</div>

<nav class="end">
  <Clicky text="Create Speedrun" action={() => {
    submitted = true;
    if (errors.length === 0) {
      $speedrun.created = true;
      goto("run");
    } else {
      alert("Invalid configuration! " + errors[0].message);
    }
  }} />
</nav>


<style lang="scss">

.container {
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
}

table {
  max-width: 100%;
  margin: 1rem 0;
  border-spacing: 0 0.5rem;
  text-align: left;

  th {
    width: max-content;
    padding: 1em 2em;

    h4 {
      padding-bottom: 0.25em;
      font-weight: 400;
    }

    p {
      color: $col-text-deut;
      font-size: 90%;
    }
  }

  td {
    padding: 0.75rem 2rem;
    font-size: 100%;

    &.flex {
      display: flex;
      flex-flow: row wrap;
      gap: 0.25em;
    }
  }
}

nav.end {
  margin-top: 4rem;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: end;
}

</style>
