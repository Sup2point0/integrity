---
topic: integrals
title: slaughtered
desc: 
date: 2025 June 9
difficulty: manifold
tags:
  - ln
methods:
  - spot
---


## Question
```math
\int \frac{\ln\left(x\right)+1}{x\ln\left(x\right)^{2}+x\left(\ln x\right)\ln\left(\ln x\right)}\ dx
```


## Hints

### 1
Starts with “f” and rhymes with *tractorise*.

### 2
You can combine $\ln(p) + \ln(q)$.

### 3
What’s the derivative of $x\ln(x)$?


## Answer
```math
\ln\left(\ln\left(x\ln x\right)\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{\ln\left(x\right)+1}{x\ln\left(x\right)^{2}+x\left(\ln x\right)\ln\left(\ln x\right)}\ dx
  \\ =&\ \int \frac{\ln x+1}{\left(x\ln x\right)\left(\ln x+\ln\left(\ln x\right)\right)}\ dx
  \\ =&\ \int \frac{\ln x+1}{\left(x\ln x\right)\left(\ln\left(x\ln x\right)\right)}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  x\ln x &= t
  \\ \left(\ln x+1\right)\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int \frac{1}{t\ln t}\ dt
  \\ &= \ln\left(\ln t\right)
  \\ &= \ln\left(\ln\left(x\ln x\right)\right)-c
\end{align*}
```
