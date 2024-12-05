<script lang="ts">

import Site from "#scripts/site";

import Clicky from "#parts/ui/clicky.svelte";
import QuestionCard from "#parts/ui/card.question.svelte";
import Card from "#parts/ui/card.svelte";
import Katex from "#parts/katex.svelte";

</script>


<main>
  <h1> What fun are we having today? </h1>

  <Katex text={"\\int_{a}^{b} f(x) \\, dx"} inline={false} />

  <Clicky text="testing" />

  <div class="browse-questions">
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
    <QuestionCard title="Testing" date="2024 December" tags={["trig", "horror", "sub", "long", "integral", "parts"]} />
  </div>
</main>

<!-- {#each Site.integrals as question}
  <Card
    intern={question.shard}
    title={question.title}
    date={question.date}
    tags={question.tags}
  />
{/each} -->


<style lang="scss">

main {
  text-align: center; 
}

.browse-questions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

</style>
