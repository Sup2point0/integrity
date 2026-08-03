<script>

import Content from "./~content.svx";
import { metadata as page } from "./~content.svx";

import { Meta, Breadcrumbs, Header } from "#parts/core";

</script>


<Meta title={page.title} desc={page.desc} />


<Breadcrumbs levels={[
  { text: "Desmos", intern: "desmos" },
  { text: "Docs", intern: "desmos/docs" },
  { text: page.title },
]} />

<Header {page} />

<article>
  <Content />
</article>
