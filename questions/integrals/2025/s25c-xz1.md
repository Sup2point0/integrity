---
topic: integrals
title: crossnaut
desc: 
date: 2025 March 17
tags:
 - trig
methods:
  - speed
---


## Question
```math
\int
  \frac
    { \cos{x} }
    { \sec{x} - \tan{x} }
  - \frac
    { \cot{x} }
    { \sec{x} + \tan{x} }
\ dx
```


## Hints

### 1
Don’t those denominators look similar?


## Answer
```math
2x-\cos x+\ln\left(\csc x+\cot x\right)-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{\cos x}{\sec x-\tan x}-\frac{\cot x}{\sec x+\tan x}\ dx
  \\ =&\ \int \frac{\left(\cos x\right)\left(\sec x+\tan x\right)-\left(\cot x\right)\left(\sec x-\tan x\right)}{\left(\sec x-\tan x\right)\left(\sec x+\tan x\right)}\ dx
  \\ =&\ \int \frac{\left(1+\sin x\right)-\left(\csc x-1\right)}{\sec^{2}x-\tan^{2}x}\ dx
  \\ =&\ \int \frac{1+\sin x-\csc x+1}{1}\ dx
  \\ =&\ \int 2+\sin x-\csc x\ dx
  \\ =&\ 2x-\cos x+\ln\left(\csc x+\cot x\right)-c
\end{align*}
```
