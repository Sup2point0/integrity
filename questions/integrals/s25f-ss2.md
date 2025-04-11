---
topic: integrals
title: recirculation
desc: 
date: 2025 April 7
tags:
  - frac
  - trig
methods:
  - tough
  - spot
---


## Question
```math
\int \frac{1}{\sin^{4}x-1}\ dx
```


## Hints

### 1
Multiply through by $\sec(x)^4$.


## Answer
```math
-\frac{1}{2}\tan x-\frac{\sqrt{2}}{4}\tan^{-1}\left(\sqrt{2}\tan x\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{1}{\sin^{4}x-1}\ dx
  \\ =&\ \int \frac{1}{\sin^{4}x-1}\cdot\frac{\sec^{4}x}{\sec^{4}x}\ dx
  \\ =&\ \int \frac{\sec^{4}x}{\tan^{4}x-\sec^{4}x}\ dx
  \\ =&\ \int \frac{\left(\sec^{2}x\right)\left(\sec^{2}x\right)}{\tan^{4}x-\left(\sec^{2}x\right)^{2}}\ dx
  \\ =&\ \int \frac{\left(\tan^{2}x+1\right)\left(\sec^{2}x\right)}{\tan^{4}x-\left(\tan^{2}x+1\right)^{2}}\ dx
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
  &= \int \frac{\left(t^{2}+1\right)}{t^{4}-\left(t^{2}+1\right)^{2}}\ dt
  \\ &= \int \frac{t^{2}+1}{t^{4}-\left(t^{4}+2t^{2}+1\right)}\ dt
  \\ &= \int \frac{t^{2}+1}{-2t^{2}-1}\ dt
  \\ &= -\frac{1}{2}\int \frac{2t^{2}+2}{2t^{2}+1}\ dt
  \\ &= -\frac{1}{2}\int \frac{2t^{2}+1}{2t^{2}+1}+\frac{1}{2t^{2}+1}\ dt
  \\ &= -\frac{1}{2}\int dt-\frac{1}{4}\int \frac{1}{t^{2}+1/2}\ dt
  \\ &= -\frac{1}{2}t-\frac{1}{4}\sqrt{2}\tan^{-1}\left(\sqrt{2}t\right)
  \\ &= -\frac{1}{2}\tan x-\frac{\sqrt{2}}{4}\tan^{-1}\left(\sqrt{2}\tan x\right)-c
\end{align*}
```
