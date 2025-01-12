---
topic: integrals
title: abode
desc: 
date: 2024 December
tags:
  - poly
  - ln
method:
  - spot
---


## Question
```math
\int \ln\left(4x-12+9x^{-1}\right)\ dx
```


## Hint

### 1
What do we usually do when we have a polynomial, but with a division by $x$?

### 2
Multiply through by $x$.

### 3
If you multiply by $x$, you also need to divide by $x$.


## Answer
```math
\left(2x-3\right)\ln\left(2x-3\right)-x\ln x-x+3-c
```


## Solution

### Solve
```math
\begin{align*}
  &= \int \ln\left(4x-12+\frac{9}{x}\right)\ dx
  \\ &= \int \ln\left(\frac{4x^{2}-12x+9}{x}\right)\ dx
  \\ &= \int \ln\left(\left(2x-3\right)^{2}\right)-\ln\left(x\right)\ dx
  \\ &= 2\int \ln\left(2x-3\right)-\int \ln x\ dx
  \\ &= \left(2x-3\right)\ln\left(2x-3\right)-\left(2x-3\right)-\left(x\ln x-x\right)
  \\ &= \left(2x-3\right)\ln\left(2x-3\right)-2x+3-x\ln x+x-c
  \\ &= \left(2x-3\right)\ln\left(2x-3\right)-x\ln x-x+3-c
\end{align*}
```
