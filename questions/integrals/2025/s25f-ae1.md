---
topic: integrals
title: ambidextrous
desc: 
date: 2025 June 1
difficulty: incline
tags:
  - exp
  - hyp trig
methods:
  - speed
---


## Question
```math
\int
  \frac
    { 77^x }
    {
      \left(
        \sinh{x} + \cosh{x}
      \right)^{ \ln{77} } + 1
    }
\ dx
```


## Hints

### 1
How can you simplify $\sinh(x) + \cosh(x)$?

### 2
Write $\sinh(x)$ as $(e^x - e^{-x})/2$.


## Answer
```math
\frac{1}{\ln77}\ln\left(77^{x}+1\right)-c
```


## Solution

### Simplify (1)
```math
\begin{align*}
  \sinh x+\cosh x
    &= \frac{1}{2}\left(e^{x}-e^{-x}\right)+\frac{1}{2}\left(e^{x}+e^{-x}\right)
  \\ &= \frac{1}{2}\left(e^{x}+e^{x}\right)
  \\ &= e^x
\end{align*}
```

### Simplify (2)
```math
\begin{align*}
  &\ \int \frac{77^{x}}{\left(\sinh x+\cosh x\right)^{\ln77}+1}\ dx
  \\ =&\ \int \frac{77^{x}}{\left(\sinh x+\cosh x\right)^{x\ln77}+1}\ dx
  \\ =&\ \int \frac{77^{x}}{\left(e^{x}\right)^{\ln77}+1}\ dx
  \\ =&\ \int \frac{77^{x}}{77^{x}+1}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  77^{x} &= t
  \\ e^{\left(\ln77\right)x} &= t
  \\ \left(\ln77\right)e^{\left(\ln77\right)x}\ dx &= dt
  \\ 77^{x}\ dx &= \frac{1}{\ln77}\ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int \frac{1}{t+1}\cdot\frac{1}{\ln77}\ dt
  \\ &= \frac{1}{\ln77}\ln\left(t+1\right)
  \\ &= \frac{1}{\ln77}\ln\left(77^{x}+1\right)-c
\end{align*}
```
