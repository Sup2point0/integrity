<script lang="ts">

import Site from "#scripts/site";

import { Breadcrumbs, Header, Meta } from "#parts/core";
import { ArticleArray } from "#parts/page";

</script>


<Meta title="General · Scriptures" />


<Breadcrumbs levels={[
	{ text: "Scriptures", intern: "scriptures" },
	{ text: "General" }
]} />

<Header title="Scriptures" />


<section>
	<ArticleArray paths={Site.index.general.pages.filter(
		path => !Site.index.integrals.pages.includes(path)
	)} />
</section>
