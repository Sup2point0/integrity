---
topic: integrals
title: downpour
desc: 
date: 2025 May 24
difficulty: incline
tags:
  - scare
  - sqrt
  - ln
methods:
  - spot
  - sub
---


## Question
```math
\int
  x^{\sqrt{3}}
  \left( \ln{x} \right)^{\sqrt{3}}
  \left( \ln{x} + 1 \right)
\ dx
```


## Hints

### 1
Can you combine some of the terms?

### 2
What does the combined term suggest?

### 3
What if you write $\left( \ln{x} + 1 \right)$ as $\left( \ln{x} + x/x \right)$?


## Answer
```math
\frac{1}{\sqrt{3}+1}\left(x\ln x\right)^{1+\sqrt{3}}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int x^{\sqrt{3}}\left(\ln x\right)^{\sqrt{3}}\left(\ln x+1\right)\ dx
  \\ =&\ \int \left(x\ln x\right)^{\sqrt{3}}\left(\ln x+1\right)\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  x\ln x &= t
  \\ \left(1\cdot\ln x+x\cdot\frac{1}{x}\right)\ dx &= dt
  \\ \left(\ln x+1\right)\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int t^{\sqrt{3}}\ dt
  \\ &= \frac{1}{\sqrt{3}+1}t^{\sqrt{3}+1}
  \\ &= \frac{1}{\sqrt{3}+1}\left(x\ln x\right)^{1+\sqrt{3}}-c
\end{align*}
```
