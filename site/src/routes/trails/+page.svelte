<script lang="ts">

import katex from "katex";

import Site from "#scripts/site";

import GraphBar from "./graph-bar.svelte";
import Select from "#parts/ui/select-dropdown.svelte";
import Tag from "#parts/ui/tag.svelte";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Banner from "#parts/page/banner.svelte";
import Section from "#src/parts/page/section.svelte";

import { onMount } from "svelte";
import { base } from "$app/paths";


let year = $state("2025");


let general: {
  visits: Record<string, Record<string, number | null>>,
} = $state({
  visits: {
    "2024": { December: null },
    "2025": { January: null, February: null, March: null, April: null, May: null, June: null, July: null, August: null, September: null }
  },
});

let questions: {
  topics: Record<string, number>,
  difficulties: Record<string, number>,
  title_words: Record<number, number>,
  title_chars: Record<number | string, number>,
  title_letters: Record<string, number>,
  tags_counts: Record<number, number>,
  hints_counts: Record<number, number>,
} = {
  topics: Object.fromEntries(
    Object.entries(Site.questions).map(
      ([topic, data]) => [topic, Object.keys(data.questions).length]
    )
  ),
  difficulties: { based: 0, incline: 0, manifold: 0, chaos: 0, null: 0 },
  title_words: {},
  title_chars: {0: 1},
  title_letters: {},
  tags_counts: {},
  hints_counts: {},
}

let integrals: {
  difficulties: Record<string, number>,
  question_chars: Record<number | string, number>,
  question_letters: Record<string, number>,
  parts_counts: Record<number, number>,
  days: Record<string, number>,
} = {
  difficulties: { based: 0, incline: 0, manifold: 0, chaos: 0, null: 0 },
  question_chars: {},
  question_letters: {},
  parts_counts: {},
  days: {},
};


onMount(try_load_data);

async function try_load_data(i: number = 0)
{
  if (i > 3) {
    return;
  }

  try {
    let load = await fetch("https://sup2point0.npkn.net/integrity");
    let data = await load.json();
    
    if (data.history) {
      for (let year in data.history) {
        Object.assign(general.visits[year], data.history[year]);
      }
    }
  } catch {
    setTimeout(
      async () => await try_load_data(i+1),
      1000 + i*i * 500,
    );
  }
}


for (let q of Site.get_list_of_all_questions()) {
  if (q.difficulty) {
    questions.difficulties[q.difficulty]++;
  } else if (q.difficulty === null || q.difficulty === undefined) {
    questions.difficulties.null++;
  }

  if (q.title) {
    let count = q.title.split(" ").length;

    if (questions.title_words[count]) {
      questions.title_words[count]++;
    } else {
      questions.title_words[count] = 1;
    }

    count = q.title.length;

    if (questions.title_chars[count]) {
      questions.title_chars[count]++;
    } else {
      questions.title_chars[count] = 1;
    }

    for (let letter of q.title) {
      if (questions.title_letters[letter]) {
        questions.title_letters[letter]++;
      } else {
        questions.title_letters[letter] = 1;
      }
    }
  }

  if (q.tags) {
    let count = q.tags.length;

    if (questions.tags_counts[count]) {
      questions.tags_counts[count]++;
    } else {
      questions.tags_counts[count] = 1;
    }
  }

  if (q.hints) {
    let count = Object.keys(q.hints).length;

    if (questions.hints_counts[count]) {
      questions.hints_counts[count]++;
    } else {
      questions.hints_counts[count] = 1;
    }
  }
}

