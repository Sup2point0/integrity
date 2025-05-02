---
topic: integrals
title: fractured hearted
desc: 
date: 2025 April 7
tags:
 - trig
methods:
  - work
---


## Question
```math
\int
  \frac
    { \sin(x/2) }
    { \cos(x/3) }
\ dx
```


## Hints

### 1
Can you write the fractions in terms of a common denominator?

### 2
Then you can make a substitution.

### 3
How can you split up the remaining trig using angle addition formulae?


## Answer
```math
-12\cos\left(\frac{x}{6}\right)-3\sqrt{2}\tanh^{-1}\left(\sqrt{2}\cos\left(\frac{x}{6}\right)\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{\sin\left(x/2\right)}{\cos\left(x/3\right)}\ dx
  \\ =&\ \int \frac{\sin\left(3x/6\right)}{\cos\left(2x/6\right)}\ dx
\end{align*}
```

### Substitute (1)
```math
\begin{align*}
  \frac{x}{6} &= t
  \\ x &= 6t
  \\ dx &= 6\ dt
\end{align*}
```

### Angle Addition
```math
\begin{align*}
  &= \int \frac{\sin\left(3t\right)}{\cos\left(2t\right)}\cdot6\ dt
  \\ &= 6\int \frac{\sin\left(2t+t\right)}{\cos\left(2t\right)}\ dt
  \\ &= 6\int \frac{\sin\left(2t\right)\cos\left(t\right)}{\cos\left(2t\right)}+\frac{\cos\left(2t\right)\sin\left(t\right)}{\cos\left(2t\right)}\ dt
  \\ &= 6\int \frac{2\sin\left(t\right)\cos\left(t\right)^{2}}{\cos\left(t\right)^{2}-\sin\left(t\right)^{2}}+\sin\left(t\right)\ dt
  \\ &= 12\int \frac{\cos\left(t\right)^{2}\cdot\sin\left(t\right)}{2\cos\left(t\right)^{2}-1}\ dt+6\int \sin t\ dt
  \\ &= -6\cos t-12\int \frac{\cos\left(t\right)^{2}\cdot-\sin\left(t\right)}{2\cos\left(t\right)^{2}-1}\ dt
\end{align*}
```

### Substitute (2)
```math
\begin{align*}
  \cos t=v
  \\ -\sin t\ dt=dv
\end{align*}
```

### Solve
```math
\begin{align*}
  &= -6\cos t-12\int \frac{v^{2}}{2v^{2}-1}\ dv
  \\ &= -6\cos t-6\int \frac{2v^{2}}{2v^{2}-1}\ dv
  \\ &= -6\cos t-6\int \frac{2v^{2}-1+1}{2v^{2}-1}\ dv
  \\ &= -6\cos t-6\int 1+\frac{1}{2v^{2}-1}\ dv
  \\ &= -6\cos t-6v+6\int \frac{1}{1-2v^{2}}\ dv
  \\ &= -6\cos t-6v+3\int \frac{1}{1/2-v^{2}}\ dv
  \\ &= -6\cos t-6v+3\sqrt{2}\tanh^{-1}\left(\sqrt{2}v\right)
  \\ &= -6\cos t-6\cos t+3\sqrt{2}\tanh^{-1}\left(\sqrt{2}\cos t\right)
  \\ &= -12\cos\left(\frac{x}{6}\right)-3\sqrt{2}\tanh^{-1}\left(\sqrt{2}\cos\left(\frac{x}{6}\right)\right)-c
\end{align*}
```
