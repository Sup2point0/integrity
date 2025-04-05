# Integrating Into Integration
<!-- #SQUARK live! feat! opin! devx!
| dest = guides/integrals/collections/int-int
| capt = Glossary of the integration homies
| index = guides / integrals
-->

Don’t we love our integration slang.

> [!Note]
> Some of this I use with my maths friends, some I use personally. Most of them aren’t widely established or accepted mathematical terms, but... you could help spread them ;)


## catalyst

> *You’re looking for a catalyst here.*

[Multiplying through](../strategies/multiply.md) (or [dividing by](../strategies/divide.md)) a factor when integrating a fraction. Reference to [Integration is Like Organic Chemistry](../adventures/chem.md).


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

> *e<sup>&thinsp;x</sup> is famously both the derivative and antiderivative of e<sup>&thinsp;x</sup>.*

Well-known, well-established.


## JMWC

> *Oh my days it’s the JMWC himself.*

Left as an exercise to the reader.


## layer cake

> *This layer cake is really well-hidden.*

Refers to integrating a fraction where the numerator is the derivative of the denominator, or an integer multiple of the derivative.

```math
\int \frac{kf'(x)}{f(x)} \ dx = k\ln\left( f(x) \right) + c
```

If it is exactly the derivative, it becomes [straight-up layer cake](straight-up-layer-cake). Plain *layer cake* refers to the cases where the numerator is more disguised.


## parts duplication

> *Woah, we got parts duplication!*

A rare occurrence when using [integration by parts](../methods/parts.md), where the original integrand is obtained on the right side of the equation.

```math
\begin{align*}
  \int e^x \sin{x}
    &= e^x \sin{x} - \int e^x \cos{x} \ dx
  \\ &= e^x \sin{x} - \left(
    e^x \cdot \cos{x} - \int e^x \cdot -\sin{x} \ dx
  \right)
  \\ &= e^x \sin{x} - e^x \cdot \cos{x} - \textcolor{#4d9dcd}{\int e^x \cdot \sin{x} \ dx}
  \\ 2 \int e^x \sin{x} &= e^x \sin{x} - e^x \cdot \cos{x}
  \\ \int e^x \sin{x} &= \frac{1}{2} \left(
    e^x \sin{x} - e^x \cdot \cos{x}
  \right)
\end{align*}
```


## primitive

> *Try reducing to primitives.*

Refers to $\sin$ and $\cos$, the ‘primitive’ trigonometric functions. Can also be extended to mean $\sinh$ and $\cosh$ in a hyperbolic context.

See also [evolution](#evolution), which refers to $\tan$ and $\sec$.


## quotable

> *It’s quotable from here.*

A solution is *quotable* if it’s sufficiently simple to jump straight to the answer, i.e. “quote” it. It can also refer to “quoting” a formula from a formula book.

```math
\int \frac{1}{x^2 + 9} = \frac{1}{3} \tan^{-1}\left( \frac{1}{3}x \right) + c
```


## straight-up layer cake

> *That’s straight-up layer cake, mate.*

A degenerate case of [layer cake](#layer-cake) where the numerator is the exact derivative of the denominator, in which case

```math
\int \frac{f'(x)}{f(x)} \ dx = \ln\left( f(x) \right) + c
```


## tractorise

> *Starts with “f” and rhymes with **tractorise**.*

Cockney rhyming slang(?) for *factorise*.
