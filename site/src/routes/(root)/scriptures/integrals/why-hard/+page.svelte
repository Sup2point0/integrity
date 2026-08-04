<script>

import Content from "./~content.svx";
import { metadata as page } from "./~content.svx";

import { Meta, Breadcrumbs, Header } from "#parts/core";
import { ArticleArray } from "#parts/page";

</script>


<Meta title={page.title} desc={page.desc} />


<Breadcrumbs levels={[
  { text: "Scriptures", intern: "scriptures" },
  { text: "Integration", intern: "scriptures/integrals" },
  { text: "Why Is Integration Difficult?" },
]} />

<Header title="Why Is Integration Difficult?" capt={page.capt} />

<article>
  <Content />
    
  <aside>
    <h2> Continue Reading </h2>
    
    <ArticleArray paths={[
      "scriptures/integrals/why.md",
      "scriptures/integrals/how.md"
    ]} />
  </aside>
</article>
