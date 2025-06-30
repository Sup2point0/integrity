---
topic: integrals
title: hidey
desc: 
date: 2024 October
difficulty: incline
tags:
  - trig
methods:
  - speed
  - spot
---


## Question
```math
\int \frac{1+\sin x}{\sec x+\tan x}\ dx
```


## Hints

### 1
Expand and hope for the best.


## Answer
```math
\sin x-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{1+\sin x}{\sec x+\tan x}\ dx
  \\ =&\ \int \frac{1+\sin x}{\frac{1}{\cos x}+\frac{\sin x}{\cos x}}\ dx
  \\ =&\ \int \frac{\left(\cos x\right)\left(1+\sin x\right)}{1+\sin x}\ dx
  \\ =&\ \int \cos x\ dx
  \\ =&\ \sin x-c
\end{align*}
```
