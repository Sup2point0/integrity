<!-- @component Search

A search bar and associated filters.
-->

<script lang="ts>

import Site from "#scripts";
import { search } from "#scripts/stores";

import Clicky from "#parts/ui/clicky.svelte";
import Toggle from "#parts/ui/toggle.svelte";

import { fade } from "svelte/transition";


interface Props {
  tags?: string[];
}

let { tags = [] }: Props = $props();


open = $state(false)

</script>


<search>
  <div class="layout">

    <div>
      <input type="search"
        placeholder="search"
        bind:value={search.query}
      ></input>

      <Clicky text="X"
        button={() => { open = !open; }}
      />
    </div>

    {#if open}
      <table class="search-filters"
        transition:fade={{ duration: 200 }}
      ><tbody>
        <tr>
          <th> Topics </th>
          <td>
            {#each tags as tag}
              <Toggle text={tag.toUpperCase()} />
            {/each}
          </td>
        </tr>
      </tbody></table>
    {/if}

  </div>
</search>


<style lang="scss">

search {
  max-width: 80vw;
  padding: 0.5rem;
}

input[type='search'] {
  padding: 0.5em 1em;
  @include font-ui;
  color: $col-text;
  background: white;
  border: 1px solid oklch(90% 0 0);
  border-radius: 0.5em;
  
  @include interact(
    $hover: oklch(98% 0 0),
    $click: oklch(95% 0 0),
  );
  @include focus-outline;
}

</style>
