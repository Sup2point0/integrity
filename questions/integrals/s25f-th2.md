---
topic: integrals
title: peroxide
desc: 
date: 2025 January 15
tags:
  - trig
  - frac
methods:
  - spot
---


## Question
```math
\int \frac{2\sec x-2\tan x-\cos x}{\sin x-1}\ dx
```


## Hints

### 1
We probably want all the trigonometric functions in the same form – either $\sin$ and $\cos$ primitives, or $\sec$ and $\tan$ evolutions.

### 2
Try converting all the functions to $\sec{x}$ and $\tan{x}$.

### 3
What could you multiply through by to get rid of $\sin{x}$ and $\cos{x}$?


## Answer
```math
-\ln\left|\cos x\right|-\ln\left|\sec x+\tan x\right|-c
```


## Solution

### Solve
```math
\begin{align*}
  &\ \int \frac{2\sec x-2\tan x-\cos x}{\sin x-1}\ dx
  \\ =&\ \int \frac{2\sec x-2\tan x-\cos x}{\sin x-1}\cdot\frac{\sec x}{\sec x}\ dx
  \\ =&\ \int \frac{2\sec^{2}x-2\sec x\tan x-1}{\tan x-\sec x}\ dx
  \\ =&\ \int \frac{\left(2\sec^{2}x-1\right)-2\sec x\tan x}{\tan x-\sec x}\ dx
  \\ =&\ \int \frac{\sec^{2}x+\left(\sec^{2}x-1\right)-2\sec x\tan x}{\tan x-\sec x}\ dx
  \\ =&\ \int \frac{\sec^{2}x+\tan^{2}x-2\sec x\tan x}{\tan x-\sec x}\ dx
  \\ =&\ \int \frac{\ \left(\sec x-\tan x\right)^{2}}{\tan x-\sec x}\ dx
  \\ =&\ \int \frac{\left(\tan x-\sec x\right)^{2}}{\tan x-\sec x}\ dx
  \\ =&\ \int \tan x-\sec x\ dx
  \\ =&\ -\ln\left|\cos x\right|-\ln\left|\sec x+\tan x\right|-c
\end{align*}
```

### Factorise
```math
\begin{align*}
  &= \ln\left|\sec x\right|-\ln\left|\sec x+\tan x\right|
  \\ &= \ln\left|\frac{\sec x}{\sec x+\tan x}\right|-c
\end{align*}
```
