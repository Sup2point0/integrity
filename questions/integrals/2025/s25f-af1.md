---
topic: integrals
title: afterthought
desc: 
date: 2025 February 14
difficulty: manifold
tags:
  - trig
methods:
  - sub
---


## Question
```math
\int
  x^3
  \left(
    \frac{1}{x} + \tan{x}
  \right)
  \left(
    \sec^3{x}
  \right)
\ dx
```


## Hints

### 1
Can you group any terms together?

### 2
Can you take out something from the group?

### 3
What would go really nicely with $\tan{x}$?


## Answer
```math
\frac{1}{3}\left(x\sec x\right)^{3}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int x^{3}\left(\frac{1}{x}+\tan x\right)\left(\sec^{3}x\right)\ dx
  \\ =&\ \int \left(x\sec x\right)^{3}\left(\frac{1}{x}+\tan x\right)\ dx
  \\ =&\ \int \left(x\sec x\right)^{2}\left(\sec x+x\sec x\tan x\right)\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  x\sec x &= t
  \\ \left(\sec x+x\sec x\tan x\right)\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int t^{2}\ dt
  \\ &= \frac{1}{3}t^{3}
  \\ &= \frac{1}{3}\left(x\sec x\right)^{3}-c
\end{align*}
```
