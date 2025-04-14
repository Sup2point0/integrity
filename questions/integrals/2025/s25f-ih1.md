---
topic: integrals
title: runaway
desc: 
date: 2025 March 23
tags:
  - poly
  - sqrt
  - ln
methods:
  - long
  - tough
---


## Question
```math
\int
  x \ln\left(
    x^2 + \sqrt{x^4 + 1}
  \right)
\ dx
```


## Hints

### 1
You can simplify the integrand with a substitution.

### 2
The resultant integrand is equivalent to an inverse hyp trig function.

### 3
If you don’t know hyp trig, you can still solve the integral.

### 4
Parts?


## Answer
```math
\frac{1}{2}\left(x^{2}\sinh^{-1}\left(x^{2}\right)-\sqrt{x^{4}+1}\right)-c
```


## Solution

### Substitute (1)
```math
\begin{align*}
  x^2 &= t
  \\ 2x\ dx &= dt
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  &\ \int x\ln\left(x^{2}+\sqrt{x^{4}+1}\right)\ dx
  \\ =&\ \frac{1}{2}\int \ln\left(t+\sqrt{t^{2}+1}\right)\ dt
  \\ =&\ \frac{1}{2}\int \sinh^{-1}t\ dt
\end{align*}
```

### Substitute (2)
```math
\begin{align*}
  \sinh^{-1}t &= v
  \\ t &= \sinh v
  \\ dt &= \cosh v\ dv
\end{align*}
```

### Parts
```math
\begin{align*}
  &= \frac{1}{2}\int v\cosh v\ dv
  \\ &= \frac{1}{2}\left(v\sinh v-\int \sinh v\ dv\right)
  \\ &= \frac{1}{2}\left(v\sinh v-\cosh v\right)
  \\ &= \frac{1}{2}\left(t\sinh^{-1}t-\sqrt{t^{2}+1}\right)
  \\ &= \frac{1}{2}\left(x^{2}\sinh^{-1}\left(x^{2}\right)-\sqrt{x^{4}+1}\right)-c
\end{align*}
```


## Alternates

### Parts
```math
\begin{align*}
      f &= \ln\left(t+\sqrt{t^{2}+1}\right) \quad&\quad g' &= 1
  \\ f' &= \frac{1}{t+\sqrt{t^{2}+1}}\cdot\left(1+\frac{2t}{2\sqrt{t^{2}+1}}\right) \quad&\quad g &= t
  \\ &= \frac{1}{t+\sqrt{t^{2}+1}}\left(\frac{t+\sqrt{t^{2}+1}}{\sqrt{t^{2}+1}}\right)
  \\ &= \frac{1}{\sqrt{t^{2}+1}}
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  &\ \frac{1}{2}\left[fg-\int f'g\ dx\right]
  \\ =&\ \frac{1}{2}\left[t\ln\left(t+\sqrt{t^{2}+1}\right)-\int \frac{t}{\sqrt{t^{2}+1}}\ dt\right]
  \\ =&\ \frac{1}{2}t\ln\left(t+\sqrt{t^{2}+1}\right)-\frac{1}{2}\int \frac{2t}{2\sqrt{t^{2}+1}}\ dt
\end{align*}
```

### Substitute
```math
\begin{align*}
  t^{2}+1 &= v
  \\ 2t\ dt &= dv
\end{align*}
```

### Substitute
```math
\begin{align*}
  &= \frac{1}{2}t\ln\left(t+\sqrt{t^{2}+1}\right)-\frac{1}{2}\int \frac{1}{2\sqrt{v}}\ dv
  \\ &= \frac{1}{2}t\ln\left(t+\sqrt{t^{2}+1}\right)-\frac{1}{2}\sqrt{v}
  \\ &= \frac{1}{2}t\ln\left(t+\sqrt{t^{2}+1}\right)-\frac{1}{2}\sqrt{t^{2}+1}
  \\ &= \frac{1}{2}x^{2}\ln\left(x^{2}+\sqrt{x^{4}+1}\right)-\frac{1}{2}\sqrt{x^{4}+1}-c
\end{align*}
```
