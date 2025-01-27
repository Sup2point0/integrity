---
topic: integrals
title: blursed
desc: 
date: 2025 January 12
tags:
  - horror
  - exp
  - ln
methods:
  - spot
  - hard
  - xx
---


## Question
```math
\int
  \left(
    2x^{\left(x^2 + 0.5\right)}
  \right)^2
  \left(
    \ln{x} + 0.5
  \right)
\ dx
```


## Hints

### 1
$0.5$ is nasty, eh?

### 2
How could you make the $0.5$ nicer?

### 3
Watch out for product rule!


## Answer
```math
\left(x^{2}\right)^{\left(x^{2}\right)}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int_{\ }^{\ }\left(2x^{\left(x^{2}+0.5\right)}\right)^{2}\left(\ln x+0.5\right)\ dx
  \\ =&\ \int_{\ }^{\ }4\left(x^{\left(2x^{2}+1\right)}\right)\left(\ln x+0.5\right)\ dx
  \\ =&\ \int_{\ }^{\ }4x\left(x^{\left(2x^{2}\right)}\right)\left(\ln x+0.5\right)\ dx
  \\ =&\ \int_{\ }^{\ }\left(e^{\left(\ln x\right)\left(2x^{2}\right)}\right)\left(4x\ln x+2x\right)\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \left(\ln x\right)\left(2x^{2}\right) &= t
  \\ \left(4x\ln x+2x\right)\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int_{\ }^{\ }e^{t}\ dt
  \\ &= e^t
  \\ &= e^{\left(\ln x\right)\left(2x^{2}\right)}
  \\ &= x^{\left(2x^{2}\right)}-c
  \\ &= \left(x^{2}\right)^{\left(x^{2}\right)}-c
\end{align*}
```
