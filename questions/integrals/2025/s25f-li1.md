---
topic: integrals
title: fire in the wire
desc: 
date: 2025 April 20
difficulty: incline
tags:
  - definite
  - improper
  - sqrt
  - ln
methods:
  - fun
---


## Question
```math
\int_{0}^{\infty}\frac{\ln x}{\sqrt{x}\left(1+x\right)}\ dx
```


## Hints

### 1
Start by substituting $\sqrt{x} = t$.

### 2
What do you suspect the integral might be equal to?

### 3
How would you prove this?

### 4
What’s the solution to $x = -x$?


## Answer
$0$


## Solution

### Substitute (1)
```math
\begin{align*}
  \sqrt{x} &= t
  \\ x &= t^{2}
  \\ dx &= 2t\ dt
\end{align*}
```

### Reshape
```math
\begin{align*}
  &\ \int_{0}^{\infty}\frac{\ln x}{\sqrt{x}\left(1+x\right)}\ dx
  \\ =&\ \int_{\sqrt{0}}^{\sqrt{\infty}}\frac{\ln\left(t^{2}\right)}{t\left(1+t^{2}\right)}\cdot2t\ dt
  \\ =&\ 4\int_{0}^{\infty}\frac{\ln t}{1+t^{2}}\ dt
\end{align*}
```

### Substitute (2)
```math
\begin{align*}
  t &= \frac{1}{v}
  \\ dt &= -\frac{1}{v^{2}}\ dv
\end{align*}
```

### Solve
```math
\begin{align*}
  &= 4\int_{1/0}^{1/\infty}\frac{\ln\left(1/v\right)}{1+1/v^{2}}\cdot-\frac{1}{v^{2}}\ dv
  \\ &= -4\int_{\infty}^{0}\frac{-\ln v}{v^{2}+1}\ dv
  \\ &= -4\int_{0}^{\infty}\frac{\ln v}{v^{2}+1}\ dv
\end{align*}
```

Hence

```math
\begin{align*}
  4\int_{0}^{\infty}\frac{\ln t}{1+t^{2}}\ dt
    &= -4\int_{0}^{\infty}\frac{\ln v}{v^{2}+1}\ dv
  \\ 4\int_{0}^{\infty}\frac{\ln t}{1+t^{2}}\ dt &= 0
  \\ \int_{0}^{\infty}\frac{\ln x}{\sqrt{x}\left(1+x\right)}\ dx &= 0
\end{align*}
```
