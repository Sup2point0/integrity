---
topic: integrals
title: insomniac
desc:  Not even joking, wrote this one at 3.14 am. Only shame is that it wasn’t on Pi Day itself.
date:  2026 March 18
difficulty: incline
tags:
  - definite
  - ln
  - pi
methods:
  - gaussian
---


## Question
```math
\int_{0}^{\infty}\frac{1}{x^{\left(1+\ln x\right)}}\ dx
```


## Hints

### 1
The $1+$ is relevant.

### 2
Try splitting up the exponent.

### 3
If in doubt, just substitute $\ln{x} = t$.


## Answer
```math
\sqrt{\pi}
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int_{0}^{\infty}\frac{1}{x^{\left(1+\ln x\right)}}\ dx
  \\ =&\ \int_{0}^{\infty}\frac{1}{x}\cdot\frac{1}{x^{\ln x}}\ dx
  \\ =&\ \int_{0}^{\infty}\frac{1}{x}x^{-\ln x}\ dx
  \\ =&\ \int_{0}^{\infty}\frac{1}{x}e^{-\left(\ln x\right)^{2}}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \ln x &= t
  \\ \frac{1}{x}\ dx &= dt
\end{align*}
```

### Gaussian Integral
```math
\begin{align*}
  &= \int_{\ln\left(0\right)}^{\ln\left(\infty\right)}e^{-t^{2}}\ dt
  \\ &= \int_{-\infty}^{\infty}e^{-t^{2}}\ dt
  \\ &= \sqrt{\pi}
\end{align*}
```
