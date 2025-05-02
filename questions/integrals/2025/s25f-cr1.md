---
topic: integrals
title: cope
desc: 
date: 2025 January 30
tags:
 - trig
  - ln
methods:
  - spot
---


## Question
```math
\int
  \frac
    { 1 + x\tan{x} }
    { x }
  \ln\left(
    x \sec{x}
  \right)
\ dx
```


## Hints

### 1
What’s the derivative of $x \sec{x}$?

### 2
How could you get the derivative on the outside?


## Answer
```math
\frac{1}{2}\ln\left(x\sec x\right)^{2}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{1+x\tan x}{x}\ln\left(x\sec x\right)\ dx
  \\ =&\ \int \frac{1+x\tan x}{x}\ln\left(x\sec x\right)\cdot\frac{\sec x}{\sec x}\ dx
  \\ =&\ \int \frac{\sec x+x\sec x\tan x}{x\sec x}\ln\left(x\sec x\right)\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  x \sec{x} &= t
  \\ \left(\sec x+x\sec x\tan x\right)\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int \frac{1}{t}\ln t\ dt
  \\ &= \frac{1}{2}\left(\ln t\right)^{2}
  \\ &= \frac{1}{2}\ln\left(x\sec x\right)^{2}-c
\end{align*}
```
