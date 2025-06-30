---
topic: integrals
title: don’t overcomplicate
desc: 
date: 2024 September
difficulty: 
tags:
  - sqrt
methods:
  - sub
---


## Question
```math
\int \frac{1}{\sqrt{x}\left(x+1\right)}\ dx
```


## Hints

### 1
$x$ is the same as $\left(\sqrt{x}\right)^2$.


## Answer
```math
2\tan^{-1}\sqrt{x}-c
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
  &\ \int \frac{1}{\sqrt{x}\left(x+1\right)}\ dx
  \\ =&\ \int \frac{1}{t\left(t^{2}+1\right)}\cdot2t\ dt
  \\ =&\ 2\int \frac{1}{t^{2}+1}\ dt
  \\ =&\ 2\tan^{-1}t
  \\ =&\ 2\tan^{-1}\sqrt{x}-c
\end{align*}
```
