# Integrating Into Integration
<!-- #SQUARK live! feat! opin! devx!
| dest = scriptures/integrals/collections/int-int
| capt = Glossary of the integration homies
| index = scriptures / integrals / collections
| date = 2025 May 19
-->

Don’t we love our integration slang.

> [!Note]
> Some of this I use with my maths friends, some I use personally. Most of them aren’t widely established or accepted mathematical terms, but... you could help spread them ;)


## catalyst

> *You’re looking for a catalyst here.*

[Multiplying through](../strategies/multiply.md) (or [dividing by](../strategies/divide.md)) a factor when integrating a fraction. Reference to [Integration is Like Organic Chemistry](../adventures/chem.md).


## cheese press

> *use the cheese press check.*

The range of a function.


## conjugate

> *I’ll try multiplying through by the conjugate and see what happens.*

In relation to an expression $p \pm q$, “conjugate” refers to the expression with the opposite sign. This is extrapolated from the [complex conjugate<sup>↗</sup>](https://wikipedia.org/wiki/Complex_conjugate).

For instance, the conjugate of $\sec{x}-\tan{x}$ is $\sec{x}+\tan{x}$. Multiplying by the conjugate usually allows [difference of 2 squares](#dots) to be applied.


## DBI method

> *dbi just use DBI method*

A more cultured name for the [DI method](https://www.youtube.com/watch?v=2I-_SV8cwsw), a popular method for speedrunning [integration by parts](../methods/parts.md).


## DOTS

> *Then use difference of 2 squares, so this factorises like that, and these factors cancel out!*

Difference of 2 squares. Refers to the identity

```math
x^2 - y^2 = (x-y)(x + y)
```


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

Well-known, well-established. Unironically.


## ICR

> *If you multiply through by $2$, it’s easier to spot the ICR.*

[Inverse chain rule](../method/archain-rule.md). Also known as *archain*.


## IPR

> *You can skip to the solution much faster here by spotting the IPR.*

[Inverse product rule](../methods/arcprod-rule.md). Also known as *arcprod*.


## IQR

> *It’s really, really hard to spot the IQR in this integral.

Inverse quotient rule. Also known as *arcquot*.

### Notes
Famously not the [inter-quartile range<sup>↗</sup>](https://wikipedia.org/wiki/Interquartile_range).


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


## silver bullet

> *Don’t tell me I have to use silver bullet.*

Alias for [integration by parts](../methods/parts.md). Reference to the fact that parts is famously “not a silver bullet”.


## straight-up

> *Is this straight-up?*

> *Yo, it’s just straight-up inverse product rule!*

Often used as a shorthand for [straight-up layer cake](#straight-up-layer-cake). More generally, it refers to an integrand where one method can be applied exactly.

For instance, “straight-up inverse chain rule”:

```math
10x^9 (x^10
```

Without the coefficient of $10$ it’s not “straight-up”; the $10x^9$ signposts quite obviously that it’s the derivative of $x^10$.


## straight-up layer cake

> *That’s straight-up layer cake, mate.*

The simplest case of [layer cake](#layer-cake) where the numerator is the exact derivative of the denominator, in which case

```math
\int \frac{f'(x)}{f(x)} \ dx = \ln\left( f(x) \right) + c
```


## tractorise

> *Starts with “f” and rhymes with **tractorise**.*

Cockney rhyming slang(?) for *factorise*.


## translation

> *Undo the translation and you find it’s odd.*

Refers to an integral where the input has been translated, i.e. $x$ has been mapped to $x + a$.

<!-- TODO -->


## trivial

> *And the rest is trivial, happy days!*

In the context of integration, this describes an integral that is sufficiently simplified such that we can be certain it is solvable – i.e. the method(s) or solution route is obvious. If we strip integration to its essence, then the goal when solving any integral is to reduce it to a trivial form.

### Notes
It is important to clarify that “trivial” does not make any comments on the difficulty of carrying out the integration; it only describes the nature of the integral. A trivial integral may have an obvious method that is still nontrivial to execute accurately.

As is the case in the rest of mathematics, what one perceives as “trivial” is very much a function of one’s exposure to integration. To an adventurer who has seen

```math
\int \frac{1}{x\ln{x}} \ dx
```

37 times before this is not a hard integral, but for someone who has only just started encountering integrals with $\ln(x)$ this could be very nontrivial to spot indeed.


## twin-signed

> $\ln(x)$ is a twin-signed function, so this expression could be positive or negative.

(of a function or value) Able to be both positive or negative.
