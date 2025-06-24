---
topic: integrals
title: prenascent
desc: 
date: 2025 June 17
tags:
  - ln
  - trig
methods:
  - spot
  - parts
  - arcprod
---


## Question
```math
\int
  \left( \ln{x} \right)
  \left(
    \cos{x} - x\sin{x}
  \right)
\ dx
```


## Hints

### 1
Try parts!


## Answer
```math
x\ln x\cos x-\sin x-c
```


## Solution

### Parts
```math
\begin{align*}
      f &= \ln x \quad&\quad g' &= \cos x-x\sin x
  \\ f' &= \frac{1}{x} \quad&\quad &= \frac{d}{dx}\left(x\cos x\right)
  \\ & & g &= x\cos x
\end{align*}
```

### Reshape
```math
\begin{align*}
  &\ fg-\int f'g\ dx
  \\ =&\ \left(\ln x\right)\left(x\cos x\right)-\int \frac{1}{x}\cdot x\cos x\ dx
  \\ =&\ x\ln x\cos x-\int \cos x\ dx
  \\ =&\ x\ln x\cos x-\sin x-c
\end{align*}
```
