---
topic: integrals
title: straight-up
desc: 
date: 2024 September
tags:
 - exp
methods:
  - spot
  - layer cake
---


## Question
```math
\int \frac{e^{x}+1}{x+e^{x}}\ dx
```


## Hints

### 1
What’s the derivative of $e^x$?

### 2
What’s the derivative of $x$?


## Answer
```math
\ln\left(x+e^{x}\right)-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{e^{x}+1}{x+e^{x}}\ dx
  \\ =&\ \int \frac{1+e^{x}}{x+e^{x}}\ dx
  \\ =&\ \ln\left(x+e^{x}\right)-c
\end{align*}
```
