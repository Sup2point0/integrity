---
topic: integrals
title: dindles
desc: Nah, I don’t really know what “dindles” are meant to be either.
date: 2025 June 17
tags:
  - ln
methods:
  - spot
  - layer cake
---


## Question
```math
\int
  \frac
    { \ln{x} - x\ln{x} }
    { 1 + x\ln{x} }
\ dx
```


## Hints

### 1
The derivative of $x\ln{x}$ is ...?

### 2
Try adding zero.

### 3
You’ll want a $1 + x\ln{x}$ on the top.


## Answer
```math
x-\ln\left(1+x\ln x\right)-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{\ln x-x\ln x}{1+x\ln x}\ dx
  \\ =&\ -\int \frac{x\ln x-\ln x}{1+x\ln x}\ dx
  \\ =&\ \int \frac{x\ln x-\ln x+1-1}{1+x\ln x}\ dx
  \\ =&\ \int \frac{1+x\ln x}{1+x\ln x}-\frac{1+\ln x}{1+x\ln x}\ dx
  \\ =&\ \int 1-\frac{\frac{1}{x}\cdot x+\ln x}{1+x\ln x}\ dx
  \\ =&\ x-\ln\left(1+x\ln x\right)-c
\end{align*}
```
