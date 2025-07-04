---
topic: integrals
title: last chance for freedom
desc: 
date: 2025 April 18
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
    {
      \left(
        \sin^2{x} + \sin{x}
      \right)
      \ln\left(
        \sin^2{x} + 2
      \right)
    }
    { \sec{x} + \tan{x} }
\ dx
```


## Hints

### 1
Instead of multiplying through by $\left( \sec{x} - \tan{x} \right)$, you may find it helpful to expand them into primitives.

### 2
Stuff cancels nicely!

### 3
The $+2$ is irrelevant.


## Answer
```math
\frac{1}{2}\left(\sin^{2}x+2\right)\left(\ln\left(\sin^{2}x+2\right)-1\right)-c
```


## Solution

### Simplify
```math
\begin{align*}
  &\ \int \frac{\left(\sin^{2}x+\sin x\right)\ln\left(\sin^{2}x+2\right)}{\sec x+\tan x}\ dx
  \\ =&\ \int \frac{\left(\sin^{2}x+\sin x\right)\ln\left(\sin^{2}x+2\right)}{\frac{1}{\cos x}+\frac{\sin x}{\cos x}}\ dx
  \\ =&\ \int \frac{\left(\sin x\right)\left(\sin x+1\right)\ln\left(\sin^{2}x+2\right)}{\frac{\sin x+1}{\cos x}}\ dx
  \\ =&\ \int \left(\sin x\right)\left(\cos x\right)\ln\left(\sin^{2}x+2\right)\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \sin^{2}x+2 &= t
  \\ 2\sin x\cos x\ dx &= dt
  \\ \sin x\cos x\ dx &= \frac{1}{2}\ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int \ln t\cdot\frac{1}{2}\ dt
  \\ &= \frac{1}{2}\left(t\ln t-t\right)
  \\ &= \frac{1}{2}t\left(\ln t-1\right)
  \\ &= \frac{1}{2}\left(\sin^{2}x+2\right)\left(\ln\left(\sin^{2}x+2\right)-1\right)-c
\end{align*}
```
