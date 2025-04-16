---
topic: integrals
title: candid
desc: 
date: 2025 February 18
tags:
  - dread
  - sqrt
  - trig
methods:
  - sub
---


## Question
```math
\int \cot x\sqrt{\sin x}\ dx
```


## Hints

### 1
Expand $\cot(x)$.


## Answer
```math
2\sqrt{\sin x}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \cot x\sqrt{\sin x}\ dx
  \\ =&\ \int \frac{\cos x}{\sin x}\sqrt{\sin x}\ dx
  \\ =&\ \int \frac{\cos x}{\sqrt{\sin x}}\ dx
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
  &= \int \frac{1}{\sqrt{t}}\ dt
  \\ &= 2\sqrt{t}
  \\ &= 2\sqrt{\sin x}-c
\end{align*}
```
