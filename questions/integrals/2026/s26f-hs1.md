---
topic: integrals
title: partial application
desc:  
date:  2026 March 18
difficulty: manifold
tags:
  - ln
methods:
  - spot
  - arcprod
  - parts
flags:
  - feat
---


## Question
```math
\int \left(1+\ln x\right)\ln\left(\ln x\right)\ dx
```


## Hints

### 1
The $1+$ is relevant here!

### 2
Pivotal, even!

### 3
Starts with “p” and rhymes with *hearts*.


## Answer
```math
x\left(\ln x\right)\ln\left(\ln x\right)-x-c
```


## Solution

### Parts
```math
\begin{align*}
      f &= \ln\left(\ln x\right) \quad&\quad g' &= 1+\ln x
  \\ f' &= \frac{1}{x\ln x} \quad&\quad g &= \int 1+\ln x\ dx
  \\ && &= \int x\cdot\frac{1}{x}+1\cdot\ln x\ dx
  \\ && &= x\ln x
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ fg-\int f'g\ dx
  \\ =&\ x\left(\ln x\right)\ln\left(\ln x\right)-\int \frac{1}{x\ln x}\cdot x\ln x\ dx
  \\ =&\ x\left(\ln x\right)\ln\left(\ln x\right)-\int dx
  \\ =&\ x\left(\ln x\right)\ln\left(\ln x\right)-x-c
\end{align*}
```
