<script>

import Content from "./~content.svx";
import { metadata as page } from "./~content.svx";

import { Meta, Breadcrumbs, Header } from "#parts/core";

</script>


<Meta title={page.title} desc={page.desc} />


<Breadcrumbs levels={[
  { text: "Fun", intern: "fun" },
  { text: "MIT Integration Bee", intern: "fun/mit-ib" },
  { text: "2023" },
]} />

<Header {page} />

<article>
  <Content />
</article>
