<script lang="ts">

import Site from "#src/scripts/site";

import { Meta, Breadcrumbs, Header } from "#parts/core";
import ArticleArray from "#parts/page/article-array.svelte";

</script>


<Meta title="Info" />


<Breadcrumbs levels={[
  { text: "Integrity", link: Site.root },
  { text: "Info" },
]} />

<Header title="Info" />


<ArticleArray
  paths={[
    "synopsis.md",
    "faq.md",
    "edu.md",
    "roadmap.md",
    "changelog.md",
    ".squarkdown/content/privacy.md",
    ".squarkdown/content/~licence.md",
  ]}
/>
