---
topic: integrals
title: end of an epoch
desc:  Halfway through the decode. Crikey.
date:  2025 December 31
difficulty: manifold
tags:
  - definite
  - dread
methods:
  - tough
  - spot
  - fun
---


## Question
```math
\int_{-\pi}^{\pi}\frac{x^{4}+\cos x}{1+e^{x}}\ dx
```


## Hints

### 1
It’s *not* $0$.

### 2
When the limits are opposites, try substituting $t = -x$.

### 3
What do you notice about the resulting structure of the integral?

### 4
Can you make your substituted integrand look more like the original?

### 5
What happens if you add your substituted integrand to your original?


## Answer
```math
\frac{1}{5}\pi^{5}
```


## Solution

### Substitute
```math
\begin{align*}
  x &= -t
  \\ dx &= -dt
\end{align*}
```

### Reshape
```math
\begin{align*}
  I &= \int_{-\pi}^{\pi}\frac{x^{4}+\cos x}{1+e^{x}}\ dx
  \\ &= \int_{-\left(-\pi\right)}^{-\left(\pi\right)}\frac{\left(-t\right)^{4}+\cos\left(-t\right)}{1+e^{-t}}\cdot-dt
  \\ &= -\int_{\pi}^{-\pi}\frac{t^{4}+\cos t}{1+e^{-t}}\ dt
  \\ &= \int_{-\pi}^{\pi}\frac{t^{4}+\cos t}{1+e^{-t}}\ dt
  \\ &= \int_{-\pi}^{\pi}\frac{t^{4}+\cos t}{1+e^{-t}}\cdot\frac{e^{t}}{e^{t}}\ dt
  \\ I &= \int_{-\pi}^{\pi}\frac{e^{t}\left(t^{4}+\cos t\right)}{e^{t}+1}\ dt
\end{align*}
```

### Duplication
```math
\begin{align*}
  \\ I+I &= \int_{-\pi}^{\pi}\frac{x^{4}+\cos x}{1+e^{x}}\ dx+\int_{-\pi}^{\pi}\frac{e^{t}\left(t^{4}+\cos t\right)}{e^{t}+1}\ dt
  \\ 2I &= \int_{-\pi}^{\pi}\frac{x^{4}+\cos x}{1+e^{x}}+\frac{e^{x}\left(x^{4}+\cos x\right)}{e^{x}+1}\ dx
  \\ &= \int_{-\pi}^{\pi}\frac{\left(1+e^{x}\right)\left(x^{4}+\cos x\right)}{1+e^{x}}\ dx
  \\ &= \int_{-\pi}^{\pi}x^{4}+\cos x\ dx
\end{align*}
```

### Solve
```math
\begin{align*}
  2I &= 2\int_{0}^{\pi}x^{4}+\cos x\ dx
  \\ I &= \left[\frac{1}{5}x^{5}+\sin x\right]_{0}^{\pi}
  \\ &= \left[\frac{1}{5}\pi^{5}+\sin\pi\right]-\left[0+\sin0\right]
  \\ &= \frac{1}{5}\pi^{5}
\end{align*}
```
