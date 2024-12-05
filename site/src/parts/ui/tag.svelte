<!-- @component Tag -->

<script lang="ts">

import { base } from "$app/paths";


interface Props {
  shard: string;
}

let { shard }: Props = $props();

</script>


<a href="{base}/search?tag={shard}" class="tag">
  {shard.toUpperCase()}
</a>


<style lang="scss">

a {
  padding: 0.15em 0.4em;
  display: inline-block;
  @include font-ui;
  color: white;
  font-size: 90%;
  text-decoration: none;
  background-color: $col-prot;
  border-radius: 0.5em;

  @include interact(
    $hover: color-mix(in oklch, $col-prot, black 8%),
    $click: color-mix(in oklch, $col-prot, black 16%),
  );
}

</style>
