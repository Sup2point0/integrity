---
topic: integrals
title: chillout
desc: 
date: 2025 June 12
tags:
  - ln
methods:
  - fun
  - speed
---


## Question
```math
\int
  \frac{1}
    { \log_{x}(2) }
\ dx
```


## Hints

### 1
How do you change the base of a logarithm?

### 2
Use the fact that $\displaystyle \log_b(x) = \frac{\log{x}}{\log{b}}$.


## Answer
```math
\frac{1}{\ln2}\left(x\ln x-x\right)-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{1}{\log_{x}\left(2\right)}\ dx
  \\ =&\ \int \left(\frac{\ln2}{\ln x}\right)^{-1}\ dx
  \\ =&\ \frac{1}{\ln2}\int \ln x\ dx
  \\ =&\ \frac{1}{\ln2}\left(x\ln x-x\right)-c
\end{align*}
```
