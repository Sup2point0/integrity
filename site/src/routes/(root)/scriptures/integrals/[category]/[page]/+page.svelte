<script>

import { capitalise } from "#scripts/utils";

import PageContent from "#parts/base/static-page.svelte";

import { page } from "$app/state";

</script>


<PageContent levels={[
  { text: "Scriptures", intern: "scriptures" },
  { text: "Integration", intern: "scriptures/integrals" },
  // TODO FIXME add category
  { text: capitalise(page.data.title), intern: `scriptures/integrals/${page.data.title}` },
]} />
