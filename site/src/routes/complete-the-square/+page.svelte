<script lang="ts">

import QuestionCard from "#parts/ui/card.question.svelte";

import Header from "#parts/core/header.svelte";

</script>


<Header> Completing the Square </Header>

<div class="content">
  <QuestionCard
    title="Testing"
    latex={"\\int_{a}^{b} f(x) \\, dx"}
    date="2024 December"
    tags={["trig", "horror", "sub", "long", "integral", "parts"]}
  />
  <QuestionCard
    title="Testing"
    latex={"\\int_{a}^{b} f(x) \\, dx"}
    date="2024 December"
    tags={["trig", "horror", "sub", "long", "integral", "parts"]}
  />
  <QuestionCard
    title="Testing"
    latex={"\\int_{a}^{b} f(x) \\, dx"}
    date="2024 December"
    tags={["trig", "horror", "sub", "long", "integral", "parts"]}
  />
  <QuestionCard
    title="Testing"
    latex={"\\int_{a}^{b} f(x) \\, dx"}
    date="2024 December"
    tags={["trig", "horror", "sub", "long", "integral", "parts"]}
  />
  <QuestionCard
    title="Testing"
    latex={"\\int_{a}^{b} f(x) \\, dx"}
    date="2024 December"
    tags={["trig", "horror", "sub", "long", "integral", "parts"]}
  />
</div>


<style lang="scss">

.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

</style>
