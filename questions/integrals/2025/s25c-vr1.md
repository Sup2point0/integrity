---
topic: integrals
title: VRAM
desc: 
date: 2025 March 13
difficulty: manifold
tags:
  - trig
  - ln
methods:
  - tough
  - spot
---


## Question
```math
\int
  \frac
    { \sec{x} }
    { \ln\left( \sec{x} - \tan{x} \right) }
\ dx
```


## Hints

### 1
One of the nicest things about $\sec$ is that its derivative includes itself.

### 2
One of the nice things about $\tan$ is that its derivative includes $\sec$.

### 3
Sometimes, you can just hope for the best.


## Answer
```math
-\ln\left(\ln\left(\sec x-\tan x\right)\right)-c
```


## Solution

### Substitute
```math
\begin{align*}
  \sec x-\tan x &= t
  \\ \left(\sec x\tan x-\sec^{2}x\right)\ dx &= dt
  \\ dx &= \frac{1}{\left(\sec x\right)\left(\tan x-\sec x\right)}\ dt
  \\ &= -\frac{1}{\left(\sec x\right)\left(\sec x-\tan x\right)}\ dt
  \\ &= -\frac{1}{t\sec x}\ dt
\end{align*}
```

### Reshape
```math
\begin{align*}
  &\ \int \frac{\sec x}{\ln\left(\sec x-\tan x\right)}\ dx
  \\ =&\ \int \frac{\sec x}{\ln t}\cdot-\frac{1}{t\sec x}\ dt
  \\ =&\ -\int \frac{1}{t\ln t}\ dt
  \\ =&\ -\ln\left(\ln t\right)
  \\ =&\ -\ln\left(\ln\left(\sec x-\tan x\right)\right)-c
\end{align*}
```
