<script lang="ts">

import Site from "#scripts/site";

import { Meta, Breadcrumbs, Header } from "#parts/core";
import { ArticleArray } from "#parts/page";

</script>


<Meta title="Integrating Integrity"
  desc="Uncovering the derivation of Integrity"
/>


<Breadcrumbs levels={[
  { text: "Integrity", link: Site.root },
  { text: "Docs", link: "docs" },
  { text: "Integrating Integrity" },
]} />

<Header title="Integrating *Integrity*" capt="Uncovering the derivation of Integrity" />


<ArticleArray paths={Site.index["integrating-integrity"].pages} />
