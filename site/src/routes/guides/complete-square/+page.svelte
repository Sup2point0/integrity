<script lang="ts">

import Site from "#scripts/site";

import Card from "#parts/ui/card.svelte";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";

</script>


<Meta title="Completing the Square" />


<Breadcrumbs levels={[
  { text: "Guides", intern: "guides" },
  { text: "Completing the Square" }
]} />

<Header title="Completing the Square" />


<div class="browse">
  {#each Site.guides["complete-square"] as page}
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
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
}

</style>
