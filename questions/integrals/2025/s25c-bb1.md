---
topic: integrals
title: "b(r[a{ck}e]t)s"
desc: 
date: 2025 March 17
tags:
  - scare
  - ln
methods:
  - speed
---


## Question
```math
\int
  \int
    \int
      \frac
        { 1 }
        { \ln(x^y) \ln(y^z) \ln(z^x) }
      \ dx
  \ dy
\ dz
```


## Hints

### 1
Log laws!

### 2
Multiplication!

### 3
If integrating $x$ with respect to $y$, just treat $x$ as a constant.


## Answer
```math
\left(\ln\left(\ln x\right)-c_{1}\right)\left(\ln\left(\ln y\right)-c_{2}\right)\left(\ln\left(\ln z\right)-c_{3}\right)
```


## Solution

```math
\begin{align*}
  &\ \int \int \int \frac{1}{\ln\left(x^{y}\right)\ln\left(y^{z}\right)\ln\left(z^{x}\right)}\ dx\ dy\ dz
  \\ =&\ \int \int \int \frac{1}{\left(y\ln x\right)\left(z\ln y\right)\left(x\ln z\right)}\ dx\ dy\ dz
  \\ =&\ \int \int \int \frac{1}{\left(x\ln x\right)\left(y\ln y\right)\left(z\ln z\right)}\ dx\ dy\ dz
  \\ =&\ \int \frac{1}{x\ln x}\ dx\cdot\int \frac{1}{y\ln y}\ dy\cdot\int \frac{1}{z\ln z}\ dz
  \\ =&\ \left(\ln\left(\ln x\right)-c_{1}\right)\left(\ln\left(\ln y\right)-c_{2}\right)\left(\ln\left(\ln z\right)-c_{3}\right)
\end{align*}
```
