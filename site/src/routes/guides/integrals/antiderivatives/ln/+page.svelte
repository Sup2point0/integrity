<script>

import Content from "./~content.svx";
import { metadata as page } from "./~content.svx";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import PreReading from "#parts/page/pre-reading.svelte";
import ArticleArray from "#parts/page/article-array.svelte";

</script>


<Meta title={page.title} desc={page.desc} />


<Breadcrumbs levels={[
  { text: "Guides", intern: "guides" },
  { text: "Integration", intern: "guides/integrals" },
  { text: "Antiderivatives", intern: "guides/integrals/antiderivatives" },
  { text: page.title },
]} />

<Header {page} />

<PreReading paths={[
  "guides/integrals/methods/parts.md",
  "guides/integrals/methods/sub.md",
]} />

<article>
  <Content />

  <aside>
    <h2> Continue Reading </h2>
    
    <ArticleArray paths={[
      "guides/integrals/antiderivatives/sec-3.md",
    ]} />
  </aside>
</article>
