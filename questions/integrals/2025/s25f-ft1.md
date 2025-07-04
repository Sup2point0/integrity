---
topic: integrals
title: sabotage
desc: one of my favourite integrals to give people just about familiar enough with trig.
date: 2025 January 12
difficulty: based
tags:
  - trig
methods:
  - spot
flags:
  - feat
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

```math
\begin{align*}
  &\ \int \frac{\sec x}{\sec x-\tan x}\ dx
  \\ =&\ \int \frac{\left(\sec x\right)\left(\sec x+\tan x\right)}{\left(\sec x-\tan x\right)\left(\sec x+\tan x\right)}\ dx
  \\ =&\ \int \frac{\sec^{2}x+\sec x\tan x}{\sec^{2}x-\tan^{2}x}\ dx
  \\ =&\ \int \frac{\sec^{2}x+\sec x\tan x}{1}\ dx
  \\ =&\ \int \sec^{2}x\ dx+\int \sec x\tan x\ dx
  \\ =&\ \tan x+\sec x-c
\end{align*}
```
