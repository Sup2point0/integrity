---
topic: integrals
title: shimmer
desc: 
date: 2025 February 26
difficulty: manifold
tags:
  - trig
methods:
  - spot
---


## Question
```math
\int
  e^x \left( \sin{x} + x \sin{x} + x \cos{x} \right)
\ dx
```


## Hints

### 1
You could expand and solve each integral individually, but it’s been written in this form for a reason.

### 2
What if you wrote the lone $\sin{x}$ as $1 \cdot \sin{x}$?

### 3
Under what circumstances would you get 3 terms when differentiating?


## Answer
```math
xe^{x}\sin x-c
```


## Solution

### Inverse Triple Product Rule
```math
\begin{align*}
  \frac{d}{dx}xe^{x}\sin x
    &= e^{x}\sin x+xe^{x}\sin x+xe^{x}\cos x
  \\ &= e^{x}\left(\sin x+x\cos x+x\sin x\right)
\end{align*}
```

Hence

```math
\begin{align*}
  &\ \int e^{x}\left(\sin x+x\cos x+x\sin x\right)\ dx
  \\ =&\ xe^{x}\sin x-c
\end{align*}
```
