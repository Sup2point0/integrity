---
topic: integrals
title: secret
desc: 
date: 2024 October
difficulty: incline
tags:
  - definite
  - sqrt
  - trig
methods:
  - troll
  - spot
---


## Question
```math
\int_{0}^{\pi}2\left(\frac{\pi}{2}-x\right)\sin\left(\frac{x}{2}\right)\sqrt{1-\sin\left(\frac{x}{2}\right)^{2}}\ dx
```


## Hints

### 1
$\sin(x)$ is positive for $0 \leq x \leq \pi$.

### 2
What does $\left( \frac{\pi}{2} - x \right)$ scream to you?

### 3
$\frac{\pi}{2}$ is the midpoint of $\pi$.


## Answer
$0$


## Solution

$1-\sin\left(\frac{x}{2}\right)^2$ is non-negative for $0 \leq x \leq \pi$, so we can simplify it with the trigonometric identity:

```math
\begin{align*}
  &\ \int_{0}^{\pi}2\left(\frac{\pi}{2}-x\right)\sin\left(\frac{x}{2}\right)\sqrt{1-\sin\left(\frac{x}{2}\right)^{2}}\ dx
  \\ =&\ \int_{0}^{\pi}2\left(\frac{\pi}{2}-x\right)\sin\left(\frac{x}{2}\right)\cos\left(\frac{x}{2}\right)\ dx
  \\ =&\ \int_{0}^{\pi}\left(\frac{\pi}{2}-x\right)\sin x\ dx
\end{align*}
```

$\frac{\pi}{2} - x$ is odd around $x = \pi/2$ while $\sin(x)$ is even, so the whole integrand is odd. Hence

```math
= 0
```
