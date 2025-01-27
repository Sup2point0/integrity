---
topic: integrals
title: mechanism
desc: 
date: 2025 January 9
tags:
  - poly
  - frac
methods:
  - work
---


## Question
```math
\int \frac{4x^{2}}{1-x^{4}}\ dx
```


## Answer
```math
\ln\left(x+1\right)-\ln\left(x-1\right)-2\tan^{-1}x-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{4x^{2}}{1-x^{4}}\ dx
  \\ =&\ -4\int \frac{x^{2}}{x^{4}-1}\ dx
  \\ =&\ -4\int \frac{x^{2}}{\left(x^{2}-1\right)\left(x^{2}+1\right)}\ dx
  \\ =&\ -4\int \frac{x^{2}}{\left(x-1\right)\left(x+1\right)\left(x^{2}+1\right)}\ dx
\end{align*}
```

### Partial Fractions
```math
\begin{align*}
  \frac{x^{2}}{\left(x-1\right)\left(x+1\right)\left(x^{2}+1\right)} &= \frac{p}{x-1}+\frac{q}{x+1}+\frac{rx}{x^{2}+1}+\frac{s}{x^{2}+1}
  \\ x^{2} &= p\left(x+1\right)\left(x^{2}+1\right)+q\left(x-1\right)\left(x^{2}+1\right)+rx\left(x^{2}-1\right)+s\left(x^{2}-1\right) 
\end{align*}
```

Let $x = 1$:

```math
\begin{align*}
  1 &= p\left(1+1\right)\left(1+1\right)+0+0+0
  \\ 4p &= 1
  \\ p &= \frac{1}{4}
\end{align*}
```

Let $x = 0$:

```math
\begin{align*}
  0 &= p\left(0+1\right)\left(0+1\right)+q\left(0-1\right)\left(0+1\right)+0+s\left(0-1\right)
  \\ 0 &= p-q-s
  \\ q+s &= p
  \\ q+s &= \frac{1}{4}\ \tag{1}
\end{align*}
```

Equate coefficients of $x^2$:

```math
\begin{align*}
  1 &= p-q+s
  \\ q-s &= p-1
  \\ q-s &= \frac{1}{4}-1
  \\ q-s &= -\frac{3}{4}\ \tag{2}
\end{align*}
```

Solve for $q$:

```math
\begin{align*}
  (1) + (2):\quad 2q &= -\frac{1}{2}
  \\ q &= -\frac{1}{4}
\end{align*}
```

Solve for $s$:

```math
\begin{align*}
  q+s &= \frac{1}{4}
  \\ s &= \frac{1}{4}-q
  \\ &= \frac{1}{4}-\left(-\frac{1}{4}\right)
  \\ &= \frac{1}{2}
\end{align*}
```

Equate coefficients of $x^3$:

```math
\begin{align*}
  0 &= p+q+r
  \\ r &= -p-q
  \\ &= -\frac{1}{4}-\left(-\frac{1}{4}\right)
  \\ &= 0
\end{align*}
```

Hence $p = \frac{1}{4}, q = -\frac{1}{4}, r = 0, s = \frac{1}{2}$.

### Solve
```math
\begin{align*}
  -4\int \frac{x^{2}}{\left(x-1\right)\left(x+1\right)\left(x^{2}+1\right)}\ dx
  &= -4\int \frac{1}{4\left(x-1\right)}-\frac{1}{4\left(x+1\right)}+0+\frac{1}{2\left(x^{2}+1\right)}\ dx
  \\ &= -\ln\left(x-1\right)+\ln\left(x+1\right)-2\tan^{-1}x
  \\ &= \ln\left(x+1\right)-\ln\left(x-1\right)-2\tan^{-1}x-c
  \\ &= \ln\left(\frac{x+1}{x-1}\right)-2\tan^{-1}x-c
\end{align*}
```
