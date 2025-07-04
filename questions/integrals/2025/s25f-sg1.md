---
topic: integrals
title: resolver
desc: 
date: 2025 June 12
difficulty: incline
tags:
  - scare
  - trig
methods:
  - speed
---


## Question
```math
\int
  \frac
    { \cos(x) \csc(x-\pi) \cot(x) }
    { \sin(x-\pi) \sec(x) \operatorname{sign}(x)}
\ dx
```


## Hints

### 1
Simplify, simplify, simplify!

### 2
All trig functions have periods $2\pi$.

### 3
What’s the relationship between $\operatorname{sign}(x)$ and $\displaystyle \frac{1}{\operatorname{sign}(x)}$?

### 4
What does $\operatorname{sign}(x)$ integrate to?


## Answer
```math
-\operatorname{sign}x\left[\frac{1}{2}\left(\cot x\right)^{2}+\ln\left(\sin x\right)\right]-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{\cos\left(x\right)\csc\left(x-\pi\right)\cot\left(x\right)}{\sin\left(x-\pi\right)\sec\left(x\right)\operatorname{sign}\left(x\right)}\ dx
  \\ =&\ \int \frac{\left(\cos x\right)\left(-\csc x\right)\left(\cot x\right)}{\left(-\sin x\right)\left(\sec x\right)}\cdot\frac{1}{\operatorname{sign}x}\ dx
  \\ =&\ \int \cot x\cdot\cot x\cdot\cot x\cdot\operatorname{sign}x\ dx
  \\ =&\ \operatorname{sign}x\int \left(\cot x\right)\left(\csc^{2}x-1\right)\ dx
  \\ =&\ \operatorname{sign}x\int \left(\cot x\right)\left(\csc^{2}x\right)-\left(\cot x\right)\ dx
  \\ =&\ -\operatorname{sign}x\int \left(\cot x\right)\left(-\csc^{2}x\right)+\left(\cot x\right)\ dx
  \\ =&\ -\operatorname{sign}x\left[\frac{1}{2}\left(\cot x\right)^{2}+\ln\left(\sin x\right)\right]-c
\end{align*}
```
