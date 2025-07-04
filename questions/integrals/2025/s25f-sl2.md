---
topic: integrals
title: splendid
desc: 
date: 2025 February 5
difficulty: incline
tags:
  - ln
methods:
  - spot
  - layer cake
---


## Question
```math
\int \frac{1+\ln x}{1+x\ln x}\ dx
```


## Hints

### 1
Don’t split up the integral.

### 2
What does $\ln(x)$ differentiate to?

### 3
What if you ignore the $1+$ in the denominator?


## Answer
```math
\ln\left(1+x\ln x\right)-c
```


## Solution

### Layer Cake
```math
\begin{align*}
  \frac{d}{dx}\left(1+x\ln x\right)
    &= \frac{d}{dx}\left(x\ln x\right)
  \\ &= \ln x+\frac{x}{x}
  \\ &= 1+\ln x
\end{align*}
```

```math
\Rightarrow \int \frac{1+\ln x}{1+x\ln x}\ dx
  = \ln\left(1+x\ln x\right)-c
```
