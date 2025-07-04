---
topic: integrals
title: sub base
desc: 
date: 2025 January 4
difficulty: based
tags:
  - poly
methods:
  - sub
---


## Question
```math
\int \frac{1}{x\left(1+x^{2/3}\right)}\ dx
```


## Hints

### 1
How else can you write $1/x$?

### 2
What if you split it as $x^{1/3} \cdot x^{2/3}$?


## Answer
```math
\frac{3}{2}\ln\left(\frac{x^{2/3}}{1+x^{2/3}}\right)-c
```


## Solution

### Substitute
```math
\begin{align*}
  x^{2/3} &= t
  \\ \frac{2}{3}x^{-1/3}\ dx &= dt
  \\ dx &= \frac{3}{2}x^{1/3}\ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ \int \frac{1}{x\left(1+x^{2/3}\right)}\ dx
  \\ =&\ \int \frac{1}{x\left(1+t\right)}\cdot\frac{3}{2}x^{1/3}\ dt
  \\ =&\ \frac{3}{2}\int \frac{1}{x^{2/3}\left(1+t\right)}\ dt
  \\ =&\ \frac{3}{2}\int \frac{1}{t\left(1+t\right)}\ dt
  \\ =&\ \frac{3}{2}\int \frac{1}{t}-\frac{1}{1+t}\ dt
  \\ =&\ \frac{3}{2}\left(\ln t-\ln\left(1+t\right)\right)
  \\ =&\ \frac{3}{2}\left(\ln\left(x^{2/3}\right)-\ln\left(1+x^{2/3}\right)\right)-c
  \\ =&\ \frac{3}{2}\ln\left(\frac{x^{2/3}}{1+x^{2/3}}\right)-c
\end{align*}
```
