<!-- @component Tag -->

<script lang="ts">

import { search } from "#scripts/stores";

import { base } from "$app/paths";


interface Props {
  shard: string;
}

let { shard }: Props = $props();

</script>


<button class="tag" onclick={() => {
  window.location.href = `${base}/questions/all?tags=${shard}`;
}}>
  {shard.toUpperCase()}
</button>


<style lang="scss">

button.tag {
  padding: 0.15em 0.4em;
  display: inline-block;
  @include font-ui;
  color: white;
  font-size: 90%;
  background-color: #3c8dbc;  // fallback
  background-color: $col-prot;
  border: none;
  border-radius: 0.5em;

  @include interact(
    $hover: color-mix(in oklch, $col-prot, black 8%),
    $click: color-mix(in oklch, $col-prot, black 16%),
  );
  @include focus-outline;
}

</style>
