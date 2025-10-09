<script>

import Content from "./~content.svx";
import { metadata as page } from "./~content.svx";

import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import ArticleArray from "#parts/page/article-array.svelte";

</script>


<Breadcrumbs levels={[
  { text: "Scriptures", intern: "scriptures" },
  { text: "General", intern: "scriptures/general" },
  { text: "S-I+G-N Errors" }
]} />

<Header title={page.title} capt={page.capt} />

<article>
  <Content />

  <aside>
    <h2> Continue Reading </h2>
    
    <ArticleArray paths={[
      "/scriptures/inequalities.md",
    ]} />
  </aside>
</article>

<a href="signs" style="display: block; margin-top: 4rem; color: #f7f7f7;">+</a>
