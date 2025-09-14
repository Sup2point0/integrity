<!-- @component SearchFooter

A footer at the bottom of search results showing how many results were found.
-->

<script lang="ts">
  
import { search } from "#scripts/stores";

import Clicky from "#parts/ui/clicky.svelte";


interface Props {
  limit?: number;
  found: number;
  total: number;
}

let { limit = $bindable(), found, total }: Props = $props();


let search_dirty = $derived(
  $search.query.length
  || Object.values($search.tags).some(state => state)
  || Object.values($search.methods).some(state => state)
  || Object.values($search.include).some(state => state)
  || Object.values($search.exclude).some(state => state)
);

</script>


<aside>
  {#if found > 0}
    <p> Showing <span>{found}</span> question{found === 1 ? "" : "s"} of {total} </p>
  {:else if search_dirty}
    <p> No questions found with those search filters! </p>
  {:else}
    <p> Oops, no questions found! </p>
  {/if}

  {#if limit && limit < total}
    <div class="buttons">
      <Clicky text="Show More" action={() => { limit += 60; }} />
      <Clicky text="Show All" action={() => { limit = total }} />
    </div>
  {/if}
</aside>


<style lang="scss">

aside {
  padding: 2.5rem 0 1rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  
  p {
    padding-bottom: 1rem;
    color: $col-text-deut;

    span {
      font-weight: 400;
      color: $col-prot;
    }
  }

  .buttons {
    width: 100%;
    display: flex;
    flex-flow: row;
    justify-content: center;
    gap: 0.5rem;
  }
}

</style>
