---
topic: integrals
title: treasure hunting
desc: 
date: 2025 January 12
tags:
  - horror
  - trig
 - pi
methods:
  - spot
flags:
  - feat
---


## Question
```math
\int
  \frac
    {\sec^4{x} + 2\tan^4{x} + \tan^2{x} + \sec^2{x} - 1}
    {\left( \tan{x}\sec^2{x} + \pi \right)^{\sqrt{2025}}}
\ dx
```


## Hints

### 1
What’s $sec^2{x} - 1$?

### 2
What substitution might you make?

### 3
What would the derivative of that substitution look like?

### 4
$\sqrt{2025}$ is just to scare you.


## Answer
```math
-\frac{1}{44}\left(\tan x\sec^{2}x+\pi\right)^{-44}-c
```


## Solution

### Factorise
```math
\begin{align*}
  &\ \int \frac{\sec^{4}x+2\tan^{4}x+\tan^{2}x+\sec^{2}x-1}{\left(\tan x\sec^{2}x+\pi\right)^{\sqrt{2025}}}\ dx
  \\ =&\ \int \frac{\sec^{4}x+2\tan^{4}x+2\tan^{2}x}{\left(\tan x\sec^{2}x+\pi\right)^{\sqrt{2025}}}\ dx
  \\ =&\ \int \frac{\sec^{4}x+2\tan^{2}x\left(\tan^{2}x+1\right)}{\left(\tan x\sec^{2}x+\pi\right)^{\sqrt{2025}}}\ dx
  \\ =&\ \int \frac{\sec^{4}x+2\tan^{2}x\sec^{2}x}{\left(\tan x\sec^{2}x+\pi\right)^{\sqrt{2025}}}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \tan x\sec^{2}x+\pi &= t
  \\ \left(\sec^{2}x\cdot\sec^{2}x+\tan x\cdot2\sec x\cdot\sec x\tan x\right)\ dx &= dt
  \\ \left(\sec^{4}x+2\tan^{2}x\sec^{2}x\right)\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int \frac{1}{t^{\sqrt{2025}}}\ dt
  \\ &= \int t^{-45}\ dt
  \\ &= -\frac{1}{44}t^{-44}
  \\ &= -\frac{1}{44}\left(\tan x\sec^{2}x+\pi\right)^{-44}-c
\end{align*}
```
