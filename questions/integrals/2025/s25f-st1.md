---
topic: integrals
title: creativity is running out
desc: 
date: 2025 April 18
tags:
  - sqrt
  - trig
methods:
  - sub
---


## Question
```math
\int \frac{\tan x}{1+\sqrt{\sec x}}\ dx
```


## Hints

### 1
Start with an obvious substitution.

### 2
The derivative of $\sec(x)$ includes itself.

### 3
The overall substitution is $\sqrt{\sec{x}} = t$.


## Answer
```math
2\ln\sqrt{\sec x}-2\ln\left(1+\sqrt{\sec x}\right)-c
```


## Solution

### Substitute (1)
```math
\begin{align*}
  \sec{t} &= t
  \\ \sec x\tan x\ dx &= dt
  \\ \tan x\ dx &= \frac{1}{t}\ dt
\end{align*}
```

### Simplify
```math
\begin{align*}
  &\ \int \frac{\tan x}{1+\sqrt{\sec x}}\ dx
  \\ =&\ \int \frac{1}{1+\sqrt{t}}\cdot\frac{1}{t}\ dt
  \\ =&\ \int \frac{1}{t\left(1+\sqrt{t}\right)}\ dt
\end{align*}
```

### Substitute (2)
```math
\begin{align*}
  \sqrt{t} &= v
  \\ t &= v^{2}
  \\ dt &= 2v\ dv
\end{align*}
```

### Partial Fractions
```math
\begin{align*}
  &= \int \frac{1}{v^{2}\left(1+v\right)}\cdot2v\ dv
  \\ &= 2\int \frac{1}{v\left(1+v\right)}\ dv
  \\ &= 2\int \frac{1}{v}-\frac{1}{1+v}\ dv
  \\ &= 2\ln v-2\ln\left(1+v\right)
  \\ &= 2\ln\sqrt{t}-2\ln\left(1+\sqrt{t}\right)
  \\ &= 2\ln\sqrt{\sec x}-2\ln\left(1+\sqrt{\sec x}\right)-c
\end{align*}
```
