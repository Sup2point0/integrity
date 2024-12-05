<!-- @component Header -->

<script lang="ts">

interface Props {
  title: string;
}

let { title }: Props = $props();

</script>


<header>
  <h1> {title} </h1>
</header>


<style lang="scss">

header {
  width: 100%;
  padding: 2rem 0 4rem;
  text-align: center;
}

h1 {
  @include font-serif;
  font-size: 250%;
}

</style>
