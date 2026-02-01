<!-- @component ArticleFooter

The footer at the end of an article.
-->

<script lang="ts">

import type { Page } from "#scripts/types";


interface Props {
  page?: Page;
}

let { page }: Props = $props();

</script>


<footer>
  <p> See an oversight or error? Drop an issue on <a target="_blank" href="https://github.com/Sup2point0/integrity/issues">GitHub<sup>↗</sup></a>. </p>

  {#if page?.date_display}
    <p> Released on <span>{page.date_display}</span> </p>
  {/if}
</footer>


<style lang="scss">

footer {
  margin-top: 5rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  border-top: 1px solid $col-line;
}

p {
  @include font-ui;
  color: $col-text-deut;

  span {
    color: $col-deut;
  }
}

</style>
