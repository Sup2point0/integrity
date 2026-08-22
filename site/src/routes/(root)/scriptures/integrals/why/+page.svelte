<script>

import Content, { metadata as page } from "./~content.svx";

import { Breadcrumbs, Header, Meta } from "#parts/core";
import { ArticleArray, ArticleFooter } from "#parts/page";

</script>


<Meta title={page.title} desc={page.desc} />


<Breadcrumbs levels={[
	{ text: "Scriptures", intern: "scriptures" },
	{ text: "Integration", intern: "scriptures/integrals" },
	{ text: "Why Integrate?" },
]} />

<Header {page} />

<article>
	<Content />

	<aside>
		<h2> Continue Reading </h2>
		
		<ArticleArray paths={[
			"scriptures/integrals/why-hard.md",
			"scriptures/integrals/how.md",
		]} />
	</aside>

	<ArticleFooter {page} />
</article>
