<script>

import Content from "./~content.svx";
import { metadata as page } from "./~content.svx";

import Tag from "#parts/ui/tag.svelte";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import ArticleArray from "#parts/page/article-array.svelte";

</script>


<Meta title={page.title} desc={page.desc} />


<Breadcrumbs levels={[
  { text: "Docs", intern: "docs" },
  { text: page.title },
]} />

<Header {page} />

<article>
  <Content />
</article>
