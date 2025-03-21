---
topic: integrals
title: perfectus
desc: 
date: 2025 March 17
tags:
  - exp
  - hyp trig
methods:
  - spot
---


## Question
```math
\int
  \text{csch}(x)\tanh^{-1}(e^x)
\ dx
```


## Hints

### 1
How else can you write $\text{csch}(x)$?

### 2
Don’t write $\tanh^{-1}(x)$ in its logarithmic form, it probably won’t help.

### 3
What does the derivative of $\tanh^{-1}(x)$ look like?


## Answer
```math
-\left(\tanh^{-1}\left(e^{x}\right)\right)^{2}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \operatorname{csch}\left(x\right)\tanh^{-1}\left(e^{x}\right)\ dx
  \\ =&\ \int \frac{1}{\sinh x}\cdot\tanh^{-1}\left(e^{x}\right)\ dx
  \\ =&\ \int \left(\frac{e^{x}-e^{-x}}{2}\right)^{-1}\tanh^{-1}\left(e^{x}\right)\ dx
  \\ =&\ 2\int \frac{1}{e^{x}-e^{-x}}\tanh^{-1}\left(e^{x}\right)\ dx
  \\ =&\ 2\int \frac{1}{e^{x}-e^{-x}}\tanh^{-1}\left(e^{x}\right)\cdot\frac{e^{x}}{e^{x}}\ dx
  \\ =&\ 2\int \frac{e^{x}}{e^{2x}-1}\tanh^{-1}\left(e^{x}\right)\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  e^{x} &= t
  \\ e^{x}\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= 2\int \frac{1}{t^{2}-1}\tanh^{-1}\left(t\right)\ dt
  \\ &= -2\int \frac{1}{1-t^{2}}\tanh^{-1}\left(t\right)\ dt
  \\ &= -\left(\tanh^{-1}t\right)^{2}
  \\ &= -\left(\tanh^{-1}\left(e^{x}\right)\right)^{2}-c
\end{align*}
```