for (let q of Site.get_questions_of_topic("integrals")) {
  if (q.difficulty) {
    integrals.difficulties[q.difficulty]++;
  } else if (q.difficulty === null || q.difficulty === undefined) {
    integrals.difficulties.null++;
  }

  if (q.question) {
    let content = (q.question instanceof String) ? q.question : q.question.content;

    let raw = content.length;
    let count = Math.round(raw / 5) * 5;
    if (count > 200) {
      count = "200+";
    }

    if (integrals.question_chars[count]) {
      integrals.question_chars[count]++;
    } else {
      integrals.question_chars[count] = 1;
    }

    for (let letter of content) {      
      if (integrals.question_letters[letter]) {
        integrals.question_letters[letter]++;
      } else {
        integrals.question_letters[letter] = 1;
      }
    }
  }

  if (q.solution) {
    let count = Object.keys(q.solution).length;
    if (Array.isArray(q.solution)) {
      count = 1;
    }

    if (integrals.parts_counts[count]) {
      integrals.parts_counts[count]++;
    } else {
      integrals.parts_counts[count] = 1;
    }
  }

  if (q.date && q.date_display && q.date_display.split(" ").length > 2) {
    let d = new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "2-digit"
    }).format(q.date);

    if (integrals.days[d]) {
      integrals.days[d]++;
    } else {
      integrals.days[d] = 1;
    }
  }
}

</script>


<Meta title="Trails" desc="Historic visitor count and other fun statistics for Integrity" />


<Breadcrumbs levels={[
  { text: "Integrity", link: Site.root },
  { text: "Trails" },
]} />

<Header title="Trails" capt="Statistics of <em>Integrity</em>" />


