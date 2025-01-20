---
topic: integrals
title: target practice
desc: 
date: 2025 January 19
tags:
  - fun
  - exp
method:
  - work
---


## Question
```math
\int
  2^x \, 4^x \, 8^x ... 256^x
\ dx
```


## Hints

### 1
When we’re dealing with exponents, we often want them in terms of the same base.


## Answer
```math
\frac{1}{36\ln2}2^{36x}-c
```


## Solution

### Solve
```math
\begin{align*}
  &\ \int 2^{x}\ 4^{x}\ 8^{x}\ ...\ 256^{x}\ dx
  \\ =&\ \int 2^{x}\ 2^{2x}\ 2^{3x}\ ...\ 2^{8x}\ dx
  \\ =&\ \int 2^{\left(x+2x+3x+...+8x\right)}\ dx
  \\ =&\ \int 2^{36x}\ dx
  \\ =&\ \int e^{\left(\ln2\right)\left(36x\right)}\ dx
  \\ =&\ \int e^{\left(36\ln2\right)x}\ dx
  \\ =&\ \frac{1}{36\ln2}e^{\left(36\ln2\right)x}
  \\ =&\ \frac{1}{36\ln2}2^{36x}-c
\end{align*}
```
