---
topic: integrals
title: lighthouse
desc: 
date: 2025 January 21
tags:
  - trig
  - exp
  - frac
methods:
  - spot
---


## Question
```math
\int
  \frac
    { \sin(x) \exp(\frac{1}{\sec{x}-1}) }
    { \cos^2{x} - 2\cos{x} + 1 }
\ dx
```


## Answer
```math
-\exp\left(\frac{1}{\sec x-1}\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{\left(\sin x\right)\exp\left(\frac{1}{\sec x-1}\right)}{\cos^{2}x-2\cos x+1}\ dx
  \\ =&\ \int \frac{\left(\sin x\right)\exp\left(\frac{1}{\sec x-1}\right)}{\cos^{2}x-2\cos x+1}\cdot\frac{\sec^{2}x}{\sec^{2}x}\ dx
  \\ =&\ \int \frac{\left(\frac{1}{\cos x}\right)\left(\frac{\sin x}{\cos x}\right)\exp\left(\frac{1}{\sec x-1}\right)}{1-2\sec x+\sec^{2}x}\ dx
  \\ =&\ \int \frac{\left(\sec x\tan x\right)\exp\left(\frac{1}{\sec x-1}\right)}{\left(\sec x-1\right)^{2}}\ dx
\end{align*}
```

### Substitute (1)
```math
\begin{align*}
  \sec x-1 &= t
  \\ \sec x\tan x\ dx &= dt
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  &= \int \frac{\exp\left(\frac{1}{t}\right)}{t^{2}}\ dt
  \\ &= -\int -\frac{1}{t^{2}}e^{\frac{1}{t}}\ dt
\end{align*}
```

### Substitute (2)
```math
\begin{align*}
  \frac{1}{t} &= v
  \\ -\frac{1}{t^{2}}\ dt &= dv
\end{align*}
```

### Solve (2)
```math
\begin{align*}
  &= -\int e^{v}\ dv
  \\ &= -e^{v}
  \\ &= -e^{\frac{1}{t}}
  \\ &= -\exp\left(\frac{1}{\sec x-1}\right)-c
\end{align*}
```
