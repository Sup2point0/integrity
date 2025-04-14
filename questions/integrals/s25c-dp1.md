---
topic: integrals
title: dauntless
desc: 
date: 2025 March 23
tags:
  - frac
  - poly
methods:
  - parts
---


## Question
```math
\int
  \frac
    {x+99}
    {(99-x)^2}
\ dx
```


## Answer
```math
\frac{x+99}{99-x}+\ln\left(99-x\right)-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{x+99}{\left(99-x\right)^{2}}\ dx
  \\ =&\ \int \left(x+99\right)\cdot\frac{1}{\left(99-x\right)^{2}}\ dx
  \\ =&\ \left(x+99\right)\cdot\frac{1}{99-x}-\int 1\cdot\frac{1}{99-x}\ dx
  \\ =&\ \frac{x+99}{99-x}+\ln\left(99-x\right)-c
\end{align*}
```
