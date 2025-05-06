---
topic: integrals
title: solitude
desc: 
date: 2025 March 27
tags:
  - poly
methods:
  - long
  - partials
---


## Question
```math
\int
  \frac{1}
    { x^4 (1 - x^4) }
\ dx
```


## Answer
```math
-\frac{1}{3x^{3}}+\frac{1}{2}\tanh^{-1}x+\frac{1}{2}\tan^{-1}x-c
```


## Solution

### Partial Fractions (1)
Write $x^4 = t$.

```math
\begin{align*}
  \frac{1}{t\left(1-t\right)} &= \frac{p}{t}+\frac{q}{1-t}
  \\ 1 &= p\left(1-t\right)+qt
\end{align*}
```

Let $t = 0$:

```math
\begin{align*}
  1 &= p\left(1-0\right)+0
  \\ p &= 1
\end{align*}
```

Let $t = 1$:

```math
\begin{align*}
  1 &= 0+q
  \\ q &= 1
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  \int \frac{1}{x^{4}\left(1-x^{4}\right)}\ dx
    &= \int \frac{1}{t\left(1-t\right)}\ dx
  \\ &= \int \frac{1}{t}+\frac{1}{1-t}\ dx
  \\ &= \int \frac{1}{x^{4}}+\frac{1}{1-x^{4}}\ dx
  \\ &= -\frac{1}{3x^{3}}+\int \frac{1}{\left(1-x^{2}\right)\left(1+x^{2}\right)}\ dx
\end{align*}
```

### Partial Fractions (2)
Write $x^2 = v$.

```math
\begin{align*}
  \frac{1}{\left(1-v\right)\left(1+v\right)} &= \frac{p}{1-v}+\frac{q}{1+v}
  \\ 1 &= p\left(1+v\right)+q\left(1-v\right)
\end{align*}
```

Let $v = 1$:

```math
\begin{align*}
  1 &= p\left(1+1\right)+0
  \\ p &= \frac{1}{2}
\end{align*}
```

Let $v = -1$:

```math
\begin{align*}
  1 &= 0+q\left(1+1\right)
  \\ q &= \frac{1}{2}
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ -\frac{1}{3x^{3}}+\int \frac{1}{\left(1-x^{2}\right)\left(1+x^{2}\right)}\ dx
  \\ =&\ -\frac{1}{3x^{3}}+\int \frac{1}{\left(1-t\right)\left(1+t\right)}\ dx
  \\ =&\ -\frac{1}{3x^{3}}+\int \frac{1}{2\left(1-t\right)}+\frac{1}{2\left(1+t\right)}\ dx
  \\ =&\ -\frac{1}{3x^{3}}+\int \frac{1}{2\left(1-x^{2}\right)}+\frac{1}{2\left(1+x^{2}\right)}\ dx
  \\ =&\ -\frac{1}{3x^{3}}+\frac{1}{2}\tanh^{-1}x+\frac{1}{2}\tan^{-1}x-c
\end{align*}
```
