---
topic: integrals
title: exposition
desc: 
date: 2025 March 30
tags:
  - frac
  - exp
methods:
  - work
---


## Question
```math
\int \frac{1+e^{-x}}{e^{x}+e^{-x}}\ dx
```


## Hints

### 1
Split the integral.


## Answer
```math
\tan^{-1}\left(e^{x}\right)+x-\frac{1}{2}\ln\left(e^{2x}+1\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{1+e^{-x}}{e^{x}+e^{-x}}\ dx
  \\ =&\ \int \frac{1+e^{-x}}{e^{x}+e^{-x}}\cdot\frac{e^{x}}{e^{x}}\ dx
  \\ =&\ \int \frac{e^{x}+1}{e^{2x}+1}\ dx
\end{align*}
```

### Substitute (1)
```math
\begin{align*}
  e^{x} &= t
  \\ x &= \ln t
  \\ dx &= \frac{1}{t}\ dt
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  &= \int \frac{t+1}{t^{2}+1}\cdot\frac{1}{t}\ dt
  \\ &= \int \frac{t}{t\left(t^{2}+1\right)}+\frac{1}{t\left(t^{2}+1\right)}\ dt
  \\ &= \int \frac{1}{t^{2}+1}+\frac{1}{t\left(t^{2}+1\right)}\ dt
  \\ &= \tan^{-1}t+\int \frac{1}{t\left(t^{2}+1\right)}\ dt
\end{align*}
```

### Partials
```math
\begin{align*}
  \frac{1}{t\left(t^{2}+1\right)}
    &= \frac{p}{t}+\frac{qt+r}{t^{2}+1}
  \\ 1 &= p\left(t^{2}+1\right)+qt^{2}+rt
\end{align*}
```

Let $t = 0$:

```math
\begin{align*}
  1 &= p\left(0+1\right)+0+0
  \\ p &= 1
\end{align*}
```

Equate coefficients of $t^2$:

```math
\begin{align*}
  0 &= p+q
  \\ q &= -p
  \\ &= -1
\end{align*}
```

Equate coefficients of $t$:

```math
0 = r
```

### Solve (2)
```math
\begin{align*}
  &\ \tan^{-1}t+\int \frac{1}{t\left(t^{2}+1\right)}\ dt
  \\ =&\ \tan^{-1}t+\int \frac{1}{t}-\frac{t}{t^{2}+1}\ dt
  \\ =&\ \tan^{-1}t+\ln t-\frac{1}{2}\ln\left(t^{2}+1\right)
  \\ =&\ \tan^{-1}\left(e^{x}\right)+\ln\left(e^{x}\right)-\frac{1}{2}\ln\left(e^{2x}+1\right)
  \\ =&\ \tan^{-1}\left(e^{x}\right)+x-\frac{1}{2}\ln\left(e^{2x}+1\right)-c
\end{align*}
```
