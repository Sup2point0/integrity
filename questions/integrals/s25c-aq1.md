---
topic: integrals
title: INVERSION
desc: 
date: 2025 March 25
tags:
  - frac
  - sqrt
  - inverse trig
methods:
  - sub
---


## Question
```math
\int
  \frac
    { \cos^{-1}{x} }
    { \sqrt{1-x^2} \sqrt{1-\cos^{-1}{x}} }
\ dx
```


## Hints

### 1
What substitution would you make to get rid of $\cos^{-1}(x)$?


## Answer
```math
\frac{2}{3}\sqrt{1-\cos^{-1}x}\left(2+\cos^{-1}x\right)-c
```


## Solution

### Trigonometric Substitution
```math
\begin{align*}
  x &= \cos t \quad\to\quad \cos^{-1}x=t
  \\ dx &= -\sin t\ dt
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  &\ \int \frac{\cos^{-1}x}{\sqrt{1-x^{2}}\sqrt{1-\cos^{-1}x}}\ dx
  \\ =&\ \int \frac{t}{\sqrt{1-\cos^{2}t}\sqrt{1-t}}\cdot-\sin t\ dt
  \\ =&\ -\int \frac{t}{\sqrt{1-t}}\ dt
\end{align*}
```

### Substitute
```math
\begin{align*}
  1-t &= v \quad\to\quad t=1-v
  \\ -dt &= dv
\end{align*}
```

### Substitute
```math
\begin{align*}
  &= \int \frac{1-v}{\sqrt{v}}\ dv
  \\ &= \int \frac{1}{\sqrt{v}}-\sqrt{v}\ dv
  \\ &= 2\sqrt{v}-\frac{2}{3}v^{3/2}
  \\ &= \frac{2}{3}\sqrt{v}\left(3-v\right)
  \\ &= \frac{2}{3}\sqrt{1-t}\left(3-\left(1-t\right)\right)
  \\ &= \frac{2}{3}\sqrt{1-\cos^{-1}x}\left(2+\cos^{-1}x\right)-c
\end{align*}
```
