<script lang="ts">

import Site from "#scripts/site";

import Meta from "#parts/meta.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";

import { onMount } from "svelte";


let calc: object | null = null;

function try_load_desmos(i: number = 0)
{
  if (i > 3) {
    calc = false;  // fail after too many tries
    return;
  };

  try {
    calc = Desmos.GraphingCalculator(
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

<div id="desmos-window">
  {#if calc === false}
    <p> Oops, failed to load Desmos calculator! </p>
  {/if}
</div>


<style lang="scss">

#desmos-window {
  width: 100%;
  height: 80vh;
}

</style>
