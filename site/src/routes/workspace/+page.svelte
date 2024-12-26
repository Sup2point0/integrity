<script lang="ts">

import { presets } from "./presets";

import Site from "#scripts/site";
import { userdata } from "#scripts/stores";

import Clicky from "#parts/ui/clicky.svelte";
import Select from "#parts/ui/select-dropdown.svelte";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";

import { onMount } from "svelte";


let desmos: any | false | null = null;
let last_reset: number = Date.now();


onMount(try_load_desmos);

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
  } catch {
    setTimeout(
      () => try_load_desmos(++i),
      100 + i*i * 100
    );
  }
}

function load_preset(preset: string | null = null) {
  if (preset == null) return;

  let data = presets[preset];
  if (!data) {
    alert("Oops, failed to apply preset!");
    return;
  }

  for (let expr of data) {
    desmos.setExpression(expr);
  }

  desmos.setDefaultState(desmos.getState());
}

</script>


<Meta title="Workspace"
  desc="Workspace for solving questions in Integrity"
>
  <script src="https://www.desmos.com/api/v1.10/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
</Meta>


<Breadcrumbs levels={[
  { text: "Integrity", link: Site.root },
  { text: "Workspace" },
]} />

<Header title="Workspace" />

<nav class="calc-controls">
  <div>
    <small> PRESET </small>
    <Select bind:value={userdata["desmos-preset"]} options={{
      "Default": null,
      "Integral": "int",
      "Completing the Square": "c-square"
    }} />
  </div>

  <div>
  </div>

  <div>
    <Clicky text="RESET"
      button={() => {
        if (!desmos) {
          alert("Oops, desmos calculator hasn’t loaded!");
          return;
        }

        // Allow resets in quick succession
        if (Date.now() - last_reset > 10000) {
          if (!window.confirm("Any work will be cleared.")) {
            return;
          }
        }

        desmos.setBlank();
        load_preset(userdata["desmos-preset"]);
        last_reset = Date.now();
      }}
    />
  </div>
</nav>

<div id="desmos-window">
  {#if desmos === null}
    <p> Loading Desmos calculator... </p>
  {:else if desmos === false}
    <p> Oops, failed to load Desmos calculator! </p>
    <p> Please try checking your internet connection and reloading the page. </p>
  {/if}
</div>

<p class="caption">
  Created with the Desmos API, used with permission kindly provided by Desmos Studio PBC!
</p>


<style lang="scss">

nav.calc-controls {
  margin: 1rem 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: no-wrap;

  small {
    padding: 0 0.5em;
    @include font-ui;
  }
}

#desmos-window {
  width: 100%;
  height: 80vh;
  background-color: $col-hover;

  p {
    padding-top: 10vh;
    color: $col-text-deut;
    text-align: center;
  }
}

p.caption {
  padding-top: 1em;
  @include font-ui;
  font-weight: 200;
  color: $col-text-deut;
  font-size: 90%;
  text-align: center;
}

</style>
