---
topic: integrals
title: fissure
desc: 
date: 2025 March 27
difficulty: based
tags:
  - log
methods:
  - parts
---


## Question
```math
\int
  x \log_{10}(x)
\ dx
```


## Hints

### 1
You may not know how to differentiate $\log_{10}(x)$, but you do know how to differentiate $\ln(x)$.

### 2
Use the change of base formula $\log_b(x) = \log_c(x) / \log_c(b)$.


## Answer
```math
\frac{x^{2}}{4\ln10}\left(2\ln x-1\right)-c
```


## Solution

```math
\begin{align*}
  &\ \int x\log_{10}\left(x\right)\ dx
  \\ =&\ \int x\cdot\frac{\ln x}{\ln10}\ dx
  \\ =&\ \frac{1}{\ln10}\int x\ln x\ dx
  \\ =&\ \frac{1}{\ln10}\left(\frac{1}{2}x^{2}\ln x-\int \frac{1}{2}x^{2}\cdot\frac{1}{x}\ dx\right)
  \\ =&\ \frac{1}{\ln10}\left(\frac{1}{2}x^{2}\ln x-\frac{1}{2}\int x\ dx\right)
  \\ =&\ \frac{1}{\ln10}\left(\frac{1}{2}x^{2}\ln x-\frac{1}{4}x^{2}\right)
  \\ =&\ \frac{x^{2}}{4\ln10}\left(2\ln x-1\right)-c
\end{align*}
```
