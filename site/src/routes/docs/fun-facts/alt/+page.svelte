<script lang="ts">

import Site from "#scripts/utils/site";

import { sync } from "#scripts/utils/sync";

import Clicky from "#parts/ui/clicky.svelte";

import { fade } from "svelte/transition";
import { expoIn } from "svelte/easing";
import { onMount } from "svelte";


let live: boolean | null = $state(null);
let t = $state(new Array(16).fill(new Array(16).fill(null)));

const X = Math.floor(Math.random() * 16);
const Y = Math.floor(Math.random() * 16);

const T = "]sy$jsyrh$e$wigvix%";
const R = "Dana―o\x1C]\x1Cbqj\x1Cb]_p(\x1CE\x1Ckj_a\x1Ciap\x1CPkiNk_goI]pdo\x1Cenh*\x1C?kkh\x1Ccqu*";


onMount(() => {
  $Site.question.add("g");
  sync();
  live = false;
});

</script>


<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap" rel="stylesheet">
</svelte:head>


{#if live}
  <p>
    <br><br> {T.split("").map(c => String.fromCharCode(c.charCodeAt(0)-4)).join("")}
    <br><br> {R.split("").map(c => String.fromCharCode(c.charCodeAt(0)+4)).join("")}
  </p>

{:else}
  <div class="grid">
    {#each { length: 16 } as _, y}
      {#each { length: 16 } as _, x}
        {#if x === X && y === Y}
          {#if live !== null}
            <div transition:fade={{ duration: 3000, delay: (x+y) * 100, easing: expoIn }}>
              <Clicky text="&ensp;" action={() => { live = true; $Site.questions.add("G"); sync() }} />
            </div>
          {/if}
        {:else}
          {#if live !== null}
            <div transition:fade={{ duration: 3000, delay: ((67*(x*y+x+y))%37)*3000, easing: expoIn }}>
              <Clicky action={() => {
                if (y < Y && Math.random() > 0.69) { t[x][y] = "↓"; }
                if (y > Y && Math.random() > 0.69) { t[x][y] = "↑"; }
                if (x < X && Math.random() > 0.69) { t[x][y] = "→"; }
                if (x > X && Math.random() > 0.69) { t[x][y] = "←"; }
                if (t[x][y] === null) { t[x][y] = ["↑", "←", "↓", "→"][Math.floor(Math.random() * 4)]; }
              }}>
                <code> {@html t[x][y] ?? '<span style="opacity: 0">↓</span>'} </code>
              </Clicky>
            </div>
          {/if}
        {/if}
      {/each}
    {/each}
  </div>
  
  <p> One of these squares is not like the others. </p>
{/if}


<style lang="scss">

.grid {
  padding: 2rem 0 4rem;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  gap: 1rem;
  font-size: 150%;
}

p {
  font-family: 'Gloria Hallelujah';
  font-size: 150%;
}

</style>
