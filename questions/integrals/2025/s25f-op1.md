---
topic: integrals
title: over pressure
desc: 
date: 2025 June 12
difficulty: incline
tags:
  - trig
  - ln
methods:
  - 
---


## Question
```math
\int
  \frac
    { \ln(\sin^2{x}) + \ln(\cos^2{x}) }
    { \csc{4x} }
\ dx
```


## Hints

### 1
How can you expand $\csc(4x)$?

### 2
How can you combine the logs?

### 3
How can morph every trig function’s argument to $2x$?


## Answer
```math
\left(\sin2x\right)^{2}\ln\left(\frac{\sin2x}{2}\right)-\frac{1}{2}\left(\sin2x\right)^{2}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{\ln\left(\sin^{2}x\right)+\ln\left(\cos^{2}x\right)}{\csc4x}\ dx
  \\ =&\ \int \left(\sin4x\right)\ln\left(\left(\sin x\cos x\right)^{2}\right)\ dx
  \\ =&\ \int \left(2\sin2x\cos2x\right)\left(2\ln\left(\frac{\sin2x}{2}\right)\right)\ dx
  \\ =&\ 8\int \frac{\sin2x}{2}\ln\left(\frac{\sin2x}{2}\right)\cdot\cos2x\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \frac{\sin2x}{2} &= t
  \\ \cos2x\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= 8\int t\ln t\ dt
  \\ &= 8\left[\frac{1}{2}t^{2}\ln t-\int \frac{1}{2}t^{2}\cdot\frac{1}{t}\ dt\right]
  \\ &= 4t^{2}\ln t-4\int t\ dt
  \\ &= 4t^{2}\ln t-2t^{2}
  \\ &= 4\left(\frac{\sin2x}{2}\right)^{2}\ln\left(\frac{\sin2x}{2}\right)-2\left(\frac{\sin2x}{2}\right)^{2}
  \\ &= \left(\sin2x\right)^{2}\ln\left(\frac{\sin2x}{2}\right)-\frac{1}{2}\left(\sin2x\right)^{2}-c
\end{align*}
```
