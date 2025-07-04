---
topic: integrals
title: masquerade
desc: 
date: 2025 January 12
difficulty: manifold
tags:
  - definite
  - scare
  - trig
methods:
  - spot
flags:
  - feat
---


## Question
```math
\int_{0}^{3\pi}\left(\frac{1+\sin4x}{\sin2x+\cos2x}\right)^{3}\ dx
```


## Hints

### 1
It’s generally good to have all trigonometric functions with the same input.

### 2
How could you rewrite $\sin{4x}$ in terms of functions of $2x$?

### 3
There are a lot of different ways to write $1$.


## Answer

$0$


## Solution

### Reshape
```math
\begin{align*}
  &\ \int_{0}^{3\pi}\left(\frac{1+\sin4x}{\sin2x+\cos2x}\right)^{3}\ dx
  \\ =&\ \int_{0}^{3\pi}\left(\frac{1+2\left(\sin2x\right)\left(\cos2x\right)}{\sin2x+\cos2x}\right)^{3}\ dx
  \\ =&\ \int_{0}^{3\pi}\left(\frac{\left(\sin2x\right)^{2}+\left(\cos2x\right)^{2}+2\left(\sin2x\right)\left(\cos2x\right)}{\sin2x+\cos2x}\right)^{3}\ dx
  \\ =&\ \int_{0}^{3\pi}\left(\frac{\left(\sin2x+\cos2x\right)^{2}}{\sin2x+\cos2x}\right)^{3}\ dx
  \\ =&\ \int_{0}^{3\pi}\left(\sin2x+\cos2x\right)^{3}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  2x &= t
  \\ 2\ dx &= dt
\end{align*}
```

### Solve
```math
= \frac{1}{2}\int_{0}^{6\pi}\left(\sin t+\cos t\right)^{3}\ dt
```

$\sin{t} + \cos{t}$ produces a transformed $\sin$ wave, and since $3$ is an odd exponent, $\pm$ polarity is still preserved. In other words, the curve still fluctuates above and below the $x$ axis.

Now remember that both $\sin$ and $\cos$ have period $2\pi$, which means this curve will also have a period of at most $2\pi$. So any interval that’s an integer multiple of $2\pi$ means the areas above and below the $x$ axis will be equal, and cancel out!

```math
= 0
```

