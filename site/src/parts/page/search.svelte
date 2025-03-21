<!-- @component Search

A search bar and associated filters.
-->

<script lang="ts">

import { search } from "#scripts/stores";

import Clicky from "#parts/ui/clicky.svelte";
import Toggle from "#parts/ui/toggle.svelte";
import Select from "#parts/ui/select-dropdown.svelte";

import { fade } from "svelte/transition";
import { page } from "$app/state";
import { base } from "$app/paths";
import { onMount } from "svelte";


interface Props {
  tags?: string[];
}

let { tags = [] }: Props = $props();


let open = $state(false);

onMount(() => {
  // TODO FIXME still needs work!
  // if (page.url.searchParams?.size) {
  //   open = true;
  //   let search_tags = page.url.searchParams.getAll("tag");

  //   if (search_tags) {
  //     search.tags = Object.fromEntries(
  //       tags.map(tag => [tag, false])
  //     );

  //     setTimeout(() => {for (let tag of search_tags) {
  //       search.tags[tag] = true;
  //       search.tags = search.tags;
  //     }}, 1000);

  //     console.log(search.tags);
  //   }
  // }
});

</script>


<search>
  <div class="search-bar">
    <input type="search"
      placeholder="search"
      bind:value={search.query}
    />

    <Clicky action={() => { open = !open; }}>
      <img class="arrow" alt="/" src="{base}/arrow.svg"
        style:transform={open ? "rotate(180deg)" : "rotate(0deg)"}
      />
    </Clicky>
  </div>

  {#if open}
    {@const unchecked_tag = Object.values(search.tags).some(tag => !tag)}
    {@const unchecked_method = Object.values(search.methods).some(method => !method)}
    {@const unchecked_include = Object.values(search.include).some(state => !state)}
    {@const unchecked_exclude = Object.values(search.exclude).some(state => !state)}
    {@const unchecked_show = Object.values(search.show).some(state => !state)}
    {@const unchecked_buttons = Object.values(search.buttons).some(state => !state)}

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
      
      <!-- TODO -->
      <!-- <tr>
        <th> Methods </th>

        <td class="flex">
          {#each methods as method}
            <Toggle text={method.toUpperCase()}
              value={search.methods[method]}
              toggle={() => { search.methods[method] = !search.methods[method]; }}
            />
          {/each}
        </td>

        <td>
          <Toggle text="ALL"
            value={!unchecked_method}
            toggle={() => {
              search.methods = Object.fromEntries(
                methods.map(method => [method, unchecked_tag])
              );
            }}
          />
        </td>
      </tr> -->

      <tr>
        <th> Include Only </th>

        <td class="flex">
          {#each Object.entries(search.include) as [prop, state]}
            <Toggle text={prop.toUpperCase()}
              value={state}
              toggle={() => {
                search.include[prop] = !search.include[prop];
                if (search.include[prop]) {
                  search.exclude[prop] = false;
                }
              }}
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
              if (!unchecked_include) {
                search.exclude = Object.fromEntries(
                  Object.entries(search.exclude).map(
                    ([prop, state]) => [prop, false]
                  )
                );
              }
            }}
          />
        </td>
      </tr>

      <tr>
        <th> Exclude </th>

        <td class="flex">
          {#each Object.entries(search.exclude) as [prop, state]}
            <Toggle text={prop.toUpperCase()}
              value={state}
              toggle={() => {
                search.exclude[prop] = !search.exclude[prop];
                if (search.exclude[prop]) {
                  search.include[prop] = false;
                }
              }}
            />
          {/each}
        </td>
        
        <td>
          <Toggle text="ALL"
            value={!unchecked_exclude}
            toggle={() => {
              search.exclude = Object.fromEntries(
                Object.entries(search.include).map(
                  ([prop, state]) => [prop, unchecked_exclude]
                )
              );
              if (!unchecked_exclude) {
                search.include = Object.fromEntries(
                  Object.entries(search.include).map(
                    ([prop, state]) => [prop, false]
                  )
                );
              }
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
        
        <td>
          <Toggle text="ALL"
            value={!unchecked_show}
            toggle={() => {
              search.show = Object.fromEntries(
                Object.entries(search.show).map(
                  ([prop, state]) => [prop, unchecked_show]
                )
              );
            }}
          />
        </td>
      </tr>

      <tr>
        <th> Buttons </th>

        <td class="flex">
          {#each Object.entries(search.buttons) as [prop, state]}
            <Toggle text={prop.toUpperCase()}
              value={state}
              toggle={() => { search.buttons[prop] = !search.buttons[prop]; }}
            />
          {/each}
        </td>
        
        <td>
          <Toggle text="ALL"
            value={!unchecked_buttons}
            toggle={() => {
              search.buttons = Object.fromEntries(
                Object.entries(search.buttons).map(
                  ([prop, state]) => [prop, unchecked_buttons]
                )
              );
            }}
          />
        </td>
      </tr>

      <tr>
        <th> View </th>
        <td>
          <Select bind:value={search.view}
            options={{"GRID": "grid", "LIST": "list"}}
          />
        </td>
      </tr>

      <tr>
        <th> Sort </th>
        <td class="flex">
          <Select bind:value={search.sort}
            options={{
              "RELEVANCE": null,
              "DATE": "date",
              "NAME": "name",
              "RANDOM": "rand",
            }}
          />
          {#if search.sort === "rand"}
            <Clicky text="SHUFFLE" action={() => {
              search.sort = null;
              search.sort = "rand";
            }} />
          {/if}
        </td>
        <td>
          <Toggle text="REVERSE"
            value={search.reverse}
            toggle={() => { search.reverse = !search.reverse; }}
          />
        </td>
      </tr>
    </tbody></table>
  {/if}
</search>


<style lang="scss">

search {
  max-width: 80vw;
  padding: 0.5rem;
  margin: 2rem 0;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

div.search-bar {
  width: 100%;
  display: flex;
  flex-flow: row;
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
  background: light-dark(white, black);
  border: 1px solid $col-line;
  border-radius: 0.5em;
  box-shadow: 0 1.5px 2px -0.5px $col-line;
  
  @include interact(
    $hover: $col-card-hover,
    $click: $col-card-click,
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

th {
  width: max-content;
  min-width: 10em;
  padding: 0.5em 2em;
  font-weight: 400;
  border-right: 1px solid $col-line;
}

td {
  min-width: 5em;
  padding: 0.75em 2em;
  font-size: 95%;

  &.flex {
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
    gap: 0.25em;
    flex: 1 1 auto;
  }
}

</style>
