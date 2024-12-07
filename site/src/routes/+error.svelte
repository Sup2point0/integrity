<script lang="ts">

import { page } from "$app/stores";

import Header from "#parts/core/header.svelte";

</script>


<Header> {$page.status ?? "Internal Error"} </Header>

<p> {$page.error.message} </p>
