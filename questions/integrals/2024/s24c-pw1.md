---
topic: integrals
title: bewildering potential
desc: 
date: 2024 September
difficulty: based
tags:
  - trig
methods:
  - parts
---


## Question
```math
\int x\tan^{2}x\ dx
```


## Hints

### 1
How else could you write $\tan(x)^2$?

### 2
How could you integrate $\tan(x)^2$?


## Answer
```math
x\tan x+\ln\left(\cos x\right)-\frac{1}{2}x^{2}-c
```


## Solution

### Trig Identities
```math
\begin{align*}
  &\ \int x\tan^{2}x\ dx
  \\ =&\ \int x\left(\sec^{2}x-1\right)\ dx
  \\ =&\ \int x\sec x^{2}\ dx-\int x\ dx
\end{align*}
```

### Parts
```math
\begin{align*}
  &= x\tan x-\int \tan x\ dx-\frac{1}{2}x^{2}
  \\ &= x\tan x+\ln\left(\cos x\right)-\frac{1}{2}x^{2}-c
\end{align*}
```
