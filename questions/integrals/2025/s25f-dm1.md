---
topic: integrals
title: ragebait
desc: 
date: 2025 June 12
tags:
  - definite
  - trig
  - arctrig
methods:
  - spot
---


## Question
```math
\int_{-1}^{1}x\sin x\cot^{-1}x\ dx
```


## Hints

### 1
No, the integrand is not odd.

### 2
Some parts of the integrand are odd.

### 3
Could you make the whole integrand odd?

### 4
Use an identity.

### 5
$\tan^{-1}(x)$ is odd.

### 6
What’s the relationship between $\tan^{-1}(x)$ and $\cot^{-1}(x)$?


## Answer
```math
\pi\left(\sin1-\cos1\right)
```


## Solution

```math
\begin{align*}
  &\ \int_{-1}^{1}x\sin x\cot^{-1}x\ dx
  \\ =&\ \int_{-1}^{1}\left(x\sin x\right)\left(\frac{\pi}{2}-\tan^{-1}x\right)\ dx
  \\ =&\ \frac{\pi}{2}\int_{-1}^{1}x\sin x-\int_{-1}^{1}x\sin x\tan^{-1}x\ dx
\end{align*}
```

$x$, $\sin(x)$ and $\tan^{-1}(x)$ are all odd, and multiplying an odd number of odd functions produces an odd function, so the right integral cancels out to $0$.

```math
\begin{align*}
  &= \frac{\pi}{2}\int_{-1}^{1}x\sin x\ dx
  \\ &= \frac{\pi}{2}\left(\left[-x\cos x\right]_{-1}^{1}-\int_{-1}^{1}-\cos x\ dx\right)
  \\ &= \frac{\pi}{2}\left[x\cos x\right]_{1}^{-1}+\frac{\pi}{2}\left[\sin x\right]_{-1}^{1}
  \\ &= \frac{\pi}{2}\left(\left(-1\right)\cos\left(-1\right)-\cos\left(1\right)\right)+\frac{\pi}{2}\left(\sin\left(1\right)-\sin\left(-1\right)\right)
  \\ &= \frac{\pi}{2}\left(-\cos\left(1\right)-\cos\left(1\right)\right)+\frac{\pi}{2}\left(\sin\left(1\right)+\sin\left(1\right)\right)
  \\ &= -\pi\cos\left(-1\right)+\pi\sin\left(1\right)
  \\ &= \pi\left(\sin1-\cos1\right)
\end{align*}
```
