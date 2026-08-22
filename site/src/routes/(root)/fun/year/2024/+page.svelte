<script>

import Content from "./~content.svx";
import { metadata as page } from "./~content.svx";

import { Meta, Breadcrumbs, Header } from "#parts/core";

</script>


<Meta title={page.title} desc={page.desc} />


<Breadcrumbs levels={[
	{ text: "Fun", intern: "fun" },
	{ text: "0-100 Year Challenge", intern: "fun/year" },
	{ text: page.title },
]} />

<Header {page} />

<article>
	<Content />
</article>
