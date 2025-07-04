---
topic: integrals
title: crossover
desc: 
date: 2025 April 3
difficulty: based
tags:
  - sqrt
  - ln
methods:
  - parts
---


## Question
```math
\int \sqrt{x}\ln x\ dx
```


## Hints

### 1
Start with a substitution.

### 2
Before you head into parts.


## Answer
```math
\frac{4}{18}x^{3/2}\left(3\ln x-2\right)-c
```


## Solution

### Substitute
```math
\begin{align*}
  \sqrt{x} &= t
  \\ x &= t^{2}
  \\ dx &= 2t\ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ \int \sqrt{x}\ln x\ dx
  \\ =&\ \int t\ln\left(t^{2}\right)\cdot2t\ dt
  \\ =&\ 2\int t^{2}\ln\left(t^{2}\right)\ dt
  \\ =&\ 4\int t^{2}\ln t\ dt
\end{align*}
```

### Parts
```math
\begin{align*}
  &= 4\left(\frac{1}{3}t^{3}\ln t-\int \frac{1}{3}t^{3}\cdot\frac{1}{t}\ dt\right)
  \\ &= \frac{4}{3}t^{3}\ln t-\frac{4}{3}\int t^{2}\ dt
  \\ &= \frac{4}{3}t^{3}\ln t-\frac{4}{9}t^{3}
  \\ &= \frac{4}{9}t^{3}\left(3\ln t-1\right)
  \\ &= \frac{4}{9}x^{3/2}\left(3\ln\sqrt{x}-1\right)
  \\ &= \frac{4}{9}x^{3/2}\left(\frac{3}{2}\ln x-1\right)
  \\ &= \frac{4}{18}x^{3/2}\left(3\ln x-2\right)-c
\end{align*}
```
