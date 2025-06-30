---
topic: integrals
title: first love
desc: This was the first integral I ever wrote!
date: 2024 September
difficulty: based
tags:
  - trig
methods:
  - speed
  - acc
  - parts
---


## Question
```math
\int 9x\sin9x\ dx
```


## Answer
```math
-x\cos9x+\frac{1}{9}\sin9x-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int 9x\sin9x\ dx
  \\ =&\ \frac{1}{9}\int 9x\sin9x\cdot9\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  9x &= t
  \\ 9\ dx &= dt
\end{align*}
```

### Parts
```math
\begin{align*}
  &= \frac{1}{9}\int t\sin t\ dt
  \\ &= \frac{1}{9}\left(t\cdot-\cos t-\int -\cos t\ dt\right)
  \\ &= \frac{1}{9}\left(-t\cos t+\sin t\right)
  \\ &= -x\cos9x+\frac{1}{9}\sin9x-c
\end{align*}
```
