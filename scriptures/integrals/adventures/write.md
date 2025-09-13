# How Do I Write Integrals?
<!-- #SQUARK live! dev!
| dest = scriptures/integrals/adventures/write
| capt = Ponderings on how I write integrals
| index = scriptures / integrals / adventures
| date = 2025 April 2
| update = 2025 September 13
-->

I often get asked “how do you write your integrals?”

It’s an obvious and valid question, which I really, really struggle to answer.

It feels exactly like asking me how I make music, or do graphic design, or create *Yu-Gi-Oh!* cards. Like, sure, there’s some sense and logic to it, a kind of ‘framework’, but a lot is also just intuition and inexplicable creativity. Writing integrals really is more of a creative endeavour than what would commonly be associated with other aspects of mathematics.

Nevertheless, I’ll do my best to explain some elements of how I create integrals. I think the best way to go about that is sort of take you through my journey of writing them.


## Writing Your Own Integrals

I want to preface this by asserting that you don’t need to be good, or even competent, at integration to write questions.

If you know what integration is, you can write an integral. Try it! If you’ve seen even just a few integrals before, you’ll have some idea of what they can look like.

```math
\int 3x \ dx = \frac{3}{2} x^2 + c
```

It may be simple; it may be trivial; it may be a textbook question. But it’s still a question nonetheless.

```math
\int 6x^2 \ dx = 2x^3 + c
```

Even with just a power rule question, you can start experimenting. Make it more interesting by throwing constants into the mix.

```math
\int (10x+1)^4 \ dx = \frac{1}{50} (10x+1)^5 + c
```

What if we do a bit of trig?

```math
\begin{align*}
  \int \tan{x} \ dx &= \int \frac{\sin{x}}{\cos{x}} \ dx
  \\ &= -\ln(\cos{x}) + c
\end{align*}
```

Ok, that’s fine, what if we square it now?

```math
\begin{align*}
  \int \tan^2{x} \ dx &= \int \sec^2{x} - 1 \ dx
  \\ &= \tan{x} - x + c
\end{align*}
```

Or cube it?

```math
\int \tan^3{x} \ dx
```

When I started out writing integrals, this is pretty much what I did. You just throw stuff together, and see what sticks. You work your way through many, many combinations of functions and expressions.

Because my first integrals were for my school’s Integration Bee (and simultaneously self-practice), this happened to be perfect for exactly that – we didn’t need overly elegant or challenging questions, just those that could test how well people knew their integration (particularly in the early rounds). And we needed a seriously large number of them.[^large-number]

[^large-number]: I wrote at least 200 thinking it’d be way too much, but nope, we came up *short* 💀

Most of these ‘RNG’ integrals tend to be fairly trivial in difficulty – they act as great practice material for when you’re first learning integration. Hilariously, it’s also extremely easy to create an integral that’s impossible to evaluate (with elementary functions), like $\int x\tan{x} \ dx$ or $\int e^x/x \ dx$.

Sometimes, you can get a really juicy integral which isn’t obvious or impossible. These are really fun, because you don’t know where it’ll take you. It’s an explorative journey. The fun in these no longer lies in writing the question, but actually finding a solution. They’re actually extremely valuable for building your integration intuition and problem-solving.

> [!Tip]
> These kinds of integrals are honestly pretty rare, which is part of the reason why I was so inclined to make *Integrity* – a curated repository of integrals for people looking to improve at integration. If you filter integrals with the method `FUN` or `HARD`, you’ll find some that I thought were especially juicy when solving.


## Integral Engineering

As I became more confident in integration I could start to make my integrals more ‘focused’. They were less... random, and more ‘directed’, with a particular solution route in mind.

Writing integrals in this manner was very different to just throwing functions together – I was almost working backwards now, with an antiderivative in mind which I’d build up the derivative for. By this I don’t mean just taking the derivative of some expression and simplifying it, but rather starting with an idea – *this is going to be a power rule* – and building around it – *we’ll add a trig sub here* – to get something fuller and more complex.

To illustrate, an integral might start with a very basic base form:

