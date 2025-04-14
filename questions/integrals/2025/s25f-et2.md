---
topic: integrals
title: ember
desc: 
date: 2025 February 2
tags:
  - trig
  - exp
methods:
  - spot
---


## Question
```math
\int e^{x}\left(\sin\left(x\right)\cos\left(x\right)^{3}-\sin\left(x\right)^{3}\cos\left(x\right)\right)\ dx
```


## Hints

### 1
Starts with “f” and rhymes with <em>tractorise</em>.

### 2
Identify stuff


## Answer
```math
=\frac{1}{68}e^{x}\left(\sin4x-4\cos4x\right)-c
```


## Solution

### Double Angle Identities
```math
\begin{align*}
  &\ \int e^{x}\left(\sin\left(x\right)\cos\left(x\right)^{3}-\sin\left(x\right)^{3}\cos\left(x\right)\right)\ dx
  \\ =&\ \int e^{x}\left(\sin x\cos x\right)\left(\cos^{2}x-\sin^{2}x\right)\ dx
  \\ =&\ \frac{1}{2}\int e^{x}\sin2x\cos2x\ dx
  \\ =&\ \frac{1}{4}\int e^{x}\sin4x\ dx
\end{align*}
```

### Parts
```math
\begin{align*}
  \frac{1}{4}\int e^{x}\sin4x\ dx
    &= \frac{1}{4}\left(e^{x}\sin4x-4\int e^{x}\cos4x\ dx\right)
  \\ &= \frac{1}{4}\left(e^{x}\sin4x-4\left(e^{x}\cos4x+4\int e^{x}\sin4x\ dx\right)\right)
  \\ &= \frac{1}{4}e^{x}\sin4x-e^{x}\cos4x-4\int e^{x}\sin4x\ dx
  \\ \frac{1+16}{4}\int e^{x}\sin4x\ dx
    &=\frac{1}{4}e^{x}\sin4x-e^{x}\cos4x
  \\ \int e^{x}\sin4x\ dx
    &= \frac{1}{17}\left(\frac{1}{4}e^{x}\sin4x-e^{x}\cos4x\right)
  \\ &= \frac{1}{68}e^{x}\left(\sin4x-4\cos4x\right)-c
\end{align*}
```

