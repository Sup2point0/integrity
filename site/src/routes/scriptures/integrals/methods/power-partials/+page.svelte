<script>

import Content from "./~content.svx";
import { metadata as page } from "./~content.svx";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import QuestionArray from "#parts/page/question-array.svelte";
import ArticleArray from "#parts/page/article-array.svelte";

</script>


<Meta title={page.title} desc={page.desc} />


<Breadcrumbs levels={[
  { text: "Scriptures", intern: "scriptures" },
  { text: "Integration", intern: "scriptures/integrals" },
  { text: "Methods", intern: "scriptures/integrals#methods" },
  { text: page.title },
]} />

<Header {page} />

<article>
  <Content />

  <aside>
    <h2> Example Questions </h2>
    
    <QuestionArray shards={["s25f-qt2"]} />

    <h2> Continue Reading </h2>
    
    <ArticleArray paths={[
      "scriptures/integrals/methods/partials-asymptotes.md",
    ]} />
  </aside>
</article>
