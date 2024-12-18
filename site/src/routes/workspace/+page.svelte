<script lang="ts">

import Site from "#scripts/site";
import { userdata } from "#scripts/stores";

import { set_preset } from "./scripts";

import Clicky from "#parts/ui/clicky.svelte";
import Select from "#parts/ui/select.svelte";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";

import { onMount } from "svelte";


let desmos: object | false | null = null;

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

onMount(try_load_desmos);

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
    <Select value={userdata["desmos-preset"]} options={{
      "Default": null,
      "Integral": "int",
      "Completing the Square": "c-square"
    }} />
  </div>

  <div>
    <Clicky text="RESET"
      button={() => {}}
    />
  </div>
</nav>

<div id="desmos-window">
  {#if desmos === false}
    <p> Oops, failed to load Desmos calculator! </p>
  {/if}
</div>


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

</style>
