<script lang="ts">

import Site from "#scripts/site";
import { userprefs } from "#scripts/stores";
import { page_data } from "./page-data.svelte.ts";
import type { Shard, Question, QuestionCollection } from "#scripts/types";

import { page } from "$app/state";
import { onMount, untrack } from "svelte";
import { error } from "@sveltejs/kit";


let { children } = $props();


// onMount(() => untrack(load_question));

$effect(() => untrack(load_question));

function load_question()
{
  let url = page.url;

  let topic: string | undefined = url.pathname.split("/").at(-1);
  if (topic == null) {
    error(400, { message: "URL is missing topic" });
  }

  let params = url.searchParams;
  let shard: Shard | null = params.get("shard");
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

  $userprefs.seen.add(question.shard);
  $userprefs = $userprefs;

  page_data.question = question;
}

</script>


<svelte:head>
  <script src="https://www.desmos.com/api/v1.10/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
</svelte:head>


{#if children}
  {@render children()}
{:else}
  <p> Uh, something went wrong! </p>
{/if}
