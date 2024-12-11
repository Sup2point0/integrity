<!-- @component Search

A search bar and associated filters.
-->

<script lang="ts">

import { search } from "#scripts/stores";

import Clicky from "#parts/ui/clicky.svelte";
import Toggle from "#parts/ui/toggle.svelte";
import Select from "#parts/ui/select.svelte";

import { fade } from "svelte/transition";
import { base } from "$app/paths";


interface Props {
  tags?: string[];
}

let { tags = [] }: Props = $props();


let open = $state(false);

</script>


<search>
  <div class="layout">

  <div class="search-bar">
    <input type="search"
      placeholder="search"
      bind:value={search.query}
    />

    <Clicky button={() => { open = !open; }}>
      <img class="arrow" alt="/" src="{base}/arrow.svg"
        style:transform={open ? "rotate(180deg)" : "rotate(0deg)"}
      />
    </Clicky>
  </div>

  {#if open}
    {@const unchecked_tag = Object.values(search.tags).some(tag => !tag)}
    {@const unchecked_include = Object.values(search.include).some(state => !state)}

    <table class="search-filters"
      transition:fade={{ duration: 200 }}
    ><tbody>
      <tr>
        <th> Topics </th>

        <td class="flex">
          {#each tags as tag}
            <Toggle text={tag.toUpperCase()}
              value={search.tags[tag]}
              toggle={() => { search.tags[tag] = !search.tags[tag]; }}
            />
          {/each}
        </td>

        <td>
          <Toggle text="ALL"
            value={!unchecked_tag}
            toggle={() => {
              search.tags = Object.fromEntries(
                tags.map(tag => [tag, unchecked_tag])
              );
            }}
          />
        </td>
      </tr>

      <tr>
        <th> Include </th>

        <td class="flex">
          {#each Object.entries(search.include) as [prop, state]}
            <Toggle text={prop.toUpperCase()}
              value={state}
              toggle={() => { search.include[prop] = !search.include[prop]; }}
            />
          {/each}
        </td>
        
        <td>
          <Toggle text="ALL"
            value={!unchecked_include}
            toggle={() => {
              search.include = Object.fromEntries(
                Object.entries(search.include).map(
                  ([prop, state]) => [prop, unchecked_include]
                )
              );
            }}
          />
        </td>
      </tr>

      <tr>
        <th> Show </th>
        <td class="flex">
          {#each Object.entries(search.show) as [prop, state]}
            <Toggle text={prop.toUpperCase()}
              value={state}
              toggle={() => { search.show[prop] = !search.show[prop]; }}
            />
          {/each}
        </td>
      </tr>

      <tr>
        <td></td>
        <td>
          <Select bind:value={search.view}
            options={{"GRID": "grid", "LIST": "list"}}
          />
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
    $hover: oklch(99% 0 0),
    $click: oklch(96% 0 0),
  );

  &:hover {
    cursor: text;
  }
  &:focus, &:active {
    outline: none;
  }
}

img.arrow {
  max-width: 1em;
  opacity: 50%;
  transition: transform 0.16s ease-out;
}


table.search-filters {
  max-width: 100%;
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
