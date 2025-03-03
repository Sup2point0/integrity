---
topic: integrals
title: exactly what I mean
desc: 
date: 2025 February 14
tags:
  - trig
methods:
  - spot
---


## Question
```math
\int
  x\tan{x} + \ln(\sec{x})
\ dx = x \ln(\cos{x})
```


## Hints

### 1
Do you notice anything about both expressions?


## Answer
```math
-x\ln\left(\cos x\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int x\tan x+\ln\left(\sec x\right)\ dx
  \\ =&\ \int x\cdot\frac{\sin x}{\cos x}+\ln\left(\frac{1}{\cos x}\right)\ dx
  \\ =&\ \int x\cdot\frac{\sin x}{\cos x}-\ln\left(\cos x\right)\ dx
  \\ =&\ -\int x\cdot\frac{-\sin x}{\cos x}+\ln\left(\cos x\right)\ dx
\end{align*}
```

### Inverse Product Rule
```math
\begin{align*}
  \frac{d}{dx}\ x\ln\left(\cos x\right) &= \ln\left(\cos x\right)+x\cdot\frac{1}{\cos x}\cdot-\sin x
  \\ \int \ln\left(\cos x\right)+x\cdot\frac{1}{\cos x}\cdot-\sin x &= x\ln\left(\cos x\right)
  \\ -\int x\cdot\frac{-\sin x}{\cos x}+\ln\left(\cos x\right)\ dx &= -x\ln\left(\cos x\right)-c
\end{align*}
```
