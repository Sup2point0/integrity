<script>

import Content from "./~content.svx";
import { metadata as page } from "./~content.svx";

import { Meta, Breadcrumbs, Header } from "#parts/core";

</script>


<Meta title={page.title} desc={page.desc} />


<Breadcrumbs levels={[
	{ text: "Fun", intern: "fun" },
	{ text: "UNSW Integration Bee", intern: "fun/unsw-ib" },
	{ text: "2022" },
]} />

<Header {page} />

<article>
	<Content />
</article>
