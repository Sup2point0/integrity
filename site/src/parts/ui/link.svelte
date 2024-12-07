<!-- @component Link

A generic block-level link. -->

<script lang="ts">

import { base } from "$app/paths";


interface Props {
  text: string;
  link?: string;
  intern?: string;
}

let { text, link, intern }: Props = $props();

</script>


<a class="link"
  href="{link || `${base}/${intern}`}"
>
  {text}
</a>


<style lang="scss">

a.link {
  padding: 0.5em;
  color: $col-prot;
  font-weight: 300;
  text-decoration: none;
  border-radius: 0.5em;

  @include interact($col-hover, $col-click);
  @include focus-outline;
}

</style>
