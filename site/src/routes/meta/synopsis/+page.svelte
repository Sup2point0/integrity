<script>

import Content from "../../../../../synopsis.md";

import Header from "#parts/core/header.svelte";

</script>


<svelte:head>
  <title> Synopsis · Integrity · Sup#2.0 </title>
  <meta name="description"
    content="Learnings, challenges and discoveries from developing Integrity." />
</svelte:head>


<Header> Synopsis </Header>

<article>
  <Content />
</article>


<style lang="scss">

@use './src/styles/article' as *;

</style>
