<script lang="ts">

import Site from "#scripts/utils/site";

import Toggle from "#parts/ui/toggle.svelte";

import { onMount } from "svelte";
import { fade } from "svelte/transition";
import { expoIn } from "svelte/easing";


let comp = $state(false);

let lattice = $state(
  Array.from({ length: 11 }, (_, x) => Array.from({ length: 10 }, (_, y) => (
    x === 0 ? false :
    Math.random() > 0.69 ? true : false
  )))
);

const np = [
  [2,0], [3,0], [5,0], [7,0],
  [1,1], [3,1], [7,1], [9,1],
  [3,2], [9,2],
  [1,3], [7,3],
  [1,4], [3,4], [7,4],
  [3,5], [9,5],
  [1,6], [7,6],
  [1,7], [3,7], [9,7],
  [3,8], [9,8],
  [7,9],
];

function s() {
  return lattice.flatMap((r, x) => r.map((c, y) => (
    np.some(([p, q]) => p === x && q === y) ? c === true : c === false
  ))).every(Boolean);
};

const W = "?SP\vLYNTPY_\vNS]ZYTNWP^\v^[ZVP\vZQ\vYZY\x180`NWTOPLY\vPWO]T_NS\vSZ]]Z]^\x17\vXLYTQZWO^\vZQ\vNSLZ^\vTYNZYNPTaLMWP\v_Z\v]PLWT_d\x19\v4YNWTYPO\vMd\v_SPT]\vZbY\vOTXPY^TZYWP^^YP^^\x17\vZ`]\v[]ZRPYT_Z]^\vML^PO\vL\v]L_TZYLWT^L_TZY\v_S]Z`RS\vTXLRTYL]d\vNZY^_]`N_^\vZQ\vbZYOP]\v῾\vTYaT^TMWP\v_Z\v_SP\vPdP\x17\vM`_\vTY_`T_TaP\v_Z\v_SP\vXTYO\x19";


onMount(() => {
  $Site.questions.add("p");
});

</script>


<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Protest+Revolution&display=swap" rel="stylesheet">
</svelte:head>


{#if comp}
  <p transition:fade={{ duration: 2000, easing: expoIn }}>
    {W.split("").map(c => String.fromCharCode(c.charCodeAt()+21)).join("")}
  </p>

{:else}
  <div class="layout">
    {#each { length: 10 } as _, y}
      <div class="row">
        {#each { length: 10 } as _, x}
          <Toggle
            text="&ensp;"
            value={lattice[x+1][y]}
            toggle={() => {
              lattice[x+1][y] = !lattice[x+1][y];
              if (s()) {
                comp = true;
                $Site.question.add("P");
              }
            }}
          />
        {/each}
      </div>
    {/each}
  </div>

{/if}


<style lang="scss">

.layout {
  padding-top: 1rem;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  font-size: 200%;
}

.row {
  padding-top: 1rem;
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;
}

p {
  margin-top: 4rem;
  font-family: 'Protest Revolution';
  font-size: 150%;
  line-height: 200%;
}

</style>
