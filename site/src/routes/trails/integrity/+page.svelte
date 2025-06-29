<script lang="ts">

import Toggle from "#parts/ui/toggle.svelte";


let lattice = $state(Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => Math.random() > 0.69 ? true : false)));

</script>


<div class="layout">
  {#each { length: 10 } as _, y}
    <div class="row">
      {#each { length: 10 } as _, x}
        <Toggle
          text="&ensp;"
          value={lattice[x][y]}
          toggle={() => lattice[x][y] = !lattice[x][y]}
        />
      {/each}
    </div>
  {/each}
</div>


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

</style>
