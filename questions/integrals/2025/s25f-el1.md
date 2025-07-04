---
topic: integrals
title: futures
desc: 
date: 2025 March 27
difficulty: incline
tags:
  - exp
  - ln
methods:
  - sub
  - spot
---


## Question
```math
\int \frac{1}{\left(e^{x}+1\right)\ln\left(e^{-x}+1\right)}\ dx
```


## Hints

### 1
Start with a substitution.

### 2
Try cancel out stuff on the outside.

### 3
Straight-up layer cake!


## Answer
```math
-\ln\left(\ln\left(e^{-x}+1\right)\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{1}{\left(e^{x}+1\right)\ln\left(e^{-x}+1\right)}\ dx
  \\ =&\ \int \frac{1}{\left(e^{x}+1\right)\ln\left(e^{-x}+1\right)}\cdot\frac{e^{-x}}{e^{-x}}\ dx
  \\ =&\ \int \frac{e^{-x}}{\left(1+e^{-x}\right)\ln\left(e^{-x}+1\right)}\ dx
  \\ =&\ -\int \frac{-e^{-x}}{\left(e^{-x}+1\right)\ln\left(e^{-x}+1\right)}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  e^{-x}+1 &= t
  \\ -e^{-x}\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= -\int \frac{1}{t\ln t}\ dt
  \\ &= -\ln\left(\ln t\right)
  \\ &= -\ln\left(\ln\left(e^{-x}+1\right)\right)-c
\end{align*}
```
