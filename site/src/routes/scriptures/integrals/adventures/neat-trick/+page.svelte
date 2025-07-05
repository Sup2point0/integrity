<script>

import Content from "./~content.svx";
import { metadata as page } from "./~content.svx";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import ArticleArray from "#parts/page/article-array.svelte";

</script>


<Meta title={page.title} desc={page.desc} />


<Breadcrumbs levels={[
  { text: "Scriptures", intern: "scriptures" },
  { text: "Integration", intern: "scriptures/integrals" },
  { text: "Collections", intern: "scriptures/integrals#collections" },
  { text: "Neat Integration Trick" },
]} />

<Header title="A Neat Little Integration Trick" capt={page.capt} />

<article>
  <Content />
  
  <aside>
    <h2> Continue Reading </h2>
    
    <ArticleArray paths={[
      "scriptures/integrals/how.md",
      "scriptures/integrals/once.md",
    ]} />
  </aside>
</article>
