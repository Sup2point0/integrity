# Everything & Anything
<!-- #SQUARK live! feat! c! devx! dev!
| dest = guides/integrals/collections/everything-anything
| capt = The prime integrator’s standard arsenal
| index = guides / integrals
| date = 2025 April 17
-->

Integration can’t be learnt in a day. Nor can you, or should you, memorise in a day all of the useful formulae, identities and other quotable results that will come in crucial throughout your adventures in integration.

You can use this page as a quick reference, refresher, roadmap, or (if you really want) crash course in the core components of integration. I wouldn’t really recommend trying to ‘learn’ something you’ve never encountered just from this page – each topic goes far too deep to adequately cover in this confined space, and you’ll almost certainly be better off, say, watching a YouTube video by [3b1b<sup>↗</sup>](https://youtube.com/@3blue1brown) on it ;)

What will be far more long-lasting, worthwhile and rewarding than simply memorising these formulae is developing your mathematical fluency and intuition. The best way to remember them is not to recite them, or make flash cards, but to *use* them. Try deriving identities yourself. Only through practice, experimentation and self-discovery will you learn unforgettably.[^learn]

[^learn]: See [What Do I Do?](what.md) for more.

Enjoy 🥕


## Algebra

### Completing the Square
Given a quadratic with no coefficient of $x^2$,

```math
x^2 + bx + c
```

We can “complete the square” to reduce the power of $x$.

```math
= \left(x - \frac{b}{2} \right)^2 - \left(\frac{b}{2}\right)^2 + c
```

### Power Laws
A negative exponent is equivalent to taking a reciprocal.

```math
x^{-1} = \frac{1}{x}
  \qquad x^{-n} = \frac{1}{x^n}
  \qquad e^{-x} = \frac{1}{e^x}
```

When multiplying terms with the same base, you can add the exponents.

```math
\begin{align*}
  x^p \cdot x^q &= x^{(p+q)}
  \\ \sin(x)^2 \cdot \sin(x)^3 &= \sin(x)^5
  \\ e^x \cdot e^{-x} &= e^{x-x} = e^0 = 1
\end{align*}
```

Keep in mind this can go the other way too!

```math
e^{x+1} = e^x \cdot e^1 = e \cdot e^x
```

When dividing, you can subtract the exponents. This is equivalent to making the power negative and adding.

```math
\frac{x^p}{x^q} = x^p \cdot x^{-q} x^{(p-q)}
```

### Log Laws
> [!Tip]
> Here $\log$ denotes a logarithm of any base, although the natural logarithm $\ln$ (with base $e$) is primarily used in integration. If you see a rogue $\log$ in the wilderness of mathematics with no base indicated, you can pretty safely assume it’s $\ln$.

An exponent inside a logarithm can be extracted as a coefficient.

```math
\log(x^n) = n \log{x}
```

Note that the exponent must be applied to the **whole** term. For instance,

```math
\log(x^2 + 1) \neq 2 \log(x + 1)
```

Also, unless you intend to use a [complex-valued logarithm<sup>↗</sup>](https://wikipedia.org/wiki/Complex_logarithm), it’s best to wrap the leftover term with an absolute value.

```math
\log(x^n) = n \log{|x|}
```

Multiplication *inside* the log corresponds to addition outside.

```math
\log{xy} = \log{x} + \log{y}
```

> [!Note]
> Unless you are using a complex-valued logarithm, this only holds true for positive $x$ and $y$.

Analogous to exponents, division inside the logarithm corresponds to subtraction outside.

```math
\begin{align*}
  \log\left( \frac{x}{y} \right) &= \log(x \cdot y^{-1})
  \\ &= \log{x} + \log(y^{-1})
  \\ &= \log{x} - \log{y}
\end{align*}
```

### Binomial Expansion
It looks scary, but it’s just like any other rule.

```math
\begin{align*}
  (x + y)^2 &= x^2 + 2xy + y^2
  \\ (x + y)^3 &= x^3 + 3x^2y + 3xy^2 + y^3
\end{align*}
```

Watch out for the reverse, and remember the terms can come in any order!

```math
x^2 + y^2 + 2xy = (x + y)^2
```

### Partial Fractions
> *Main article: [Partial Fractions](../methods/partials.md)*


## Derivatives & Antiderivatives

Integration and differentiation are inverses of each other. Learning something’s derivative is the same as learning its antiderivative; it might just take time to get used to going from one to the other.

Also, this stuff is really not quite linear (no pun intended). You sort of pick them up bit by bit as you go, there’s no ‘order’ to learning them. Many even tie into multiple different rules or methods, so categorising them is a somewhat overly restrictive endeavour.

### Exponentials & Logarithms
$e^x$ is famously its own derivative and antiderivative.

```math
\begin{align*}
  \frac{d}{dx} \, e^x &= e^x
  \\ \frac{d}{dx} \, e^{kx} &= ke^{kx}
\end{align*}
```

$\ln(x)$ has a very nice derivative.

```math
\frac{d}{dx} \ln{x} = \frac{1}{x}
```

### Trigonometry
The primitive trig functions $\sin(x)$ and $\cos(x)$ form a cycle when differentiated.

```math
\begin{align*}
  \frac{d}{dx} \, \sin{x} &= \cos{x}
  \\ \frac{d}{dx} \, \cos{x} &= -\sin{x}
  \\ \frac{d}{dx} \left( -\sin{x} \right) &= -\cos{x}
  \\ \frac{d}{dx} \left( -\cos{x} \right) &= \sin{x}
\end{align*}
```

The evolved trig functions $\tan(x)$ and $\sec(x)$ have memorable derivatives that ‘roll’ off the tongue.

```math
\begin{align*}
  \frac{d}{dx} \, \tan{x} &= \sec^2{x}
  \\ \frac{d}{dx} \, \sec{x} &= \sec{x}\tan{x}
\end{align*}
```

The other evolved trig functions $\cot(x)$ and $\csc(x)$ have analogous derivatives, except negative.

```math
\begin{align*}
  \frac{d}{dx} \, \cot{x} &= -\csc^2{x}
  \\ \frac{d}{dx} \, \csc{x} &= -\csc{x}\cot{x}
\end{align*}
```

### Hyperbolic Trigonometry
The hyp trig functions also form a cycle when differentiated, except the signs vanish.

```math
\begin{align*}
  \frac{d}{dx} \, \sinh{x} &= \cosh{x}
  \\ \frac{d}{dx} \, \cosh{x} &= \sinh{x}
\end{align*}
```

The compound evolutions are analogous.

```math
\begin{align*}
  \frac{d}{dx} \, \tanh{x} &= \operatorname{sech}^2{x}
  \\ \frac{d}{dx} \, \coth{x} &= -\operatorname{csch}^2{x}
\end{align*}
```

The other evolutions have a sign change.

```math
\begin{align*}
  \frac{d}{dx} \, \operatorname{sech}{x} &= - \operatorname{sech}{x}\tanh{x}
  \\ \frac{d}{dx} \, \operatorname{csch}{x} &= \operatorname{csch}{x}\coth{x}
\end{align*}
```


## Integration

### Power rule
For $n \neq -1$,

```math
\int x^n \ dx = \frac{1}{n+1} x^{n+1}
```

For $n = 0$ this is equivalent to integrating a constant.

```math
\int k \ dx = kx
```

### Inverse chain rule

```math
\int f'(g) \, g' \ dx = f(g)
\\ \int f'(g(x)) \, g'(x) \ dx = f(g(x))
```

### Substitution
For an integral

```math
\int f(g(x)) \, g'(x) \ dx
```

Letting $g(x) = t$ gives

```math
g'(x) \ dx = dt
```

So

```math
\int f(t) \ dt
```

Or equivalently,

```math
\int f(g(x)) \ dx = \int f(t) \cdot \frac{1}{g'(x)} \ dt
```

### Layer cake
For the degenerate case of [power rule](#power-rule) where $n = -1$, the integral is different.

```math
\int \frac{1}{x} = \ln{x}
```

Combining this with substitution provides a useful abstraction, famously known as [layer cake](int-int.md#layer-cake).

```math
\int \frac{f'(x)}{f(x)} \ dx = \ln(f(x))
```

### Parts
When integrating a product of 2 expressions

```math
\int fg' \ dx = fg - \int f'g \ dx
```

### Arctan
```math
\int \frac{1}{x^2 + 1} = \tan^{-1}{x}
```

In the general case

```math
\int \frac{1}{x^2 + a^2} = \frac{1}{a} \tan^{-1}\left( \frac{x}{a} \right)
```

Any integral of the form

```math
\int \frac{1}{ax^2 + b} \ dx
```

can be reduced to this form by factoring out $\frac{1}{a}$.

```math
= \frac{1}{a} \int \frac{1}{x^2 + b/a} \ dx
```

### Artanh
Analogous to [arctan](#arctan), but negative.

```math
\int \frac{1}{1 - x^2} = \tanh^{-1}{x}
```

And in the general case

```math
\int \frac{1}{a^2 - x^2} = \frac{1}{a} \tanh^{-1}\left( \frac{x}{a} \right)
```


## Trigonometry

### Functions
Trigonometric functions aren’t unique to integration, but they damn well show up a lot. Fluency in the relationships between them will take you far.

It’s super useful to visualise trigonometric functions with a right triangle. If we let the hypotenuse be $1$, then the side opposite $\theta$ becomes $\sin{\theta}$, and the side adjacent becomes $\cos{\theta}$.
<!-- TODO -->

### Periodicity

### Values

### Identities
The primitive trigonometric identity is

```math
\sin^2{x} + \cos^2{x} = 1
```

Dividing through by $\cos(x)^2$ gives the evolved identity.

```math
\tan^2{x} + 1 = \sec^2{x}
```

Dividing through by $\sin(x)^2$ gives the other evolved identity.

```math
1 + \cot^2{x} = \csc^2{x}
```

The angle addition (compound angle) formulae for $\sin(x)$ is

```math
\begin{align*}
  \sin\left( x \textcolor{#4d9dcd}{+} y \right) &= \sin(x)\cos(y) \textcolor{#4d9dcd}{+} \cos(x)\sin(y)
  \\ \sin\left( x \textcolor{#f07d1c}{-} y \right) &= \sin(x)\cos(y) \textcolor{#f07d1c}{-} \cos(x)\sin(y)
\end{align*}
```

And for $\cos(x)$,

```math
\begin{align*}
  \cos\left( x \textcolor{#4d9dcd}{+} y \right) &= \cos(x)\cos(y) \textcolor{#f07d1c}{-} \sin(x)\sin(y)
  \\ \cos\left( x \textcolor{#f07d1c}{-} y \right) &= \cos(x)\cos(y) \textcolor{#4d9dcd}{+} \sin(x)\sin(y)
\end{align*}
```

For $x = y$ we have the double angle formulae.

```math
\begin{align*}
  \sin(2x) &= 2\sin{x}\cos{x}
  \\ \cos(2x) &= \cos^2{x} - \sin^2{x}
\end{align*}
```

Rearranging the latter identity gives alternate double angle formulae.

```math
\begin{align*}
  \cos(2x) &= 1 - 2\sin^2{x}
  \\ \cos(2x) &= 2\cos^2{x} - 1
\end{align*}
```

Rearranging these gives the power reduction formulae.

```math
\begin{align*}
  \sin^2{x} &= \frac{1}{2} \left( 1 \textcolor{#f07d1c}{-} \cos{2x} \right)
  \\ \cos^2{x} &= \frac{1}{2} \left( 1 \textcolor{#4d9dcd}{+} \cos{2x} \right)
\end{align*}
```


## Hyperbolic Trigonometry

You don’t need to even understand hyperbolic trig to use it in integration. Effectively, it’s just redressed trig with some sign changes.

### Functions
The hyp trig functions can be defined in terms of $e^x$.

```math
\begin{align*}
  \sinh{x} &= \frac{e^x - e^{-x}}{2}
  \\ \cosh{x} &= \frac{e^x + e^{-x}}{2}
\end{align*}
```

### Identities

> [!Tip]
> It’s worth noting that any question which can be solved with [hyp trig sub]() can also be solved with plain trig sub, using the identity $\tan^2{x} + 1 = \sec^2{x}$.

The primitive hyp trig identity is

```math
\cosh^2{x} - \sinh^2{x} = 1
```

Rearranging gives

```math
\begin{align*}
  \cosh^2{x} &= \sinh^2{x} + 1
  \\ \sinh^2{x} &= \cosh^2{x} - 1
\end{align*}
```

Dividing through by $\cosh(x)^2$ gives the evolved identity.

```math
1 - \tanh^2{x} = \operatorname{sech}^2{x}
```

Dividing through by $\sinh(x)^2$ gives the other evolved identity.

```math
\coth^2{x} - 1 = \operatorname{csch}^2{x}
```


## Series

### Sum of Geometric Series
For a geometric series with first term $a$ and common ratio $r$,

```math
a \quad ar \quad ar^2 \quad ar^3 \quad ar^4 \quad ...
```

If $\left| r \right| < 1$ then the infinite summation of the  series converges.

```math
S_{\infin} = \frac{a}{1-r}
```

This shows up *everywhere*.
