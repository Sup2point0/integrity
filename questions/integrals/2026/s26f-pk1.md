---
topic: integrals
title: wispberry
desc:  
date:  2026 August 1
difficulty: incline
tags:
  - trig
methods:
  - speed
---


## Question
```math
\int \left(\tan x\right)\left(\frac{\tan x-1}{\tan x+1}\right)\ dx
```


## Hints

### 1
If in doubt, multiply it out.

### 2
What can you do with $\tan(x)^2$?

### 3
Use the fact that $\tan(x)^2 + 1 = \sec(x)^2$.


## Answer
```math
\ln\left(\tan x+1\right)-x-c
```


## Solution

```math
\begin{align*}
  &\ \int \left(\tan x\right)\left(\frac{\tan x-1}{\tan x+1}\right)\ dx
  \\ =&\ \int \frac{\tan^{2}x-\tan x}{\tan x+1}\ dx
  \\ =&\ \int \frac{\sec^{2}x-1-\tan x}{\tan x+1}\ dx
  \\ =&\ \int \frac{\sec^{2}}{\tan x+1}-\frac{1+\tan x}{\tan x+1}\ dx
  \\ =&\ \int \frac{\sec^{2}x}{\tan x+1}\ dx-\int \frac{\tan x+1}{\tan x+1}\ dx
  \\ =&\ \int \frac{\sec^{2}x}{\tan x+1}\ dx-\int dx
  \\ =&\ \ln\left(\tan x+1\right)-x-c
\end{align*}
```
