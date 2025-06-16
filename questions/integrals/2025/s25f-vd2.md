---
topic: integrals
title: V.D.U.
desc: 
date: 2025 April 16
tags:
  - exp
  - trig
methods:
  - tough
  - spot
  - arcprod
---


## Question
```math
\int
  e^{\, \sec{x}} \left(
    \tan{x} - \sin{x}
  \right)
\ dx
```


## Hints

### 1
There’s an inverse something rule here.

### 2
What trig function combines really nicely with $\sin(x)$?

### 3
What trig function goes really nicely with $\tan(x)$?

### 4
Try multiplying through by this trig function.

### 5
What if you did it again?

### 6
What’s the derivative of $\sec(x)$?

### 7
What’s the derivative of $e^{\, \sec{x}}$?

### 8
What’s the derivative of $\frac{e^{\, \cos{x}}}{\cos{x}}$?


## Answer
```math
\frac{e^{\sec x}}{\sec x}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int e^{\sec x}\left(\tan x-\sin x\right)\ dx
  \\ =&\ \int e^{\sec x}\left(\tan x-\sin x\right)\cdot\frac{\sec^{2}x}{\sec^{2}x}\ dx
  \\ =&\ \int \frac{e^{\sec x}\left(\sec^{2}x\tan x-\sec x\tan x\right)}{\sec^{2}x}\ dx
\end{align*}
```

### Inverse Quotient Rule
```math
\begin{align*}
  \frac{d}{dx}\left(\frac{e^{\sec x}}{\sec x}\right)
    &= \frac{\left(\sec x\right)\left(e^{\sec x}\cdot\sec x\tan x\right)-\left(e^{\sec x}\right)\left(\sec x\tan x\right)}{\sec^{2}x}
  \\ &= \frac{e^{\sec x}\left(\sec^{2}x\tan x-\sec x\tan x\right)}{\sec^{2}x}
\end{align*}
```

Hence

```math
\int e^{\sec x}\left(\tan x-\sin x\right)\ dx
  = \frac{e^{\sec x}}{\sec x}-c
```
