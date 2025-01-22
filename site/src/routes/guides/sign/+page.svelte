<script>

import Content from "./content.svx";
import { metadata as page } from "./content.svx";

import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import ArticleBanners from "#parts/page/article-banners.svelte";

</script>


<Breadcrumbs levels={[
  { text: "Guides", intern: "guides" },
  { text: "S-I+G-N Errors" }
]} />

<Header title={page.title} capt={page.capt} />
<ArticleBanners {page} />

<article>
  <Content />
</article>
