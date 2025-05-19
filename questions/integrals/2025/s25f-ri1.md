---
topic: integrals
title: improv
desc: 
date: 2025 May 18
tags:
  - poly
  - sqrt
methods:
  - spot
---


## Question
```math
\int
  \frac
    { x \sqrt{1-x^2} }
    { 1 - 2x^2 }
\ dx
```


## Hints

### 1
The derivative of $x^2$ is $2x$.

### 2
Substitute $x^2 = t$.

### 3
Then get rid of the $\sqrt{}$.


## Answer
```math
-\frac{1}{2}\sqrt{1-x^{2}}+\frac{\sqrt{2}}{4}\tanh^{-1}\left(\sqrt{2-2x^{2}}\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{x\sqrt{1-x^{2}}}{1-2x^{2}}\ dx
  \\ =&\ \frac{1}{2}\int \frac{\sqrt{1-x^{2}}}{1-2x^{2}}\cdot2x\ dx
\end{align*}
```

### Substitute (1)
```math
\begin{align*}
  1-x^{2} &= t
  \\ x^{2} &= 1-t
  \\ 2x\ dx &= -dt
\end{align*}
```

### Simplify
```math
\begin{align*}
  &= \frac{1}{2}\int \frac{\sqrt{t}}{1-2\left(1-t\right)}\cdot-dt
  \\ &= -\frac{1}{2}\int \frac{\sqrt{t}}{1-2+2t}\ dt
  \\ &= -\frac{1}{2}\int \frac{\sqrt{t}}{2t-1}\ dt
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
  &= -\frac{1}{2}\int \frac{v}{2v^{2}-1}\cdot2v\ dv
  \\ &= -\frac{1}{2}\int \frac{2v^{2}}{2v^{2}-1}\ dv
  \\ &= -\frac{1}{2}\int \frac{2v^{2}-1}{2v^{2}-1}+\frac{1}{2v^{2}-1}\ dv
  \\ &= -\frac{1}{2}\int dv+\frac{1}{2}\int \frac{1}{1-2v^{2}}\ dv
  \\ &= -\frac{1}{2}v+\frac{1}{4}\int \frac{1}{\frac{1}{2}-v^{2}}\ dv
  \\ &= -\frac{1}{2}v+\frac{1}{4}\cdot\sqrt{2}\tanh^{-1}\left(\sqrt{2}v\right)
  \\ &= -\frac{1}{2}\sqrt{t}+\frac{\sqrt{2}}{4}\tanh^{-1}\left(\sqrt{2}\sqrt{t}\right)
  \\ &= -\frac{1}{2}\sqrt{1-x^{2}}+\frac{\sqrt{2}}{4}\tanh^{-1}\left(\sqrt{2}\sqrt{1-x^{2}}\right)
  \\ &= -\frac{1}{2}\sqrt{1-x^{2}}+\frac{\sqrt{2}}{4}\tanh^{-1}\left(\sqrt{2-2x^{2}}\right)-c
\end{align*}
```
