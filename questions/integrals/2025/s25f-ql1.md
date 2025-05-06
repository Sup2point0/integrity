---
topic: integrals
title: vanquish
desc: 
date: 2025 March 25
tags:
  - trig
methods:
  - layer cake
---


## Question
```math
\int
  \frac
    { \tan{x} + x \left( \tan^2{x} + \sec^2{x} \right) }
    { \cos{x} - x\tan{x} }
\ dx
```


## Hints

### 1
Get rid of $\cos{x}$.


## Answer
```math
-\ln\left(1-x\sec x\tan x\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{\tan x+x\left(\tan^{2}x+\sec^{2}x\right)}{\cos x-x\tan x}\ dx
  \\ =&\ \int \frac{\tan x+x\tan^{2}x+x\sec^{2}x}{\cos x-x\tan x}\ dx
  \\ =&\ \int \frac{\tan x+x\tan^{2}x+x\sec^{2}x}{\cos x-x\tan x}\cdot\frac{\sec x}{\sec x}\ dx
  \\ =&\ \int \frac{\sec x\tan x+x\sec x\tan^{2}x+x\sec^{3}x}{1-x\sec x\tan x}\ dx
\end{align*}
```

### Layer Cake
```math
\begin{align*}
  \frac{d}{dx}\left(x\sec x\tan x\right)
    &= \left(\frac{d}{dx}x\right)\sec x\tan x+x\left(\frac{d}{dx}\sec x\right)\tan x+x\sec x\left(\frac{d}{dx}\tan x\right)
  \\ &= \left(\sec x\tan x\right)+\left(x\sec x\tan x\cdot\tan x\right)+\left(x\sec x\cdot\sec^{2}x\right)
  \\ &= \sec x\tan x+x\sec x\tan^{2}x+x\sec^{3}x
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int \frac{\sec x\tan x+x\sec x\tan^{2}x+x\sec^{3}x}{1-x\sec x\tan x}\ dx
  \\ &= -\int \frac{\sec x\tan x+x\sec x\tan^{2}x+x\sec^{3}x}{x\sec x\tan x-1}\ dx
  \\ &= -\ln\left(1-x\sec x\tan x\right)-c
\end{align*}
```
