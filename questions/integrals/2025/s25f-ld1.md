---
topic: integrals
title: last sunrise
desc: 
date: 2025 June 19
difficulty: incline
tags:
  - trig
  - ln
methods:
  - trap
---


## Question
```math
\int
  \frac{1}{
    ( \sin{x} )
    ( \cos{x} )
    \ln( \tan{x} )
  }
\ dx
```


## Hints

### 1
The $\displaystyle \frac{1}{\cos(x)}$ can transform into a $\sec(x)$.

### 2
Look for the derivative of $\tan(x)$.

### 3
How could you turn $\sin(x)$ into $\tan(x)$?


## Answer
```math
\ln\left(\ln\left(\tan x\right)\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{1}{\left(\sin x\right)\left(\cos x\right)\ln\left(\tan x\right)}\ dx
  \\ =&\ \int \frac{1}{\left(\sin x\right)\left(\cos x\right)\ln\left(\tan x\right)}\cdot\frac{\sec^{2}x}{\sec^{2}x}\ dx
  \\ =&\ \int \frac{\sec^{2}x}{\left(\tan x\right)\ln\left(\tan x\right)}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \tan x=t
  \\ \sec^{2}x\ dx
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int \frac{1}{t\ln t}\ dt
  \\ &= \ln\left(\ln t\right)
  \\ &= \ln\left(\ln\left(\tan x\right)\right)-c
\end{align*}
```
