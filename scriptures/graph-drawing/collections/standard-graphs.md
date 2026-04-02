# Fundamental Graphs for Graph Drawing
<!-- #SQUARK live! vect! devx! dev!
| dest = scriptures/graph-drawing/collections/standard-graphs
| index = scriptures / graph-drawing / collections
| update = 2026 March 29
-->

Just like with [standard integrals](../../integrals/collections/standard-integrals.md), in graph drawing there are a number of basic graphs that you should absolutely know how to draw.


## Linear

### $y = p$
For any $x$, we produce a constant $y$-value, $p$. In other words, it’s a horizontal straight line.

```desmos
y = p
p = 2
```

### $x = q$
What points in the 2D plane have an $x$-coordinate of $q$? It’s all the points along the vertical line intersecting the $x$-axis at $q$.

It’s identical to $y = p$, only in a different orientation. Just 2 different ways of thinking about the same concept.

```desmos
x = q
q = 3
```

### $y = x$
For every $x$-value, we output an equivalent $y$-value. This looks like a straight line at $45 \degree$ above the positive $x$-axis.

```desmos
y = x
```


## Polynomials

### $x^2$
Famously known as a “happy parabola”, symmetrical in the $y$-axis.

```desmos
y = x^2
```

### $x^3$
```desmos
t = x^3
```

### $x^p$

### $x^{2p}$
All even positive powers of $x$ produce even graphs.

```desmos
f\left( x \right) = x^{2p}
f\left( -x \right)

/slider{ min: 1, step: 1 } :: p = 3
```

### $x^{2p-1}$
All odd positive powers of $x$ produce odd graphs.

```desmos
f\left( x \right) = x^{2p-1}
-f\left( -x \right)

/slider{ min: 1, step: 1 } :: p = 3
```

### $(x-p)(x-q)$
Only when $x = p$ or $x = q$ does the output $y$ becomes $0$. That means the graph intersects the $x$-axis twice, at $(p, 0)$ and $(q, p)$.

This is a (positive) quadratic with roots at $x = p, x = q$.

```desmos
y = \left( x-p \right) \left( x-q \right)
/asympt :: x = p
/dashed :: x = q

p = -2
q = 3
```

### $(x-p)(x-q)(x-r)(...)$
More generally, any factorised polynomial in this form has roots $p, q, r, ...$ since whenever $x$ is one of these values the whole polynomial collapses to $0$.

```desmos
y = \left( x-p \right) \left( x-q \right) \left( x-r \right)
/dashed :: x = p
/dashed :: x = q
/dashed :: x = r

p = -3
q = 1
/hidden :: r = 2
```


## Fractional Powers

### $\sqrt{x}$

```desmos
y = \sqrt{x}
```

### $x^{1/p}$

```desmos
y = x^{1/p}

/slider{ min: 1 } :: p = 3
```


## Exponentials & Logarithms

### $e^x$

```desmos
y = e^x
```

### $b^x$

```desmos
y = b^x

/slider{ min: 1 } :: b = 2
```

### $\ln(x)$

```desmos
y = \ln\left( x \right)
```

### $\log_b(x)$

```desmos
y = \log_{b}\left( x \right)

/slider{ min: 2 } :: b = 3
```


## Reciprocals

### $1/x$

```desmos
y = \frac{1}{x}
```

### $1/x^2$

```desmos
y = \frac{1}{x^2}
```

### $1/x^p$

```desmos
y = \frac{1}{x^p}

/slider{ min: 1 } :: p = 3
```


## Miscellaneous

### $|x|$

```desmos
y = \left| x \right|
```

### $\max(x, 0)$
Also known as the [rectified linear unit<sup>↗</sup>](https://en.wikipedia.org/wiki/Rectified_linear_unit), this looks like a ramp, $0$ for all negative values.

```desmos
y = \operatorname{max}\left( x,\ 0 \right)
```
