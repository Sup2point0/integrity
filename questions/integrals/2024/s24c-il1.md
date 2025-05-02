---
topic: integrals
title: inverted
desc: 
date: 2024 September
tags:
 - trig
  - ln
methods:
  - spot
  - layer cake
---


## Question
```math
\int \frac{\tan x}{\ln\left(\cos x\right)}\ dx
```


## Hints

### 1
How else could you write $\tan(x)$?

### 2
What’s left on top?

### 3
What’s the integral of $\tan(x)$?


## Answer
```math
-\ln\left(\ln\left(\cos x\right)\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{\tan x}{\ln\left(\cos x\right)}\ dx
  \\ =&\ \int \frac{\sin x}{\left(\cos x\right)\ln\left(\cos x\right)}\ dx
  \\ =&\ -\int \frac{-\sin x}{\left(\cos x\right)\ln\left(\cos x\right)}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \cos x &= t
  \\ -\sin x\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= -\int \frac{1}{t\ln t}\ dt
  \\ &= -\ln\left(\ln t\right)
  \\ &= -\ln\left(\ln\left(\cos x\right)\right)-c
\end{align*}
```
