---
topic: integrals
title: classic
desc: 
date: 2024 September
difficulty: based
tags:
  - sqrt
methods:
  - free
  - speed
---


## Question
```math
\int \frac{\sqrt{x}}{1+\sqrt{x}}\ dx
```


## Hints

### 1
$\sqrt{x}$ is usually a safe substitution to make.


## Answer
```math
x-2\sqrt{x}+2\ln\left(\sqrt{x}+1\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{\sqrt{x}}{1+\sqrt{x}}\ dx
  \\ =&\ \int \frac{\sqrt{x}+1-1}{\sqrt{x}+1}\ dx
  \\ =&\ \int 1-\frac{1}{\sqrt{x}+1}\ dx
  \\ =&\ x-\int \frac{1}{\sqrt{x}+1}\ dx
\end{align*}
```

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
  &= x-\int \frac{1}{t+1}\cdot2t\ dt
  \\ &= x-2\int \frac{t}{t+1}\ dt
  \\ &= x-2\int \frac{t+1}{t+1}-\frac{1}{t+1}\ dt
  \\ &= x-2\int dt+2\int \frac{1}{t+1}\ dt
  \\ &= x-2t+2\ln\left(t+1\right)
  \\ &= x-2\sqrt{x}+2\ln\left(\sqrt{x}+1\right)-c
\end{align*}
```