```math
\int \frac{x}{x+1} \ dx
```

Then I might develop it by layering on a substitution, where they’d put $\sin{x} = t$:

```math
\int \frac{\sin{x}}{\sin{x}+1} \ dx
```

And to perform that substitution, they’d need a $\cos{x} \ dx$ on the outside, so I’ll add in a $\cos{x}$ to facilitate that substitution:

```math
\int \frac{\sin{x}\cos{x}}{\sin{x}+1} \ dx
```

Nice, and now we can obscure the $\sin(x)\cos(x)$ a little by turning it into $\frac{1}{2} \sin(2x)$. And since constants are irrelevant for integration, we can just throw out the $\frac{1}{2}$.

```math
\int \frac{\sin{2x}}{\sin{x}+1} \ dx
```

There we go. That’s a solid integral right there.

Doing a substitution ‘in-reverse’ like this can be a little trippy, but it becomes second nature at some point. It’s actually super easy if you just carry out a substitution algebraically:

```math
\begin{align*}
  &\ \int \frac{x}{x+1} \ dx \quad&\quad x &= \sin{t}
  \\ =&\ \int \frac{\sin{t}}{\sin{t}+1} \cdot \cos{t} \ dt \quad&\quad dx &= \cos{t} \ dt
  \\ =&\ \int \frac{\sin{t}\cos{t}}{\sin{t}+1} \ dt
  \\ =&\ \int \frac{\sin{x}\cos{x}}{\sin{x}+1} \ dx && \text{(symbolic change } x \to t \text{)}
\end{align*}
```

This can just very easily get confusing when you don’t want to just substitute $x$ but some larger expression of $x$, like $\tan^{-1}(x)$. It’s also a little trippy to do this substitution and then replace all variables in your final integral with $x$ again. I did get tripped up a bit when I started, but of course soon it became second nature.


## Creative Endeavours

Naturally, this *can* get a little old – while integration is mostly substitution, only writing substitution-directed questions would be a bit boring.

A lot of the fun in integration doesn’t actually lie in the integrating, but in the algebraic manipulation to get you there. It’s like programming – sure, you wanna get the end result of your code working, but more important is the logic and structure behind the code. That’s the algebra that leads to the solution; the actual juice to learn, to enjoy.

And so, the next level of integral writing lies in *obfuscation* – masking the solution route so that it forces the solver[^solver] to really think.

[^solver]: I was thinking what word to use here when writing, and I originally had ‘player’, which I thought was pretty funny. But anything can be a game, right? We’re all just players in the game of integration :v

What does this involve? Essentially, performing purely algebraic manipulations to morph and mutate the integrand. Adding zero, multiplying by 1, cutting out terms, reshaping trig, moving powers around, symbolic substitutions (no actual substitutions that change the variable), the whole lot. It’s the visual decoration, the serifs for the text, your effect chain in sound synthesis.[^sound-synthesis]

[^sound-synthesis]: I do love my analogies don’t I, lmfao

In fact, the final step in the integral we wrote above, turning $\sin(x)\cos(x)$ into $\sin(2x)$, was *exactly* an obfuscation![^exactly-obfuscation] It’s obvious for us with all the context of writing the integral, but for the solver seeing the integral fresh with zero context, it’s not quite as obvious.

[^exactly-obfuscation]: In actuality, when writing the section above I hadn’t yet planned on writing this one below on obfuscation, so I just added that extra tweak as a natural followup xD – again, obfuscation becomes second nature, especially the obvious ones.

So, let’s see if we can obfuscate this integral further.

```math
\int
  \frac{\sin{2x}}{\sin{x}+1}
\ dx
```

Recall the iconic identity $\sin(x)^2 + \cos(x)^2 = 1$. This means whenever we have one of $\sin(x)^2$ or $\cos(x)^2$ we can very easily transform it into the other. That’s perfect for obfuscating.

We can facilitate that here by multiplying through by $\displaystyle 1 = \frac{\sin{x}}{\sin{x}}$:

