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
  { text: "Adventures", intern: "scriptures/integrals#adventures" },
  { text: page.title },
]} />

<Header {page} />

<article>
  <Content />

  <footer>
    <p> Last updated <span>{page.date_display}</span> </p>
  </footer>

  <aside>
    <h2> Continue Reading </h2>
    
    <ArticleArray paths={[
      "scriptures/integrals/why-hard.md",
    ]} />
  </aside>
</article>
