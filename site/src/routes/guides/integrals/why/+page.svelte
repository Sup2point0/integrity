<script>

import Content from "./content.svx";
import { metadata as page } from "./content.svx";

import ArticleCard from "#parts/ui/card.article.svelte";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";

</script>


<Meta title={page.title} desc={page.desc} />


<Breadcrumbs levels={[
  { text: "Guides", intern: "guides" },
  { text: "Integration", intern: "guides/integrals" },
  { text: "Why Integrate?" },
]} />

<Header title="Why Integrate?" capt={page.capt} />

<article>
  <Content />
  
  <br>

  <h2> Continue Reading </h2>

  <ArticleCard page="guides/integrals/why-hard.md" />
</article>
