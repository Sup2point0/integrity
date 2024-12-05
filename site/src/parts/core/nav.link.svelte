<script lang="ts">

import { base } from "$app/paths";


interface Props {
  text?: string;
  pict?: string;
  link?: string;
  intern?: string;
}

let { text, pict, link, intern }: Props = $props();

</script>


<a class="nav-link"
  href={link || `${base}/${intern}`}
>
  {#if pict}
    <img alt={text ?? "?"} src="{base}/{pict}" />
  {/if}

  {#if text}
    <p> {text} </p>
  {/if}
</a>


<style lang="scss">

a.nav-link {
  padding: 0.75em 0.75em;
  &:has(img) { padding: 0; }
  text-decoration: none;
  border-radius: 0.5em;

  @include interact(
    $hover: $col-hover,
    $click: $col-click,
  );
  @include focus-outline;

  img {
    max-height: 3em;
  }
  
  p {
    color: $col-text;
    @include font-ui;
    font-weight: 400;
  }
}

</style>
