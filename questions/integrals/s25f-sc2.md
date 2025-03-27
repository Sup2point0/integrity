---
topic: integrals
title: end it
desc: 
date: 2025 February 26
tags:
  - scare
  - poly
methods:
  - speed
---


## Question
```math
\int
  (x^6 + \pi)
  (x^{12} + \pi^2)
  (x^{24} + \pi^4)
  (x^{29} - \pi x^{23})
\ dx
```


## Hints

### 1
DOTS!


## Answer
```math
\frac{1}{72}x^{24}\left(x^{48}-3\pi^{8}\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \left(x^{6}+\pi\right)\left(x^{12}+\pi^{2}\right)\left(x^{24}+\pi^{4}\right)\left(x^{29}-\pi x^{23}\right)\ dx
  \\ =&\ \int \left(x^{6}+\pi\right)\left(x^{12}+\pi^{2}\right)\left(x^{24}+\pi^{4}\right)\left(x^{6}-\pi\right)x^{23}\ dx
  \\ =&\ \int x^{23}\left(x^{12}-\pi^{2}\right)\left(x^{12}+\pi^{2}\right)\left(x^{24}+\pi^{4}\right)\ dx
  \\ =&\ \int x^{23}\left(x^{24}-\pi^{4}\right)\left(x^{24}+\pi^{4}\right)\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  x^{24} &= t
  \\ 24x^{23} \ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \frac{1}{24}\int \left(t-\pi^{4}\right)\left(t+\pi^{4}\right)\ dt
  \\ &= \frac{1}{24}\int t^{2}-\pi^{8}\ dt
  \\ &= \frac{1}{72}t^{3}-\frac{\pi^{8}}{24}t
  \\ &= \frac{1}{72}t\left(t^{2}-3\pi^{8}\right)
  \\ &= \frac{1}{72}x^{24}\left(x^{48}-3\pi^{8}\right)-c
\end{align*}
```
