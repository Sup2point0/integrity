---
topic: integrals
title: legacy
desc: 
date: 2025 March 27
tags:
  - horror
  - exp
  - ln
methods:
  - spot
  - arcprod
---


## Question
```math
\int
  x^{(-2 + 1/x)} \left(
    \ln(x^2) - 2
  \right)
\ dx
```


## Hints

### 1
The $-2$ looks sus, eh?

### 2
Write $x^{(-2+1/x)}$ as $x^{(1/x)}/x^2$.


## Answer
```math
-2x^{1/x}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int x^{\left(-2+1/x\right)}\left(\ln\left(x^{2}\right)-2\right)\ dx
  \\ =&\ \int x^{-2}\cdot x^{1/x}\left(2\ln x-2\right)\ dx
  \\ =&\ -2\int x^{1/x}\left(\frac{1-\ln x}{x^{2}}\right)\ dx
  \\ =&\ -2\int e^{\left(\ln x\right)/x}\left(\frac{1-\ln x}{x^{2}}\right)\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \frac{\ln x}{x} &= t
  \\ \ln x\cdot\frac{1}{x} &= t
  \\ \left(\frac{1}{x}\cdot\frac{1}{x}+\ln x\cdot-\frac{1}{x^{2}}\right)\ dx &= dt
  \\ \left(\frac{1}{x^{2}}-\frac{\ln x}{x^{2}}\right)\ dx &= dt
  \\ \frac{1-\ln x}{x^{2}}\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= -2\int e^{t}\ dt
  \\ &= -2e^{t}
  \\ &= -2x^{1/x}-c
\end{align*}
```
