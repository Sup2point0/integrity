<!-- @component CardsContainer

A layout container for a collection of card links.
-->

<script lang="ts">

interface Props {
  children?: any;
}

let { children }: Props = $props();

</script>


<div class="cards">
  {@render children?.()}
</div>


<style lang="scss">

.cards {
  margin: 1rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
  text-align: center;
}

</style>