```math
\begin{align*}
  &\ \int \frac{\sin{2x}}{\sin{x}+1} \cdot \frac{\sin{x}}{\sin{x}} \ dx
  \\ =&\ \int \frac{\sin{x}\sin{2x}}{\sin^2{x}+\sin{x}} \ dx
\end{align*}
```

Epic. We’ve now got a $\sin(x)^2$. See what happens when we change it to $\cos(x)^2$:

```math
\begin{align*}
  &= \int \frac{\sin{x}\sin{2x}}{1-\cos^2{x}+\sin{x}} \ dx
  \\ &= \int \frac{\sin{x}\sin{2x}}{1+\sin{x}-\cos^2{x}} \ dx
\end{align*}
```

Damn, it’s now looking a lot scarier. Finally, why not multiply through by $-1$ just to make the $1 - \cos(x)^2$ less obvious:

```math
= \int \frac{\sin{x}\sin{2x}}{\cos^2{x}-\sin{x}-1} \ dx
```

Compare this to its original vanilla form. The integral’s totally changed! That’s what obfuscation is all about.

The goal is not to make the integral really messy or disgusting, but to *evolve it* into something different to its vanilla form. Even just one modification that makes the substitution less easy to spot can make an integral that much more sophisticated.

The obfuscation we did here wasn’t that strong,[^not-strong] but it does illustrate how I might go about obfuscation. We could be evil and do a further symbolic substitution of $x = x/2$:

[^not-strong]: If you’re familiar with integration, the $\sin(x)^2 = 1 - \cos(x)^2$ manipulation becomes really obvious.

```math
= \int \frac{\sin(x/2)\sin(x)}{\cos(x/2)^2-\sin(x/2)-1} \ dx
```

The method remains identical to earlier, but the $x/2$-s make it tougher to spot. However, now the integral’s become kinda messy, so I wouldn’t do this.

This is where integrals become more of a ‘puzzle’ than just an exercise in calculus. And that’s for both the writer and solver! Coming up with an intricate, elaborate puzzle for others to pick apart is just as fun as actually solving them. That’s why even as I was writing integrals, I was still constantly doing integration questions. It goes both ways.


## The Art of Obfuscation

Obfuscation is certainly the most interesting part of writing integrals, but it’s also tricky to get right, for a number of reasons. I’m gonna try illustrate all that I say with concrete examples, but it’s not easy to find perfect examples for each of them, so please bear with me.

### Compatibility
First and foremost, not all integrals are really ‘compatible’ for obfuscation. Generally (generally), the more complex it is, the more easy it is to find ways of obfuscating it. That’s kinda just how complexity works.[^complexity]

[^complexity]: Here, by ‘complexity’ I mean *visual* complexity. Visually simple integrals are often the hardest!

This integral does not in all honesty have that much going on:

```math
\int_{-\infin}^{\infin}
  x^4 e^{-x^2}
\ dx
```

> Question from *Integrity*, [s25c-ee1](https://sup2point0.github.io/question/integrals?shard=s25c-ee1).

### Changing the Nature

### Accidental Unobfuscation

### Invalidating the Integral

### Retaining Beauty


## Perfect Examples of Obfuscation

<!-- TODO -->

```math
\int
  \frac
    { x (x+1) e^x }
    { x - e^{-x} }
\ dx
```

> Question from *Integrity*, [s25f-hd1](https://sup2point0.github.io/integrity/question/integrals?shard=s25f-hd1)

<!-- TODO -->

```math
\int
  \frac
    { x+1 }
    { x }
  (xe^x)^{9699}
\ dx
```

> Question from *Integrity*, [s25f-hp2](https://sup2point0.github.io/integrity/question/integrals?shard=s25f-hp2)


## Closing Thoughts

I want to wrap up by affirming that you don’t need to be good at integration to write good integrals.

Writing an integral is very different to solving one. The two are certainly not unrelated and independent, but they’re not very tightly linked either.

What I will say is that solving integrals, in particular solving *many* integrals, is extremely beneficial to writing them. Familiarity with and experience in integration is key.
