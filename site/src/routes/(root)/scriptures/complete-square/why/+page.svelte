<script>

import Content from "./~content.svx";
import { metadata as page } from "./~content.svx";

import { Meta, Breadcrumbs, Header } from "#parts/core";

</script>


<Meta title={page.title} desc={page.desc} />


<Breadcrumbs levels={[
	{ text: "Scriptures", intern: "scriptures" },
	{ text: "Completing the Square", intern: "scriptures/complete-square" },
	{ text: "Why Complete the Square?" }
]} />

<Header title={page.title} capt={page.capt} />

<article>
	<Content />
</article>
