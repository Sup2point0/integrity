---
topic: integrals
title: calling
desc: 
date: 2025 January 30
difficulty: based
tags:
  - trig
methods:
  - speed
---


## Question
```math
\int
  (\sec{x})(\tan{x})(\sec{x}\tan{x})(\sec^2{x})
\ dx
```


## Answer
```math
\frac{1}{5}\tan^{5}x+\frac{1}{3}\tan^{3}x-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \left(\sec x\right)\left(\tan x\right)\left(\sec x\tan x\right)\left(\sec^{2}x\right)\ dx
  \\ =&\ \int \sec^{4}x\tan^{2}x\ dx
  \\ =&\ \int \left(\sec^{2}x\right)\left(\tan^{2}x+1\right)\left(\tan^{2}x\right)\ dx
  \\ =&\ \int \tan^{4}x\sec^{2}x+\tan^{2}x\sec^{2}x\ dx
  \\ =&\ \frac{1}{5}\tan^{5}x+\frac{1}{3}\tan^{3}x-c
\end{align*}
```
