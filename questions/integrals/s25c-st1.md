---
topic: integrals
title: carrier
desc: 
date: 2025 April 2
tags:
  - frac
  - trig
methods:
  - spot
---


## Question
```math
\int
  \frac
    { \sec{x} - \tan{x} }
    { \sec{x} + \tan{x} }
\ dx 
```


## Hints

### 1
What could you multiply through by?


## Answer
```math
2\tan x-x-2\sec x-C
```


## Solution

```math
\begin{align*}
  &\ \int \frac{\sec x-\tan x}{\sec x+\tan x}\ dx
  \\ =&\ \int \frac{\sec x-\tan x}{\sec x+\tan x}\cdot\frac{\sec x-\tan x}{\sec x-\tan x}\ dx
  \\ =&\ \int \frac{\left(\sec x-\tan x\right)^{2}}{\sec^{2}x-\tan^{2}x}\ dx
  \\ =&\ \int \frac{\sec^{2}x+\tan^{2}x-2\sec x\tan x}{1}\ dx
  \\ =&\ \int \sec^{2}x+\left(\sec^{2}x-1\right)-2\sec x\tan x\ dx
  \\ =&\ 2\tan x-x-2\sec x-C
\end{align*}
```
