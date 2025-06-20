---
topic: integrals
title: catalyst
desc: 
date: 2025 January 10
tags:
  - trig
methods:
  - spot
---


## Question
```math
\int \frac{\cos x+\sec^{2}x+\tan^{2}x}{x\cos x+\tan x}\ dx
```


## Hints

### 1
How could you get rid of the $\cos{x}$?


## Answer
```math
\ln{\left|x+\sec x\tan x\right|}-c
```


## Solution

### Solve
```math
\begin{align*}
  &\ \int \frac{\cos x+\sec^{2}x+\tan^{2}x}{x\cos x+\tan x}\ dx
  \\ =&\ \int \frac{\cos x+\sec^{2}x+\tan^{2}x}{x\cos x+\tan x}\cdot\frac{\sec x}{\sec x}\ dx
  \\ =&\ \int \frac{1+\sec^{3}x+\sec x\tan^{2}x}{x+\sec x\tan x}\ dx
  \\ =&\ \int \frac{1+\left(\sec x\right)\left(\sec^{2}x\right)+\left(\sec x\tan x\right)\left(\tan x\right)}{x+\sec x\tan x}\ dx
  \\ =&\ \ln{\left|x+\sec x\tan x\right|}-c
\end{align*}
```
