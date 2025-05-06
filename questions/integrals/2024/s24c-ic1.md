---
topic: integrals
title: bewildering
desc: 
date: 2024 September
tags:
  - trig
methods:
  - sub
---


## Question
```math
\int \frac{\sin x}{\left(\cos x\right)^{4}}\ dx
```


## Hints

### 1
What’s the derivative of $\cos(x)$?

### 2
How could you get the derivative of top?


## Answer
```math
\frac{1}{3}\left(\sec x\right)^{3}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{\sin x}{\left(\cos x\right)^{4}}\ dx
  \\ =&\ -\int \frac{-\sin x}{\left(\cos x\right)^{4}}\ dx
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
  &= -\int \frac{1}{t^{4}}\ dt
  \\ &= \frac{1}{3t^{3}}
  \\ &= \frac{1}{3\left(\cos x\right)^{3}}
  \\ &= \frac{1}{3}\left(\sec x\right)^{3}-c
\end{align*}
```
