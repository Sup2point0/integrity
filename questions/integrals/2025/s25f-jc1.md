---
topic: integrals
title: jelly
desc: 
date: 2025 February 2
tags:
  - definite
  - sqrt
methods:
  - spot
  - draw
---


## Question
```math
\int_{0}^{2}
  \sqrt{2x - x^2}
\ dx
```


## Answer
$\pi / 2$


## Solution

```math
\begin{align*}
  &\ \int_{0}^{2}\sqrt{2x-x^{2}}\ dx
  \\ =&\ \int_{0}^{2}\sqrt{1-1+2x-x^{2}}\ dx
  \\ =&\ \int_{0}^{2}\sqrt{1-\left(x-1\right)^{2}}\ dx
\end{align*}
```

This is a semicircle centred at $x = 1$ with radius $r = 1$, so its area is $\pi r^2/2 = \pi/2$.
