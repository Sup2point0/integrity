---
topic: integrals
title: bureaucracy
desc: 
date: 2025 January 10
tags:
  - poly
  - frac
methods:
  - spot
  - sub
---


## Question
```math
\int \frac{x^{5}}{x^{6}-3x^{4}+4x^{2}-2}\ dx
```


## Answer
```math
\frac{1}{2}\ln\left|x^{2}-1\right|+\tan^{-1}\left(x^{2}-1\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{x^{5}}{x^{6}-3x^{4}+4x^{2}-2}\ dx
  \\ =&\ \int \frac{x^{5}}{x^{6}-3x^{4}+3x^{2}-1+x^{2}-1}\ dx
  \\ =&\ \int \frac{x^{5}}{\left(x^{2}-1\right)^{3}+\left(x^{2}-1\right)}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  x^2 - 1 &= t \quad\to\quad x^2 = t+1
  \\ 2x \ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int \frac{x^{5}}{t^{3}+t}\ dx
  \\ &= \frac{1}{2}\int \frac{x^{4}}{t^{3}+t}\cdot2x\ dx
  \\ &= \frac{1}{2}\int \frac{\left(t+1\right)^{2}}{t^{3}+t}\ dt
  \\ &= \frac{1}{2}\int \frac{t^{2}+2t+1}{t\left(t^{2}+1\right)}
  \\ &= \frac{1}{2}\int \frac{t^{2}+1}{t\left(t^{2}+1\right)}+\frac{2t}{t\left(t^{2}+1\right)}\ dt
  \\ &= \frac{1}{2}\int \frac{1}{t}\ dt+\int \frac{1}{t^{2}+1}\ dt
  \\ &= \frac{1}{2}\ln\left|t\right|+\tan^{-1}\left(t\right)
  \\ &= \frac{1}{2}\ln\left|x^{2}-1\right|+\tan^{-1}\left(x^{2}-1\right)-c
\end{align*}
```
