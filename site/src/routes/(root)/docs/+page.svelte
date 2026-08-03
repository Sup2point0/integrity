<script lang="ts">

import Site from "#src/scripts/site";

import { Meta, Breadcrumbs, Header } from "#parts/core";
import ArticleArray from "#parts/page/article-array.svelte";
import { ArticleCard } from "#parts/ui";

</script>


<Meta title="Docs"
  desc="Documentation about Integrity features"
/>


<Breadcrumbs levels={[
  { text: "Integrity", link: Site.root },
  { text: "Docs" },
]} />

<Header title="Docs" capt="How Does *Integrity* Work?" />


<ArticleArray
  paths={Site.index.docs.pages.filter(
    path => !Site.index["integrating-integrity"].pages.includes(path)
  )}
>
  <ArticleCard page={{
    dest: "docs/tags", head: "Tags", capt: "Descriptor tags for questions",
  }} />
</ArticleArray>
