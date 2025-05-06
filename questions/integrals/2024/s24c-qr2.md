---
topic: integrals
title: scenic
desc: 
date: 2024 September
tags:
  - sqrt
methods:
  - sub
---


## Question
```math
\int \frac{\sqrt{x}}{1+x}\ dx
```


## Hints

### 1
$x$ is the same as $\left(\sqrt{x}\right)^2$.


## Answer
```math
2\sqrt{x}-2\tan^{-1}\sqrt{x}-c
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
  &\ \int \frac{\sqrt{x}}{1+x}\ dx
  \\ =&\ \int \frac{t}{1+t^{2}}\cdot2t\ dt
  \\ =&\ 2\int \frac{t^{2}}{t^{2}+1}\ dt
  \\ =&\ 2\int \frac{t^{2}+1-1}{t^{2}+1}\ dt
  \\ =&\ 2\int 1-\frac{1}{t^{2}+1}\ dt
  \\ =&\ 2t-2\tan^{-1}t
  \\ =&\ 2\sqrt{x}-2\tan^{-1}\sqrt{x}-c
\end{align*}
```
