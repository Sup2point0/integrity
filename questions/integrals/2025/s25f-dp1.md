---
topic: integrals
title: dropout
desc: 
date: 2025 April 2
tags:
  - poly
methods:
  - partials
---


## Question
```math
\int
  \frac{1}
    { x^4 (x^3 + 1) }
\ dx
```


## Hints

### 1
What’s $\frac{1}{x^4}$ the derivative of?

### 2
How could you get an $x^{-3}$?

### 3
Multiply through!


## Answer
```math
-\frac{1}{3x^{3}}+\frac{1}{3}\ln\left(\frac{1}{x^{3}}+1\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{1}{x^{4}\left(x^{3}+1\right)}\ dx
  \\ =&\ \int \frac{x^{-4}}{x^{3}+1}\ dx
  \\ =&\ \int \frac{x^{-4}}{x^{3}+1}\cdot\frac{x^{-3}}{x^{-3}}\ dx
  \\ =&\ \int \frac{x^{-4}\cdot x^{-3}}{1+x^{-3}}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  x^{-3} &= t
  \\ -3x^{-4}\ dx &= dt
  \\ x^{-4}\ dx &= -\frac{1}{3}\ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int \frac{t}{1+t}\cdot-\frac{1}{3}\ dt
  \\ &= -\frac{1}{3}\int \frac{t+1}{t+1}-\frac{1}{t+1}\ dt
  \\ &= -\frac{1}{3}t+\frac{1}{3}\ln\left(t+1\right)
  \\ &= -\frac{1}{3x^{3}}+\frac{1}{3}\ln\left(\frac{1}{x^{3}}+1\right)-c
\end{align*}
```
