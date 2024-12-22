---
topic: integrals
title: counting
desc: 
date: 2024 December
tags:
  - poly
  - frac
method:
  - work
  - partials
---


## Question
```math
\int \frac{x^{3}}{x^{4}-6x^{2}+5}dx
```


## Hint

### 1

### 2

### 3


## Answer
```math

```


## Solution

### Factorise
```math
\begin{align*}
  &= \int \frac{x^{3}}{x^{4}-6x^{2}+5}dx
  \\ &= \frac{1}{2}\int \frac{x^{2}\cdot2x}{\left(x^{2}-1\right)\left(x^{2}-5\right)}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  x^{2} &= t
  \\ 2x\ dx &= dt
\end{align*}
```

```math
\begin{align*}
  &= \frac{1}{2}\int \frac{t}{\left(t-1\right)\left(t-5\right)}\ dt
\end{align*}
```

### Partial Fractions
```math
\begin{align*}
  \frac{t}{\left(t-1\right)\left(t-5\right)} &= \frac{p}{t-1}+\frac{q}{t-5}
  \\ t &= p\left(t-5\right)+q\left(t-1\right)
\end{align*}
```

Put $t = 1$:

```math
\begin{align*}
  1 &= p\left(1-5\right)+0
  \\ p &= -\frac{1}{4}
\end{align*}
```

Put $t = 5$:

```math
\begin{align*}
  5 &= 0+q\left(5-1\right)
  \\ q &= \frac{5}{4}
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \frac{1}{2}\int -\frac{1}{4\left(t-1\right)}+\frac{5}{4\left(t-5\right)}\ dt
  \\ &= \frac{5}{8}\int \frac{1}{t-5}\ dt-\frac{1}{8}\int \frac{1}{t-1}\ dt
  \\ &= \frac{5}{8}\ln\left(t-5\right)-\frac{1}{8}\ln\left(t-1\right)
  \\ &= \frac{5}{8}\ln\left(x^{2}-5\right)-\frac{1}{8}\ln\left(x^{2}-1\right)-c
\end{align*}
```
