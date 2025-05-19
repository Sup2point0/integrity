---
topic: integrals
title: sanguine applause
desc: 
date: 2025 April 19
tags:
  - poly
methods:
  - sub
---


## Question
```math
\int
  \frac{1}
    { x^{1/2} - x^{1/3} }
\ dx
```


## Hints

### 1
Can you write the terms with a common power?

### 2
How would you calculate $\frac{1}{2} + \frac{1}{3}$?

### 3
If you have a common power, then you can substitute $x^{1/b} = t$.


## Answer
```math
2x^{1/2}+3x^{1/3}+6x^{1/6}+6\ln\left(x^{1/6}-1\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{1}{x^{1/2}-x^{1/3}}\ dx
  \\ =&\ \int \frac{1}{x^{3/6}-x^{2/6}}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  x^{1/6} &= t
  \\ x &= t^{6}
  \\ dx &= 6t^{5}\ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int \frac{1}{t^{3}-t^{2}}\cdot6t^{5}\ dt
  \\ &= 6\int \frac{t^{3}}{t-1}\ dt
  \\ &= 6\int \frac{t^{3}-1}{t-1}+\frac{1}{t-1}\ dt
  \\ &= 6\int \frac{\left(t-1\right)\left(t^{2}+t+1\right)}{t-1}+6\int \frac{1}{t-1}\ dt
  \\ &= 6\int \left(t^{2}+t+1\right)\ dt+6\ln\left(t-1\right)
  \\ &= 2t^{3}+3t^{2}+6t+6\ln\left(t-1\right)
  \\ &= 2x^{1/2}+3x^{1/3}+6x^{1/6}+6\ln\left(x^{1/6}-1\right)-c
\end{align*}
```
