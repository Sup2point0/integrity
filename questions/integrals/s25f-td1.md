---
topic: integrals
title: orders
desc: 
date: 2025 January 11
tags:
  - trig
  - frac
method:
  - spot
---


## Question
```math
\int \frac{1}{37\sin^{2}x+111\cos^{2}x}\ dx
```


## Hints

### 1

### 2

### 3


## Answer
```math
\frac{\sqrt{3}}{111}\tan^{-1}\left(\frac{\sqrt{3}}{3}\tan x\right)-c
```


## Solution

### Reform
```math
\begin{align*}
  &\ \int \frac{1}{37\sin^{2}x+111\cos^{2}x}\ dx
  \\ =&\ \int \frac{1}{37\left(\sin^{2}x+3\cos^{2}x\right)}\ dx
  \\ =&\ \frac{1}{37}\int \frac{1}{\sin^{2}x+3\cos^{2}x}\ dx
\end{align*}
```

A go-to method might be to eliminate the $\sin^2$ with the identity $\sin^2{x} + \cos^2{x} = 1$, but this would leave us with a $\cos^2$ here which would be annoying to handle.

Instead, the trick is to multiply through by something!

```math
\begin{align*}
  &= \frac{1}{37}\int \frac{1}{\sin^{2}x+3\cos^{2}x}\cdot\frac{\sec^{2}x}{\sec^{2}x}\ dx
  \\ &= \frac{1}{37}\int \frac{\sec^{2}x}{\tan^{2}x+3}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \tan x &= t
  \\ \sec^{2}x\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \frac{1}{37}\int \frac{1}{t^{2}+3}\ dt
  \\ &= \frac{1}{37\sqrt{3}}\tan^{-1}\left(\frac{1}{\sqrt{3}}t\right)
  \\ &= \frac{\sqrt{3}}{111}\tan^{-1}\left(\frac{\sqrt{3}}{3}\tan x\right)-c
\end{align*}
```
