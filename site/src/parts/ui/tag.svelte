<!-- @component Tag -->

<script lang="ts">

import { base } from "$app/paths";


interface Props {
  tag: string;
  kind?: "prot" | "deut";
}

let { tag, kind = "prot" }: Props = $props();

</script>


<button class="tag {kind}"
  onclick={() => {
    window.location.href = `${base}/questions/all?tags=${tag}`;
  }}
>
  {tag.toUpperCase()}
</button>


<style lang="scss">

button.tag {
  padding: 0.15em 0.4em;
  display: inline-block;
  @include font-ui;
  color: white;
  font-size: 90%;
  background: #3c8dbc;  // fallback

  &.prot{ background: $col-prot; }
  &.deut { background: $col-deut; }
  border: none;
  border-radius: 0.5em;

  @include interact(
    $hover: color-mix(in oklch, $col-prot, black 8%),
    $click: color-mix(in oklch, $col-prot, black 16%),
  );
  @include focus-outline;
}

</style>
