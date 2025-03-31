---
topic: integrals
title: envy
desc: 
date: 2025 March 28
tags:
  - exp
  - ln
methods:
  - spot
---


## Question
```math
\int
  (-x)^{x} (\ln(-x)+1)
\ dx
```


## Hints

### 1
Start by writing $-x$ as $e^{\ln(-x)}$.

### 2
The substitution involves inverse product rule.


## Answer
```math
\left(-x\right)^{x}-c
```


## Solution

### Substitute (1)
```math
\begin{align*}
  -x &= t
  \\ -dx &= dt
\end{align*}
```

### Reshape
```math
\begin{align*}
  &\ \int \left(-x\right)^{x}\left(\ln\left(-x\right)+1\right)\ dx
  \\ =&\ \int t^{\left(-t\right)}\left(\ln t+1\right)\cdot-dt
  \\ =&\ -\int e^{\left(\ln t\right)\left(-t\right)}\left(\ln t+1\right)\ dt
  \\ =&\ -\int e^{-t\ln t}\left(\ln t+1\right)\ dt
\end{align*}
```

### Substitute (2)
```math
\begin{align*}
  t\ln t &= v
  \\ \left(\ln t+1\right)\ dt &= dv
\end{align*}
```

### Solve
```math
\begin{align*}
  &= -\int e^{-v}\ dv
  \\ &= e^{-v}
  \\ &= e^{-t\ln t}
  \\ &= t^{-t}
  \\ &= \left(-x\right)^{x}-c
\end{align*}
```
