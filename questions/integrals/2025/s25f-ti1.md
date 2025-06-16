---
topic: integrals
title: export
desc: 
date: 2025 January 26
tags:
  - dread
  - trig
  - arctrig
methods:
  - spot
---


## Question
```math
\int \sin\left(1+\cos^{-1}{x}\right)\ dx
```


## Hints

### 1
$\cos(\cos^{-1}{x})$ cancels to $x$.


## Answer
```math
\frac{\sin\left(1\right)}{2}x^{2}+\frac{\cos\left(1\right)}{2}\sin^{-1}x+\frac{\cos\left(1\right)}{2}x\sqrt{1-x^{2}}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \sin\left(1+\cos^{-1}x\right)\ dx
  \\ =&\ \int \sin\left(1\right)\cos\left(\cos^{-1}x\right)+\cos\left(1\right)\sin\left(\cos^{-1}x\right)\ dx
  \\ =&\ \sin\left(1\right)\int x\ dx+\cos\left(1\right)\int \sin\left(\cos^{-1}x\right)\ dx
  \\ =&\ \frac{\sin\left(1\right)}{2}x^{2}+\cos\left(1\right)\int \sin\left(\cos^{-1}x\right)\ dx
  \\ =&\ \frac{\sin\left(1\right)}{2}x^{2}+\cos\left(1\right)\int \sqrt{1-\cos^{2}\left(\cos^{-1}x\right)}\ dx
  \\ =&\ \frac{\sin\left(1\right)}{2}x^{2}+\cos\left(1\right)\int \sqrt{1-x^{2}}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  x &= \sin{t}
  \\ dx &= \cos{t}\ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \frac{\sin\left(1\right)}{2}x^{2}+\cos\left(1\right)\int \sqrt{1-\sin^{2}t}\cdot\cos t\ dt
  \\ &= \frac{\sin\left(1\right)}{2}x^{2}+\cos\left(1\right)\int \cos^{2}t\ dt
  \\ &= \frac{\sin\left(1\right)}{2}x^{2}+\cos\left(1\right)\int \frac{1}{2}\left(1+\cos2t\right)\ dt
  \\ &= \frac{\sin\left(1\right)}{2}x^{2}+\frac{\cos\left(1\right)}{2}t+\frac{\cos\left(1\right)}{4}\int 2\cos2t\ dt
  \\ &= \frac{\sin\left(1\right)}{2}x^{2}+\frac{\cos\left(1\right)}{2}t+\frac{\cos\left(1\right)}{4}\sin2t
  \\ &= \frac{\sin\left(1\right)}{2}x^{2}+\frac{\cos\left(1\right)}{2}\sin^{-1}x+\frac{\cos\left(1\right)}{2}\sin\left(t\right)\cos\left(t\right)
  \\ &= \frac{\sin\left(1\right)}{2}x^{2}+\frac{\cos\left(1\right)}{2}\sin^{-1}x+\frac{\cos\left(1\right)}{2}x\sqrt{1-x^{2}}-c
\end{align*}
```
