---
topic: integrals
title: honest work
desc: 
date: 2025 May 15
tags:
  - sqrt
  - arctrig
methods:
  - trig sub
---


## Question
```math
\int
  \frac
    { \sqrt{ 2\tan^{-1}{x} } }
    { x^2 + 1 }
\ dx
```


## Hints

### 1
What’s the derivative of $\tan^{-1}(x)$?


## Answer
```math
\frac{2\sqrt{2}}{3}\left(\arctan x\right)^{3/2}-c
```


## Solution

### Substitute
```math
\begin{align*}
  2\tan^{-1}x &= t
  \\ \frac{2}{x^{2}+1}\ dx &= dt
\end{align*}
```

### Reshape
```math
\begin{align*}
  &\ \int \frac{\sqrt{2\tan^{-1}x}}{x^{2}+1}\ dx
  \\ =&\ \frac{1}{2}\int \sqrt{t}\ dt
  \\ =&\ \frac{1}{2}\cdot\frac{2}{3}t^{3/2}
  \\ =&\ \frac{1}{3}\left(2\arctan x\right)^{3/2}
  \\ =&\ \frac{2\sqrt{2}}{3}\left(\arctan x\right)^{3/2}-c
\end{align*}
```
