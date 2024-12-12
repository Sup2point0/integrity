<script lang="ts">

import Site from "#scripts/site";

import Meta from "#parts/meta.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";

import { onMount } from "svelte";


let calc = null;

onMount(() => {
  if (typeof Desmos !== "undefined") {
    calc = Desmos.GraphingCalculator(
      document.getElementById("desmos-window")
    );
  }
});

</script>


<svelte:head>
  
</svelte:head>


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

<div id="desmos-window"></div>


<style lang="scss">

#desmos-window {
  width: 100%;
  height: 80vh;
}

</style>