<Section title="Integrity" closed={false}>
  <h2> Visits to <em>Integrity</em> </h2>
  
  <Banner title="Mysterious Beginnings">
    <em>Integrity</em> only started counting visits in April 2025, so data before this point is unavailable!
  </Banner>

  <nav>
    <small> View Year </small>
    <Select bind:value={year} options={Object.keys(general.visits)} />
  </nav>

  {#if general.visits}
    {@const data = (
      Object.entries(general.visits[year]).sort(
        (prot, deut) => new Date(`${prot[0]} 2020`) - new Date(`${deut[0]} 2020`)
      )
    )}
    {@const highest = Math.max(...data.map(([_, count]) => count ?? 0))}

    <div class="chart">
      {#each data as [month, count], idx}
        <div class="column">
          <GraphBar {idx} freq={count} frac={(count ?? 0) / highest} />

          <div class="class-label">
            {#if year === "2024"}
              <a href="{base}/trails/integrity">Integrity</a>
            {:else}
              {month}
            {/if}
          </div>
        </div>
      {/each}
    </div>

    <Section title="Stats" closed={true}>
      <!-- heh, who doesn't love statistics. Even Timothee Chalamet loves sTaTiSTiCs -->
      {@const   n = data.reduce((t, [_, count])    => t + (count ? 1 : 0),             0)}
      {@const nfx = data.reduce((t, [_, count], i) => t + (count ? (i+1) : 0),         0)}
      {@const  sx = data.reduce((t, [_, count], i) => t + (count ? i+1 : 0),           0)}
      {@const sxs = data.reduce((t, [_, count], i) => t + (count ? (i+1)**2 : 0),      0)}
      {@const  sf = data.reduce((t, [_, count])    => t + (count ?? 0),                0)}
      {@const sfs = data.reduce((t, [_, count])    => t + (count ? count**2 : 0),      0)}
      {@const sfx = data.reduce((t, [_, count], i) => t + (count ? (i+1) * count : 0), 0)}

      <!-- NOTE: I apologise for your eyes. Offsetting this way so that the LaTeX structure is still visible. Couldn't find a cleaner way to do the string interpolation... -->
      {@html katex.renderToString(
          String.raw`
                      \begin{align*}
                        && n &= ` + n.toString()
        + String.raw`
                        \\[1em] \sum x &= ` + sx.toString()
        + String.raw`
                          \quad&\quad \sum f &= ` + sf.toString()
        + String.raw`
                          \quad&\quad \sum fx &= ` + sfx.toString()
        + String.raw`
                        \\[1em] \sum x^2 &= ` + sxs.toString()
        + String.raw`
                          \quad&\quad  \sum f^2 &= ` + sfs.toString()
        + String.raw`
                        \\[2em] \bar{x} &= \frac{\sum fx}{\sum x} = ` + (sfx / sf).toFixed(2)
        + String.raw`
                          \quad&\quad \bar{f} &= \frac{1}{n}\sum f = ` + (sf / n).toFixed(2)
        + String.raw`
                          \quad&\quad \sigma^2_f &= \text{Var}(F) = ` + (sfs / n - (sf / n)**2).toFixed(2)
        + String.raw`
                      \end{align*}
        `,
        { displayMode: true, throwOnError: false }
      )}
    </Section>
  {/if}
</Section>

<Section title="Questions" closed={false}>

  <h2> Questions by Topic </h2>

  {#if questions.topics}
    {@const topics = (
      Object.entries(questions.topics)
        .sort((prot, deut) => deut[1] - prot[1])
    )}
    {@const highest = Math.max(...Object.values(questions.topics))}

    <div class="chart">
      {#each topics as [topic, freq], idx}
        <div class="column">
          <GraphBar {idx} {freq} frac={(freq ?? 0) / highest} />

          <div class="class-label">
            <div style:transform="translateY(1rem)">
              {topic}
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}

  <h2> Questions by Difficulty </h2>

  {#if questions.difficulties}
    {@const highest = Math.max(...Object.values(questions.difficulties))}

    <div class="chart">
      {#each Object.entries(questions.difficulties) as [diff, freq], idx}
        <div class="column">
          <GraphBar {idx} {freq} frac={(freq ?? 0) / highest} />

          <div class="class-label">
            <Tag kind={diff} tag={diff === "null" ? "UNASSIGNED" : diff.toUpperCase()} />
          </div>
        </div>
      {/each}
    </div>
  {/if}
  
  <h2> Words in Name </h2>

  {#if questions.title_words}
    {@const highest = Math.max(...Object.values(questions.title_words))}

    <div class="chart">
      {#each Object.entries(questions.title_words) as [count, freq], idx}
        <div class="column">
          <GraphBar {idx} {freq} frac={(freq ?? 0) / highest} />

          <div class="class-label">
            {count}
          </div>
        </div>
      {/each}
    </div>
  {/if}

  <h2> Characters in Name </h2>

  {#if questions.title_chars}
    {@const highest = Math.max(...Object.values(questions.title_chars))}

    <div class="chart">
      {#each Object.entries(questions.title_chars) as [count, freq], idx}
        <div class="column">
          <GraphBar {idx} {freq} frac={(freq ?? 0) / highest} />

          <div class="class-label" style:font-size="75%">
            {count}
          </div>
        </div>
      {/each}
    </div>
  {/if}

  <h2> Unique Characters in Name </h2>

  {#if questions.title_letters}
    {@const letters = (
      Object.entries(questions.title_letters)
        .sort((prot, deut) => deut[1] - prot[1])
        .slice(0, 20)
    )}
    {@const highest = Math.max(...letters.map(each => each[1]))}

    <div class="chart">
      {#each letters as [letter, freq], idx}
        <div class="column">
          <GraphBar {idx} {freq} frac={(freq ?? 0) / highest} />

          <div class="class-label">
            {letter}
          </div>
        </div>
      {/each}
    </div>
  {/if}

  <h2> Number of Tags </h2>

  {#if questions.tags_counts}
    {@const highest = Math.max(...Object.values(questions.tags_counts))}

    <div class="chart">
      {#each Object.entries(questions.tags_counts) as [count, freq], idx}
        <div class="column">
          <GraphBar {idx} {freq} frac={(freq ?? 0) / highest} />

          <div class="class-label">
            {count}
          </div>
        </div>
      {/each}
    </div>
  {/if}

  <h2> Number of Hints </h2>

  {#if questions.hints_counts}
    {@const highest = Math.max(...Object.values(questions.hints_counts))}

    <div class="chart">
      {#each Object.entries(questions.hints_counts) as [count, freq], idx}
        <div class="column">
          <GraphBar {idx} {freq} frac={(freq ?? 0) / highest} />

          <div class="class-label">
            {count}
          </div>
        </div>
      {/each}
    </div>
  {/if}
</Section>

<Section title="Integrals" closed={false}>

  <h2> Integrals by Difficulty </h2>

  {#if integrals.difficulties}
    {@const highest = Math.max(...Object.values(integrals.difficulties))}

    <div class="chart">
      {#each Object.entries(integrals.difficulties) as [diff, freq], idx}
        <div class="column">
          <GraphBar {idx} {freq} frac={(freq ?? 0) / highest} />

          <div class="class-label">
            <Tag kind={diff} tag={diff === "null" ? "UNASSIGNED" : diff.toUpperCase()} />
          </div>
        </div>
      {/each}
    </div>
  {/if}

  <h2> Characters in Integral LaTeX </h2>

  {#if integrals.question_chars}
    {@const highest = Math.max(...Object.values(integrals.question_chars))}

    <div class="chart">
      {#each Object.entries(integrals.question_chars) as [count, freq], idx}
        <div class="column">
          <GraphBar {idx} {freq} frac={(freq ?? 0) / highest} />

          <div class="class-label" style:font-size="75%">
            {#if count.endsWith("+")}
              {count}
            {:else}
              &lt;{count}
            {/if}
          </div>
        </div>
      {/each}
    </div>
  {/if}

  <h2> Unique Characters in Integral LaTeX </h2>

  {#if integrals.question_letters}
    {@const letters = (
      Object.entries(integrals.question_letters)
        .sort((prot, deut) => deut[1] - prot[1])
        .slice(0, 20)
    )}
    {@const highest = Math.max(...letters.map(each => each[1]))}

    <div class="chart">
      {#each letters as [letter, freq], idx}
        <div class="column">
          <GraphBar {idx} {freq} frac={(freq ?? 0) / highest} />

          <div class="class-label">
            {letter}
          </div>
        </div>
      {/each}
    </div>
  {/if}

  <h2> Parts in Solution </h2>

  {#if integrals.parts_counts}
    {@const highest = Math.max(...Object.values(integrals.parts_counts))}

    <div class="chart">
      {#each Object.entries(integrals.parts_counts) as [count, freq], idx}
        <div class="column">
          <GraphBar {idx} {freq} frac={(freq ?? 0) / highest} />

          <div class="class-label">
            {count}
          </div>
        </div>
      {/each}
    </div>
  {/if}

  <h2> Integrals Written in a Day </h2>

  {#if integrals.days}
    {@const days = (
      Object.entries(integrals.days)
        .sort((prot, deut) => deut[1] - prot[1])
        .slice(0, 10)
    )}
    {@const highest = Math.max(...days.map(each => each[1]))}

    <div class="chart">
      {#each days as [day, freq], idx}
        <div class="column">
          <GraphBar {idx} {freq} frac={(freq ?? 0) / highest} />

          <div class="class-label" style="
            width: max-content;
            font-size: 100%;
            transform: rotate(-30deg) translateX(-6em) translateY(2em);
          ">
            {day}
          </div>
        </div>
      {/each}
    </div>
  {/if}
</Section>


<style lang="scss">

nav {
  margin: 2rem 0 1rem;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  small {
    padding: 0 0.5em;
    @include font-ui;
  }
}

.chart {
  height: 60vh;
  padding: 1rem 0.5rem;
  margin-bottom: 5rem;
  display: flex;
  flex-flow: row nowrap;
  border-left: 1px solid $col-line;
  border-bottom: 1px solid $col-line;
}

.column {
  flex-grow: 1;
  height: 100%;
  padding: 0 0.5rem;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: end;

  .freq-label {
    padding-bottom: 1em;
    text-align: center;
    color: $col-text-deut;
    transition: color 0.12s ease-out, transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  }

  .class-label {
    position: absolute;
    left: 50%;
    font-size: 125%;
    color: $col-text-deut;
    text-align: center;
    transform: translateY(3em) translateX(-50%);
    transition: all 0.12s ease-out;
  }
}

.column:hover {
  :global(.freq-label) {
    color: $col-text;
    transform: scale(1.25);
  }

  :global(.graph-bar) {
    filter: brightness(1.03);
  }

  .class-label {
    color: $col-prot;
  }
}

h2 {
  padding-top: 2em;
  @include font-serif;
  font-weight: 400;
  font-size: 175%;
  text-align: center;
}

</style>
