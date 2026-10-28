<script lang="ts">

import Site from "#scripts/site";

import { Breadcrumbs, Header } from "#parts/core";
import { ArticleArray } from "#parts/page";

</script>


<Breadcrumbs levels={[
	{ text: "Desmos", intern: "desmos" },
	{ text: "Library", intern: "desmos/library" },
	{ text: "Rendering" },
]} />

<Header title="Rendering" capt="Desmos Library" />


<ArticleArray
	paths={Site.tags.rendering.filter(path => (
		Site.tags.library.includes(path)
	))}
/>
