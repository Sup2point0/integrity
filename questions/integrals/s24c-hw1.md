---
topic: integrals
title: trick or treat
desc: 
date: 2024 December 13
tags:
  - ln
  - exp
methods:
  - acc
---


## Question
```math
\int 2\ln\left(e\cdot2^{x}\right)\ dx
```


## Hints

### 1
How can you separate the $e$ and $2^x$?


## Answer
```math
2x+x^{2}\ln2-c
```


## Solution

```math
\begin{align*}
  &\ \int 2\ln\left(e\cdot2^{x}\right)\ dx
  \\ =&\ \int 2\left(\ln e+x\ln2\right)\ dx
  \\ =&\ \ 2\int dx+\ln2\int 2x\ dx
  \\ =&\ 2x+x^{2}\ln2-c
\end{align*}
```
