---
topic: integrals
title: cortisol
desc: writing integrals is cope for stress fr fr
date: 2025 June 9
tags:
  - trig
methods:
  - fun
  - speed
  - poly angle
---


## Question
```math
\int \frac{\left(\sec x\right)^{2}\left(\csc x\right)^{2}}{\tan x-\cot x}\ dx
```


## Hints

### 1
Reduce to primitives!

### 2
Multiply through!

### 3
Collapse, collapse, collapse!


## Answer
```math
\ln\left(\csc4x+\cot4x\right)-c
```


## Solution

### Compound Angles
```math
\begin{align*}
  &\ \int \frac{\left(\sec x\right)^{2}\left(\csc x\right)^{2}}{\tan x-\cot x}\ dx
  \\ =&\ \int \frac{\left(\sec x\right)^{2}\left(\csc x\right)^{2}}{\tan x-\cot x}\cdot\frac{\sin x\cos x}{\sin x\cos x}\ dx
  \\ =&\ \int \frac{\left(\sec x\right)\left(\csc x\right)}{\left(\sin x\right)^{2}-\left(\cos x\right)^{2}}\ dx
  \\ =&\ -\int \frac{1}{\left(\sin x\cos x\right)\left(\cos^{2}x-\sin^{2}x\right)}\ dx
  \\ =&\ -2\int \frac{1}{\sin2x\cos2x}\ dx
  \\ =&\ -4\int \frac{1}{\sin4x}\ dx
  \\ =&\ -\int 4\csc4x\ dx
  \\ =&\ \ln\left(\csc4x+\cot4x\right)-c
\end{align*}
```
