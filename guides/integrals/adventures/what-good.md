# What Makes a Good Integral?
<!-- #SQUARK live! opin!
| dest = guides/integrals/adventures/what-good
| capt = On the beauty of integration
| index = guides / integrals / adventures
| date = 2025 February 4
| update = 2025 June 27
-->

Integrals are, for sure, some of the most satisfying mathematical problems to solve. More so than any other kind of problem (except perhaps geometry) they are such an intricate form of puzzle, taking a little skill, creativity, and intuition. Sometimes, the solution is so beautiful that it leaves you[^you] breathless, gasping for air, as you freak out over its elegance.[^freak]

[^you]: Well, me.
[^freak]: Uh, depending on the circumstance this can be accompanied by some ...questionable sounds.

Of course, beauty lies in the eye of the beholder; and in the case of integration, it is also very much dependent on one’s experience in and exposure to the topic, as well as mathematics as a whole. Here I’ll look into some of what I personally find makes an integral beautiful. It might well (and probably will) change in a few years.


## Simple, or Complex?

Integrals come in all varieties of complexity. At the 2 extremes, you have those that are *incredibly* barebones – often deceivingly so, as they can be tantalisingly difficult:

```math
\int \frac{1}{2+\sin{x}} \ dx
```

And those that are hilariously obfuscated, overloaded with all sorts of guffaw:

```math
\int \frac{1+\sqrt{\ln x}\left(x+1\right)^{2}+x\left(2\ln x+x\sqrt{\ln x}+1\right)}{\left(x\sqrt{\ln x}\right)\left(x+\sqrt{\ln x}\right)}\ dx
```

> Question from *Integrity*, [s25f-ms1](https://sup2point0.github.io/integrity/question/integrals?shard=s25f-ms1).

Certainly, there is undeniable elegance and sophistication in the simplest integrals which prove unnerving to unravel. They can really take you on a journey, fluctuating in form and complexity, inching towards forms easier to integrate.

But personally, I also find great delight in tackling those wildly messy integrals. It really is like taking on a boss monster. The first look is horrifying, but you slowly build up familiarity as you take stabs at it. You learn its tricks and weaknesses, understand its quirks and intentions, and after so much grinding – you find the strategy.

Or maybe you don’t. Maybe the boss enters a berserk stage where it’s now even harder to defeat, and you’re struggling to dodge all its projectiles while thinking up a new strategy to counterattack. The uncertainty is enthralling. The openness is freeing. The chaos is fun. The game of keeping track of all the moving parts is a satisfying test of accuracy, consistency and organisation.

Naturally, often the truth lies between the 2 extremes – and in this case, I don’t think it’s so much the complexity of an integral that solely determines its beauty.


## The Adventure

In fact, even ‘easy’ integrals can totally be considered ‘beautiful’. An integral really doesn’t need to be *challenging* to be nice.

For instance, this is one of my favourite integrals:

```math
\int \frac{\sec{x}}{\sec{x} - \tan{x}}\ dx
```

> Question from *Integrity*, [s25f-ft1](https://sup2point0.github.io/integrity/question/integrals?shard=s25f-ft1).

The solution is not obvious to all, but it’s fairly accessible if you have the right instincts. I would not call it especially difficult.

```math
\begin{align*}
  &= \int \frac{\left(\sec x\right)\left(\sec x+\tan x\right)}{\left(\sec x-\tan x\right)\left(\sec x+\tan x\right)}\ dx
  \\ &= \int \frac{\sec^{2}x+\sec x\tan x}{\sec^{2}x-\tan^{2}x}\ dx
  \\ &= \int \frac{\sec^{2}x+\sec x\tan x}{1}\ dx
  \\ &= \int \sec^{2}x\ dx+\int \sec x\tan x\ dx
  \\ &= \tan x+\sec x-c
\end{align*}
```

The whole integral collapses in an extremely satisfying and exact way, without even any fiddling with coefficients. It’s honestly a perfect example of a ‘clean’ and ‘pure’ integral.


## The First Time

One of the things that can make an integral ‘nice’ is a *trick* or *hook* – and the thing wih these is that there are only really a limited number of them. So when you experience one for the first time, that can make an integral stand out to *you*. This does make it difficult, then, to evaluate or justify a particular integral’s beauty based off its trick – for someone who’s seen that one plenty of times before, it might not be so glamorous.

For each trick you could consider there to be an ‘archetypal’ integral that perfectly embodies the essence of said trick. For instance, wih [parts duplication](...) the most famous integral applying this strategy would no doubt be this:

```math
\int e^x \sin{x} \ dx
```

Does this invalidate all other parts duplication integrals? Not at all. In fact, I think I’d be comfortable saying all parts duplication integrals (that aren’t just multiples of $e^x \sin(x)$, lmao) are automatically beautiful, simply down to the sheer rarity of parts duplication compared to other methods and strategies of integration. When it shows up, it’s special, y’know?


## Consider My Mind Blown

Often it’s the simplest combinations of functions that are impossible to integrate.

```math
      \int \frac{e^x}{x} \ dx
\quad \int \frac{\sin{x}}{x} \ dx
\quad \int \frac{1}{\ln{x}} \ dx
```

It’s a rite of passage to attempt integrating these at some point and reaching the disappointing conclusion that you can’t.[^cant]

[^cant]: (not with only elementary functions)

But there are many minimalist integrals of this nature, with questionable combinations of functions that look like you shouldn’t be able to integrate – that can be solvex indefinitely. Sometimes, it all just works out.

```math
      \int \sin(x)\sinh(x) \ dx
\quad \int (\sin{x})\ln(\sin{x}) \ dx
\quad \int (\sinh{x})\tanh^{-1}(\sinh{x}) \ dx
```

> Left: [s25f-ip1](https://sup2point0.github.io/integrity/question/integrals?shard=s25f-ip1). Middle: [s25f-fg1](https://sup2point0.github.io/integrity/question/integrals?shard=s25f-fg1). Right: [An Integral That Looks Unsolvable](unsolvable-integral-1.md).

The fact that these integrals can be solved is, well, *really cool*. When you’ve built up some expectation for what kind of integrals are ‘probably’ unsolvable, and that intuition is shattered, it’s quite amazing. This might just sound like cope said by experienced integrators that declare any problem they can’t solve as unsolvable,[^exp-cant-solve] but it’s true in many fields – the higher-level you are, the more you can appreciate what’s difficult, what defies expectations or convention, what takes ingenuinity or creativity.

[^exp-cant-solve]: I do sometimes do this. My instincts aren’t always right. (I mean, ofc they aren’t. I’m only a purple portal.)
