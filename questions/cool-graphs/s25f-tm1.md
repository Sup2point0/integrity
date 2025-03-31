---
topic: integrals
title: task manager
desc: 
date: 2025 March 27
tags:
  - frac
  - sqrt
  - exp
methods:
  - sub
---


## Question
```math
\int
  \frac
    { e^{(1/\sqrt{x})} }
    { x^2 }
\ dx
```


## Hints

### 1
Square roots are safe.


## Answer
```math
2e^{1/\sqrt{x}}\left(1-\frac{1}{\sqrt{x}}\right)-c
```


## Solution

### Substitute
```math
\begin{align*}
  \frac{1}{\sqrt{x}} &= t
  \\ x^{-1/2} &= t
  \\ -\frac{1}{2}x^{-3/2}\ dx &= dt
  \\ dx &= -2x^{3/2}\ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ \int \frac{e^{1/\sqrt{x}}}{x^{2}}\ dx
  \\ =&\ \int \frac{e^{t}}{x^{2}}\cdot-2x^{3/2}\ dt
  \\ =&\ -2\int e^{t}\cdot x^{-1/2}\ dt
  \\ =&\ -2\int te^{t}\ dt
  \\ =&\ -2e^{t}\left(t-1\right)
  \\ =&\ -2e^{1/\sqrt{x}}\left(\frac{1}{\sqrt{x}}-1\right)
  \\ =&\ 2e^{1/\sqrt{x}}\left(1-\frac{1}{\sqrt{x}}\right)-c
\end{align*}
```
