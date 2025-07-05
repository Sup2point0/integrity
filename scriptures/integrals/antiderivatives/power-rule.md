# Power Rule
<!-- #SQUARK live! c! simp!
| dest = scriptures/integrals/antiderivatives/power-rule
| capt = Introduction to integration
| index = scriptures / integrals / antiderivatives
| date = 2025 February 3
-->

When we differentiate a power of $x$, we bring the power down and reduce it by $1$.

```math
\begin{align*}
  x^2 &= 2x
  \\ x^3 &= 3x^2
  \\ x^{12} &= 12x^{11}
  \\ 4x^{100} &= 400x^{99}
\end{align*}
```

When we integrate, we do the reverse – first *increase* the power by $1$, then divide by the new power on the outside.

```math
\begin{align*}
  \int x \ dx &= \frac{1}{2} x^2
  \\ \int x^5 \ dx &= \frac{1}{6} x^6
  \\ \int 25x^{24} \ dx &= x^{25}
\end{align*}
```

Things don’t change when you have a negative exponent:

```math
\begin{align*}
  \int x^{-2} \ dx &= -x^{-1}
  \\ \int x^{-6} \ dx &= -\frac{1}{5} x^{-5}
  \\ \int -40x^{-21} \ dx &= 2x^{-20}
\end{align*}
```

This holds true for fractions as well. When you do have fractional powers in a more involved integral, things can become a bit more difficult to spot.

```math
\begin{align*}
  \int x^{1/3} \ dx &= \frac{3}{4} x^{4/3}
  \\ \int x^{5/2} \ dx &= \frac{2}{7} x^{7/2}
  \\ \int x^{-3/2} \ dx &= -2 x^{-1/2}
\end{align*}
```

And of course, it holds for irrationals too...

```math
\int x^{\pi} \ dx = \frac{1}{\pi+1} x^{\pi+1}
```

So generally, for any real $n$[^real]

[^real]: *Except $-1$, as we’ll soon see.

```math
\int x^n \ dx = \frac{1}{n+1} x^{n+1}
```

Power rule crops up everywhere in integration, since it’s a really fundamental integration method. The most important cases are where $n = 0$ and $n = 1$.

```math
\int x \ dx = \frac{1}{2} x^2
```

This looks really obvious, but when you’ve just started integration, it can be easy to forget what you’re doing when the variables change after a substitution. Always remember that it doesn’t matter what you call your integrating variable – $x$, $t$, $u$, they’re all just labels – the methods remain the same.

```math
\int 20t \ dt = 10t^2
```

For $n = 0$, you’re just integrating a constant, and this gives back your integrating variable:

```math
\int \ dx = x
```

It probably feels a bit weird at first integrating ‘nothing’. Just remember you’re not integrating $0$, but $x^0 = 1$. If you really want, you can explicitly write the $1$ in:

```math
\int 1 \ dv = v
```

> [!Tip]
> Integrating $0$ just gives $c$, since any constant differentiates to $0$. For that we’d explicitly write $\int 0 \ dx$.

Ok, are there any real values of $n$ that power rule doesn’t hold for? There is, actually. We reach a strange case with $n = -1$ as the exponent:

```math
\int x^{-1} \ dx
```

If we try applying power rule, we would increment the power to $0$ (giving $x^0 = 1$, a constant) – but more catastrophically, we’d end up dividing by $0$...

```math
= \frac{1}{0} x^0
```

Which is definitely illegal.

This is actually the 1 special case where the power rule doesn’t hold. So $n$ can be any real number except $-1$. We’ll look at how to integrate $x^{-1}$ next in [Integrating the Reciprocal](reciprocal.md).
