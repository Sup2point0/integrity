---
topic: integrals
title: expletive
desc: 
date: 2024 December 17
tags:
  - exp
  - frac
method:
  - exp sub
---


## Question
```math
\int_{\ }^{\ }\frac{e^{3x}-e^{-x}}{e^{x}+e^{-x}}dx
```


## Answer
```math
\frac{1}{2}e^{2x}-x-c
```


## Solution

### Substitute
```math
\int_{\ }^{\ }\frac{e^{3x}-e^{-x}}{e^{x}+e^{-x}}dx
```

```math
\begin{align*}
  e^{x} &= t
  \\ e^{x}\ dx &= dt\
  \\ \ dx &= \frac{1}{t}\ dt
\end{align*}
```


### Solve
```math
\begin{align*}
  &= \int_{\ }^{\ }\frac{t^{3}-\frac{1}{t}}{t+\frac{1}{t}}\cdot\frac{1}{t}\ dt
  \\ &= \int_{\ }^{\ }\frac{t^{4}-1}{t^{2}+1}\cdot\frac{1}{t}\ dt
  \\ &= \int_{\ }^{\ }\frac{\left(t^{2}-1\right)\left(t^{2}+1\right)}{t\left(t^{2}+1\right)}\ dt
  \\ &= \int_{\ }^{\ }\frac{t^{2}-1}{t}\ dt
  \\ &= \int_{\ }^{\ }t-\frac{1}{t}\ dt
  \\ &= \frac{1}{2}t^{2}-\ln t
  \\ &= \frac{1}{2}e^{2x}-x-c
\end{align*}
```