---
topic: integrals
title: chummy
desc: 
date: 2024 December 10
tags:
  - poly
  - sqrt
methods:
  - work
---


## Question

```math
\int x\sqrt{x-8x^{-2}-6+12x^{-1}}\ dx
```


## Hints

### 1
Fractions are horrible, so let’s multiply through to make it a polynomial.

### 2
Try reordering the terms.

### 3
We appear to have a sequence of descending powers of x...


## Answer

```math
\frac{2}{5}\left(x-2\right)^{\frac{5}{2}}-c
```


## Solution

```math
\begin{align*}
  &= \int x\sqrt{x-8x^{-2}-6+12x^{-1}}\ dx
  \\ &= \int x\sqrt{x-\frac{8}{x^{2}}-6+\frac{12}{x}}\ dx
  \\ &= \int \sqrt{x^{3}-8-6x^{2}+12x}\ dx
  \\ &= \int \sqrt{x^{3}-6x^{2}+12x-8}\ dx
  \\ &= \int \sqrt{\left(x-2\right)^{3}}\ dx
  \\ &= \int \left(x-2\right)^{\frac{3}{2}}\ dx
  \\ &= \frac{2}{5}\left(x-2\right)^{\frac{5}{2}}-c
\end{align*}
```
