<script>

import { speedrun } from "#scripts/stores";

import Clicky from "#parts/ui/clicky.svelte";

</script>


<nav>
  <section class="left">
    <Clicky text="Finish"
      action={() => $speedrun.finish()}
      disabled={!$speedrun.run.started}
    />
  </section>

  <section class="centre">
    <Clicky text="Pause"
      action={() => $speedrun.pause()}
      disabled={!$speedrun.run.started || !$speedrun.run.running}
    />
  </section>

  <section class="right">
    <Clicky text={$speedrun.run.state === "correct" ? "Next" : "Skip"}
      action={() => $speedrun.next_question()}
      disabled={!$speedrun.run.started || !$speedrun.run.question}
    />
  </section>
</nav>


<style lang="scss">

nav {
  width: 100%;
  padding-top: 2rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: stretch;
  font-size: 125%;

  section {
    flex: 1 1 0;
    display: flex;
    flex-flow: row wrap;

    &.left { justify-content: start; }
    &.right { justify-content: end; }
    &.centre { justify-content: center; }
  }
}

</style>
