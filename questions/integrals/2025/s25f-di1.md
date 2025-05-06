---
topic: integrals
title: humour
desc: 
date: 2025 February 6
tags:
  - definite
  - ln
methods:
  - tough
  - spot
  - sub
---


## Question
```math
\int_{0}^{\infin} \frac{1}{x\ln{x}} \ dx
```


## Hints

### 1
Evaluating the integral indefinitely results in issues.

### 2
Can you prove some sort of identity?

### 3
What would happen if the integral is equal to the negative of itself?


## Answer
$0$


## Solution

### Substitute
```math
\begin{align*}
  x &= \frac{1}{t}
  \\ dx &= -\frac{1}{t^{2}}\ dt
\end{align*}
```

### Reshape
```math
\begin{align*}
  &\ \int_{0}^{\infty}\frac{1}{x\ln x}\ dx
  \\ =&\ \int_{\infty}^{0}\frac{1}{\left(\frac{1}{t}\right)\ln\left(\frac{1}{t}\right)}\cdot-\frac{1}{t^{2}}\ dt
  \\ =&\ \int_{0}^{\infty}\frac{1}{t^{2}\left(\frac{1}{t}\right)\ln\left(\frac{1}{t}\right)}\ dt
  \\ =&\ \int_{0}^{\infty}\frac{1}{t\ln\left(t^{-1}\right)}\ dt
  \\ =&\ -\int_{0}^{\infty}\frac{1}{t\ln\left(t\right)}\ dt
\end{align*}
```

### Solve

```math
\begin{align*}
  \int_{0}^{\infty}\frac{1}{x\ln x}\ dx &= -\int_{0}^{\infty}\frac{1}{t\ln\left(t\right)}\ dt
  \\ \Rightarrow \int_{0}^{\infty}\frac{1}{x\ln x}\ dx &= 0
\end{align*}
```
