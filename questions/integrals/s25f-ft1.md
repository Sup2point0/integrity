---
topic: integrals
title: sabotage
desc: 
date: 2025 January 12
tags:
  - trig
  - frac
method:
  - spot
---


## Question
```math
\int
  \frac{\sec{x}}{\sec{x} - \tan{x}}
\ dx
```


## Hints

### 1
You’re looking for something to multiply through by.

### 2
Imagine if the denominator contained irrationals.

### 3
Think difference of 2 squares.


## Answer
```math
\tan{x} + \sec{x} - c
```


## Solution

### Solve
```math
\begin{align*}
  &\ \int_{\ }^{\ }\frac{\sec x}{\sec x-\tan x}\ dx
  \\ =&\ \int_{\ }^{\ }\frac{\left(\sec x\right)\left(\sec x+\tan x\right)}{\left(\sec x-\tan x\right)\left(\sec x+\tan x\right)}\ dx
  \\ =&\ \int_{\ }^{\ }\frac{\sec^{2}x+\sec x\tan x}{\sec^{2}x-\tan^{2}x}\ dx
  \\ =&\ \int_{\ }^{\ }\frac{\sec^{2}x+\sec x\tan x}{1}\ dx
  \\ =&\ \int_{\ }^{\ }\sec^{2}x\ dx+\int_{\ }^{\ }\sec x\tan x\ dx
  \\ =&\ \tan x+\sec x-c
\end{align*}
```
