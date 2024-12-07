<!-- @component Header -->

<script lang="ts">

interface Props {
  title: string;
  desc?: string;
}

let { title, desc }: Props = $props();

</script>


<header>
  <h1> {title} </h1>
  <p> {@html desc}
</header>


<style lang="scss">

header {
  width: 100%;
  margin-bottom: 4rem;
  padding: 2rem 0 2rem;
  text-align: center;
  border-bottom: 1px solid $col-line;
}

h1 {
  @include font-serif;
  font-size: 250%;
}

p {
  margin-top: 1em;
  @include font-ui;
  color: $col-text-deut;
  font-weight: 200;
}

</style>
