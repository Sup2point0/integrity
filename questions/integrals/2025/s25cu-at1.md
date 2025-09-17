---
topic: integrals
title: STRAIGHT DOWN
desc: 
date: 2025 March 20
difficulty: chaos
tags:
  - trig
  - exp
methods:
  - spot
---


## Question
```math
\int
  \frac
    { 2e^x + 2\cos{x} }
    { e^x \left( e^x + 2\sin{x} \right) - \left(\cos^2{x} - 2 \right) }
\ dx
```


## Hints

### 1
What does the top look similar to?

### 2
How could you make the bottom only contain 1 trigonometric function?

### 3
Starts with “f” and rhymes with *tractorise*.


## Answer
```math
2\tan^{-1}\left(e^{x}+\sin x\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{2e^{x}+2\cos x}{e^{x}\left(e^{x}+2\sin x\right)-\left(\cos^{2}x-2\right)}\ dx
  \\ =&\ \int \frac{2e^{x}+2\cos x}{e^{x}\left(e^{x}+2\sin x\right)-\left(1-\sin^{2}x-2\right)}\ dx
  \\ =&\ \int \frac{2e^{x}+2\cos x}{e^{x}\left(e^{x}+2\sin x\right)+\sin^{2}x+1}\ dx
  \\ =&\ \int \frac{2e^{x}+2\cos x}{e^{2x}+2e^{2}\sin x+\sin^{2}x+1}\ dx
  \\ =&\ \int \frac{2e^{x}+2\cos x}{\left(e^{x}+\sin x\right)^{2}+1}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  e^{x}+\sin x &= t
  \\ \left(e^{x}+\cos x\right)\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int \frac{2}{t^{2}+1}\ dt
  \\ &= 2\tan^{-1}t
  \\ &= 2\tan^{-1}\left(e^{x}+\sin x\right)-c
\end{align*}
```
