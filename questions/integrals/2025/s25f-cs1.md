---
topic: integrals
title: cos why not
desc: 
date: 2025 March 24
tags:
 - trig
  - inverse trig
methods:
  - fun
---


## Question
```math
\int_{-1}^{1}\frac{\sin^{-1}\left(\cos{x}\right)}{\sin\left(\cos^{-1}{x}\right)}\ dx
```


## Hints

### 1
$\text{trig}^{-1}(\text{trig}(x))$ cancels to $x$.

### 2
But this is only true over a certain domain.

### 3
$\cos^{-1}\left( \cos{x} \right)$ is even, but $x$ is odd.


## Answer
```math
\frac{1}{2}\pi^{2}-2
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int_{-1}^{1}\frac{\sin^{-1}\left(\cos x\right)}{\sin\left(\cos^{-1}x\right)}\ dx
  \\ =&\ 2\int_{0}^{1}\frac{\sin^{-1}\left(\cos x\right)}{\sin\left(\cos^{-1}x\right)}\ dx
  \\ =&\ 2\int_{0}^{1}\frac{\frac{\pi}{2}-\cos^{-1}\left(\cos x\right)}{\sin\left(\cos^{-1}x\right)}\ dx
\end{align*}
```

$\cos^{-1}(\cos{x}) = x$ for $0 \leq x \leq 1$, hence

```math
= 2\int_{0}^{1}\frac{\frac{\pi}{2}-x}{\sin\left(\cos^{-1}x\right)}\ dx
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
  &= 2\int_{\pi/2}^{0}\frac{\frac{\pi}{2}-\cos t}{\sin t}\cdot-\sin t\ dt
  \\ &= 2\int_{0}^{\pi/2}\frac{\pi}{2}-\cos t\ dt
  \\ &= 2\left[\frac{\pi}{2}t-\sin t\right]_{0}^{\pi/2}
  \\ &= 2\left[\left(\frac{\pi}{2}\cdot\frac{\pi}{2}-\sin\left(\frac{\pi}{2}\right)\right)-\left(0\right)\right]
  \\ &= 2\left(\left(\frac{\pi}{2}\right)^{2}-1\right)
  \\ &= \frac{1}{2}\pi^{2}-2
\end{align*}
```
