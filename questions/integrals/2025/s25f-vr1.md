---
topic: integrals
title: superlative
desc: 
date: 2025 March 24
difficulty: manifold
tags:
  - definite
  - horror
methods:
  - sub
---


## Question
```math
\int_0^{1}
  \sqrt{ -\ln(x) }
\ dx
```


## Hints

### 1
Substitution required!

### 2
What does the graph of the integrand look like?

### 3
What if you set the whole integral equal to $y$?


## Answer
```math
\frac{\sqrt{\pi}}{2}
```


## Solution

### Substitute (1)
```math
\begin{align*}
  -\ln x &= t
  \\ \ln x &= -t
  \\ x &= e^{-t}
  \\ dx &= -e^{-t}\ dt
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  &\ \int_{0}^{1}\sqrt{-\ln x}\ dx
  \\ =&\ \int_{-\ln\left(0\right)}^{-\ln\left(1\right)}\sqrt{t}\cdot-e^{-t}\ dt
  \\ =&\ -\int_{\infty}^{0}\sqrt{t}e^{-t}\ dt
  \\ =&\ \int_{0}^{\infty}\sqrt{t}e^{-t}\ dt
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

### Solve (2)
```math
\begin{align*}
  &= \int_{\sqrt{0}}^{\sqrt{\infty}}ve^{-v^{2}}\cdot2v\ dv
  \\ &= \int_{0}^{\infty}v\cdot2ve^{-v^{2}}\ dv
\end{align*}
```

### Parts
```math
\begin{align*}
  f &= v \quad&\quad g' &= 2ve^{-v^{2}}
  \\ f' &= 1 \quad&\quad g &= -e^{-v^{2}}
\end{align*}
```

### Solve (3)
```math
\begin{align*}
  &\ \left[fg\right]_{0}^{\infty}-\int_{0}^{\infty}f'g\ dv
  \\ =&\ \left[ve^{-v^{2}}\right]_{0}^{\infty}-\int_{0}^{\infty}-e^{-v^{2}}\ dv
  \\ =&\ 0+\frac{1}{2}\int_{-\infty}^{\infty}e^{-v^{2}}\ dv
  \\ =&\ \frac{\sqrt{\pi}}{2}
\end{align*}
```

