---
topic: integrals
title: disastrous distribution
desc: 
date: 2025 May 24
tags:
  - definite
  - improper
  - sqrt
  - exp
methods:
  - 
---


## Question
```math
\int_{-\infin}^{0}
  \frac{1}
    { \sqrt{-x} }
  \, 4^x
\ dx
```


## Hints

### 1
$\sqrt{-x}$ is nasty.

### 2
But $e^{-x}$ is not.

### 3
$e^{-x^2}$ can famously be integrated.

### 4
Especially if the limits are $0$ and/or $\infin$.


## Answer
```math
\sqrt{\frac{\pi}{\ln4}}
```


## Solution

### Substitute (1)
```math
\begin{align*}
  \sqrt{-x} &= t
  \\ -x &= t^{2}
  \\ x &= -t^{2}
  \\ dx &= -2t\ dt
\end{align*}
```

### Reshape
```math
\begin{align*}
  &\ \int_{-\infty}^{0}\frac{1}{\sqrt{-x}}4^{x}\ dx
  \\ =&\ \int_{\sqrt{\infty}}^{\sqrt{0}}\frac{1}{t}4^{-t^{2}}\cdot-2t\ dt
  \\ =&\ -2\int_{\infty}^{0}4^{-t^{2}}\ dt
  \\ =&\ 2\int_{0}^{\infty}e^{-\left(\ln4\right)t^{2}}\ dt
  \\ =&\ \int_{-\infty}^{\infty}e^{-\left(t\sqrt{\ln4}\right)^{2}}\ dt
\end{align*}
```

### Substitute (2)
```math
\begin{align*}
  t\sqrt{\ln4} &= v
  \\ t &= \frac{1}{\sqrt{\ln4}}v
  \\ dt &= \frac{1}{\sqrt{\ln4}}\ dv
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \frac{1}{\sqrt{\ln4}}\int_{-\infty}^{\infty}e^{-v^{2}}\ dv
  \\ &= \frac{1}{\sqrt{\ln4}}\sqrt{\pi}
  \\ &= \sqrt{\frac{\pi}{\ln4}}
\end{align*}
```
