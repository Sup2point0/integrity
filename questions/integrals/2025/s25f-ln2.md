---
topic: integrals
title: details
desc: 
date: 2025 March 27
difficulty: incline
tags:
  - ln
methods:
  - spot
---


## Question
```math
\int
  \ln \left( x-x^2 \right) -
  \ln \left( 1-x \right)
\ dx
```


## Hints

### 1
Can you combine the logs?


## Answer
```math
x\ln x-x-c
```


## Solution

```math
\begin{align*}
  &\ \int \ln\left(x-x^{2}\right)-\ln\left(1-x\right)\ dx
  \\ =&\ \int \ln\left(\frac{x-x^{2}}{1-x}\right)\ dx
  \\ =&\ \int \ln\left(\frac{x\left(1-x\right)}{1-x}\right)\ dx
  \\ =&\ \int \ln x\ dx
  \\ =&\ x\ln x-x-c
\end{align*}
```
