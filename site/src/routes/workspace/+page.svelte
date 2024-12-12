<script lang="ts">

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


<div id="desmos-window"></div>


<style lang="scss">

#desmos-window {
  width: 100%;
  max-height: 80vh;
}

</style>
