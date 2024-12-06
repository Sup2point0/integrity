<!-- @component Search

A search bar and associated filters.
-->

<script lang="ts>

import { search } from "#scripts/stores";

</script>


<search>
  <input type="search"
    placeholder="search"
    bind:value={search.query}
  ></input>
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
