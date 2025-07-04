---
topic: integrals
title: hold on
desc: 
date: 2025 June 19
difficulty: incline
tags:
  - trig
methods:
  - poly angle
  - tan half angle sub
---


## Question
```math
\int
  \sec(2x)
  \sin\left(
    x + \frac{\pi}{4}
  \right)
\ dx
```


## Hints

### 1
Hold on, this isn’t really a nice integral.

### 2
Start by expanding using compound angle formulae.

### 3
Then tangent half-angle substitution might be the safest approach.


## Answer
```math
\tanh^{-1}\left(\frac{\sqrt{2}}{2}\tan\left(\frac{x}{2}\right)+\frac{\sqrt{2}}{2}\right)-c
```


## Solution

### Angle Addition
```math
\begin{align*}
  &\ \int \sec\left(2x\right)\sin\left(x+\frac{\pi}{4}\right)\ dx
  \\ =&\ \int \frac{1}{\cos\left(2x\right)}\sin\left(x+\frac{\pi}{4}\right)\ dx
  \\ =&\ \int \frac{1}{\cos^{2}x-\sin^{2}x}\left(\sin\left(x\right)\cos\left(\frac{\pi}{4}\right)+\cos\left(x\right)\sin\left(\frac{\pi}{4}\right)\right)\ dx
  \\ =&\ \int \frac{1}{\cos^{2}x-\sin^{2}x}\left(\frac{\sqrt{2}}{2}\sin x+\frac{\sqrt{2}}{2}\cos x\right)\ dx
  \\ =&\ \frac{\sqrt{2}}{2}\int \frac{\sin x+\cos x}{\cos^{2}x-\sin^{2}x}\ dx
  \\ =&\ \frac{\sqrt{2}}{2}\int \frac{\sin x+\cos x}{\left(\cos x-\sin x\right)\left(\cos x+\sin x\right)}\ dx
  \\ =&\ \frac{\sqrt{2}}{2}\int \frac{1}{\cos-\sin x}\ dx
\end{align*}
```

### Tangent Half-Angle Substitution
```math
\begin{align*}
  \tan\left(\frac{x}{2}\right) &= t
  \\ dx &= \frac{2}{1+t^{2}}\ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \frac{\sqrt{2}}{2}\int \frac{1}{\frac{1-t^{2}}{1+t^{2}}-\frac{2t}{1+t^{2}}}\cdot\frac{2}{1+t^{2}}\ dt
  \\ &= \sqrt{2}\int \frac{1}{1-t^{2}-2t}\ dt
  \\ &= -\sqrt{2}\int \frac{1}{t^{2}+2t-1}\ dt
  \\ &= -\sqrt{2}\int \frac{1}{\left(t+1\right)^{2}-2}\ dt
  \\ &= \sqrt{2}\int \frac{1}{2-\left(t+1\right)^{2}}\ dt
  \\ &= \frac{\sqrt{2}}{\sqrt{2}}\tanh^{-1}\left(\frac{1}{\sqrt{2}}\left(t+1\right)\right)
  \\ &= \tanh^{-1}\left(\frac{\sqrt{2}}{2}\tan\left(\frac{x}{2}\right)+\frac{\sqrt{2}}{2}\right)-c
\end{align*}
```
