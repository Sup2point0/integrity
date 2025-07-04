---
topic: integrals
title: models
desc: 
date: 2025 May 1
difficulty: incline
tags:
  - sqrt
  - ln
methods:
  - sub
  - parts
---


## Question
```math
\int
  \ln \sqrt{
    1 + \sqrt{x + 1}
  }
\ dx
```


## Hints

### 1
The stuff inside the $\ln()$ is horrendous, but you know how to differentiate $\ln(x)$.

### 2
Parts!

### 3
$x+1$ is famously $\sqrt{x+1}$ squared.


## Answer
```math
\frac{1}{2}x\ln\left(1+\sqrt{x+1}\right)-\frac{1}{4}x+\frac{1}{2}\sqrt{x+1}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \ln\sqrt{1+\sqrt{x+1}}\ dx
  \\ =&\ \int \frac{1}{2}\ln\left(1+\sqrt{x+1}\right)\ dx
  \\ =&\ \frac{1}{2}\int \ln\left(1+\sqrt{x+1}\right)\ dx
\end{align*}
```

### Parts
```math
\begin{align*}
      f &= \ln\left(1+\sqrt{x+1}\right) \quad&\quad g' &= 1
  \\ f' &= \frac{1}{1+\sqrt{x+1}}\cdot\frac{1}{2\sqrt{x+1}} \quad&\quad g &= x
  \\ &= \frac{1}{2}\left(\frac{1}{\sqrt{x+1}+\left(x+1\right)}\right)
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  &\ fg-\int f'g\ dx
  \\ =&\ \frac{1}{2}\left[x\ln\left(1+\sqrt{x+1}\right)-\int x\cdot\frac{1}{2}\left(\frac{1}{\sqrt{x+1}+\left(x+1\right)}\right)\ dx\right]
  \\ =&\ \frac{1}{2}x\ln\left(1+\sqrt{x+1}\right)-\frac{1}{4}\int \frac{x}{\sqrt{x+1}+\left(x+1\right)}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \sqrt{x+1} &= t
  \\ x+1 &= t^{2}
  \\ x &= t^{2}-1
  \\ dx &= 2t\ dt
\end{align*}
```

### Solve (2)
```math
\begin{align*}
  &= \frac{1}{2}x\ln\left(1+\sqrt{x+1}\right)-\frac{1}{4}\int \frac{t^{2}-1}{t+t^{2}}\cdot2t\ dt
  \\ &= \frac{1}{2}x\ln\left(1+\sqrt{x+1}\right)-\frac{1}{2}\int \frac{\left(t-1\right)\left(t+1\right)}{1+t}\ dt
  \\ &= \frac{1}{2}x\ln\left(1+\sqrt{x+1}\right)-\frac{1}{2}\int t-1\ dt
  \\ &= \frac{1}{2}x\ln\left(1+\sqrt{x+1}\right)-\frac{1}{4}t^{2}+\frac{1}{2}t
  \\ &= \frac{1}{2}x\ln\left(1+\sqrt{x+1}\right)-\frac{1}{4}\left(x+1\right)+\frac{1}{2}\sqrt{x+1}
  \\ &= \frac{1}{2}x\ln\left(1+\sqrt{x+1}\right)-\frac{1}{4}x+\frac{1}{2}\sqrt{x+1}-c
\end{align*}
```
