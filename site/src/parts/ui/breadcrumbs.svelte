<!-- @component Breadcrumbs

A bar of slash-separated `<Link>`s for navigation.
-->

<script lang="ts">

let { children } = $props();

</script>


<nav class="breadcrumbs">
  {@render children?.()}
</nav>


<style lang="scss">

nav.breadcrumbs {
  padding: 0.5em 0;

  > :global(a.link:not(:first-child))::before {
    content: "/";
    margin: 0 0.5em;
    @include font-ui;
    color: $col-text-deut;
  }
}

</style>
