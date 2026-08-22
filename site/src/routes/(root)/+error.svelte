<script lang="ts">

import { page } from "$app/state";

import { Header } from "#parts/core";

</script>


<Header
	title={page.status ? `Error ${page.status}` : "Internal Error"}
	capt={page.error?.message ?? "Something went wrong!"}
/>

<p style:text-align="center"> If a link sent you here, I’m probably still working on this page! </p>
