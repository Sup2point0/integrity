---
topic: integrals
title: ostentatious
desc: 
date: 2025 June 1
tags:
  - definite
  - poly
  - pi
methods:
  - spot
---


## Question
```math
\int_{\pi}^{2e-\pi}
  ( x - e)
  ( x - \pi )
  ( x - 2e + \pi )
\ dx
```


## Hints

### 1
When would a cubic’s integral cancel out to $0$?

### 2
How could you show that?

### 3
When does a $\sin(x)$ wave’s area cancel out to $0$?


## Answer
$0$


## Solution

### Reshape
```math
\begin{align*}
  &\ \int_{\pi}^{2e-\pi}\left(x-e\right)\left(x-\pi\right)\left(x-2e+\pi\right)\ dx
  \\ =&\ \int_{\pi}^{2e-\pi}\left(x-e\right)\left(x-\pi\right)\left(x-\left(2e-\pi\right)\right)\ dx
\end{align*}
```

### Root Order
```math
\begin{align*}
  e &< \pi
  \\ e-\pi &< 0
  \\ e-\pi+e &< e
  \\ 2e-\pi &< e
\end{align*}
```

So the cubic has, in ascending order, roots:

```math
\begin{align*}
  \alpha &= 2e-\pi
  \\ \beta &= e
  \\ \gamma &= \pi
\end{align*}
```

### Root Spacing
```math
\begin{align*}
  \Delta_{1} &= \beta-\alpha
  \\   &= e-\left(2e-\pi\right)
  \\   &= e-2e+\pi
  \\   &= \pi-e
\end{align*}
```

```math
\begin{align*}
  \Delta_{2} &= \gamma-\beta
  \\   &= \pi-e
\end{align*}
```

### Solve
Since $\Delta_1 = \Delta_2$, the cubic is symmetric in the $x$-axis.

```desmos
\left(x-e\right)\left(x-\pi\right)\left(x-\left(2e-\pi\right)\right)
```

Since the bounds are $\alpha$ and $\gamma$, the positive and negative areas are identical and cancel out to 0.

```math
\int_{\pi}^{2e-\pi}\left(x-e\right)\left(x-\pi\right)\left(x-\left(2e-\pi\right)\right)\ dx = 0
```
