---
topic: integrals
title: on edge
desc: 
date: 2025 June 7
tags:
  - sqrt
methods:
  - speed
---


## Question
```math
\int
  \frac
   { \sqrt{1 + \sqrt{x}} }
    { x }
\ dx
```


## Hints

### 1
Substitute $\sqrt{x}$.

### 2
Substitute the $\sqrt{}$ after that as well.


## Answer
```math
4\sqrt{1+\sqrt{x}}-4\tanh^{-1}\sqrt{1+\sqrt{x}}-c
```


## Solution

### Substitute (1)
```math
\begin{align*}
  1+\sqrt{x} &= t
  \\ \sqrt{x} &= t-1
  \\ x &= \left(t-1\right)^{2}
  \\ dx &= 2\left(t-1\right)\ dt
\end{align*}
```

### Simplify
```math
\begin{align*}
  &\ \int_{\ }^{\ }\frac{\sqrt{1+\sqrt{x}}}{x}\ dx
  \\ =&\ \int_{\ }^{\ }\frac{\sqrt{t}}{\left(t-1\right)^{2}}\cdot2\left(t-1\right)\ dt
  \\ =&\ 2\int_{\ }^{\ }\frac{\sqrt{t}}{t-1}\ dt
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
  &= 2\int_{\ }^{\ }\frac{v}{v^{2}-1}\cdot2v\ dv
  \\ &= 4\int_{\ }^{\ }\frac{v^{2}}{v^{2}-1}\ dv
  \\ &= 4\int_{\ }^{\ }\frac{v^{2}-1}{v^{2}-1}+\frac{1}{v^{2}-1}\ dv
  \\ &= 4v-4\int_{\ }^{\ }\frac{1}{1-v^{2}}\ dv
  \\ &= 4v-4\tanh^{-1}v
  \\ &= 4\sqrt{t}-4\tanh^{-1}\sqrt{t}
  \\ &= 4\sqrt{1+\sqrt{x}}-4\tanh^{-1}\sqrt{1+\sqrt{x}}-c
\end{align*}
```
