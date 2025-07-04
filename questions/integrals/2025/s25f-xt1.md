---
topic: integrals
title: morphling
desc: 
date: 2025 January 30
difficulty: incline
tags:
  - trig
methods:
  - spot
---


## Question
```math
\int
  \sin(4x)\cos(3x)^2 + \sin(3x)\cos(3x)\cos(4x) + \sin(3x)\cos(7x)
\ dx
```


## Hints

### 1
Do you spot any duplicate expressions?

### 2
You can factor out that duplicate expression.

### 3
You can do something with the leftover after factorising.


## Answer
```math
-\frac{1}{10}\cos\left(10x\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \sin(4x)\cos(3x)^{2}+\sin(3x)\cos(3x)\cos(4x)+\sin(3x)\cos(7x)\ dx
  \\ =&\ \int \left(\cos3x\right)\left(\sin4x\cos3x+\sin3x\cos4x\right)+\sin3x\cos7x\ dx
  \\ =&\ \int \left(\cos3x\right)\left(\sin\left(3x+4x\right)\right)+\sin3x\cos7x\ dx
  \\ =&\ \int \sin\left(3x+7x\right)\ dx
  \\ =&\ \int \sin\left(10x\right)\ dx
  \\ =&\ -\frac{1}{10}\cos\left(10x\right)-c
\end{align*}
```
