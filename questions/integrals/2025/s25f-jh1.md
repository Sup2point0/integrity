---
topic: integrals
title: pernicious spearhead
desc: This is honestly not a good integral, but props if you manage to solve it.
date: 2025 May 12
difficulty: chaos
tags:
  - definite
  - horror
  - trig
  - pi
methods:
  - tough
  - spot
---


## Question
```math
\int_{1}^{\pi+1}\frac{1+\sin\left(x-1\right)-\cos\left(x-1\right)-x\sin\left(x-1\right)}{\cos\left(x-1\right)^{2}-2x\cos\left(x-1\right)+x^{2}}\ dx
```


## Hints

### 1
Start by factorising the denominator.

### 2
Can you find the same thing in the numerator?

### 3
Yes, $(x-1)$ is certainly involved.

### 4
But so is $x$(!)

### 5
Add $+ x - x$.

### 6
What’s the derivative of $x - \cos(x-1)$?

### 7
Look for inverse quotient rule.


## Answer
```math
-\frac{2}{\pi+2}
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int_{1}^{\pi+1}\frac{1+\sin\left(x-1\right)-\cos\left(x-1\right)-x\sin\left(x-1\right)}{\cos\left(x-1\right)^{2}-2x\cos\left(x-1\right)+x^{2}}\ dx
  \\ =&\ \int_{1}^{\pi+1}\frac{1+\sin\left(x-1\right)-\cos\left(x-1\right)-x\sin\left(x-1\right)}{\left(x-\cos\left(x-1\right)\right)^{2}}\ dx
  \\ =&\ \int_{1}^{\pi+1}\frac{1+\sin\left(x-1\right)-\cos\left(x-1\right)-x\sin\left(x-1\right)+x-x}{\left(x-\cos\left(x-1\right)\right)^{2}}\ dx
\end{align*}
```

### Factorise
```math
\begin{align*}
  &= \int_{1}^{\pi+1}\frac{x-\cos\left(x-1\right)+1+\sin\left(x-1\right)-x-x\sin\left(x-1\right)}{\left(x-\cos\left(x-1\right)\right)^{2}}\ dx
  \\ &= \int_{1}^{\pi+1}\frac{\left(x-\cos\left(x-1\right)\right)+\left(1+\sin\left(x-1\right)\right)-x\left(1+\sin\left(x-1\right)\right)}{\left(x-\cos\left(x-1\right)\right)^{2}}\ dx
  \\ &= \int_{1}^{\pi+1}\frac{\left(x-\cos\left(x-1\right)\right)+\left(1-x\right)\left(1+\sin\left(x-1\right)\right)}{\left(x-\cos\left(x-1\right)\right)^{2}}\ dx
  \\ &= \int_{1}^{\pi+1}\frac{\left(x-\cos\left(x-1\right)\right)-\left(x-1\right)\left(1+\sin\left(x-1\right)\right)}{\left(x-\cos\left(x-1\right)\right)^{2}}\ dx
\end{align*}
```

### Inverse Quotient Rule
```math
\frac{d}{dx}\left[\frac{x-1}{x-\cos\left(x-1\right)}\right]
  = \frac{\left(x-\cos\left(x-1\right)\right)-\left(x-1\right)\left(1+\sin\left(x-1\right)\right)}{\left(x-\cos\left(x-1\right)\right)^{2}}
```

### Solve
```math
\begin{align*}
  &\ \int_{1}^{\pi+1}\frac{\left(x-\cos\left(x-1\right)\right)-\left(x-1\right)\left(1+\sin\left(x-1\right)\right)}{\left(x-\cos\left(x-1\right)\right)^{2}}\ dx
  \\ =&\ \left[\frac{x-1}{x-\cos\left(x-1\right)}\right]_{1}^{\pi+1}
  \\ =&\ \left[\frac{\pi+1-1}{\pi+1-\cos\left(\pi+1-1\right)}\right]-lim\left[x\to1\right]\left[\frac{x-1}{x-\cos\left(x-1\right)}\right]
  \\ =&\ \frac{\pi}{1+\pi-\cos\left(\pi\right)}-lim\left[x\to1\right]\left[\frac{1}{1+\sin\left(x-1\right)}\right]
  \\ =&\ \frac{\pi}{1+\pi-\left(-1\right)}-\frac{1}{1+\sin\left(0\right)}
  \\ =&\ \frac{\pi}{1+\pi+1}-\frac{1}{1}
  \\ =&\ \frac{\pi}{2+\pi}-1
  \\ =&\ \frac{\pi}{2+\pi}-\frac{2+\pi}{2+\pi}
  \\ =&\ -\frac{2}{\pi+2}
\end{align*}
```
