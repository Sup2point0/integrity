---
topic: integrals
title: drizzle
desc: 
date: 2025 January 23
difficulty: manifold
tags:
  - horror
  - trig
  - hyp trig
methods:
  - spot
  - troll
---


## Question
```math
\int
  \sin\left( \frac
    { \text{sech}\, x }
    { \cosh{x} + \sinh{x} }
  \right)^2 +
  \cos\left(
    1 - \tanh{x}
  \right)^2
\ dx
```


## Hints

### 1

### 2

### 3


## Answer
```math
x-c
```


## Solution

### Solve
```math
\begin{align*}
  &\ \int \sin\left(\frac{\operatorname{sech}x}{\cosh x+\sinh x}\right)^{2}+\cos\left(1-\tanh x\right)^{2}\ dx
  \\ =&\ \int \sin\left(\frac{\operatorname{sech}x}{\cosh x+\sinh x}\cdot\frac{\cosh x-\sinh x}{\cosh x-\sinh x}\right)^{2}+\cos\left(1-\tanh x\right)^{2}\ dx
  \\ =&\ \int \sin\left(\frac{\operatorname{sech}x\left(\cosh x-\sinh x\right)}{\cosh^{2}x-\sinh^{2}x}\right)^{2}+\cos\left(1-\tanh x\right)^{2}\ dx
  \\ =&\ \int \sin\left(\frac{1-\tanh x}{1}\right)^{2}+\cos\left(1-\tanh x\right)^{2}\ dx
  \\ =&\ \int \sin\left(1-\tanh x\right)^{2}+\cos\left(1-\tanh x\right)^{2}\ dx
\end{align*}
```

$\sin^2{t} + \cos^2{t} = 1$ for any input $t$, hence

```math
\begin{align*}
  &= \int 1\ dx
  \\ &= x-c
\end{align*}
```
