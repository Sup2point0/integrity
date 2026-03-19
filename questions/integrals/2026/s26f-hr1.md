---
topic: integrals
title: forget-me-not
desc:  
date:  2026 March 19
difficulty: manifold
tags:
  - horror
  - trig
  - hyp trig
methods:
  - spot
  - arcprod
---


## Question
```math
\int \left(\sec x\tan x\right)\left(\cos x\cosh x+\sin x\sinh x\right)\ dx
```


## Hints

### 1
If in doubt, expand it out.

### 2
$\frac{d}{dx} \sinh{x} = \cosh{x}$.

### 3
$\frac{d}{dx} \tan{x} = ?$

### 4
How does the derivative of $\tan(x)$ relate to $\tan(x)^2$?


## Answer
```math
\tan x\sinh x-\cosh x-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \left(\sec x\tan x\right)\left(\cos x\cosh x+\sin x\sinh x\right)\ dx
  \\ =&\ \int \frac{1}{\cos x}\cdot\frac{\sin x}{\cos x}\cdot\cos x\cdot\cosh x+\frac{1}{\cos x}\cdot\frac{\sin x}{\cos x}\cdot\sin x\cdot\sinh x\ dx
  \\ =&\ \int \left(\tan x\right)\left(\cosh x\right)+\left(\tan^{2}x\right)\left(\sinh x\right)\ dx
  \\ =&\ \int \left(\tan x\right)\left(\cosh x\right)+\left(\sec^{2}x-1\right)\left(\sinh x\right)\ dx
  \\ =&\ \int \left(\tan x\right)\left(\cosh x\right)+\left(\sec^{2}x\right)\left(\sinh x\right)-\sinh x\ dx
  \\ =&\ \int \left(\tan x\right)\left(\cosh x\right)+\left(\sec^{2}x\right)\left(\sinh x\right)\ dx-\int \sinh x\ dx
\end{align*}
```

### Inverse Product Rule
```math
\begin{align*}
  &= \int \left(\tan x\right)\left(\frac{d}{dx}\sinh x\right)+\left(\frac{d}{dx}\tan x\right)\left(\sinh x\right)\ dx-\int \sinh x\ dx
  \\ &= \tan x\sinh x-\int \sinh x\ dx
  \\ &= \tan x\sinh x-\cosh x-c
\end{align*}
```
