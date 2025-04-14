---
topic: integrals
title: postmortem
desc: 
date: 2025 April 3
tags:
  - frac
  - trig
  - ln
methods:
  - 
---


## Question
```math
\int \frac{\ln\left(2\tan^{2}x+2\sec x\tan x+1\right)}{\cos x}\ dx
```


## Hints

### 1
Try factorise the expression inside the logarithm.

### 2
You have 2 of $\tan(x)^2$.

### 3
How else can you write $\tan(x)^2$?


## Answer
```math
\ln\left(\sec x+\tan x\right)^{2}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{\ln\left(2\tan^{2}x+2\sec x\tan x+1\right)}{\cos x}\ dx
  \\ =&\ \int \left(\sec x\right)\ln\left(2\tan^{2}x+2\sec x\tan x+1\right)\ dx
  \\ =&\ \int \left(\sec x\right)\ln\left(\tan^{2}x+\tan^{2}x+2\sec x\tan x+1\right)\ dx
  \\ =&\ \int \left(\sec x\right)\ln\left(\left(1+\tan^{2}x\right)+\tan^{2}x+2\sec x\tan x\right)\ dx
  \\ =&\ \int \left(\sec x\right)\ln\left(\sec^{2}x+\tan^{2}x+2\sec x\tan x\right)\ dx
  \\ =&\ \int \left(\sec x\right)\ln\left(\left(\sec x+\tan x\right)^{2}\right)\ dx
  \\ =&\ 2\int \left(\sec x\right)\ln\left(\sec x+\tan x\right)\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \ln\left(\sec x+\tan x\right) &= t
  \\ \sec x\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= 2\int t\ dt
  \\ &= t^{2}
  \\ &= \ln\left(\sec x+\tan x\right)^{2}-c
\end{align*}
```
