---
topic: integrals
title: fits
desc: 
date: 2025 January 29
tags:
  - frac
  - trig
methods:
  - speed
---


## Question
```math
\int
  \frac
    { 2 + x + \sec{x} + \sec{x}\tan{x} }
    { 1 + x + \sec{x} }
\ dx
```


## Answer
```math
x+\ln\left(1+x+\sec x\right)-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{2+x+\sec x+\sec x\tan x}{1+x+\sec x}\ dx
  \\ =&\ \int \frac{1+x+\sec x}{1+x+\sec x}+\frac{1+\sec x\tan x}{1+x+\sec x}\ dx
  \\ =&\ \int 1+\frac{1+\sec x\tan x}{1+x+\sec x}\ dx
  \\ =&\ x+\ln\left(1+x+\sec x\right)-c
\end{align*}
```
