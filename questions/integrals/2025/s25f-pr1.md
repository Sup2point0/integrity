---
topic: integrals
title: malignance
desc: 
date: 2025 May 29
difficulty: chaos
tags:
  - horror
  - poly
  - ln
methods:
  - tough
  - spot
---


## Question
```math
\int_{0}^{1}\frac{\ln\left(x^{3}-49x^{2}+94x\right)}{\ln\left(x^{6}-98x^{5}+2401x^{4}+8836x^{2}-9212x^{3}+188x^{4}\right)}\ dx
```


## Hints

### 1
Both polynomials have no constant term.

### 2
Starts with “f” and rhymes with *tractorise*.

### 3
If in doubt, the factor theorem is useful.

### 4
$2$ is a root of the upper polynomial.

### 5
What could be a root of the lower polynomial?

### 6
$2$ is also a root of the lower polynomial.

### 7
The top polynomial has a factor of $x$. The lower polynomial has a factor of $x^2$. What might be lurking?


## Answer
$1/2$


## Solution

### Factorise
```math
\begin{align*}
  &\ \int_{0}^{1}\frac{\ln\left(x^{3}-49x^{2}+94x\right)}{\ln\left(x^{6}-98x^{5}+2401x^{4}+8836x^{2}-9212x^{3}+188x^{4}\right)}\ dx
  \\ =&\ \int_{0}^{1}\frac{\ln\left(x\left(x^{2}-49x+94\right)\right)}{\ln\left(x^{2}\left(x^{4}-98x^{3}+2401x^{2}+8836-9212x+188x^{2}\right)\right)}\ dx
\end{align*}
```

### Factor Theorem
Consider the unfactorised quadratic in the upper logarithm:

```math
x^{2}-49x+94
```

$x = \pm 1$ doesn’t make this $0$, so try $2$:

```math
\begin{align*}
  &\ x^{2}-49x+94 \,\vert_{x=2}
  \\ =&\ \left(2\right)^{2}-49\left(2\right)+94
  \\ =&\ 4-98+94
  \\ =&\ 0
\end{align*}
```

Hence

```math
x^{2}-49x+94=\left(x-2\right)\left(x-47\right)
```

(Looking at the prime factorisation of $94$ could also have made this easy to spot.)

Now look at the unfactorised quadratic in the lower logarithm:

```math
\begin{align*}
  &\ x^{4}-98x^{3}+2401x^{2}+8836-9212x+188x^{2}
  \\ =&\ x^{4}-98x^{3}+2589x^{2}-9212x+8836
\end{align*}
```

Try $x = 2$ for this as well:

```math
\begin{align*}
  &\ x^{4}-98x^{3}+2589x^{2}-9212x+8836 \,\vert_{x=2}
  \\ =&\ \left(2\right)^{4}-98\left(2\right)^{3}+2589\left(2\right)^{2}-9212\left(2\right)+8836
  \\ =&\ 16-784+10356-18424+8836
  \\ =&\ 0
\end{align*}
```

Hence

```math
x^{4}-98x^{3}+2589x^{2}-9212x+8836
  = \left(x-2\right)\left(x^{3}-96x^{2}+2397x-4418\right)
```

Then try $x = 2$ again...

```math
\begin{align*}
  &\ x^{3}-96x^{2}+2397x-4418 \,\vert_{x=2}
  \\ =&\ \left(2\right)^{3}-96\left(2\right)^{2}+2397\left(2\right)-4418
  \\ =&\ 8-384+4794-4418
  \\ =&\ 0
\end{align*}
```

Hence

```math
\left(x-2\right)\left(x^{3}-96x^{2}+2397x-4418\right)
  = \left(x-2\right)^{2}P\left(x\right)
```


### Complete the Square
At this point we may suspect the polynomial in the lower logarithm is a power of that in the top. So once more, we’ll try $2$, this time as the exponent.

```math
\begin{align*}
  &\ \left(x^{3}-49x^{2}+94x\right)^{2}
  \\ =&\ \left(x^{3}\right)^{2}+\left(-49x^{2}\right)^{2}+\left(94x\right)^{2}+2\left(x^{3}\right)\left(-49x^{2}\right)+2\left(-49x^{2}\right)\left(94x\right)+2\left(x^{3}\right)\left(94x\right)
  \\ =&\ x^{6}+2401x^{4}+8836x^{2}-98x^{5}-9212x^{3}+188x^{4}
  \\ =&\ x^{2}\left(x^{4}+2401x^{2}+8836-98x^{3}-9212x+188x^{2}\right)
  \\ =&\ x^{2}\left(x^{4}-98x^{3}+2401x^{2}+8836-9212x+188x^{2}\right)
\end{align*}
```

Found it.

### Solve
```math
\begin{align*}
  &\ \int_{0}^{1}\frac{\ln\left(x\left(x^{2}-49x+94\right)\right)}{\ln\left(x^{2}\left(x^{4}-98x^{3}+2401x^{2}+8836-9212x+188x^{2}\right)\right)}\ dx
  \\ =&\ \int_{0}^{1}\frac{\ln\left(x\left(x^{2}-49x+94\right)\right)}{\ln\left(x^{2}\left(x^{2}-49x+94\right)^{2}\right)}\ dx
  \\ =&\ \int_{0}^{1}\frac{\ln\left(x\left(x^{2}-49x+94\right)\right)}{2\ln\left|x\left(x^{2}-49x+94\right)\right|}\ dx
\end{align*}
```

We want to cancel the logarithms, but we need to perform a domain check first – if the top polynomial is non-positive then our log won’t be defined (unless we use a complex-valued logarithm, but that’ll get messy).

We’ve got a positive cubic $x(x-2)(x-47)$, so between the first 2 roots, i.e. $0 < x < 2$, it’s above the $x$-axis. $(0, 1]$ is in that interval $(0, 2)$, so we’re mostly safe, except for the endpoint of $0$ where the logarithm shoots down to $-\infin$.

This means to be rigorous, we’ll need to take a limit:

```math
\begin{align*}
  &= \int_{0}^{1}\frac{\ln\left(x\left(x^{2}-49x+94\right)\right)}{2\ln\left(x\left(x^{2}-49x+94\right)\right)}\ dx
  \\ &= \lim_{k \to 0} \int_{k}^{1}\frac{\ln\left(x\left(x^{2}-49x+94\right)\right)}{2\ln\left(x\left(x^{2}-49x+94\right)\right)}\ dx
  \\ &= \int_{0}^{1}\frac{1}{2}\ dx
  \\ &= \left[\frac{1}{2}x\right]_{0}^{1}
  \\ &= \frac{1}{2}
\end{align*}
```
