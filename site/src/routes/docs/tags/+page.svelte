<script lang="ts">

import Tag from "#parts/ui/tag.svelte";
import Header from "#parts/core/header.svelte";

</script>


<Header title="Tags" />

{#snippet tag(shard: string, desc: string)}
  <tr>
    <th> <Tag {shard} /> </th>
    <td> {@html desc} </td>
  </tr>
{/snippet}

<article>
  <table>
    <tbody>
      {@render tag("WORK",
        "These questions tend to be a bit long (and maybe tedious, depending on how much you love maths). They may not be the most exciting, but they do test accuracy, so if you just need to practise, these are the ones for you."
      )}
      {@render tag("SPEED",
        "Not tough, but how efficiently can you solve them? Useful for training your mathematical speedrunning."
      )}
      {@render tag("SPOT",
        "These questions often require noticing a particular trick, or may be significantly easier if you do spot it. These are really good for building up your intuition and training for diverse problems."
      )}
      {@render tag("HORROR",
        "Questions that look horrific. There’s a good chance you’ll look at it and think “what is this.” or “hell nah I’m not doing that”. <br><br> If you’re looking to impress others who aren’t as far down the wormhole as you, these are pretty wow-inducing."
      )}
      {@render tag("SCARE",
        "These questions give you a right fright at first glance, but aren’t actually that difficult. Like <strong>HORROR</strong>, but less horrible. Probably."
      )}
      {@render tag("TRAP",
        "Looks like that, eh? Heads up: it isn’t. Laced with ditches for you to step into if you’re not careful. Fun for sharing with others."
      )}
      {@render tag("SIGN",
        "Beware the S-I+G-N error(s)!"
      )}
      {@render tag("NICE",
        "Warning: features exceptionally juicy maths that may be conducive to questionable noises. Reader discretion is advised."
      )}
      {@render tag("FUN",
        "Sometimes, maths is just so fun."
      )}
      {@render tag("ELITE",
        "May require advanced knowledge."
      )}
      {@render tag("TROLL",
        "Heh, get played. Questions that pull a fast one on you."
      )}
      {@render tag("FREE",
        "Left as an exercise to the reader."
      )}
      {@render tag("PI",
        "I mean, $\pi$ just shows up everywhere, y’know?"
      )}
      {@render tag("SICK",
        "Why would you do this to me..."
      )}
    </tbody>
  </table>
</article>


<style lang="scss">

table {
  width: min(80%, 60rem);
  margin: auto;
}

th {
  padding: 1.5em 2em 1.5em 0;
  font-size: 150%;
  text-align: left;
}

td {
  // font-weight: 250;
}

</style>
