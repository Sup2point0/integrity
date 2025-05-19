---
topic: integrals
title: asks
desc: 
date: 2025 May 9
tags:
  - definite
  - scare
  - exp
methods:
  - fun
  - work
  - acc
---


## Question
```math
\int_{0}^{\infty}
  \left(\frac{8^{x}\ 10^{x}\ 12^{x}}{7^{x}\ 9^{x}\ 11^{x}\ 13^{x}}\right)^{x}
\ dx
```


## Hints

### 1
Start by changing all the bases to $e$.

### 2
Then collect everything into 1 power of $e$.

### 3
Is the coefficient of $x^2$ positive or negative?

### 4
If it’s negative, then we have a normal distribution.

### 5
The area under a non-normalised normal distribution is $\sqrt{\pi}$.

## Answer
```math
\frac{1}{2}\sqrt{\frac{\pi}{\ln7+\ln9+\ln11+\ln13-\ln8-\ln10-\ln12}}
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int_{0}^{\infty}\left(\frac{8^{x}\ 10^{x}\ 12^{x}}{7^{x}\ 9^{x}\ 11^{x}\ 13^{x}}\right)^{x}\ dx
  \\ =&\ \int_{0}^{\infty}\left(\frac{e^{\left(\ln8\right)x}\ e^{\left(\ln10\right)x}\ e^{\left(\ln12\right)x}}{e^{\left(\ln7\right)x}\ e^{\left(\ln9\right)x}\ e^{\left(\ln11\right)x}\ e^{\left(\ln13\right)x}}\right)^{x}\ dx
  \\ =&\ \int_{0}^{\infty}\left(\frac{e^{\left(\ln8+\ln10+\ln12\right)x}}{e^{\left(\ln7+\ln9+\ln11+\ln13\right)x}\ }\right)^{x}\ dx
  \\ =&\ \int_{0}^{\infty}\left(e^{\left(\ln8+\ln10+\ln12-\ln7-\ln9-\ln11-\ln13\right)x}\right)^{x}\ dx
  \\ =&\ \int_{0}^{\infty}e^{\left(\ln8+\ln10+\ln12-\ln7-\ln9-\ln11-\ln13\right)x^{2}}\ dx
\end{align*}
```

### Gaussian
Let

```math
\begin{align*}
  k &= \ln8+\ln10+\ln12-\ln7-\ln9-\ln11-\ln13
  \\ &= \left(\ln8-\ln9\right)+\left(\ln10-\ln11\right)+\left(\ln12-\ln13\right)-\ln7
\end{align*}
```

$\ln(x)$ is an increasing function, so if $p < q$ then $\ln(p) < \ln(q)$. This means all of the differences above are negative, so the overall coefficient is negative:

```math
k < 0
```

This means we have a gaussian integral:

```math
\int_{0}^{\infty}e^{-\lambda x^{2}}\ dx
```

where

```math
\begin{align*}
  \lambda &= -k
  \\ &= \ln7+\ln9+\ln11+\ln13-\ln8-\ln10-\ln12
\end{align*}
```

Hence

```math
\begin{align*}
  \int_{0}^{\infty}e^{-\lambda x^{2}}\ dx &= \int_{0}^{\infty}e^{-\left(\sqrt{\lambda}x\right)^{2}}\ dx
  \\ &= \frac{1}{2}\int_{-\infty}^{\infty}e^{-\left(\sqrt{\lambda}x\right)^{2}}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \sqrt{\lambda}x &= t
  \\ \sqrt{\lambda}\ dx &= dt
  \\ dx &= \frac{1}{\sqrt{\lambda}}\ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  \frac{1}{2}\int_{-\infty}^{\infty}e^{-t^{2}}\cdot\frac{1}{\sqrt{\lambda}}\ dt
  \\ &= \frac{1}{2\sqrt{\lambda}}\int_{-\infty}^{\infty}e^{-t^{2}}\ dt
  \\ &= \frac{1}{2\sqrt{\lambda}}\sqrt{\pi}
  \\ &= \frac{1}{2}\sqrt{\frac{\pi}{-k}}
  \\ &= \frac{1}{2}\sqrt{\frac{\pi}{\ln7+\ln9+\ln11+\ln13-\ln8-\ln10-\ln12}}
\end{align*}
```
