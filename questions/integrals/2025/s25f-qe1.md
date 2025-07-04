---
topic: integrals
title: anticonjugate
desc: 
date: 2025 January 23
difficulty: manifold
tags:
  - exp
  - sqrt
methods:
  - work
---


## Question
```math
\int
  \sqrt{
    \frac
      { e^x }
      { e^x+1 }
    + \frac
      { 1 }
      { e^x-1 }
  }
\ dx
```


## Hints

### 1
What do you do when adding fractions?

### 2
$e^x$ is safe, as is $e^{2x}$.


## Answer
```math
\frac{1}{2}\ln\left|e^{2x}+\sqrt{e^{4x}-1}\right|+\frac{1}{2}\sec^{-1}\left(e^{2x}\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \sqrt{\frac{e^{x}\left(e^{x}-1\right)+\left(e^{x}+1\right)}{\left(e^{x}+1\right)\left(e^{x}-1\right)}}\ dx
  \\ =&\ \int \sqrt{\frac{e^{2x}-e^{x}+e^{x}+1}{e^{2x}-1}}\ dx
  \\ =&\ \int \frac{\sqrt{e^{2x}+1}}{\sqrt{e^{2x}-1}}\ dx
  \\ =&\ \int \frac{\sqrt{e^{2x}+1}}{\sqrt{e^{2x}-1}}\cdot\frac{\sqrt{e^{2x}-1}}{\sqrt{e^{2x}-1}}\ dx
  \\ =&\ \int \frac{\sqrt{\left(e^{2x}+1\right)\left(e^{2x}-1\right)}}{e^{2x}-1}\ dx
  \\ =&\ \int \frac{\sqrt{e^{4x}-1}}{e^{2x}-1}\ dx
\end{align*}
```

### Substitute (1)
```math
\begin{align*}
  e^{2x} &= t
  \\ 2e^{2x}\ dx &= dt
  \\ dx &= \frac{1}{2e^{2x}}\ dt
  \\ dx &= \frac{1}{2t}\ dt
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  &= \int \frac{\sqrt{t^{2}-1}}{t-1}\cdot\frac{1}{2t}\ dt
  \\ &= \frac{1}{2}\int \frac{\sqrt{t^{2}-1}}{t\left(t-1\right)}\ dt
\end{align*}
```

### Substitute (2)
```math
\begin{align*}
  t &= \sec v
  \\ dt &= \sec v\tan v\ dv
\end{align*}
```

### Solve (2)
```math
\begin{align*}
  &= \frac{1}{2}\int \frac{\sqrt{\sec^{2}v-1}}{\left(\sec v\right)\left(\sec v-1\right)}\cdot\sec v\tan v\ dv
  \\ &= \frac{1}{2}\int \frac{\tan^{2}v}{\sec v-1}\ dv
  \\ &= \frac{1}{2}\int \frac{\tan^{2}v}{\sec v-1}\cdot\frac{\sec v+1}{\sec v+1}\ dv
  \\ &= \frac{1}{2}\int \frac{\sec v\tan^{2}v+\tan^{2}v}{\sec^{2}v-1}\ dv
  \\ &= \frac{1}{2}\int \frac{\sec v\tan^{2}v}{\tan^{2}v}+\frac{\tan^{2}v}{\tan^{2}v}\ dv
  \\ &= \frac{1}{2}\int \sec v+1\ dv
  \\ &= \frac{1}{2}\ln\left|\sec v+\tan v\right|+\frac{1}{2}v
  \\ &= \frac{1}{2}\ln\left|t+\sqrt{t^{2}-1}\right|+\frac{1}{2}\sec^{-1}t
  \\ &= \frac{1}{2}\ln\left|e^{2x}+\sqrt{e^{4x}-1}\right|+\frac{1}{2}\sec^{-1}\left(e^{2x}\right)-c
\end{align*}
```
