---
topic: integrals
title: hearth
desc: 
date: 2025 January 13
difficulty: manifold
tags:
  - scare
  - exp
  - ln
methods:
  - spot
  - sub
---


## Question
```math
\int
  \left(
    \frac{e^x}{\ln{e}}
  \right)^{\left(
    e^x + 1
  \right)}
  \left(
    \frac{x+1}{\ln{e}}
  \right)
\ dx
```


## Hints

### 1
What’s $\ln{e}$?

### 2
Whenever we have $e^x$, $e^x$ is a probably the substitution.

### 3
You may need product rule somewhere in the solution!


## Answer
```math
\left(e^{x}\right)^{\left(e^{x}\right)}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \left(\frac{e^{x}}{\ln e}\right)^{\left(e^{x}+1\right)}\left(\frac{x+1}{\ln e}\right)\ dx
  \\ =&\ \int \left(\frac{e^{x}}{1}\right)^{\left(e^{x}+1\right)}\left(\frac{x+1}{1}\right)\ dx
  \\ =&\ \int e^{x}\left(e^{x}\right)^{\left(e^{x}\right)}\left(x+1\right)\ dx
\end{align*}
```

### Substitute (1)
```math
\begin{align*}
  e^x &= t \quad\to\quad x = \ln{t}
  \\ e^x \ dx &= dt
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  &= \int t^{t}\left(\ln t+1\right)\ dt
  \\ &= \int \left(e^{\ln t}\right)^{t}\left(\ln t+1\right)\ dt
  \\ &= \int e^{\left(t\ln t\right)}\left(\ln t+1\right)\ dt
\end{align*}
```

### Substitute (2)
```math
\begin{align*}
  t \ln{t} &= v
  \\ \left(1\cdot\ln t+t\cdot\frac{1}{t}\right)\ dt &= dv
  \\ \left(\ln t+1\right)\ dt &= dv
\end{align*}
```

### Solve (2)
```math
\begin{align*}
  &= \int e^{v}\ dv
  \\ &= e^v
  \\ &= e^{\left(t\ln t\right)}
  \\ &= t^t
  \\ &= \left(e^{x}\right)^{\left(e^{x}\right)}-c
\end{align*}
```
