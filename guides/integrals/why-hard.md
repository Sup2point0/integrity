# Why Is Integration Difficult?
<!-- #SQUARK live! opin! dev!
| dest = guides/integrals/why-hard
| capt = You can learn to differentiate in a day, but you can’t learn to integrate in a lifetime.
| index = guides / integrals
-->

The [Fundamental Theorem of Calculus<sup>↗</sup>](https://wikipedia.org/wiki/Fundamental_theorem_of_calculus) says that *integration* and *differentiation* are the inverses of each other. So why is it that integration is extraordinarily, incomparably more difficult[^difficult-nontrivial] than differentiation?

[^difficult-nontrivial]: Perhaps a better term would be *nontrivial*.

Well, this is true for a lot of things in life: often, reversing something is much, much harder than doing it in the first place – and in many cases, pretty much impossible. For instance, smash a fragile LEGO set, and it’ll take a while to repair it. It takes considerably more effort to rebuild it than it took to break it apart.[^break] And if you’ve inevitably lost the instruction set, then it might not even turn out like the original.

[^break]: Humour me, it was a *fragile* LEGO set, ok?

A lot of things in maths are reversible. If we have a value $x$ and double it to give $2x$, we can perform the opposite of multiplication – division – to get our original value back.

```math
2x / 2 = x
```

If we plug a value into $e^x$, we can retrieve it with the inverse of exponentation, the logarithm.

```math
\ln(e^x) = x
```

But when we square a number, suddenly things aren’t so black-and-white. We might be inclined to say the “inverse” of squaring is the square root; however, when we have negative numbers that falls apart:

```math
\begin{align*}
& \left(-2\right)^2 = 4
\\ & \sqrt{4} = 2
\\ & 2 \neq -2 \qquad ???
\end{align*}
```

If they are inverses we would need $\sqrt{x^2}$ to give $x$. But as we know, $\sqrt{}$ only gives the positive root – which means $\sqrt{x^2} = |x|$ instead.

So why does that happen?

Think about what happens when we square $-2$. We have $(-2) \times (-2)$, so the twos multiply to give $4$. But the $-$ signs cancel out. It’s like they weren’t even there. In fact, just looking at the answer of $4$, there’s absolutely no way to tell the $-$ signs were there in the original calculation!

This is a **loss of information**. And unlike losing your password, it’s an unrecoverable loss.

We see the same thing in differentiation. When we have a constant term, like the $2$ in $x^2 + x + 2$, it vanishes when the expression is differentiated:

```math
\frac{d}{dx} \left(x^2 + x + 2\right) = 2x + 1
```

Integration is the inverse of differentiation, so integrating this expression should give us the original expression. But the $+2$ is missing, of course:

```math
\int 2x + 1 \ dx = x^2 + x
```

And this is why we need the $+c$ – it’s to account for *any* possible constant term.

```math
\int 2x + 1 \ dx = x^2 + x + c
```

In this case we knew $c = +2$, but there’s no way to know this when evaluating an integral blind.

Now this isn’t what makes integration difficult, but it helps illustrate the idea: when we differentiate, we often *lose* information. This information doesn’t have to be irreversibly lost, and it may not even be essential – but when we don’t have it, it can make a solution much tougher to spot.

This is perhaps my favourite example for demonstrating this. Let’s differentiate $\ln \left(\sec{x} + \tan{x} \right)$. We’ll use chain rule and quote the standard derivatives of logarithmic functions.

```math
\begin{align*}
  &\ \frac{d}{dx} \ln \left(\sec{x} + \tan{x} \right)
  \\ =&\ \frac{1}{\sec{x} + \tan{x}} \cdot \left(\sec^2{x} + \sec{x}\tan{x} \right)
  \\ =&\ \frac{\sec^2{x} + \sec{x}\tan{x}}{\sec{x} + \tan{x}}
  \\ =&\ \frac{\sec{x} \left(\sec{x} + \tan{x}\right)}{\sec{x} + \tan{x}}
  \\ =&\ \sec{x}
\end{align*}
```

And miraculously, at the final step $\sec{x} + \tan{x}$ perfectly factors out, leaving us with just $\sec{x}$. Isn’t that beautiful. A rare instance of differentiation not being messy!

But now, suppose we do that in reverse. We want to *integrate* $\sec{x}$. And we have no clue of what we’ve just seen.

*This* is where it gets hard, because the critical factor of $\sec{x} + \tan{x}$ – it’s been lost. It was cancelled out in differentiation, just like $-$ when squaring. Without it, the integral is a whole lot more nontrivial, and the challenge lies in spotting that multiplication that allows you to apply [straight-up layer cake].

And so looking at this, one would wonder how you could *ever* spot the multiplication by $\sec{x} + \tan{x}$ when integrating $\sec{x}$.

This is an extreme case, but the same applies to many, many integrals.[^many]

[^many]: It’s quite tough to judge how many, or what proportion, exactly. Given there are an uncountably infinite number of possible integrals.

The challenge of integration is not in carrying out the integration,[^accuracy] but in manipulating the integrand into a form where we *can* integrate it.

[^accuracy]: That being said, algebraic accuracy is also nontrivial. Tough in both differentiation and integration, let’s say that.

And how do we do that? Continue reading at [How Do We Integrate?](how.md)
