<script lang="ts">

import Site from "#scripts/site";

import { Breadcrumbs, Header } from "#parts/core";
import { ArticleArray } from "#parts/page";

</script>


<Breadcrumbs levels={[
	{ text: "Desmos", intern: "desmos" },
	{ text: "Library", intern: "desmos/library" },
	{ text: "Functions" },
]} />

<Header title="Functions" capt="Desmos Library" />


<ArticleArray
	paths={Site.tags.functions.filter(path => (
		Site.tags.library.includes(path)
	))}
/>
