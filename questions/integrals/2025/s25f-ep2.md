---
topic: integrals
title: wistful ephemerality
desc: 
date: 2025 May 24
difficulty: manifold
tags:
  - elite
  - trig
  - complex
methods:
  - spot
---


## Question
```math
\int
  \left(
    \cos{x} + i\sin{x}
  \right)^{36}
  +
  \left(
    \sin{x} + i\cos{x}
  \right)^{36}
\ dx
```


## Hints

### 1
What’s the relationship between $\cos(x) + i\sin(x)$ and $\sin(x) - i\cos(x)$?

### 2
What’s the relationship between $\cos(x) + i\sin(x)$ and $\sin(x) + i\cos(x)$?

### 3
How else can you write $\cos(x) + i\sin(x)$?

### 4
Use the fact that $\cos(\theta) + i\sin(\theta) = e^{\thetai}$.


## Answer
```math
\frac{1}{18}\sin36x-c
```


## Solution

```math
\begin{align*}
  &\ \int \left(\cos x+i\sin x\right)^{36}+\left(\sin x+i\cos x\right)^{36}\ dx
  \\ =&\ \int \left(\cos x+i\sin x\right)^{36}+\left(\frac{i\sin x+i^{2}\cos x}{i}\right)^{36}\ dx
  \\ =&\ \int \left(\cos x+i\sin x\right)^{36}+\frac{1}{i^{4}}\left(i\sin x-\cos x\right)^{36}\ dx
  \\ =&\ \int \left(\cos x+i\sin x\right)^{36}+\frac{1}{1}\left(\cos x-i\sin x\right)^{36}\ dx
  \\ =&\ \int \left(e^{xi}\right)^{36}+\left(e^{-xi}\right)^{36}\ dx
  \\ =&\ \int e^{36xi}+e^{-36xi}\ dx
  \\ =&\ \int \cos\left(36x\right)+i\sin\left(36x\right)+\cos\left(-36x\right)+i\sin\left(-36x\right)\ dx
  \\ =&\ \int \cos\left(36x\right)+i\sin\left(36x\right)+\cos\left(36x\right)-i\sin\left(36x\right)\ dx
  \\ =&\ \int 2\cos36x\ dx
  \\ =&\ \frac{1}{18}\sin36x-c
\end{align*}
```

