---
topic: integrals
title: turnover
desc: 
date: 2025 January 30
tags:
  - scare
  - trig
methods:
  - spot
---


## Question
```math
\int
  \frac
    { \left(\cos{x} - \sin{x}\right) \left(\cos{x} + \sin{x}\right) }
    { 1 + \left(\sin{x}\right) \left(\cos{x}\right) - 1 }
\ dx
```


## Hints

### 1
Yes, the $1 - 1$ is a red herring.


## Answer
```math
\ln\left|\sin{2x}\right|-c
```


## Solution

### Solve
```math
\begin{align*}
  &\ \int \frac{\left(\cos x-\sin x\right)\left(\cos x+\sin x\right)}{1+\left(\sin x\right)\left(\cos x\right)-1}\ dx
  \\ =&\ \int \frac{\cos^{2}x-\sin^{2}x}{\sin x\cos x}\ dx
  \\ =&\ 2\int \frac{\cos^{2}x-\sin^{2}x}{2\sin x\cos x}\ dx
  \\ =&\ \int \frac{2\cos2x}{\sin2x}\ dx
  \\ =&\ \ln\left|\sin2x\right|-c
\end{align*}
```
