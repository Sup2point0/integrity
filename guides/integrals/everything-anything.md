# Everything & Anything
<!-- #SQUARK live! feat! dev!
| dest = guides/integrals/everything-anything
| capt = The Prime Integrator’s Standard Arsenal
| index = guides / integrals
| date = 2025 January 28
-->

Integration can’t be learnt in a day. Nor can you, or should you, memorise in a day all of the useful formulae, identities and other quotable results that will come in crucial throughout your adventures in integration.

You can use this page as a quick reference, refresher, roadmap, or (if you really want) crash course in the core components of integration. I wouldn’t really recommend trying to ‘learn’ something you’ve never encountered just from this page – each topic goes far too deep to adequately cover in this confined space, and you’ll almost certainly be better off, say, watching a YouTube video by 3b1b on it ;)

What will be far more long-lasting, worthwhile and rewarding than simply memorising these formulae is developing your mathematical fluency and intuition. The best way to remember them is not to recite them, or make flash cards, but to *use* them. Try deriving identities yourself. Only through practice, experimentation and self-discovery will you learn unforgettably.[^learn]

[^learn]: See [What Do I Do?](what.md) for more.

Enjoy 🥕


## Algebra

### Completing the Square
Given a quadratic with no coefficient of $x^2$

```math
x^2 + bx + c
```

We can “complete the square” to reduce the power of $x$ like so

```math
= \left(x - \frac{b}{2} \right)^2 - \left(\frac{b}{2}\right)^2 + c
```

### Power Laws
A negative exponent is equivalent to taking a reciprocal:

```math
x^{-1} = \frac{1}{x}
  \qquad x^{-n} = \frac{1}{x^n}
  \qquad e^{-x} = \frac{1}{e^x}
```

When multiplying terms with the same base, you can add the exponents:

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

An exponent inside a logarithm can be extracted as a coefficient:

```math
\log(x^n) = n \log{x}
```

Note that the exponent must be applied to the **whole** term. For instance

```math
\log(x^2 + 1) \neq 2 \log(x + 1)
```

Also, unless you intend to use a [complex-valued logarithm](...), it’s best to wrap the leftover term with an absolute value:

```math
\log(x^n) = n \log{|x|}
```

Multiplication *inside* the log corresponds to addition outside:

```math
\log{xy} = \log{x} + \log{y}
```

> [!Note]
> Unless you are using a [complex-valued logarithm], this only holds true for positive $x$ and $y$.

Analogous to exponents, division inside the logarithm correponds to subtraction outside:

```math
\begin{align*}
  \log\left(\frac{x}{y}\right) &= \log(x \cdot y^{-1})
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
...


## Derivatives & Antiderivatives

Integration and differentiation are inverses of each other. Learning something’s derivative is the same as learning it’s antiderivative; it might just take time to get used to going from one to the other.

Also, this stuff is really not quite linear (no pun intended). You sort of pick them up bit by bit as you go, there’s no ‘order’ to learning them. Many even toe into multiple different rules or methods, so categorising them is a somewhat overly restrictive endeavour.

### Core
```math
\begin{align*}
  x^n &= nx^{x-1}
\end{align*}
```

### Exponentials & Logarithms
$e^x$ is famously its own derivative and antiderivative.

```math
\begin{align*}
  e^x &= e^x
  \\ e^kx &= ke^kx
\end{align*}
```

```math
\ln{x} = \frac{1}{x}
```

### Trigonometry
The primitive trigonometric functions $\sin$ and $\cos$ form a cycle when differentiated:

```math
\begin{align*}
  \sin{x} &= \cos{x}
  \\ \cos{x} &= -\sin{x}
\end{align*}
```

### Hyperbolic Trigonometry


## Integration

### Power rule
...

### Inverse chain rule
...

### Substitution
...

### Layer cake
...

### Parts
...

### Arctan
...


## Trigonometry

### Functions
Trigonometric functions aren’t unique to integration, but they damn well show up a lot. Fluency in the relationships between them will take you far.

It’s super useful to visualise trigonometric functions with a right triangle. If we let the hypotenuse be $1$, then the side opposite $\theta$ becomes $\sin{\theta}$, and the side adjacent becomes $\cos{\theta}$.
<!-- TODO -->

### Periodicity

### Values

### Identities
The core trigonometric identity is

```math
\sin^2{x} + \cos^2{x} = 1
```

Dividing through by $\cos^2{x}$ gives

```math
\tan^2{x} + 1 = \sec^2{x}
```


## Hyperbolic Trigonometry

### Functions

### Identities


## Series

### Sum of Geometric Series
