---
topic: integrals
title: hand-me-down
desc:  
date:  2026 March 19
difficulty: incline
tags:
  - trig
  - ln
methods:
  - parts
---


## Question
```math
\int \frac{\ln\left(\cos x\right)}{\cos^{2}x}\ dx
```


## Hints

### 1
Does $\ln(\cos{x})$ look familiar?

### 2
No substitution here.

### 3
How could you split up the integral?


## Answer
```math
\left(\tan x\right)\ln\left(\cos x\right)+\tan x-x-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{\ln\left(\cos x\right)}{\cos^{2}x}\ dx
  \\ =&\ \int \frac{1}{\cos^{2}x}\cdot\ln\left(\cos x\right)\ dx
  \\ =&\ \int \left(\sec^{2}x\right)\cdot\ln\left(\cos x\right)\ dx
\end{align*}
```

### Parts
```math
\begin{align*}
      f &= \ln\left(\cos x\right) \quad&\quad g' &= \sec^{2}x
  \\ f' &= -\tan x \quad&\quad g &= \tan x
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ fg-\int f'g\ dx
  \\ =&\ \left(\tan x\right)\ln\left(\cos x\right)-\int \left(-\tan x\right)\left(\tan x\right)\ dx
  \\ =&\ \left(\tan x\right)\ln\left(\cos x\right)+\int \tan^{2}x\ dx
  \\ =&\ \left(\tan x\right)\ln\left(\cos x\right)+\int \sec^{2}x-1\ dx
  \\ =&\ \left(\tan x\right)\ln\left(\cos x\right)+\tan x-x-c
\end{align*}
```
