---
topic: integrals
title: finality
desc: 
date: 2025 March 16
tags:
  - frac
  - exp
  - trig
methods:
  - spot
  - layer cake
---


## Question
```math
\int
  \frac
    { 1 - \sec{x} + x\sec - x\sec\tan }
    { 1 + e^x + x\sec{x} }
\ dx
```


## Hints

### 1
What’s the derivative of $x\sec{x}$?

### 2
Try splitting the numerator into 2 parts.

### 3
Try adding zero.


## Answer
```math
x-\ln\left(1+e^{x}+x\sec x\right)-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{1-\sec x+x\sec x-x\sec x\tan x}{1+e^{x}+x\sec x}\ dx
  \\ =&\ \int \frac{1-\sec x+x\sec x-x\sec x\tan x+e^{x}-e^{x}}{1+e^{x}+x\sec x}\ dx
  \\ =&\ \int \frac{1+e^{x}+x\sec x}{1+e^{x}+x\sec x}-\frac{e^{x}+\sec x+x\sec x\tan x}{1+e^{x}+x\sec x}\ dx
  \\ =&\ \int 1-\frac{e^{x}+\sec x+x\sec x\tan x}{1+e^{x}+x\sec x}\ dx
  \\ =&\ x-\ln\left(1+e^{x}+x\sec x\right)-c
\end{align*}
```
