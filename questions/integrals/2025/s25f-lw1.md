---
topic: integrals
title: lukewarm
desc: 
date: 2025 March 27
tags:
  - poly
methods:
  - trig sub
---


## Question
```math
\int
  \frac
    { x^2 }
    { (x^6 + 1)^2 }
\ dx
```


## Hints

### 1
Expanding won’t help.

### 2
What if you write $x^6$ as $\left( x^3 \right)^2$?

### 3
Use a trig sub!


## Answer
```math
\frac{1}{6}\left[\tan^{-1}\left(x^{3}\right)+\frac{x^{3}}{x^{6}+1}\right]-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{x^{2}}{\left(x^{6}+1\right)^{2}}\ dx
  \\ =&\ \int \frac{x^{2}}{\left(\left(x^{3}\right)^{2}+1\right)^{2}}\ dx
  \\ =&\ \frac{1}{3}\int \frac{3x^{2}}{\left(\left(x^{3}\right)^{2}+1\right)^{2}}\ dx
\end{align*}
```

### Substitute (1)
```math
\begin{align*}
  x^3 &= t
  \\ 3x^2 \ dx &= dt
\end{align*}
```

### Simplify
```math
\frac{1}{3}\int \frac{1}{\left(t^{2}+1\right)^{2}}\ dt
```

### Substitute (2)
```math
\begin{align*}
  t &= \tan v
  \\ dt &= \sec^{2}v\ dv
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \frac{1}{3}\int \frac{1}{\left(\tan^{2}v+1\right)^{2}}\cdot\sec^{2}v\ dv
  \\ &= \frac{1}{3}\int \frac{1}{\sec^{4}v}\cdot\sec^{2}v\ dv
  \\ &= \frac{1}{3}\int \cos^{2}v\ dv
  \\ &= \frac{1}{6}\int 1+\cos2v\ dv
  \\ &= \frac{1}{6}v+\frac{1}{12}\sin2v
  \\ &= \frac{1}{6}\left[v+\sin v\cos v\right]
\end{align*}
```

### Reformulate
```math
\begin{align*}
  &= \frac{1}{6}\left[\tan^{-1}t+\left(\frac{t}{\sqrt{t^{2}+1}}\right)\left(\frac{1}{\sqrt{t^{2}+1}}\right)\right]
  \\ &= \frac{1}{6}\left[\tan^{-1}t+\frac{t}{t^{2}+1}\right]
  \\ &= \frac{1}{6}\left[\tan^{-1}\left(x^{3}\right)+\frac{x^{3}}{x^{6}+1}\right]-c
\end{align*}
```
