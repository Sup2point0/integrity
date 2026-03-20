---
topic: integrals
title: magma
desc: 
date: 2025 April 24
difficulty: incline
tags:
  - arctrig
methods:
  - speed
flags:
  - definite
---


## Question
```math
\int_{0}^{\pi}\sin^{-1}x+\cos^{-1}x\ dx
```


## Hints

### 1
Don’t integrate separately!

### 2
How are $\sin^{-1}(x)$ and $\cos^{-1}(x)$ related?

### 3
Think about the angles in a right triangle.

### 4
Let one angle be $\sin^{-1}(x)$. What angle is $\cos^{-1}(x)$?


## Answer
$\frac{\pi^{2}}{2}$


## Solution

```math
\begin{align*}
  &\ \int_{0}^{\pi}\sin^{-1}x+\cos^{-1}x\ dx
  \\ =&\ \int_{0}^{\pi}\sin^{-1}x+\left(\frac{\pi}{2}-\sin^{-1}x\right)\ dx
  \\ =&\ \frac{\pi}{2}\int_{0}^{\pi}dx
  \\ =&\ \frac{\pi}{2}\left[x\right]_{0}^{\pi}
  \\ =&\ \frac{\pi^{2}}{2}
\end{align*}
```
