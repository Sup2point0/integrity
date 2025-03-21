# Integrating Into Integration
<!-- #SQUARK live! feat! opin! devx!
| dest = guides/integrals/int-int
| capt = Glossary of the integration homies
| index = guides / integrals
-->

Don’t we love our integration slang.

> [!Note]
> Some of this I use with my maths friends, some I use personally. Most of them aren’t widely established or accepted mathematical terms, but... you could help spread them ;)


## catalyst

> *You’re looking for a catalyst here.*

[Multiplying through](strategies/multiply.md) (or [dividing by](strategies/divide.md)) a factor when integrating a fraction. Reference to [Integration is Like Organic Chemistry](chem.md).


## evolution

> *You probably only want one of primitives or evolutions.*

Refers to $\tan$ and $\sec$, which are ‘evolutions’ of the primitive trigonometric functions:

```math
\tan{x} = \frac{\sin{x}}{\cos{x}} \qquad \sec{x} = \frac{1}{\cos{x}}
```

### Notes
$\cot$ and $\csc$ are also evolutions, ofc, but they feel a bit more ‘outlandish’.

We pair the trigonometric functions in this way because their derivatives match up nicely:

```math
\begin{align*}
  \frac{d}{dx} \sin{x} &= \cos{x} \qquad \cos{x} = -\sin{x}
  \\ \frac{d}{dx} \tan{x} &= \sec^2{x} \qquad \sec{x} = \sec{x}\tan{x}
\end{align*}
```


## famously

> *e^x is famously both the derivative and antiderivative of e^x.*

Well-known, well-established.


## primitive

> *Try reducing to primitives.*

Refers to $\sin$ and $\cos$, the ‘primitive’ trigonometric functions. Can also be extended to mean $\sinh$ and $\cosh$ in a hyperbolic context.

See also [evolution](#evolution), which refers to $\tan$ and $\sec$.


## quotable

> *It’s quotable from here.*

A solution is *quotable* if it’s sufficiently simple to jump straight to the answer, i.e. “quote” it. It can also refer to “quoting” a formula from a formula book.


## straight-up layer cake

> *That’s straight-up layer cake mate.*

Refers specifically to integrating a fraction where the numerator is the derivative of the denominator, in which case

```math
\int \frac{f'(x)}{f(x)} \ dx = \ln\left| f(x) \right| + c
```
