---
topic: integrals
title: mate, are you havin’ a bubble bath?
desc: 
date: 2025 June 12
tags:
  - exp
methods:
  - work
  - partials
---


## Question
```math
\int
  \frac{1}
    { e^{3x} - e^{2x} + e^x - 1 }
\ dx
```


## Hints

### 1
You can substitute $e^x$.

### 2
You can factorise.

### 3
You can partials.


## Answer
```math
-x+\frac{1}{2}\ln\left(e^{x}-1\right)+\frac{1}{4}\ln\left(e^{2x}+1\right)-\frac{1}{2}\tan^{-1}\left(e^{x}\right)-c
```


## Solution

### Substitute
```math
\begin{align*}
  e^{x} &= t
  \\ x &= \ln t
  \\ dx &= \frac{1}{t}\ dt
\end{align*}
```

### Simplify
```math
\begin{align*}
  &\ \int \frac{1}{e^{3x}-e^{2x}+e^{x}-1}\ dx
  \\ =&\ \int \frac{1}{t\left(t^{3}-t^{2}+t-1\right)}\ dt
\end{align*}
```

### Factor Theorem
```math
\begin{align*}
  t^{3}-t^{2}+t-1 \ \rvert_{t=1} &= 1-1+1-1
  \\ &= 0
  \\ \Rightarrow t^{3}-t^{2}+t-1
    &= \left(t-1\right)\left(t^{2}+1\right)
\end{align*}
```

### Partials
```math
\begin{align*}
  \frac{1}{t\left(t^{3}-t^{2}+t-1\right)}
    &= \frac{1}{t\left(t-1\right)\left(t^{2}+1\right)}
  \\ \frac{1}{t\left(t-1\right)\left(t^{2}+1\right)}
    &= \frac{p}{t}+\frac{q}{t-1}+\frac{rt+s}{t^{2}+1}
  \\ 1 &= p\left(t-1\right)\left(t^{2}+1\right)+qt\left(t^{2}+1\right)+rt^{2}\left(t-1\right)+st\left(t-1\right)
\end{align*}
```

Let $t = 0$:

```math
\begin{align*}
  1 &= p\left(0-1\right)\left(0+1\right)+0+0+0
  \\ -p &= 1
  \\ p &= -1
\end{align*}
```

Let $t = 1$:

```math
\begin{align*}
  1 &= 0+q\left(1\right)\left(1+1\right)+0+0
  \\ 2q &= 1
  \\ q &= \frac{1}{2}
\end{align*}
```

Equate coefficients of $t^3$:

```math
\begin{align*}
  0 &= p+q+r
  \\ r &= -p-q
  \\ &= 1-\frac{1}{2}
  \\ &= \frac{1}{2}
\end{align*}
```

Equate coefficients of $t^2$:

```math
\begin{align*}
  0 &= -p-r+s
  \\ s &= p+r
  \\ &= -1+\frac{1}{2}
  \\ &= -\frac{1}{2}
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ \int \frac{1}{t\left(t^{3}-t^{2}+t-1\right)}\ dt
  \\ =&\ \int \frac{1}{t\left(t-1\right)\left(t^{2}+1\right)}\ dt
  \\ =&\ \int -\frac{1}{t}+\frac{1}{2\left(t-1\right)}+\frac{1}{2}\left(\frac{t-1}{t^{2}+1}\right)\ dt
  \\ =&\ -\ln t+\frac{1}{2}\ln\left(t-1\right)+\frac{1}{2}\int \frac{t-1}{t^{2}+1}\ dt
  \\ =&\ -\ln t+\frac{1}{2}\ln\left(t-1\right)+\frac{1}{4}\int \frac{2t}{t^{2}+1}-\frac{2}{t^{2}+1}\ dt
  \\ =&\ -\ln t+\frac{1}{2}\ln\left(t-1\right)+\frac{1}{4}\ln\left(t^{2}+1\right)-\frac{1}{2}\tan^{-1}t
  \\ =&\ -x+\frac{1}{2}\ln\left(e^{x}-1\right)+\frac{1}{4}\ln\left(e^{2x}+1\right)-\frac{1}{2}\tan^{-1}\left(e^{x}\right)-c
\end{align*}
```
