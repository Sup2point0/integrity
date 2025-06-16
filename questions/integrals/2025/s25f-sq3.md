---
topic: integrals
title: squeakeasy
desc: 
date: 2025 May 24
tags:
  - arctrig
methods:
  - parts
---


## Question
```math
\int
  \frac
    { \operatorname{arccot}(x^3) }
    { x^4 }
\ dx
```


## Hints

### 1
You know how to differentiate $\cot^{-1}(x)$.

### 2
Parts!


## Answer
```math
\frac{1}{6}\ln\left(x^{6}+1\right)-\ln x-\frac{\operatorname{arccot}\left(x^{3}\right)}{3x^{3}}-c
```


## Solution

### Parts
```math
\begin{align*}
      f &= \operatorname{arccot}\left(x^{3}\right) \quad&\quad g' &= \frac{1}{x^{4}}
  \\ f' &= -\frac{1}{\left(x^{3}\right)^{2}+1}\cdot3x^{2} \quad&\quad g &= -\frac{1}{3x^{3}}
  \\ &= -\frac{3x^{2}}{x^{6}+1}
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ \int \frac{\operatorname{arccot}\left(x^{3}\right)}{x^{4}}\ dx
  \\ =&\ \operatorname{arccot}\left(x^{3}\right)\cdot-\frac{1}{3x^{3}}-\int -\frac{3x^{2}}{x^{6}+1}\cdot-\frac{1}{3x^{3}}\ dx
  \\ =&\ -\frac{\operatorname{arccot}\left(x^{3}\right)}{3x^{3}}-\int \frac{1}{x\left(x^{6}+1\right)}\ dx
  \\ =&\ -\frac{\operatorname{arccot}\left(x^{3}\right)}{3x^{3}}-\int \frac{1}{x\left(x^{6}+1\right)}\cdot\frac{x^{-7}}{x^{-7}}\ dx
  \\ =&\ -\frac{\operatorname{arccot}\left(x^{3}\right)}{3x^{3}}-\int \frac{x^{-7}}{1+x^{-6}}\ dx
  \\ =&\ -\frac{\operatorname{arccot}\left(x^{3}\right)}{3x^{3}}+\frac{1}{6}\int \frac{-6x^{-7}}{1+x^{-6}}\ dx
  \\ =&\ -\frac{\operatorname{arccot}\left(x^{3}\right)}{3x^{3}}+\frac{1}{6}\ln\left(1+x^{-6}\right)-c
  \\ =&\ -\frac{\operatorname{arccot}\left(x^{3}\right)}{3x^{3}}+\frac{1}{6}\ln\left(\frac{x^{6}+1}{x^{6}}\right)-c
  \\ =&\ -\frac{\operatorname{arccot}\left(x^{3}\right)}{3x^{3}}+\frac{1}{6}\ln\left(x^{6}+1\right)-\ln x-c
  \\ =&\ \frac{1}{6}\ln\left(x^{6}+1\right)-\ln x-\frac{\operatorname{arccot}\left(x^{3}\right)}{3x^{3}}-c
\end{align*}
```
