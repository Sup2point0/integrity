---
topic: integrals
title: envoy of the end
desc: 
date: 2025 June 19
difficulty: based
tags:
  - trig
methods:
  - speed
---


## Question
```math
\int \frac{1}{\cos x+\sec x}\ dx
```


## Hints

### 1
Getting rid of the mini denominators is a good approach.

### 2
This leaves a $\cos(x)$ on top.

### 3
That’s screaming a $\sin(x)$ substitution, so how could you get only terms of $\sin(x)$ in the denominator?


## Answer
```math
\frac{\sqrt{2}}{2}\tanh^{-1}\left(\frac{\sqrt{2}}{2}\sin x\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{1}{\cos x+\sec x}\ dx
  \\ =&\ \int \frac{1}{\cos x+\sec x}\cdot\frac{\cos x}{\cos x}\ dx
  \\ =&\ \int \frac{\cos x}{\cos^{2}x+1}\ dx
  \\ =&\ \int \frac{\cos x}{1-\sin^{2}x+1}\ dx
  \\ =&\ \int \frac{\cos x}{2-\sin^{2}x}\ dx
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
  &= \int \frac{1}{2-t^{2}}\ dt
  \\ &= \frac{1}{\sqrt{2}}\tanh^{-1}\left(\frac{1}{\sqrt{2}}t\right)
  \\ &= \frac{\sqrt{2}}{2}\tanh^{-1}\left(\frac{\sqrt{2}}{2}\sin x\right)-c
\end{align*}
```
