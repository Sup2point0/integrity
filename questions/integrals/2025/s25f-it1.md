---
topic: integrals
title: introspection
desc: 
date: 2025 January 30
difficulty: incline
tags:
  - scare
  - trig
  - arctrig
methods:
  - 
---


## Question
```math
\int \cos^{-1}\left(\frac{\pi}{2}-\cos\left(\frac{\pi}{2}-\sin^{-1}\left(\frac{\pi}{2}-x\right)\right)\right)\ dx
```


## Hints

### 1
How are $\sin^{-1}(x)$ and $\cos^{-1}(x)$ related?

### 2
What does $\sin\left( \sin^{-1}(x) \right)$ cancel to?


## Answer
```math
x\cos^{-1}x-\sqrt{1-x^{2}}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \cos^{-1}\left(\frac{\pi}{2}-\cos\left(\frac{\pi}{2}-\sin^{-1}\left(\frac{\pi}{2}-x\right)\right)\right)\ dx
  \\ =&\ \int \cos^{-1}\left(\frac{\pi}{2}-\cos\left(\cos^{-1}\left(\frac{\pi}{2}-x\right)\right)\right)\ dx
  \\ =&\ \int \cos^{-1}\left(\frac{\pi}{2}-\left(\frac{\pi}{2}-x\right)\right)\ dx
  \\ =&\ \int \cos^{-1}\left(x\right)\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \cos^{-1}x &= t
  \\ x &= \cos t
  \\ dx &= -\sin t\ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int t\cdot-\sin t\ dt
  \\ &= t\cos t-\int \cos t\ dt
  \\ &= t\cos t-\sin t
  \\ &= x\cos^{-1}x-\sqrt{1-x^{2}}-c
\end{align*}
```
