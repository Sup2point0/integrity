---
topic: integrals
title: neogenesis
desc: 
date: 2025 April 5
tags:
 - poly
  - ln
methods:
  - 
---


## Question
```math
\int
  \frac{1}
    { \ln\left( x^4 - 1 \right) }
  \left(
    \frac{x}{1+x^2} -
    \frac{x}{1-x^2}
  \right)
\ dx
```


## Answer
```math
\frac{1}{2}\ln\left(\ln\left(x^{4}-1\right)\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{1}{\ln\left(x^{4}-1\right)}\left(\frac{x}{1+x^{2}}-\frac{x}{1-x^{2}}\right)\ dx
  \\ =&\ \int \frac{1}{\ln\left(\left(x^{2}-1\right)\left(x^{2}+1\right)\right)}\left(\frac{x}{1+x^{2}}-\frac{x}{1-x^{2}}\right)
  \\ =&\ \int \frac{1}{\ln\left(x^{2}-1\right)+\ln\left(x^{2}+1\right)}\left(\frac{x}{1+x^{2}}-\frac{x}{1-x^{2}}\right)\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \ln\left(x^{2}-1\right)+\ln\left(x^{2}+1\right) &= t
  \\ \left(-\frac{2x}{x^{2}-1}+\frac{2x}{x^{2}+1}\right)\ dx &= dt
  \\ \left(\frac{x}{x^{2}+1}-\frac{x}{x^{2}-1}\right)\ dx &= \frac{1}{2}dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int \frac{1}{t}\cdot\frac{1}{2}\ dt
  \\ &= \frac{1}{2}\ln t
  \\ &= \frac{1}{2}\ln\left(\ln\left(x^{2}-1\right)+\ln\left(x^{2}+1\right)\right)-c
  \\ &= \frac{1}{2}\ln\left(\ln\left(x^{4}-1\right)\right)-c
\end{align*}
```


## Alternates

### Cross-Multiply
```math
\begin{align*}
  &\ \int \frac{1}{\ln\left(x^{4}-1\right)}\left(\frac{x}{1+x^{2}}-\frac{x}{1-x^{2}}\right)\ dx
  \\ =&\ \int \frac{1}{\ln\left(x^{4}-1\right)}\left(\frac{x\left(1-x^{2}\right)-x\left(1+x^{2}\right)}{\left(1+x^{2}\right)\left(1-x^{2}\right)}\right)\ dx
  \\ =&\ \int \frac{1}{\ln\left(x^{4}-1\right)}\left(\frac{\left(x-x^{3}\right)-\left(x+x^{3}\right)}{1-x^{4}}\right)\ dx
  \\ =&\ \int \frac{1}{\ln\left(x^{4}-1\right)}\left(\frac{-2x^{3}}{1-x^{4}}\right)\ dx
  \\ =&\ \frac{1}{2}\int \frac{1}{\ln\left(x^{4}-1\right)}\left(\frac{4x^{3}}{x^{4}-1}\right)\ dx
  \\ =&\ \frac{1}{2}\ln\left(\ln\left(x^{4}-1\right)\right)-c
\end{align*}
```
