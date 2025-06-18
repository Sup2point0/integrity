---
topic: integrals
title: 依赖
desc: 
date: 2025 April 3
tags:
  - poly
methods:
  - work
---


## Question
```math
\int
  \frac
    { x^{1/3} }
    { 1 + x^{1/3} }
\ dx
```


## Hints

### 1
Substitute $x^{1/3} = t$.


## Answer
```math
\left(x^{1/3}+1\right)^{3}-\frac{9}{2}\left(x^{1/3}+1\right)^{2}+9x^{1/3}-3\ln\left(x^{1/3}+1\right)-c
```


## Solution

### Substitute (1)
```math
\begin{align*}
  x^{1/3} &= t
  \\ x &= t^{3}
  \\ dx &= 3t^{2}\ dt
\end{align*}
```

### Reshape
```math
\begin{align*}
  &\ \int \frac{x^{1/3}}{1+x^{1/3}}\ dx
  \\ =&\ \int \frac{t}{1+t}\cdot3t^{2}\ dt
  \\ =&\ 3\int \frac{t^{3}}{1+t}\ dt
\end{align*}
```

### Substitute (2)
```math
\begin{align*}
  1+t &= v
  \\ t &= v-1
  \\ dt &= dv
\end{align*}
```

### Solve
```math
\begin{align*}
  &= 3\int \frac{\left(v-1\right)^{3}}{v}\ dv
  \\ &= 3\int v^{2}-3v+3-\frac{1}{v}\ dv
  \\ &= v^{3}-\frac{9}{2}v^{2}+9v-3\ln v
  \\ &= \left(1+t\right)^{3}-\frac{9}{2}\left(1+t\right)^{2}+9\left(1+t\right)-3\ln\left(1+t\right)
  \\ &= \left(x^{1/3}+1\right)^{3}-\frac{9}{2}\left(x^{1/3}+1\right)^{2}+9\left(x^{1/3}+1\right)-3\ln\left(x^{1/3}+1\right)-c
  \\ &= \left(x^{1/3}+1\right)^{3}-\frac{9}{2}\left(x^{1/3}+1\right)^{2}+9x^{1/3}-3\ln\left(x^{1/3}+1\right)-c
\end{align*}
```
