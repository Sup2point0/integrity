<script>

import Content, { metadata as page } from "./~content.svx";

import { Breadcrumbs, Header, Meta } from "#parts/core";

</script>


<Meta title={page.title} desc={page.desc} />


<Breadcrumbs levels={[
  { text: "Desmos", intern: "desmos" },
  { text: page.title },
]} />

<Header {page} />

<article>
  <Content />
</article>
