---
topic: integrals
title: chroma
desc: 
date: 2025 January 30
difficulty: incline
tags:
  - exp
  - ln
methods:
  - spot
---


## Question
```math
\int
  e^x x^{e^x} \left(
    \frac{1}{x} + \ln{x}
  \right)
\ dx
```


## Hints

### 1
$x$ in the base looks dangerous.

### 2
What can you do with the $e^x$ on the outside?

### 3
When we substitute, we’re looking for a derivative on the outside.


## Answer
```math
x^{\left(e^{x}\right)}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int e^{x}x^{e^{x}}\left(\frac{1}{x}+\ln x\right)\ dx
  \\ =&\ \int e^{x}\left(e^{\ln x}\right)^{e^{x}}\left(\frac{1}{x}+\ln x\right)\ dx
  \\ =&\ \int e^{\left(e^{x}\ln x\right)}\left(\frac{1}{x}e^{x}+e^{x}\ln x\right)\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  e^{x}\ln x &= t
  \\ \left(\frac{1}{x}e^{x}+e^{x}\ln x\right)\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int e^{t}\ dt
  \\ &= e^{t}
  \\ &= e^{\left(e^{x}\ln x\right)}
  \\ &= x^{\left(e^{x}\right)}-c
\end{align*}
```
