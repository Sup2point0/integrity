<script lang="ts">

import katex from "katex";

import Site from "#scripts/site";

import Select from "#parts/ui/select-dropdown.svelte";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Banner from "#parts/page/banner.svelte";
import Section from "#src/parts/page/section.svelte";


// temporary static data until we can get the endpoint working
let data = {
  history: {
    2025: {
      January: null,
      February: null,
      March: null,
      April: 183,
      May: 58,
      June: 80,
      July: 0,
      August: 0,
    },
  },
};

let year: 2025 = $state(2025);
let history = $derived(Object.entries(data.history[year] || {}));

let integrals: {
  title_words: Record<number, number>,
  question_chars: Record<number | string, number>,
  tags_counts: Record<number, number>,
} = {
  title_words: {},
  question_chars: {},
  tags_counts: {},
};

for (let q of Site.get_questions_of_topic("integrals")) {
  if (q.title) {
    let count = q.title.split(" ").length;

    if (integrals.title_words[count]) {
      integrals.title_words[count]++;
    } else {
      integrals.title_words[count] = 1;
    }
  }

  if (q.question) {
    let raw = q.question.content.length;
    let count = Math.round(raw / 5) * 5;
    if (count > 200) {
      count = "200+";
    }

    if (integrals.question_chars[count]) {
      integrals.question_chars[count]++;
    } else {
      integrals.question_chars[count] = 1;
    }
  }

  if (q.tags) {
    let count = q.tags.length;

    if (integrals.tags_counts[count]) {
      integrals.tags_counts[count]++;
    } else {
      integrals.tags_counts[count] = 1;
    }
  }
}

</script>


<Meta title="Trails" desc="Historic visitor count and other fun statistics for Integrity" />


<Breadcrumbs levels={[
  { text: "Integrity", link: Site.root },
  { text: "Trails" },
]} />

<Header title="Trails" capt="Statistics of Integrity" />


<Section title="Visits" closed={false}>
  <h2> Visits to <em>Integrity</em> </h2>
  
  <Banner title="Mysterious Beginnings">
    <em>Integrity</em> only started counting visits in April 2025, so data before this point is unavailable!
  </Banner>

  <nav>
    <small> View Year </small>
    <Select bind:value={year} options={[ 2025 ]} />
  </nav>

  {#if data}
    {@const highest = Math.max(...history.map(([_, count]) => count ?? 0))}

    <div class="chart">
      {#each history as [month, count]}
        <div class="column">
          <div class="freq-label">
            {count ?? "No data"}
          </div>

          <div class="bar" style:--frac={(count ?? 0) / highest}></div>

          <div class="class-label">
            {month}
          </div>
        </div>
      {/each}
    </div>

    <Section title="Stats" closed={true}>
      {#if data}
        <!-- heh, who doesn't love statistics. Even Timothee Chalamet loves sTaTiSTiCs -->
        {@const   n = history.reduce((t, [_, count])    => t + (count ? 1 : 0),             0)}
        {@const nfx = history.reduce((t, [_, count], i) => t + (count ? (i+1) : 0),         0)}
        {@const  sx = history.reduce((t, [_, count], i) => t + (count ? i+1 : 0),           0)}
        {@const sxs = history.reduce((t, [_, count], i) => t + (count ? (i+1)**2 : 0),      0)}
        {@const  sf = history.reduce((t, [_, count])    => t + (count ?? 0),                0)}
        {@const sfs = history.reduce((t, [_, count])    => t + (count ? count**2 : 0),      0)}
        {@const sfx = history.reduce((t, [_, count], i) => t + (count ? (i+1) * count : 0), 0)}

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
      {/if}
    </Section>
  {/if}
</Section>

<Section title="Integrals" closed={false}>
  <h2> Number of Words in Title </h2>

  {#if integrals.title_words}
    {@const highest = Math.max(...Object.values(integrals.title_words))}

    <div class="chart">
      {#each Object.entries(integrals.title_words) as [count, freq]}
        <div class="column">
          <div class="freq-label">
            {freq ?? "No data"}
          </div>

          <div class="bar" style:--frac={(freq ?? 0) / highest}></div>

          <div class="class-label">
            {count}
          </div>
        </div>
      {/each}
    </div>
  {/if}

  <h2> Characters in Question LaTeX </h2>

  {#if integrals.question_chars}
    {@const highest = Math.max(...Object.values(integrals.question_chars))}

    <div class="chart">
      {#each Object.entries(integrals.question_chars) as [count, freq]}
        <div class="column">
          <div class="freq-label">
            {freq ?? "No data"}
          </div>

          <div class="bar" style:--frac={(freq ?? 0) / highest}></div>

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

  <h2> Number of Tags </h2>

  {#if integrals.tags_counts}
    {@const highest = Math.max(...Object.values(integrals.tags_counts))}

    <div class="chart">
      {#each Object.entries(integrals.tags_counts) as [count, freq]}
        <div class="column">
          <div class="freq-label">
            {freq ?? "No data"}
          </div>

          <div class="bar" style:--frac={(freq ?? 0) / highest}></div>

          <div class="class-label">
            {count}
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

  .bar {
    height: calc(var(--frac) * 100%);
    background: linear-gradient(to bottom in oklch, $col-deut, $col-yay 75%);
    background-size: 100% calc(100% * 1 / var(--frac));
    transform: scaleY(-1);
    transition: all 0.12s ease-out;
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
  .freq-label {
    color: $col-text;
    transform: scale(1.25);
  }

  .bar {
    filter: brightness(1.03);
  }

  .class-label {
    color: $col-prot;
  }
}

h2 {
  @include font-serif;
  font-weight: 400;
  font-size: 175%;
  text-align: center;
}

</style>
