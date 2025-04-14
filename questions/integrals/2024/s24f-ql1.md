---
topic: integrals
title: again, again
desc: 
date: 2024 December 10
tags:
  - frac
  - sqrt
methods:
  - speed
  - sub
---


## Question
```math
\int \frac{1-\sqrt{x}}{1+\sqrt{x}}\ dx
```


## Answer
```math
4\sqrt{x}-x-4\ln\left(1+\sqrt{x}\right)-c
```


## Solution

### Substitute
```math
\begin{align*}
  \sqrt{x} &= t
  \\ x &= t^{2}
  \\ dx &= 2t\ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ \int \frac{1-\sqrt{x}}{1+\sqrt{x}}\ dx
  \\ =&\ \int \frac{1-t}{1+t}\cdot2t\ dt
  \\ =&\ -2\int \frac{t^{2}-t}{t+1}\ dt
  \\ =&\ -2\int \frac{t^{2}+2t+1-3t-1}{t+1}\ dt
  \\ =&\ -2\int \frac{\left(t+1\right)^{2}-3t-1}{t+1}\ dt
  \\ =&\ -2\int \frac{\left(t+1\right)^{2}}{t+1}-\frac{3t+1}{t+1}\ dt
  \\ =&\ -2\int \left(t+1\right)-\frac{3t+3-2}{t+1}\ dt
  \\ =&\ -2\int \left(t+1\right)-3+\frac{2}{t+1}\ dt
  \\ =&\ -2\int t-2+\frac{2}{t+1}\ dt
  \\ =&\ -2\left(\frac{1}{2}t^{2}-2t+2\ln\left(t+1\right)\right)
  \\ =&\ 4t-t^{2}-4\ln\left(t+1\right)
  \\ =&\ 4\sqrt{x}-x-4\ln\left(1+\sqrt{x}\right)-c
\end{align*}
```
