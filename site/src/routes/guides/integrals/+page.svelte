<script lang="ts">

import Site from "#scripts/site";

import Card from "#parts/ui/card.svelte";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";

</script>


<Meta title="Integration · Guides" />


<Breadcrumbs levels={[
  { text: "Guides", intern: "guides" },
  { text: "Integration" }
]} />

<Header title="Integration" />


<div class="browse">
  {#each Site.guides["integrals"] as page}
    <Card title={page.head}
      capt={page.desc}
      intern={page.dest}
      style="row"
    />
  {/each}
</div>


<style lang="scss">

.browse {
  margin: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

</style>
