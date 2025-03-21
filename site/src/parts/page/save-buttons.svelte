<!-- @component SaveButtons

Buttons for solving, flagging or starred questions.
-->

<script lang="ts">

import { userprefs } from "#scripts/stores";

import Checkbox from "#parts/ui/checkbox.svelte";
import TickIcon from "#parts/svg/tick-icon.svelte";
import FlagIcon from "#parts/svg/flag-icon.svelte";
import StarIcon from "#parts/svg/star-icon.svelte";

interface Props {
  shard: string;
  solved?: boolean;
  flag?: boolean;
  star?: boolean;
}

let { shard, solved = true, flag = true, star = true }: Props = $props();


function safe_exec(func: () => any)
{
  return () => {
    try {
      func();
    } catch (e) {
      console.error(e);
      return false;
    }
    return true;
  }
}

</script>


{#if solved}
  <Checkbox
    cols={{ "off": "#dededede", "on": "oklch(70.74% 0.1702 53.41)" }}
    value={() => $userprefs.solved.has(shard)}
    enable={safe_exec(() => {
      $userprefs.solved.add(shard);
      $userprefs.solved = $userprefs.solved;
    })}
    disable={safe_exec(() => {
      $userprefs.solved.delete(shard);
      $userprefs.solved = $userprefs.solved;
    })}
  >
    <TickIcon />
  </Checkbox>
{/if}

{#if flag}
  <Checkbox
    cols={{ "off": "#ededed", "on": "oklch(64.09% 0.1702 150.09)" }}
    value={() => $userprefs.flagged.has(shard)}
    enable={safe_exec(() => {
      $userprefs.flagged.add(shard);
      $userprefs.flagged = $userprefs.flagged;
    })}
    disable={safe_exec(() => {
      $userprefs.flagged.delete(shard);
      $userprefs.flagged = $userprefs.flagged;
    })}
  >
    <FlagIcon />
  </Checkbox>
{/if}

{#if star}
  <Checkbox
    cols={{ "off": "#ededed", "on": "oklch(81.02% 0.1702 85.48)" }}
    value={() => $userprefs.starred.has(shard)}
    enable={safe_exec(() => {
      $userprefs.starred.add(shard);
      $userprefs.starred = $userprefs.starred;
    })}
    disable={safe_exec(() => {
      $userprefs.starred.delete(shard);
      $userprefs.starred = $userprefs.starred;
    })}
  >
    <StarIcon />
  </Checkbox>
{/if}
