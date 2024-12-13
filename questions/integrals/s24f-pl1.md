---
topic: integrals
title: 
desc: 
date: 2024 December
tags:
  - poly
method:
  - work
---


## Question
```math
\int \frac{6x^{2}-14x+12-x^{3}}{x-2}\ dx
```


## Hint

### 1
$-x^3$ is a bit nasty.

### 2
With these integrals, you can often write part of the numerator in terms of the denominator.

### 3
Since the denominator is simple, you could also try polynomial long division.


## Answer
```math
-\frac{1}{3}\left(x-2\right)^{3}-2x-c
```


## Solution

### Solve
```math
\begin{align*}
  &= \int \frac{-x^{3}+6x^{2}-14x+12}{x-2}\ dx
  \\ &= -\int \frac{x^{3}-6x^{2}+14x-12}{x-2}\ dx
  \\ &= -\int \frac{\left(x-2\right)^{3}+2x-4}{x-2}\ dx
  \\ &= -\int \frac{\left(x-2\right)^{3}}{x-2}+\frac{2x-4}{x-2}\ dx
  \\ &= -\int \left(x-2\right)^{2}\ dx-2\int dx
  \\ &= -\frac{1}{3}\left(x-2\right)^{3}-2x-c
\end{align*}
```
