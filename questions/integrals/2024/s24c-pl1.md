---
topic: integrals
title: actually
desc: 
date: 2024 October
difficulty: based
tags:
  - sqrt
methods:
  - trig sub
---


## Question
```math
\int \frac{1}{\left(1-x^{2}\right)^{3/2}}\ dx
```


## Hints

### 1
What if the $3/2$ were just a $1/2$?


## Answer
```math
\frac{x}{\sqrt{1-x^{2}}}-c
```


## Solution

### Trigonometric Substitution
```math
\begin{align*}
  x &= \sin{t}
  \\ dx &= \cos{t} \ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ \int \frac{1}{\left(1-x^{2}\right)^{3/2}}\ dx2
  \\ =&\ \int \frac{1}{\left(1-\sin^{2}t\right)^{3/2}}\cdot\cos t\ dt
  \\ =&\ \int \frac{\cos t}{\cos^{3}t}\ dt
  \\ =&\ \int \sec^{2}t\ dt
  \\ =&\ \tan t
  \\ =&\ \frac{\sin t}{\cos t}
  \\ =&\ \frac{x}{\sqrt{1-x^{2}}}-c
\end{align*}
```
