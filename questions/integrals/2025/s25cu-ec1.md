---
topic: integrals
title: scent
desc: 
date: 2025 March 20
difficulty: manifold
tags:
  - exp
  - trig
methods:
  - spot
  - layer cake
---


## Question
```math
\int
  \frac
    { \sin{x} + \cos{x} }
    { \sin{x} + e^{-x} }
\ dx
```


## Hints

### 1
Layer cake!


## Answer
```math
\ln\left(e^{x}\sin x+1\right)-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{\sin x+\cos x}{\sin x+e^{-x}}\ dx
  \\ =&\ \int \frac{\sin x+\cos x}{\sin x+e^{-x}}\cdot\frac{e^{x}}{e^{x}}\ dx
  \\ =&\ \int \frac{e^{x}\left(\sin x+\cos x\right)}{e^{x}\sin x+1}\ dx
  \\ =&\ \ln\left(e^{x}\sin x+1\right)-c
\end{align*}
```
