<script lang="ts">

import Site from "#scripts/site";
import { page_data } from "./page-data.svelte.ts";
import type { Question, QuestionCollection } from "#scripts/types";

import { page } from "$app/stores";
import { onMount } from "svelte";
import { error } from "@sveltejs/kit";


let { children } = $props();


onMount(() => {
  console.log("mounting")
  let url = $page.url;
  console.log(url)

  let topic: string | undefined = url.pathname.split("/").at(-1);
  if (topic == null) {
    error(400, { message: "URL is missing topic" });
  }

  let params = url.searchParams;
  let shard: string | null = params.get("shard");
  if (shard == null) {
    error(400, { message: "URL is missing question shard" });
  }

  let questions: QuestionCollection = Site.questions[topic];
  if (questions == null) {
    error(500, { message: "Could not load questions for topic" });
  }

  let question: Question = questions.questions[shard];
  if (question == null) {
    error(404, { message: "Could not find question" });
  }

  page_data.question = question;
});

</script>


{#if children}
  {@render children()}
{:else}
  <p> Uh, something went wrong! </p>
{/if}
