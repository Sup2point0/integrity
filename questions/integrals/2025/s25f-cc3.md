---
topic: integrals
title: drastic illumination
desc: 
date: 2025 April 4
difficulty: incline
tags:
  - trig
methods:
  - spot
---


## Question
```math
\int
  \frac{1}
    { \cos^2{x} - \cos{x} }
\ dx
```


## Answer
```math
\cot x+\csc x-\ln\left(\sec x+\tan x\right)-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{1}{\cos^{2}x-\cos x}\ dx
  \\ =&\ \int \frac{1}{\left(\cos x\right)\left(\cos x-1\right)}\ dx
  \\ =&\ \int \frac{1}{\left(\cos x\right)\left(\cos x-1\right)}\cdot\frac{\cos x+1}{\cos x+1}\ dx
  \\ =&\ \int \frac{\cos x+1}{\left(\cos x\right)\left(\cos^{2}x-1\right)}\ dx
  \\ =&\ -\int \frac{\cos x+1}{\left(\cos x\right)\left(1-\cos^{2}x\right)}\ dx
  \\ =&\ -\int \frac{\cos x+1}{\left(\cos x\right)\left(\sin^{2}x\right)}\ dx
  \\ =&\ -\int \frac{1}{\sin^{2}x}+\frac{1}{\cos x\sin^{2}x}\ dx
  \\ =&\ -\int \csc^{2}x+\sec x\csc^{2}x\ dx
  \\ =&\ \int -\csc^{2}x-\left(\sec x\right)\left(\cot^{2}x+1\right)\ dx
  \\ =&\ \cot x-\int \frac{1}{\cos x}\cdot\frac{\cos^{2}x}{\sin^{2}x}+\sec x\ dx
  \\ =&\ \cot x+\int -\cot x\csc x\ dx-\int \sec x\ dx
  \\ =&\ \cot x+\csc x-\ln\left(\sec x+\tan x\right)-c
\end{align*}
```
