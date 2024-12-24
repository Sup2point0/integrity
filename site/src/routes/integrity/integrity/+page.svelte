<script>

import Katex from "#src/parts/katex.svelte";

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
  animation: bounce-in;
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes bounce-in {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

</style>
