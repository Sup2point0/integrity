---
topic: integrals
title: claps
desc: 
date: 2025 June 12
tags:
  - trig
methods:
  - speed
---


## Question
```math
\int
  \frac
    { \sin{4x} }
    { 4\sin{x} }
\ dx
```


## Hints

### 1
How can you expand $\sin(4x)$?

### 2
How can you expand $\sin(2x)$?

### 3
How can you expand $\cos(2x)$?


## Answer
```math
\sin x-\frac{2}{3}\left(\sin x\right)^{3}-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{\sin4x}{4\sin x}\ dx
  \\ =&\ \int \frac{2\sin2x\cos2x}{4\sin x}\ dx
  \\ =&\ \int \frac{\left(2\sin x\cos x\right)\left(\cos^{2}x-\sin^{2}x\right)}{2\sin x}\ dx
  \\ =&\ \int \left(\cos x\right)\left(1-2\sin^{2}x\right)\ dx
  \\ =&\ \int \cos x-2\sin^{2}x\cos x\ dx
  \\ =&\ \sin x-\frac{2}{3}\left(\sin x\right)^{3}-c
\end{align*}
```
