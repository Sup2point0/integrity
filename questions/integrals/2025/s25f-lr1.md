---
topic: integrals
title: this reminds me of
desc: 
date: 2025 May 26
tags:
  - exp
  - ln
  - trig
methods:
  - 
---


## Question
```math
\int
  \ln(2^x) \sin(x^2)
\ dx
```


## Hints

### 1
What can you do with the power of $x$?

### 2
What’s $\ln(2)$?

### 3
Use the fact that $\ln(p^q) = q\ln(p)$.


## Answer
```math
-\frac{\ln2}{2}\cos\left(x^{2}\right)-c
```


## Solution

```math
\begin{align*}
  &\ \int \ln\left(2^{x}\right)\sin\left(x^{2}\right)\ dx
  \\ =&\ \int x\ln\left(2\right)\sin\left(x^{2}\right)\ dx
  \\ =&\ \frac{\ln2}{2}\int 2x\sin\left(x^{2}\right)\ dx
  \\ =&\ -\frac{\ln2}{2}\cos\left(x^{2}\right)-c
\end{align*}
```
