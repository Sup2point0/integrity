---
topic: integrals
title: pyrotechnics
desc: 
date: 2025 May 12
tags:
  - exp
methods:
  - speed
---


## Question
```math
\int
  72^{\, x + 72^x}
\ dx
```


## Hints

### 1
The derivative of $72^x$ has $72^x$.

### 2
How can you split the exponent?

### 3
$b^{x+y} = b^x \, b^y$.


## Answer
```math
\frac{1}{\left(\ln72\right)^{2}}72^{72^{x}}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int 72^{x+72^{x}}\ dx
  \\ =&\ \int 72^{x}\cdot72^{72^{x}}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  72^{x} &= t
  \\ e^{\left(\ln72\right)x} &= t
  \\ \left(\ln72\right)e^{\left(\ln72\right)x}\ dx &= dt
  \\ 72^{x}\ dx &= \frac{1}{\ln72}\ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int 72^{t}\cdot\frac{1}{\ln72}\ dt
  \\ &= \frac{1}{\ln72}\int 72^{t}\ dt
  \\ &= \frac{1}{\ln72}\int e^{\left(\ln72\right)t}\ dt
  \\ &= \frac{1}{\left(\ln72\right)^{2}}e^{\left(\ln72\right)t}
  \\ &= \frac{1}{\left(\ln72\right)^{2}}72^{72^{x}}-c
\end{align*}
```
