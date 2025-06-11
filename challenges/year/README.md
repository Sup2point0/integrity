# 0–100 Year Challenge
<!-- #SQUARK live!
| dest = challenges/year
| capt = Making the numbers from 0 to 100 with the digits of the year, in order
-->

The 0–100 year challenge is simple: use the digits of the year, each exactly once, to make all the numbers from $0$ to $100$ inclusive.

The introductory challenge allows the digits to appear in any order. For instance, to make $20$ from $2023$:

```math
(3 - 2) \times 20 = 20
```

But we don’t do that here. We do the *elite* challenge, where all 4 digits must appear exactly in their original order. For instance, to make $100$ from $2024$:

```math
20^2 / 4 = 100
```

Naturally, the difficulty of the challenge depends entirely on what operations you allow. Agreeing on this is mathematically impossible, so we’ll define several rulesets in increasing levels of breadth.

| ruleset | allowed operations | description |
| :------ | :----------------- | :---------- |
| Core    | $() \\ + \\ - \\ \times \\ / \\ x^y \\ ! \\ xy$ | Only the simplest of arithmetic operations, as well as combining digits to form multi-digit numbers. So far, no years I’ve done are 100%-able at this level. |
| Further Core | $.x$ | Allows conversion to decimal without a leading $0$. Technically valid, right? |
| Expansion | $\log_x(y) \\ \arcsin(x) \\ \arccos(x) \\ \arctan(x)$ | These make the challenge SO much more fun. |
| Further Expansion | $x!!$ |  I’m personally not a fan, but other places in the internet seem to allow it. |
| Absurd Expansion | $\text{round}() \\ \text{floor}() \\ \text{ceil}() \\ \sqrt{}$ | At this point, the challenge isn’t fun anymore. |

The goal of these rulesets is to open up the possibilities such that it’s still *possible* to 100% the challenge, whilst not removing the fun and difficulty.[^redstone]

[^redstone]: It feels like Mojang adding redstone features to Minecraft, lmao.

So, which ruleset do I solve for? All of them, of course! Why settle with just one answer when you can find a multitude of ways to do it.

*Expansion* is definitely my favourite ruleset, but for each number, I try to find the strictest solution that I can – i.e. that which follows the tightest ruleset – and the most creative solutions (especially for the smaller numbers, which are very easy otherwise).
