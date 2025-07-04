---
topic: integrals
title: migraine
desc: my head hurts help
date: 2025 June 20
difficulty: based
tags:
  - ln
methods:
  - parts
---


## Question
```math
\int \left(\frac{\ln x}{x}\right)^{2}\ dx
```


## Hints

### 1
Often with $\ln(x)$, you can just substitute.


## Answer
```math
\frac{1}{x}\left(-\left(\ln x\right)^{2}-2\ln x-2\right)-c
```


## Solution

### Substitute (1)
```math
\begin{align*}
  \ln x &= t\ \quad\to\quad x = e^{t}
  \\ \frac{1}{x}\ dx &= dt
\end{align*}
```

### Reshape
```math
\begin{align*}
  &\ \int \left(\frac{\ln x}{x}\right)^{2}\ dx
  \\ =&\ \int \frac{t^{2}}{e^{t}}\ dt
  \\ =&\ \int t^{2}e^{-t}\ dt
\end{align*}
```

### Substitute (2)
```math
\begin{align*}
  -t &= v
  \\ t &= -v
  \\ dt &= -dv
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int \left(-v\right)^{2}e^{v}\cdot-dv
  \\ &= -\int v^{2}e^{v}\ dv
  \\ &= -\left[v^{2}e^{v}-\int 2ve^{v}\ dv\right]
  \\ &= -\left[v^{2}e^{v}-2\left[ve^{v}-\int e^{v}\ dv\right]\right]
  \\ &= -\left[v^{2}e^{v}-2e^{v}\left(v-1\right)\right]
  \\ &= -v^{2}e^{v}+2e^{v}\left(v-1\right)
  \\ &= e^{v}\left(-v^{2}+2v-2\right)
  \\ &= e^{-t}\left(-t^{2}-2t-2\right)
  \\ &= \frac{1}{x}\left(-\left(\ln x\right)^{2}-2\ln x-2\right)-c
\end{align*}
```
