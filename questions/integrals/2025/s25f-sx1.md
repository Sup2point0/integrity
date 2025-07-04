---
topic: integrals
title: subtext
desc: 
date: 2025 April 1
difficulty: incline
tags:
  - dread
  - arctrig
methods:
  - acc
---


## Question
```math
\int
  \sec^{-1} \left(
    \frac{1}{x}
  \right)
  \csc^{-1} \left(
    \frac{1}{x}
  \right)
\ dx
```


## Hints

### 1
I wouldn’t say this is a nice question.

### 2
It’s doable tho.

### 3
I’d recommend using $\sin^{-1}(x)$ and $\cos^{-1}(x)$ instead of $\sec^{-1}(x)$ and $\csc^{-1}(x)$.

### 4
How can you write $\sin^{-1}(x)$ or $\cos^{-1}(x)$ in terms of the other?

### 5
Always up for a substitution.


## Answer
```math
2x+\left(\frac{\pi}{2}-\sin^{-1}x\right)\left(x\sin^{-1}x\right)+\left(\frac{\pi}{2}-2\sin^{-1}x\right)\sqrt{1-x^{2}}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \sec^{-1}\left(\frac{1}{x}\right)\csc^{-1}\left(\frac{1}{x}\right)\ dx
  \\ =&\ \int \cos^{-1}\left(x\right)\sin^{-1}\left(x\right)\ dx
  \\ =&\ \int \left(\frac{\pi}{2}-\sin^{-1}x\right)\sin^{-1}x\ dx
  \\ =&\ \int \frac{\pi}{2}\sin^{-1}x-\left(\sin^{-1}x\right)^{2}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \sin^{-1}x &= t
  \\ x &= \sin t
  \\ dx &= \cos t\ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int \left(\frac{\pi}{2}t-t^{2}\right)\cdot\cos t\ dt
  \\ &= \frac{\pi}{2}\int t\cos t\ dt-\int t^{2}\cos t\ dt
  \\ &= \frac{\pi}{2}\left(t\sin t-\int \sin t\ dt\right)-\left(t^{2}\sin t-\int 2t\sin t\ dt\right)
  \\ &= \frac{\pi}{2}\left(t\sin t+\cos t\right)-\left(t^{2}\sin t+2\int t\cdot-\sin t\ dt\right)
  \\ &= \frac{\pi}{2}\left(t\sin t+\cos t\right)-\left(t^{2}\sin t+2\left(t\cos t-\int \cos t\ dt\right)\right)
  \\ &= \frac{\pi}{2}\left(t\sin t+\cos t\right)-\left(t^{2}\sin t+2\left(t\cos t-\sin t\right)\right)
  \\ &= \frac{\pi}{2}\left(t\sin t+\cos t\right)-\left(t^{2}\sin t+2t\cos t-2\sin t\right)
  \\ &= \frac{\pi}{2}\left(t\sin t+\cos t\right)-t\left(t\sin t+2\cos t\right)+2\sin t
\end{align*}
```

### Reformulate
```math
\begin{align*}
  &= \frac{\pi}{2}\left(x\sin^{-1}x+\sqrt{1-x^{2}}\right)-\left(\sin^{-1}x\right)\left(x\sin^{-1}x+2\sqrt{1-x^{2}}\right)+2x-c
  \\ &= 2x+\left(\frac{\pi}{2}-\sin^{-1}x\right)\left(x\sin^{-1}x\right)+\left(\frac{\pi}{2}-2\sin^{-1}x\right)\sqrt{1-x^{2}}-c
\end{align*}
```
