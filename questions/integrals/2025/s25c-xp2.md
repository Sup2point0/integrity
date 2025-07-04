---
topic: integrals
title: dragonometry
desc: 
date: 2025 March 18
difficulty: chaos
tags:
  - horror
  - exp
  - arctrig
  - complex
methods:
  - sub
---


## Question
```math
\int
  \frac
    { 2\pi }
    { 4\pi^2 x^2 - 1 }
  \exp\left(
    \frac
      { \tan^{-1}(2\pi ix) - 2\pi^2 }
      { 2\pi i }
  \right)
\ dx
```


## Hints

### 1
What’s the derivative of $\tan^{-1}(x)$?

### 2
What’s $i^2$?

### 3
You can also use the fact that $\tan^{-1}(ix) = i\tanh^{-1}(x)$.


## Answer
```math
2\pi\exp\left(\frac{\tanh^{-1}\left(2\pi x\right)}{2\pi}\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{2\pi}{4\pi^{2}x^{2}-1}\exp\left(\frac{\tan^{-1}\left(2\pi ix\right)-2\pi^{2}}{2\pi i}\right)\ dx
  \\ =&\ \int \frac{2\pi}{4\pi^{2}x^{2}-1}\exp\left(\frac{i\tanh^{-1}\left(2\pi x\right)-2\pi^{2}}{2\pi i}\right)\ dx
  \\ =&\ \int \frac{2\pi}{4\pi^{2}x^{2}-1}\exp\left(\frac{\tanh^{-1}\left(2\pi x\right)}{2\pi}-\frac{\pi}{i}\right)\ dx
  \\ =&\ \int \frac{2\pi}{4\pi^{2}x^{2}-1}\exp\left(\frac{\tanh^{-1}\left(2\pi x\right)}{2\pi}+\pi i\right)\ dx
  \\ =&\ \int \frac{2\pi}{4\pi^{2}x^{2}-1}\exp\left(\frac{\tanh^{-1}\left(2\pi x\right)}{2\pi}\right)\exp\left(\pi i\right)\ dx
  \\ =&\ \int \frac{2\pi}{4\pi^{2}x^{2}-1}\exp\left(\frac{\tanh^{-1}\left(2\pi x\right)}{2\pi}\right)\left(-1\right)\ dx
  \\ =&\ \int \frac{2\pi}{1-4\pi^{2}x^{2}}\exp\left(\frac{\tanh^{-1}\left(2\pi x\right)}{2\pi}\right)\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \tanh^{-1}\left(2\pi x\right) &= t
  \\ \frac{2\pi}{1-\left(2\pi x\right)^{2}}\ dx &= dt
  \\ \frac{2\pi}{1-4\pi^{2}x^{2}}\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int \exp\left(\frac{t}{2\pi}\right)\ dt
  \\ &= 2\pi\exp\left(\frac{t}{2\pi}\right)
  \\ &= 2\pi\exp\left(\frac{\tanh^{-1}\left(2\pi x\right)}{2\pi}\right)-c
\end{align*}
```
