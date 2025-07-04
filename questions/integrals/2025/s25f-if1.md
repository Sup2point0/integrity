---
topic: integrals
title: Interplanetarypurplythorny Fractal
desc: 
date: 2025 April 17
difficulty: incline
tags:
  - definite
  - improper
  - poly
  - ln
methods:
  - spot
---


## Question
```math
\int_{1}^{\infty}\frac{\ln\left(x-1\right)}{x^{2}-2x+2}\ dx
```


## Hints

### 1
What does $x-1$ suggest?

### 2
Complete the square in the denominator.

### 3
How can you split $\ln(\tan{x})$?


## Answer
$0$


## Solution

### Reshape
```math
\begin{align*}
  &\ \int_{1}^{\infty}\frac{\ln\left(x-1\right)}{x^{2}-2x+2}\ dx
  \\ =&\ \int_{1}^{\infty}\frac{\ln\left(x-1\right)}{\left(x-1\right)^{2}-1+2}\ dx
  \\ =&\ \int_{1}^{\infty}\frac{\ln\left(x-1\right)}{\left(x-1\right)^{2}+1}\ dx
\end{align*}
```

### Substitute (1)
```math
\begin{align*}
  x-1 &= \tan t
  \\ \tan^{-1}\left(x-1\right) &= t
  \\ \frac{1}{\left(x-1\right)^{2}+1}\ dx &= dt
\end{align*}
```

### Simplify
```math
\begin{align*}
  &= \int_{\tan^{-1}\left(1-1\right)}^{\tan^{-1}\left(\infty-1\right)}\ln\left(\tan t\right)\ dt
  \\ &= \int_{0}^{\pi/2}\ln\left(\tan t\right)\ dt
  \\ &= \int_{0}^{\pi/2}\ln\left(\sin t\right)-\ln\left(\cos t\right)\ dt
  \\ &= \int_{0}^{\pi/2}\ln\left(\sin t\right)dt-\int_{0}^{\pi/2}\ln\left(\cos t\right)\ dt
\end{align*}
```

### Substitute (2)
```math
\begin{align*}
  t &= \frac{\pi}{2}-v
  \\ v &= \frac{\pi}{2}-t
  \\ dv &= -dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int_{0}^{\pi/2}\ln\left(\sin t\right)dt-\int_{\pi/2}^{0}\ln\left(\cos\left(\frac{\pi}{2}-v\right)\right)\cdot-dt
  \\ &= \int_{0}^{\pi/2}\ln\left(\sin t\right)dt-\int_{0}^{\pi/2}\ln\left(\sin v\right)\ dt
  \\ &= I-I
  \\ &= 0
\end{align*}
```
