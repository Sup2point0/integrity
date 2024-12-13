---
topic: integrals
title: quotable
desc: 
date: 2024 December
tags:
  - poly
  - ln
  - frac
method:
  - layer cake
---


## Question
```math
\int \frac{1+x}{x^{2}+\ln\left(x^{x}\right)}\ dx
```


## Hint

### 1
$x^x$ is horrific.

### 2
There are a lot of $x$ here, aren’t there?


## Answer
```math
\ln\left(x+\ln x\right)-c
```


## Solution

### Solve
```math
\begin{align*}
  &= \int \frac{x+1}{x^{2}+x\ln x}\ dx
  \\ &= \int \frac{1+\frac{1}{x}}{x+\ln x}\ dx
  \\ &= \ln\left(x+\ln x\right)-c
\end{align*}
```
