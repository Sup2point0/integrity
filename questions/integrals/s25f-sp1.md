---
topic: integrals
title: spare parts
desc: 
date: 2025 March 13
tags:
  - scare
  - frac
  - poly
methods:
  - 
---


## Question
```math
\int
  \frac
    { 1 }
    { x^{1000} + x }
\ dx
```


## Hints

### 1
What can you factor out?

### 2
What can you substitute?

### 3
What do you need to substitute?


## Answer
```math
\frac{1}{999}\ln\left(\frac{x^{999}}{x^{999}+1}\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{1}{x^{1000}+x}\ dx
  \\ =&\ \int \frac{1}{x\left(x^{999}+1\right)}\ dx
  \\ =&\ \int \frac{1}{x\left(x^{999}+1\right)}\cdot\frac{x^{998}}{x^{998}}\ dx
  \\ =&\ \int \frac{x^{998}}{x^{999}\left(x^{999}+1\right)}\ dx
  \\ =&\ \frac{1}{999}\int \frac{999x^{998}}{x^{999}\left(x^{999}+1\right)}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  x^{999} &= t
  \\ 999x^{998}\ dx &= dt
\end{align*}
```

```math
= \frac{1}{999}\int \frac{1}{t\left(t+1\right)}\ dt
```

### Partial Fractions
```math
\begin{align*}
  \frac{1}{t\left(t+1\right)} &= \frac{p}{t}+\frac{q}{t+1}
  \\ 1 &= p\left(t+1\right)+qt
\end{align*}
```

Let $t = 0$:

```math
\begin{align*}
  1 &= p\left(0+1\right)+0
  \\ p &= 1
\end{align*}
```

Let $t = -1$:

```math
\begin{align*}
  1 &= 0+q\left(-1\right)
  \\ q &= -1
\end{align*}
```

### Solve
```math
\begin{align*}
  \frac{1}{999}\int \frac{1}{t\left(t+1\right)}\ dt
    &= \frac{1}{999}\int \frac{1}{t}-\frac{1}{t+1}\ dt
  \\ &= \frac{1}{999}\left(\ln t-\ln\left(t+1\right)\right)
  \\ &= \frac{1}{999}\ln\left(\frac{t}{t+1}\right)
  \\ &= \frac{1}{999}\ln\left(\frac{x^{999}}{x^{999}+1}\right)-c
\end{align*}
```
