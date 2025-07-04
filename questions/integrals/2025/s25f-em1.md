---
topic: integrals
title: unfazed
desc: 
date: 2025 January 18
difficulty: based
tags:
  - scare
  - exp
  - ln
methods:
  - free
---


## Question
```math
\int
  \left(e^2\right)^{\ln(x^2)}
\ dx
```


## Hints

### 1
What can you do with $\ln(x^2)$?

### 2
What can you do with the powers of $e$?

### 3
What can you do with $e^{\ln{x}}$?


## Answer
```math
\frac{1}{5} x^5 - c
```


## Solution

```math
\begin{align*}
  &\ \int \left(e^{2}\right)^{\ln\left(x^{2}\right)}\ dx
  \\ =&\ \int e^{\left(2\cdot2\ln x\right)}\ dx
  \\ =&\ \int x^{4}\ dx
  \\ =&\ \frac{1}{5}x^{5}-c
\end{align*}
```
