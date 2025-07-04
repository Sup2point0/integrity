---
topic: integrals
title: food for thought
desc: 
date: 2025 April 1
difficulty: based
tags:
  - exp
methods:
  - 
---


## Question
```math
\int
  \frac
    { e^x - 1 }
    { e^x + 1 }
\ dx
```


## Answer
```math
2\ln\left(e^{x}+1\right)-x-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{e^{x}-1}{e^{x}+1}\ dx
  \\ =&\ \int \frac{e^{x}+1-2}{e^{x}+1}\ dx
  \\ =&\ \int 1-\frac{2}{e^{x}+1}\ dx
  \\ =&\ x-2\int \frac{1}{1+e^{x}}\ dx
  \\ =&\ x-2\int \frac{1+e^{x}-e^{x}}{1+e^{x}}\ dx
  \\ =&\ x-2\int 1-\frac{e^{x}}{1+e^{x}}\ dx
  \\ =&\ x-2x+2\ln\left(1+e^{x}\right)
  \\ =&\ 2\ln\left(e^{x}+1\right)-x-c
\end{align*}
```
