---
topic: integrals
title: sub support
desc: 
date: 2025 April 15
tags:
  - funny
  - trig
methods:
  - speed
  - parts
---


## Question
```math
\int
  x^{881} \sin\left( x^{441} \right)
\ dx
```


## Hints

### 1
What does $x^{441}$ differentiate to?

### 2
How could you split $x^{881}$?


## Answer
```math
\frac{1}{411}\left(\sin\left(x^{441}\right)-x^{441}\cos\left(x^{441}\right)\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int x^{881}\sin\left(x^{441}\right)\ dx
  \\ =&\ \int x^{440}\cdot x^{441}\sin\left(x^{441}\right)\ dx
  \\ =&\ \frac{1}{441}\int 441x^{440}\cdot x^{441}\sin\left(x^{441}\right)\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  x^{441} &= t
  \\ 441x^{440}\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \frac{1}{441}\int t\sin t\ dt
  \\ &= \frac{1}{441}\left(-t\cos t+\int \cos t\ dt\right)
  \\ &= \frac{1}{441}\left(\sin t-t\cos t\right)
  \\ &= \frac{1}{411}\left(\sin\left(x^{441}\right)-x^{441}\cos\left(x^{441}\right)\right)-c
\end{align*}
```
