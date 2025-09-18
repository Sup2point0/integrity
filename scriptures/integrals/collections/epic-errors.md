# Epic Errors
<!-- #SQUARK live! devx!
| dest = scriptures/integrals/collections/epic-errors
| capt = Surprisingly unrare pitfalls in integration
| index = scriptures / integrals / collections
| date = 2025 January 21
| update = 2025 September 18
-->

Top $n$ most common errors, slips and faults in integration, where $n \in \mathbb{Z}$ and $\log(n) > 0$. Based off my personal experience, my experience with other students around me, and internal hypothesisation.[^hypo]

[^hypo]: Seriously, what’s the noun form of “hypothesise”??


### Forgetting +c
Nuff said.

### Integration is not distributive over multiplication

```math
\int f(x) \, g(x) \ dx \,\neq\, \int f(x) \ dx \cdot \int g(x) \ dx
```

### Forgetting to distribute the integral coefficient

```math
\begin{align*}
  k \int f(x) + g(x) \ dx &\neq k F(x) + G(x) + c
  \\ k \int f(x) + g(x) \ dx &= k F(x) + \textcolor{#f07d1c}{k} G(x) + c
\end{align*}
```

Looks unlikely with $f(x)$ and $g(x)$, but when your functions are fractions and exponents and trigonometric functions, plus you’re worrying about [S-I+G-N errors](../../general/sign.md), it’s way too easy to neglect properly multiplying out the leading coefficient.

### Memorise your standard derivatives and antiderivatives

### Losing track of parts

### Derivative coefficients missing in action
Inverse chain rule

### Dubious exponential algebra

### Phantom division
Not fully dividing through

### Divisive fraction splitting
SIGN

### Forgetting to substitute the limits

### Try sketching graphs
It’s a life skill.

### S-I+G-N errors
Need I say any more?

### Caring about the answer more than the method

### Jumping straight to the answer when reading a solution

### Trying to integrate $f(x) / x$
It’s unfortunately not possible with elementary functions.

```math
\int \frac{e^x}{x} \ dx \quad \int \frac{\ln{x}}{x} \ dx \quad \int \frac{\operatorname{trig}(x)}{x} \ dx
```

### Not using Desmos

### Not using Wolfram Alpha

### Not finding integration fun

### Not practising enough
I’m not joking tho.

The best way to become cracked at integration is to just do loads of them.

Where can you find questions? I mean, we’ve got [300 here on Integrity](https://sup2point0.github.io/integrity/questions/integrals) ;)
