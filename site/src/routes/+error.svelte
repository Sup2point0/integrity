<script lang="ts">

import { page } from "$app/stores";

import Header from "#parts/core/header.svelte";

</script>


<Header
  title={$page.status ? `Error ${$page.status}` : "Internal Error"}
  capt={$page.error?.message ?? "Something went wrong!"}
/>
