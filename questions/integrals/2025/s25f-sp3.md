---
topic: integrals
title: internalise
desc:  
date:  2025 September 16
difficulty: incline
tags:
  - dread
  - trig
methods:
  - spot
  - sub
---


## Question
```math
\int
  x \left(
    x + 2\sin{x}
  \right) - \left(
    \cos{x}
  \right) \left[
    \cos{x} - (x+\sin{x})^2
  \right]
\ dx
```


## Hints

### 1
You’ll first need to expand out.

### 2
Then try re-factorising into a nicer form.

### 3
Use the fact $\cos^2{x} = 1 - \sin^2{x}$.

### 4
Can you hypothesise what substitution you might be looking for?

### 5
You’ll want to substitute $t = x + \sin{x}$.


## Answer
```math
\frac{1}{3}\left(x+\sin x\right)^{3}-x-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int x\left(x+2\sin x\right)-\left(\cos x\right)\left[\cos x-\left(x+\sin x\right)^{2}\right]\ dx
  \\ =&\ \int x^{2}+2x\sin x-\left[\cos^{2}x-\left(\cos x\right)\left(x+\sin x\right)^{2}\right]\ dx
  \\ =&\ \int x^{2}+2x\sin x-\left(1-\sin^{2}x\right)+\left(\cos x\right)\left(x+\sin x\right)^{2}\ dx
  \\ =&\ \int x^{2}+2x\sin x+\sin^{2}x-1+\left(\cos x\right)\left(x+\sin x\right)^{2}\ dx
  \\ =&\ \int \left(x+\sin x\right)^{2}+\left(\cos x\right)\left(x+\sin x\right)^{2}-1\ dx
  \\ =&\ \int \left(1+\cos x\right)\left(x+\sin x\right)^{2}\ dx-\int dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  x+\sin x &= t
  \\ \left(1+\cos x\right)\ dx &= dt
\end{align*}
```

### Substitute
```math
\begin{align*}
  &= \int t^{2}\ dt-\int dx
  \\ &= \frac{1}{3}t^{3}-x
  \\ &= \frac{1}{3}\left(x+\sin x\right)^{3}-x-c
\end{align*}
```
