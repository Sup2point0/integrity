<script lang="ts">

import Site from "#scripts/site";

import { Meta, Breadcrumbs, Header } from "#parts/core";
import { ArticleArray } from "#parts/page";

</script>


<Meta title="Docs"
	desc="Documentation on all things Desmos"
/>


<Breadcrumbs levels={[
	{ text: "Desmos", intern: "desmos" },
	{ text: "Docs" },
]} />

<Header title="Docs" />


<ArticleArray
	paths={Site.index["desmos-docs"].pages}
/>
