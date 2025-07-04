---
topic: integrals
title: evaporation
desc: 
date: 2025 February 13
difficulty: manifold
tags:
  - poly
methods:
  - spot
---


## Question
```math
\int
  \left(
    1 + \frac{1}{x}
  \right)
  \left(
    x + \frac{1}{x}
  \right)
  \left(
    \frac{x^2 + 1}{x}
  \right)
  \left(
    1 - \frac{1}{x}
  \right)
\ dx
```


## Hints

### 1
Which terms can you combine?

### 2
Can you obtain 2 terms with a particular relationship?

### 3
Said relationship facilitates a substitution...


## Answer
```math
\frac{1}{3}\left(x+\frac{1}{x}\right)^{3}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \left(1+\frac{1}{x}\right)\left(x+\frac{1}{x}\right)\left(\frac{x^{2}+1}{x}\right)\left(1-\frac{1}{x}\right)\ dx
  \\ =&\ \int \left(1+\frac{1}{x}\right)\left(1-\frac{1}{x}\right)\cdot\left(x+\frac{1}{x}\right)\left(\frac{x^{2}+1}{x}\right)\ dx
  \\ =&\ \int \left(1-\frac{1}{x^{2}}\right)\cdot\left(x+\frac{1}{x}\right)\left(\frac{x^{2}+1}{x}\right)\ dx
  \\ =&\ \int \left(1-\frac{1}{x^{2}}\right)\cdot\left(x+\frac{1}{x}\right)\left(x+\frac{1}{x}\right)\ dx
  \\ =&\ \int \left(1-\frac{1}{x^{2}}\right)\left(x+\frac{1}{x}\right)^{2}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  x + \frac{1}{x} &= t
  \\ \left(1 - \frac{1}{x^2}\right) \ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int t^{2}\ dt
  \\ &= \frac{1}{3}t^{3}
  \\ &= \frac{1}{3}\left(x+\frac{1}{x}\right)^{3}-c
\end{align*}
```
