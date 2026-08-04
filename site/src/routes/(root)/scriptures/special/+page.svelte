<script lang="ts">

import Site from "#scripts/site";

import { Meta, Breadcrumbs, Header } from "#parts/core";
import { ArticleArray } from "#parts/page";

</script>


<Meta title="Special · Scriptures" />


<Breadcrumbs levels={[
  { text: "Scriptures", intern: "scriptures" },
  { text: "Special" }
]} />

<Header title="Scriptures" />


<section>
  <ArticleArray paths={Site.index.special.pages} />
</section>
