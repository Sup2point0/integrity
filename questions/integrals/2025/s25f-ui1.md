---
topic: integrals
title: unpaid intern
desc: 
date: 2025 May 15
difficulty: based
tags:
  - sqrt
  - trig
methods:
  - sub
---


## Question
```math
\int \frac{\tan x}{\sqrt{\sec x+1}}\ dx
```


## Hints

### 1
The derivative of $\sec(x)$ includes $\tan(x)$.

### 2
You can substitute $\sec(x)$.

### 3
Let $\sec(x) + 1 = t$.


## Answer
```math
-2\tanh^{-1}\left(\sqrt{\sec x+1}\right)-c
```


## Solution

### Substitute (1)
```math
\begin{align*}
  &\sec x+1 &= t
  \\ \sec x &= t-1
  \\ \sec x\tan x\ dx &= dt
  \\ \tan x\ dx &= \frac{1}{t-1}\ dt
\end{align*}
```

### Simplify
```math
\begin{align*}
  &\ \int \frac{\tan x}{\sqrt{\sec x+1}}\ dx
  \\ =&\ \int \frac{1}{\sqrt{t}}\cdot\frac{1}{t-1}\ dt
  \\ =&\ \int \frac{1}{\sqrt{t}\left(t-1\right)}\ dt
\end{align*}
```

### Substitute (2)
```math
\begin{align*}
  \sqrt{t} &= v
  \\ t &= v^{2}
  \\ dt &= 2v\ dv
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int \frac{1}{v\left(v^{2}-1\right)}\cdot2v\ dv
  \\ &= -2\int \frac{1}{1-v^{2}}\ dv
  \\ &= -2\tanh^{-1}v
  \\ &= -2\tanh^{-1}\left(\sqrt{t}\right)
  \\ &= -2\tanh^{-1}\left(\sqrt{\sec x+1}\right)-c
\end{align*}
```
