---
topic: integrals
title: everything will be alright
desc: 
date: 2025 March 27
difficulty: incline
tags:
  - trig
methods:
  - spot
---


## Question
```math
\int
  \frac
    { \sin{x} + \cos{x} }
    { \sec{x} + \tan{x} }
\ dx
```


## Hints

### 1
Lots of multiplying through to do!


## Answer
```math
-\ln\left(\cos x\right)+x-\ln\left(\sec x+\tan x\right)+\sin x+\cos x-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{\sin x+\cos x}{\sec x+\tan x}\ dx
  \\ =&\ \int \frac{\sin x+\cos x}{\sec x+\tan x}\cdot\frac{\cos x}{\cos x}\ dx
  \\ =&\ \int \frac{\sin x\cos x+\cos^{2}x}{1+\sin x}\ dx
  \\ =&\ \int \frac{\sin x\cos x+\cos^{2}x}{1+\sin x}\cdot\frac{1-\sin x}{1-\sin x}\ dx
  \\ =&\ \int \frac{\left(\sin x\cos x+\cos^{2}x\right)\left(1-\sin x\right)}{1-\sin^{2}x}\ dx
  \\ =&\ \int \frac{\sin x\cos x+\cos^{2}x-\sin^{2}x\cos x-\sin x\cos^{2}x}{\cos^{2}x}\ dx
  \\ =&\ \int \frac{\sin x}{\cos x}+1-\frac{\sin^{2}x}{\cos x}-\sin x\ dx
  \\ =&\ \int \tan x+1-\frac{1-\cos^{2}x}{\cos x}-\sin x\ dx
  \\ =&\ \int \tan x+1-\sec x+\cos x-\sin x\ dx
  \\ =&\ -\ln\left(\cos x\right)+x-\ln\left(\sec x+\tan x\right)+\sin x+\cos x-c
\end{align*}
```


## Alternates

You can also multiply through by $\sec{x} - \tan{x}$ straight from the start, it’s just doing the above in 1 step.
