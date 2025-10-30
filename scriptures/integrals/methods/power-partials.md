# High-Power Partials
<!-- #SQUARK live!
| dest = scriptures/integrals/methods/power-partials
| capt = Substitution without substitution
| index = scriptures / integrals / methods
| date = 2025 June 23
| --
| example-questions = s25f-qt2
| continue-reading =
    scriptures/integrals/methods/partials-asymptotes.md
-->

When we see

```math
\int \frac{1}{x^2(x^2+k)} \ dx
```

We might be tempted to split it with partial fractions into

```math
\int \frac{p}{x} + \frac{q}{x^2} + \frac{rx+s}{x^2+k} \ dx
```

But if we solve for this, we’ll find that $p=0$ and $r=0$. In fact, $p$ and $q$ will always be $0$ regardless of what value $k$ takes.

Something strange is going on here...


## Abstraction

Recall that partial fractions is not an integration technique, but an algebraic manipulation, just like trigonometric identities or logarithm laws. Rewriting the integrand with partial fractions produces a mathematically identical expression.

This means we can perform a substitution, but without needing to worry about changing the $dx$ or bounds of integration. It’s not a calculus substitution which changes the nature of the expression, but only a visual abstraction to make stuff simpler to manage.

So going back to that integral, let’s just pluck out the integrand and consider that on its own:

```math
\frac{1}{x^2(x^2+k)}
```

We write $x^2$ as $t$. Drop the calculus cannons, there’s no $dx$ here to replace – we’re just rewriting an expression with another variable for simplicity, like in solving disguised quadratics.

```math
\frac{1}{t(t+k)}
```

Now it’s evident that we can separate this with partial fractions:

```math
\frac{p}{t} + \frac{q}{t+k}
```

Maybe you’re thinking, “Wait, but $t$ is $x^2$, what about the lower powers of $x$?” But $t$ is just a variable. Forget $x$ ever existed; this relation holds true for all values of $t$, and that’s all that matters.

So now we replace $t$ with $x^2$ to undo our substitution. The relation still holds for all values of $x$.

```math
\frac{p}{x^2} + \frac{q}{x^2+k}
```

This is exactly the same result that we derived before, but we simplified things a lot by using $t$ instead of $x^2$.


## Application

This can feel a little unintuitive at first, especially if you’ve been integrating for a while – we’ve been trained to consider derivatives when substituting. But this is a more classic kind of ‘symbolic’ substitution than the involved process of substitution in calculus.

It’s important to recognise where this works. It certainly does not mean you don’t ever need to consider lower powers of $x$. This:

```math
\frac{1}{x^3(x^2+1)}
```

still decomposes like

```math
= \frac{p}{x} + \frac{q}{x^2} + \frac{r}{x^3} + \frac{sx+k}{x^2+1}
```

Whereas with this:

```math
\frac{1}{x^3(x^3+1)}
```

we can skip those lower powers by writing $x^3$ as $t$.

```math
\frac{1}{t(t+1)} = \frac{p}{t} + \frac{q}{t+1}
```

It seems a bit obvious to state “you must be able to write every term in terms of integer powers of the new variable $t$”, but that’s essentially what it is. It’s only when the powers of $x$ have a common factor[^common-factor] that you can rewrite those powers of $x$ as lower powers of $t$.

[^common-factor]: The common factor can’t just be $1$, since that would be a pointless substitution of $x = t$...

Here’s another example. We’ll split

```math
\frac{1}{x^8(x^4+2)}
```

We spot that all terms of $x$ can be expressed as a power of $x^4$, so writing $x^4$ as $t$ we obtain

```math
\frac{1}{t^2(t+2)}
```

Decomposing with partial fractions gives

```math
\frac{p}{t} + \frac{q}{t^2} + \frac{rt+s}{t+2}
```

And after re-substitution we end up with

```math
\frac{p}{x^4} + \frac{q}{x^8} + \frac{rx^4+s}{x^4+2}
```


## Augmentation

So, remembering that partial fractions is purely a symbolic manipulation, guess what – we can do it for any expression!

Take a fraction with trig:

```math
\frac{1}
  { \left(\sin{x}\right) \left(\sin{x} + 1\right) }
```

Now partial fractions here would be crazy[^crazy] but we’ll just do it to demonstrate the method.

[^crazy]: A much nicer method would be to multiply through by $(1-\sin{x})$.

Write $\sin{x} = t$, so we have:

```math
\frac{1}{t(t+1)}
```

Writing as partial fractions gives:

```math
\frac{1}{t(t+1)} = \frac{p}{t} + \frac{q}{t+1}
```

And solving gives:

```math
= \frac{1}{t} - \frac{1}{t+1}
```

Putting the trig back, we now find

```math
\frac{1}{ \left(\sin{x}\right) \left(\sin{x} + 1\right) }
  = \frac{1}{\sin{x}} - \frac{1}{\sin{x}+1}
```

Both of these remaining integrals are quotable, though not necessarily any easier than our original integral. But look, we did partial fractions with trig! Isn’t that cool.

It wouldn’t have worked with both $\sin(x)$ and $\cos(x)$, of course, since we need every expression of $x$ to be the same or have a common factor. Although, speaking of trigonometric partial fractions, [maybe we could...](trig-partials.md)
