---
topic: integrals
title: cavity
desc: 
date: 2025 February 1
tags:
  - poly
  - frac
methods:
  - work
---


## Question
```math
\int \frac{1}{1+x^{1/5}}\ dx
```


## Hints

### 1
You can safely substitute $x^{1/5} = t$.


## Answer
```math
\frac{1}{12}\left(15\left(x^{1/5}+1\right)^{4}-80\left(x^{1/5}+1\right)^{3}+180\left(x^{1/5}+1\right)^{2}-240\left(x^{1/5}+1\right)+60\ln\left(x^{1/5}+1\right)\right)-c
```


## Solution

### Substitute (1)
```math
\begin{align*}
  x^{1/5} &= t
  \\ x &= t^{5}
  \\ dx &= 5t^{4}dt
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  &\ \int \frac{1}{1+x^{1/5}}\ dx
  \\ =&\ \int \frac{1}{1+t}\cdot5t^{4}\ dt
  \\ =&\ 5\int \frac{t^{4}}{t+1}\ dt
\end{align*}
```

### Substitute (2)
```math
\begin{align*}
  t+1=v
  \\ t=v-1
  \\ dt=dv
\end{align*}
```

### Solve (2)
```math
\begin{align*}
  &= 5\int \frac{\left(v-1\right)^{4}}{v}\ dv
  \\ &= 5\int \frac{v^{4}-4v^{3}+6v^{2}-4v+1}{v}\ dv
  \\ &= 5\int v^{3}-4v^{2}+6v-4+\frac{1}{v}\ dv
  \\ &= \frac{5}{4}v^{4}-\frac{20}{3}v^{3}+15v^{2}-20v+5\ln v-c
  \\ &= \frac{1}{12}\left(15v^{4}-80v^{3}+180v^{2}-240v+60\ln v\right)
  \\ &= \frac{1}{12}\left(15\left(x^{1/5}+1\right)^{4}-80\left(x^{1/5}+1\right)^{3}+180\left(x^{1/5}+1\right)^{2}-240\left(x^{1/5}+1\right)+60\ln\left(x^{1/5}+1\right)\right)-c
\end{align*}
```
