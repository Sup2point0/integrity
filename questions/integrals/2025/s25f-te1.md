---
topic: integrals
title: epinephrine
desc: 
date: 2025 May 26
difficulty: incline
tags:
  - trig
methods:
  - speed
---


## Question
```math
\int \frac{\sin2x}{\cos\left(x\right)^{4}-2\cos\left(x\right)^{2}+2}\ dx
```


## Hints

### 1
You generally want all trig functions in terms of the same argument.

### 2
If you have all $\cos(x)$-s and 1 $\sin(x)$ in the numerator, that screams... $cos(x)$ substitution!

### 3
This leaves you with a rational function, which can be nicely integrated.


## Answer
```math
\tan^{-1}\left(\sin^{2}x\right)-c
```


## Solution

### Double Angle Identity
```math
\begin{align*}
  &\ \int \frac{\sin2x}{\cos\left(x\right)^{4}-2\cos\left(x\right)^{2}+2}\ dx
  \\ =&\ \int \frac{2\sin x\cos x}{\left(\cos x\right)^{4}-2\left(\cos x\right)^{2}+2}\ dx
\end{align*}
```

### Substitute (1)
```math
\begin{align*}
  \cos{x} &= t
  \\ -\sin{t} \ dx &= dt
\end{align*}
```

### Complete the Square
```math
\begin{align*}
  &= -\int \frac{2t}{t^{4}-2t^{2}+2}\ dt
  \\ &= -\int \frac{2t}{\left(t^{2}-1\right)^{2}-1+2}\ dt
  \\ &= -\int \frac{2t}{\left(t^{2}-1\right)^{2}+1}\ dt
\end{align*}
```

### Substitute (2)
```math
\begin{align*}
  t^{2}-1 &= v
  \\ 2t\ dt &= dv
\end{align*}
```

### Solve
```math
\begin{align*}
  &= -\int \frac{1}{v^{2}+1}\ dv
  \\ &= -\tan^{-1}v
  \\ &= -\tan^{-1}\left(t^{2}-1\right)
  \\ &= -\tan^{-1}\left(\cos^{2}x-1\right)
  \\ &= \tan^{-1}\left(1-\cos^{2}x\right)
  \\ &= \tan^{-1}\left(\sin^{2}x\right)-c
\end{align*}
```
