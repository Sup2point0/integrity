<script lang="ts">

import katex from "katex";

import Site from "#scripts/site";

import Select from "#parts/ui/select-dropdown.svelte";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Banner from "#parts/page/banner.svelte";


// temporary static data until we can get the endpoint working
let data = {
  history: {
    2025: {
      January: null,
      February: null,
      March: null,
      April: 183,
      May: 58,
      June: 61,
      July: 0,
      August: 0,
    },
  },
};

let year: 2025 = $state(2025);
let history = $derived(Object.entries(data.history[year] || {}));

</script>


<Meta title="Trails" desc="A historic count of visits to Integrity" />


<Breadcrumbs levels={[
  { text: "Integrity", link: Site.root },
  { text: "Trails" },
]} />

<Header title="Trails" capt="Marks of past adventurers" />

<Banner title="Mysterious Beginnings">
  <em>Integrity</em> only started counting visits in April 2025, so data before this point is unavailable!
</Banner>


<nav>
  <small> View Year </small>
  <Select bind:value={year} options={[ 2025 ]} />
</nav>

<div class="container">
  {#if data}
    {@const highest = Math.max(...history.map(([_, count]) => count ?? 0))}

    <div id="chart">
      {#each history as [month, count]}
        <div class="column">
          <div class="count-label">
            {count ?? "No data"}
          </div>

          <div class="bar" style:--frac={(count ?? 0) / highest}></div>

          <div class="month-label">
            {month}
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>

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

.container {
  height: 75vh;
  margin-bottom: 8rem;
}

#chart {
  height: 100%;
  padding: 1rem;
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

  .count-label {
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

  .month-label {
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
  .count-label {
    color: $col-text;
    transform: scale(1.25);
  }

  .bar {
    filter: brightness(1.03);
  }

  .month-label {
    color: $col-prot;
  }
}

</style>
