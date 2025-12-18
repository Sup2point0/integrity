<script lang="ts">
  
import Site from "#scripts/utils/site";

import { sync } from "#scripts/utils/sync";

import { onMount } from "svelte";


const Z = "Wvm(|qum(qv(xzquiz\x81({kpwwt4(\x7Fm(pmizl(i(DmuF\\P]LD7muF(wv(|pm(\x7Fqvlw\x7F6(_pmv(\x7Fm(|}zvml(izw}vl4(\x7Fm({i\x7F(|pi|(i(DmuFxqlomwvD7muF(pil(kzi{pml(qv|w(|pm(\x7Fqvlw\x7F6(Q|({tw\x7Ft\x81({tql(lw\x7Fv4(m\x80ik|t\x81(tqsm(qv(|pm(kiz|wwv{4(ivl(666lqml4(Q(|pqvs(H6H";


onMount(() => {
  $Site.question.add("y");
  $Site.questions.add("Y");
  sync();
});

</script>


<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap" rel="stylesheet">
</svelte:head>


<p>
  {@html Z.split("").map(c => String.fromCharCode(c.charCodeAt(0)-8)).join("")}
</p>


<style>

p {
  font-family: 'Gloria Hallelujah';
  font-size: 150%;
}

</style>
