---
topic: integrals
title: priorities
desc: 
date: 2025 March 31
tags:
  - sqrt
  - inverse trig
methods:
  - sub
---


## Question
```math
\int
  \frac
    { \cos^{-1}{\sqrt{x}} }
    { \sqrt{1 - x} }
\ dx
```


## Hints

### 1
$\sqrt{x}$ is generally always a safe substitution to make.

### 2
Now we need a trig substitution!


## Answer
```math
-2\sqrt{1-x}\left(\cos^{-1}\sqrt{x}\right)-2\sqrt{x}-c
```


## Solution

### Substitute (1)
```math
\begin{align*}
  \sqrt{x} &= t
  \\ x &= t^{2}
  \\ dx &= 2t\ dt
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  &\ \int \frac{\cos^{-1}\sqrt{x}}{\sqrt{1-x}}\ dx
  \\ =&\ \int \frac{\cos^{-1}t}{\sqrt{1-t^{2}}}\cdot2t\ dt
  \\ =&\ 2\int \frac{t\cos^{-1}t}{\sqrt{1-t^{2}}}\ dt
\end{align*}
```

### Substitute (2)
```math
\begin{align*}
  t &= \cos v \quad\to\quad \cos^{-1}t = v
  \\ dt &= -\sin v\ dv
\end{align*}
```

### Solve (2)
```math
\begin{align*}
  &= 2\int \frac{\cos v\cdot v}{\sqrt{1-\cos^{2}v}}\cdot-\sin v\ dv
  \\ &= -2\int v\cos v\ dv
  \\ &= -2\left(v\sin v-\int \sin v\ dv\right)
  \\ &= -2\left(v\sin v+\cos v\right)
  \\ &= -2\sqrt{1-t^{2}}\left(\cos^{-1}t\right)-2t
  \\ &= -2\sqrt{1-x}\left(\cos^{-1}\sqrt{x}\right)-2\sqrt{x}-c
\end{align*}
```
