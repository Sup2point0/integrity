---
topic: integrals
title: part-trap
desc: 
date: 2024 November
tags:
  - trig
  - exp
methods:
  - speed
  - sub
  - fun
---


## Question
```math
\int e^{x}\sin\left(e^{x}\right)\cos\left(e^{x}\right)\ dx
```


## Hints

### 1
What’s the derivative of $e^x$?


## Answer
```math
-\frac{1}{4}\cos\left(2e^{x}\right)-c
```


## Solution

### Substitute
```math
\begin{align*}
  e^x &= t
  \\ e^x \ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ \int e^{x}\sin\left(e^{x}\right)\cos\left(e^{x}\right)\ dx
  \\ =&\ \int \sin t\cos t\ dt
  \\ =&\ \frac{1}{2}\int \sin2t\ dt
  \\ =&\ -\frac{1}{4}\cos2t
  \\ =&\ -\frac{1}{4}\cos\left(2e^{x}\right)-c
\end{align*}
```
