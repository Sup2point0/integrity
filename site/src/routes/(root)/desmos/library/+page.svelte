<script lang="ts">

import Card from "#parts/ui/card.svelte";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import ArticleArray from "#parts/page/article-array.svelte";

</script>


<Meta title="Library" desc="Standard library of " />


<Breadcrumbs levels={[
  { text: "Desmos", intern: "desmos" },
  { text: "Library" }
]} />

<Header title="Library" />


<div class="content">
  <Card title="Functions"
    intern="desmos/library/functions"
    latex={String.raw`f_\text{activate}(s) = \{ s > 0 : 1, 0 \}`}
  />
  <Card title="Rendering"
    intern="desmos/library/rendering"
    latex={String.raw`d_\text{polygon}(6, (0, 0), 2, \pi/3)`}
  />
</div>


<style lang="scss">

.content {
  margin: 1rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
  text-align: center;
}

</style>
