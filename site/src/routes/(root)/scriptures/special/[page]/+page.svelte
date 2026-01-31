<script>

import { capitalise } from "#scripts/utils";

import PageContent from "#parts/base/static-page.svelte";

import { page } from "$app/state";

</script>


<PageContent levels={[
  { text: "Scriptures", intern: "scriptures" },
  { text: "Special", intern: "scriptures/special" },
  { text: capitalise(page.data.title), intern: `scriptures/special/${page.data.title}` },
]} />
