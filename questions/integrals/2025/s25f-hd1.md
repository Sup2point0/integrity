---
topic: integrals
title: heads up, incoming
desc: 
date: 2025 March 13
tags:
 - exp
methods:
  - spot
  - sub
flags:
  - feat
---


## Question
```math
\int
  \frac
    { x (x+1) e^x }
    { x - e^{-x} }
\ dx
```


## Hints

### 1
Both $e^x$ and $e^{-x}$ is pretty nasty.

### 2
Can you pull out any term from the numerator that looks similar to something in the denominator?

### 3
What if the derivative of the substitution looks similar to its derivative?


## Answer
```math
xe^{x}+\ln\left(xe^{x}-1\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{x\left(x+1\right)e^{x}}{x-e^{-x}}\ dx
  \\ =&\ \int \frac{x\left(x+1\right)e^{x}}{x-e^{-x}}\cdot\frac{e^{x}}{e^{x}}\ dx
  \\ =&\ \int \frac{x\left(x+1\right)e^{2x}}{xe^{x}-1}\ dx
  \\ =&\ \int \frac{xe^{x}\cdot e^{x}\left(x+1\right)}{xe^{x}-1}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  xe^{x} &= t
  \\ e^{x}\left(x+1\right)\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int \frac{t}{t-1}\ dt
  \\ &= \int \frac{t-1}{t-1}+\frac{1}{t-1}\ dt
  \\ &= \int 1+\frac{1}{t-1}\ dt
  \\ &= t+\ln\left(t-1\right)
  \\ &= xe^{x}+\ln\left(xe^{x}-1\right)-c
\end{align*}
```
