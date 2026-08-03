<script lang="ts">

import Site from "#scripts/site";
import { Topic } from "#scripts/types";

import { QuestionCard } from "#parts/ui";

import { Meta, Breadcrumbs, Header } from "#parts/core";


const questions = Site.get_questions_of_topic(Topic.ADDVENT);

</script>


<Meta title="Addvent"
  desc="Christmas-themed questions for 12 days of maths questions!"
/>


<Breadcrumbs levels={[
  { text: "Questions", intern: "questions" },
  { text: "Addvent" },
]} />

<Header title="Addvent"
  capt="Christmas-themed questions for 12 days of maths questions!"
/>

<div class="content">
  {#each questions as question}
    <QuestionCard {question} />
  {/each}
</div>

<aside>
  <p> Showing <span>{questions.length}</span> questions of {questions.length} </p>
</aside>


<style lang="scss">

.content {
  display: grid;
  grid-template-columns: repeat(auto-fit, max(16rem, 30%));
  justify-content: center;
  gap: 1rem;
}

aside {
  margin-top: 2.5rem;
  text-align: center;
  
  p {
    color: $col-text-deut;

    span {
      color: $col-prot;
    }
  }
}

</style>
