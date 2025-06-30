---
topic: integrals
title: likeable
desc: 
date: 2024 December 10
difficulty: based
tags:
  - poly
  - trig
methods:
  - speed
  - sub
---


## Question
```math
\int \left(x-1\right)\cos\left(x^{2}-2x+2\right)\ dx
```


## Answer
```math
\frac{1}{2}\sin\left(x^{2}-2x+2\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \left(x-1\right)\cos\left(x^{2}-2x+2\right)\ dx
  \\ =&\ \int \left(x-1\right)\cos\left(\left(x-1\right)^{2}+1\right)\ dx
  \\ =&\ \frac{1}{2}\int 2\left(x-1\right)\cos\left(\left(x-1\right)^{2}+1\right)\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \left(x-1\right)^{2} &= t
  \\ 2\left(x-1\right)\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \frac{1}{2}\int \cos\left(t+1\right)\ dt
  \\ &= \frac{1}{2}\sin\left(t+1\right)
  \\ &= \frac{1}{2}\sin\left(\left(x-1\right)^{2}+1\right)
  \\ &= \frac{1}{2}\sin\left(x^{2}-2x+2\right)-c
\end{align*}
```
