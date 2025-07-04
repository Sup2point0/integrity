---
topic: integrals
title: instincts
desc: 
date: 2025 April 18
difficulty: incline
tags:
  - trig
  - ln
methods:
  - parts
---


## Question
```math
\int x\sin\left(\ln x\right)\ dx
```


## Hints

### 1
Straight into substitution!


## Answer
```math
\frac{1}{5}x^{2}\left(2\sin\left(\ln x\right)-\cos\left(\ln x\right)\right)-c
```


## Solution

### Substitute
```math
\begin{align*}
  \ln x &= t
  \\ x &= e^{t}
  \\ dx &= e^{t}\ dt
\end{align*}
```

### Simplify
```math
\begin{align*}
  &\ \int x\sin\left(\ln x\right)\ dx
  \\ =&\ \int e^{t}\sin\left(t\right)\cdot e^{t}\ dt
  \\ =&\ \int e^{2t}\sin t\ dt
\end{align*}
```

### Parts Duplication
```math
\begin{align*}
  \int e^{2t}\sin t\ dt
    &= \frac{1}{2}e^{2t}\sin t-\int \frac{1}{2}e^{2t}\cos t\ dt
  \\ &= \frac{1}{2}e^{2t}\sin t-\frac{1}{2}\left(\frac{1}{2}e^{2t}\cos t-\int \frac{1}{2}e^{2t}\cdot-\sin t\ dt\right)
  \\ &= \frac{1}{2}e^{2t}\sin t-\frac{1}{4}e^{2t}\cos t-\frac{1}{4}\int e^{2t}\sin t\ dt
  \\ \frac{5}{4}\int e^{2t}\sin t\ dt
    &= \frac{1}{4}e^{2t}\left(2\sin t-\cos t\right)
  \\ \int e^{2t}\sin t\ dt
    &= \frac{1}{5}e^{2t}\left(2\sin t-\cos t\right)
  \\ &= \frac{1}{5}x^{2}\left(2\sin\left(\ln x\right)-\cos\left(\ln x\right)\right)-c
\end{align*}
```
