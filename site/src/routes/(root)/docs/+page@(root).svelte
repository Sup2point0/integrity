<script lang="ts">

import Site from "#scripts/site";

import { Meta, Breadcrumbs, Header } from "#parts/core";
import { ArticleArray } from "#parts/page";
import { ArticleCard } from "#parts/ui";

</script>


<Meta title="Docs"
	desc="Documentation about Integrity features"
/>


<Breadcrumbs levels={[
	{ text: "Integrity", link: Site.root },
	{ text: "Docs" },
]} />

<Header title="Docs" capt="How Does *Integrity* Work?" />


<ArticleArray
	paths={Site.tags.docs.filter(
		path => !Site.tags["integrating-integrity"].includes(path)
	)}
>
	<ArticleCard page={{
		destination: "docs/tags", heading: "Tags", caption: "Descriptor tags for questions",
	}} />
</ArticleArray>
