<script>

import Content from "./content.svx";
import { metadata as page } from "./content.svx";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";

</script>


<Meta title={page.title} desc={page.desc} />


<Breadcrumbs levels={[
  { text: "Guides", intern: "guides" },
  { text: "Integration", intern: "integrals" },
  { text: "Why Integrate?" },
]} />

<Header title="Why Integrate?" capt="Integration is love, integration is life" />

<article>
  <Content />
</article>
