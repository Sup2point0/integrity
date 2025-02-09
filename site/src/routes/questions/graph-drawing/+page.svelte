<script lang="ts">

import QuestionCard from "#parts/ui/card.question.svelte";

import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Meta from "#parts/page/meta.svelte";

</script>


<Meta title="Graph Drawing"
  desc="Questions for practising graph drawing"
/>


<Breadcrumbs levels={[
  { text: "Questions", intern: "questions" },
  { text: "Graph Drawing" },
]} />

<Header title="Graph Drawing" />

<div class="content">
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
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
}

</style>
