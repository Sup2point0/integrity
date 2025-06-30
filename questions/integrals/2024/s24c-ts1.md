---
topic: integrals
title: pulsar
desc: 
date: 2024 September
difficulty: based
tags:
  - trig
methods:
  - speed
  - sub
---


## Question
```math
\int \frac{\sin2x}{\sin x+1}\ dx
```


## Hints

### 1
How could you exand $\sin(2x)$?

### 2
What’s the derivative of $\sin(x)$?


## Answer
```math
2\sin x-2\ln\left(\sin x+1\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{\sin2x}{\sin x+1}\ dx
  \\ =&\ \int \frac{2\sin x\cos x}{\sin x+1}\ dx
  \\ =&\ 2\int \frac{\sin x}{\sin x+1}\cdot\cos x\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \sin x &= t
  \\ \cos x\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= 2\int \frac{t}{t+1}\ dt
  \\ &= 2\int \frac{t+1-1}{t+1}\ dt
  \\ &= 2\int 1-\frac{1}{t+1}\ dt
  \\ &= 2t-2\ln\left(t+1\right)
  \\ &= 2\sin x-2\ln\left(\sin x+1\right)-c
\end{align*}
```
