<script lang="ts">
  
import Site from "#scripts/utils/site";

import { sync } from "#scripts/utils/sync";

import Clicky from "#parts/ui/clicky.svelte";

import { onMount } from "svelte";
import { fade } from "svelte/transition";


const V = "Wkhlu#frqiolfw#udjhg#hwhuqdo/#lqhylwdeoh#dqg#xqeuhdndeoh#wkurxjk#jhqhudwlrqv>#iluvw/#vhfrqg/#wklug#“wlo#lqilqlw|1";
const VV = "@lkdo^qri^qflkp\x1Dlk\x1Dcfkafkd\x1Dpb`obq\x1D .-+";
const V9 = "k\\Z_";


onMount(() => {
  $Site.question.add("a");
  $Site.questions.add("A");
  sync();
});

</script>


<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Oxanium:wght@200&display=swap" rel="stylesheet">
</svelte:head>


{#if $Site.style}
  <div in:fade={{ duration: 500 }}>
    <div>
      <p>
        STATUS: ACTIVE
      </p>

      <Clicky text="REBOOT" action={() => {
        $Site.style = "";
      }} />
    </div>
  </div>

{:else}
  <div in:fade={{ duration: 500 }}>
    <p style:font-style="italic">
      {@html V.split("").map(c => String.fromCharCode(c.charCodeAt(0)-3)).join("")}
    </p>
  
    <div in:fade={{ duration: 500, delay: 1500 }}>
      <p style:font-size="200%">
        {@html VV.split("").map(c => String.fromCharCode(c.charCodeAt(0)+3)).join("")}
      </p>

      <Clicky text="ACTIVATE" action={() => {
        $Site.style = V9.split("").map(c => String.fromCharCode(c.charCodeAt(0)+9)).join("");
      }} />
    </div>
  </div>
{/if}


<style>

div div {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

p {
  margin: 1em 0;
  font-family: 'Oxanium', system-ui, sans-serif;
  font-size: 400%;
  text-align: center;
}

</style>
