---
topic: integrals
title: cooked, calmly
desc: 
date: 2025 January 13
difficulty: manifold
tags:
  - definite
  - scare
  - exp
methods:
  - spot
---


## Question
```math
\int_{0}^{1}
  \left(
    e^x \cdot e^{-1/2} + e^{-x} \cdot e^{1/2}
  \right)^5
\ dx
```


## Hints

### 1
Ignore the $()^5$ for now.

### 2
Can you combine the exponents?

### 3
What translation has taken place?


## Answer
$0$


## Solution

```math
\begin{align*}
  &\ \int_{0}^{1}\left(e^{x}\cdot e^{-1/2}-e^{-x}\cdot e^{1/2}\right)^{5}\ dx
  \\ =&\ \int_{0}^{1}\left(e^{\left(x-1/2\right)}-e^{\left(-x+1/2\right)}\right)^{5}\ dx
  \\ =&\ \int_{0}^{1}\left(e^{\left(x-1/2\right)}-e^{-\left(x-1/2\right)}\right)^{5}\ dx
\end{align*}
```

We could try solve this integral by expanding, but that would be horrific. Instead let’s think about what its graph would look like.

Firstly, notice this is a translation of the graph $\left(e^x - e^{-x}\right)^5$ by $1/2$ in the positive $x$-direction. So let’s make a substitution:

```math
x-\frac{1}{2}=t
```

Which gives:
```math
= \int_{-1/2}^{1/2}\left(e^{t}-e^{-t}\right)^{5}\ dt
```

Now we notice that the integral is odd. We can show this in many ways.

Generally, the difference between a function $f(x)$ and its reflection $f(-x)$ produces an odd graph. (Here $f(x) = e^x$)

For those who have done hyperbolic trigonometry, you may also recognise this expression as $2 \cdot \left(\frac{e^x - e^{-x}}{2}\right) = 2\sinh{x}$, which is odd.

The exponent is odd, so this parity does not change. All that’s left is to recognise is that the limits are equal but opposite, so the positive and negative areas cancel out, giving $0$.
