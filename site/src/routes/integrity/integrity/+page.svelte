<script>

import Site from "#scripts/utils/site";

import Katex from "#src/parts/katex.svelte";

import { onMount } from "svelte";


onMount(() => {  
  $Site.questions.add("l");
});

</script>


<article>
  <Katex text={String.raw `\frac{d}{dt} \sum Q_t(k) = S \int_{-\infin}^{k} \frac{\text{love} (w, \Sigma Q)}{kS + e^w}\ dw - c`} />
</article>


<style lang="scss">

article {
  height: 80vh;
  margin: auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
  font-size: 250%;
  opacity: 0;
  animation: fade-in ease-in forwards;
  animation-duration: 30s;
  animation-delay: 3s;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

</style>
