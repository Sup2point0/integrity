---
topic: integrals
title: scenic
desc: 
date: 2024 October
difficulty: based
tags:
  - poly
  - exp
methods:
  - sub
---


## Question
```math
\int x^{3}e^{\left(x^{2}-1\right)}\ dx
```


## Hints

### 1
How could you remove the $-1$ from the exponent?

### 2
How else can you write $x^3$?

### 3
What’s the derivative of $x^2$?


## Answer
```math
\frac{1}{2}e^{\left(x^{2}-1\right)}\left(x^{2}-1\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int x^{3}e^{\left(x^{2}-1\right)}\ dx
  \\ =&\ \frac{1}{e}\int x^{3}e^{x^{2}}\ dx
  \\ =&\ \frac{1}{2e}\int 2x\cdot x^{2}\cdot e^{x^{2}}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  x^2 &= t
  \\ 2x \ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \frac{1}{2e}\int te^{t}\ dt
  \\ &= \frac{1}{2e}e^{t}\left(t-1\right)
  \\ &= \frac{1}{2}e^{\left(t-1\right)}\left(t-1\right)
  \\ &= \frac{1}{2}e^{\left(x^{2}-1\right)}\left(x^{2}-1\right)-c
\end{align*}
```
