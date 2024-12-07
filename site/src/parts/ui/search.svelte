<!-- @component Search

A search bar and associated filters.
-->

<script lang="ts">

import { search } from "#scripts/stores";

import Clicky from "#parts/ui/clicky.svelte";
import Toggle from "#parts/ui/toggle.svelte";

import { fade } from "svelte/transition";


interface Props {
  tags?: string[];
}

let { tags = [] }: Props = $props();


let open = $state(false)

</script>


<search>
  <div class="layout">

    <div class="search-bar">
      <input type="search"
        placeholder="search"
        bind:value={search.query}
      />

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
          <td class="flex">
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
  margin: 2rem 0;
  padding: 0.5rem;
}

.layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

div.search-bar {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  column-gap: 0.5em;
}


input[type='search'] {
  appearance: none;
  min-width: max(50%, 12em);
  padding: 0.75em 1.25em;

  @include font-ui;
  color: $col-text;
  font-size: 100%;
  background-color: white;
  border: 1px solid oklch(90% 0 0);
  border-radius: 0.5em;
  box-shadow: 0 1.5px 2px -0.5px $col-line;
  
  @include interact(
    $hover: oklch(98% 0 0),
    $click: oklch(95% 0 0),
  );

  &:hover {
    cursor: text;
  }
  &:focus, &:active {
    outline: none;
  }
}


table.search-filters {
  margin: 1rem 0;
  border-collapse: collapse;
  text-align: left;
}

td {
  min-width: 5em;
  padding: 0.5em 2em;
  
  &.flex {
    display: flex;
    flex-direction: row;
    justify-content: start;
    flex-wrap: wrap;
    column-gap: 0.25em;
  }
}

th {
  min-width: 5em;
  padding: 0.5em;
  font-weight: 400;
  border-right: 1px solid $col-line;
}

</style>
