---
topic: integrals
title: doable
desc: 
date: 2024 September
difficulty: based
tags:
  - sqrt
  - trig
methods:
  - speed
  - parts
---


## Question
```math
\int \sin\sqrt{x}\ dx
```


## Hints

### 1
Substitute!

### 2
Let $\sqrt{x} = t$.


## Answer
```math
-2\sqrt{x}\cos\sqrt{x}+2\sin\sqrt{x}-c
```


## Solution

### Substitute
```math
\begin{align*}
  \sqrt{x} &= t
  \\ x &= t^{2}
  \\ dx &= 2t\ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ \int \sin\sqrt{x}\ dx
  \\ =&\ \int \sin t\cdot2t\ dt
  \\ =&\ 2\int t\sin t\ dt
\end{align*}
```

### Parts
```math
\begin{align*}
  &= 2\left(t\cdot-\cos t-\int -\cos t\ dt\right)
  \\ &= -2t\cos t+2\sin t
  \\ &= -2\sqrt{x}\cos\sqrt{x}+2\sin\sqrt{x}-c
\end{align*}
```
