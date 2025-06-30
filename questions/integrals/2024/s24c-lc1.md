---
topic: integrals
title: unlocked
desc: 
date: 2024 September
difficulty: based
tags:
  - sqrt
methods:
  - sub
---


## Question
```math
\int \frac{1}{\left(x+4\right)^{1/2}+\left(x+4\right)}\ dx
```


## Hints

### 1
$x$ is the same as $\left(\sqrt{x}\right)^2$.


## Answer
```math
2\ln\left(1+\sqrt{x+4}\right)-c
```


## Solution

### Substitute
```math
\begin{align*}
  \sqrt{x+4} &= t
  \\ x+4 &= t^{2}
  \\ dx &= 2t\ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ \int \frac{1}{\left(x+4\right)^{1/2}+\left(x+4\right)}\ dx
  \\ =&\ \int \frac{1}{t+t^{2}}\cdot2t\ dt
  \\ =&\ 2\int \frac{1}{1+t}\ dt
  \\ =&\ 2\ln\left(1+t\right)
  \\ =&\ 2\ln\left(1+\sqrt{x+4}\right)-c
\end{align*}
```
