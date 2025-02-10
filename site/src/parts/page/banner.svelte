<!-- @component Banner

A banner displayed at the top of a page below the header.
-->

<script lang="ts">

interface Props {
  title: string;
  children?: any;
}

let { title, children }: Props = $props();

</script>


<aside class="banner">
  <h3> {title} </h3>
  <p> {@render children?.()} </p>
</aside>


<style lang="scss">

aside {
  padding: 0.25em 1.5em 0.4em;
  border-left: 2px solid $col-prot-fallback;
  border-left: 2px solid $col-prot;
  transition: box-shadow 0.12s ease-out;

  &:hover {
    border-left: 2px solid $col-deut;
    box-shadow: 1px 2px 4px $col-line;
  }
}

h3 {
  padding-bottom: 0.25em;
  @include font-serif;
  color: $col-text;
  font-weight: normal;
  font-size: 150%;
  font-style: italic;
}

p {
  @include font-serif;
  color: $col-text-deut;
  font-size: 100%;
}

</style>
