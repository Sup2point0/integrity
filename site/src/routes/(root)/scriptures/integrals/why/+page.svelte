<script>

import Content from "./~content.svx";
import { metadata as page } from "./~content.svx";

import { Meta, Breadcrumbs, Header } from "#parts/core";
import ArticleArray from "#parts/page/article-array.svelte";
import ArticleFooter from "#parts/page/footer.article.svelte";

</script>


<Meta title={page.title} desc={page.desc} />


<Breadcrumbs levels={[
  { text: "Scriptures", intern: "scriptures" },
  { text: "Integration", intern: "scriptures/integrals" },
  { text: "Why Integrate?" },
]} />

<Header {page} />

<article>
  <Content />

  <aside>
    <h2> Continue Reading </h2>
    
    <ArticleArray paths={[
      "scriptures/integrals/why-hard.md",
      "scriptures/integrals/how.md",
    ]} />
  </aside>

  <ArticleFooter {page} />
</article>
