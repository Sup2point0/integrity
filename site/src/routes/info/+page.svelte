<script lang="ts">

import Site from "#src/scripts/site";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import ArticleArray from "#parts/page/article-array.svelte";

</script>


<Meta title="Info" />


<Breadcrumbs levels={[
  { text: "Integrity", link: Site.root },
  { text: "Info" },
]} />

<Header title="Info" />


<div class="content">
  <ArticleArray
    paths={[
      "synopsis.md",
      "faq.md",
      "edu.md",
      ".squarkdown/content/privacy.md",
      ".squarkdown/content/~licence.md",
    ]}
  />
</div>


<style lang="scss">

.content {
}

</style>
