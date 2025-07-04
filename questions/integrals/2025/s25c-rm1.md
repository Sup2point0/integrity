---
topic: integrals
title: partial pain
desc: certified toughie!
date: 2025 March 17
difficulty: chaos
tags:
  - poly
  - pi
methods:
  - tough
  - spot
flags:
  - feat
---


## Question
```math
\int
  \frac
    { \pi x^2 - x }
    { (2\pi x - 1)^3 }
\ dx
```


## Hints

### 1
The derivative isn’t on the top here, but the bottom!

### 2
Would it be easier if you had the derivative on the top?

### 3
How could you turn the antiderivative into the derivative?

### 4
Substitution works here, but there’s a faster method.

### 5
What does $\displaystyle \frac{1}{(2\pi x - 1)^2}$ integrate to?


## Answer
```math
-\frac{\pi x^{2}-x}{4\pi\left(2\pi x-1\right)^{2}}+\frac{1}{8\pi^{2}}\ln\left(2\pi x-1\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{\pi x^{2}-x}{\left(2\pi x-1\right)^{3}}\ dx
  \\ =&\ \int \left(\pi x^{2}-x\right)\cdot\frac{1}{\left(2\pi x-1\right)^{3}}\ dx
\end{align*}
```

### Parts
```math
\begin{align*}
  f &= \pi x^{2}-x \quad & \quad g' &= \frac{1}{\left(2\pi x-1\right)^{3}}
  \\ f' &= 2\pi x-1 \quad & \quad g&=\int \frac{1}{\left(2\pi x-1\right)^{3}}\ dx
  \\ &&&=\frac{1}{2\pi}\int \frac{2\pi}{\left(2\pi x-1\right)^{3}}\ dx
  \\ &&&=-\frac{1}{4\pi\left(2\pi x-1\right)^{2}}
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ fg-\int f'g\ dx
  \\ =&\ \left(\pi x^{2}-x\right)\left(-\frac{1}{4\pi\left(2\pi x-1\right)^{2}}\right)-\int \left(2\pi x-1\right)\left(-\frac{1}{4\pi\left(2\pi x-1\right)^{2}}\right)\ dx
  \\ =&\ -\frac{\pi x^{2}-x}{4\pi\left(2\pi x-1\right)^{2}}+\int \frac{2\pi x-1}{4\pi\left(2\pi x-1\right)^{2}}\ dx
  \\ =&\ -\frac{\pi x^{2}-x}{4\pi\left(2\pi x-1\right)^{2}}+\frac{1}{4\pi}\int \frac{1}{2\pi x-1}\ dx
  \\ =&\ -\frac{\pi x^{2}-x}{4\pi\left(2\pi x-1\right)^{2}}+\frac{1}{8\pi^{2}}\int \frac{2\pi}{2\pi x-1}\ dx
  \\ =&\ -\frac{\pi x^{2}-x}{4\pi\left(2\pi x-1\right)^{2}}+\frac{1}{8\pi^{2}}\ln\left(2\pi x-1\right)-c
\end{align*}
```
