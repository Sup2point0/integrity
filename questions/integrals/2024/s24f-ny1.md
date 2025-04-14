---
topic: integrals
title: happy new year
desc: 
date: 2024 December 31
tags:
  - poly
  - ln
methods:
  - parts
---


## Question
```math
\int 2025x^{2024}\ln x\ dx
```


## Answer
```math
\frac{1}{2025}x^{2025}\left(2025\ln x-1\right)-c
```


## Solution

### Parts
```math
\begin{align*}
      f &= \ln{x} \quad&\quad g' &= 2025x^{2024}
  \\ f' &= \frac{1}{x} \quad&\quad g &= x^{2025}
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ \int 2025x^{2024}\ln x\ dx
  \\ =&\ fg-\int f'g\ dx
  \\ =&\ x^{2025}\ln x-\int \frac{x^{2025}}{x}\ dx
  \\ =&\ x^{2025}\ln x-\int x^{2024}\ dx
  \\ =&\ x^{2025}\ln x-\frac{1}{2025}x^{2025}
  \\ =&\ \frac{1}{2025}x^{2025}\left(2025\ln x-1\right)-c
\end{align*}
```
