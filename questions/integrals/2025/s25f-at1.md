---
topic: integrals
title: attention is all you need
desc: 
date: 2025 March 8
tags:
  - trig
methods:
  - speed
---


## Question
```math
\int
  \frac
    { \cos(0) - \sin(x) - \cos(\pi) }
    { \sin(\pi) - \cos(x) - \sin(0) }
\ dx
```


## Answer
```math
-\ln\left(\cos x\right)-2\ln\left(\sec x+\tan x\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{\cos\left(0\right)-\sin\left(x\right)-\cos\left(\pi\right)}{\sin\left(\pi\right)-\cos\left(x\right)-\sin\left(0\right)}\ dx
  \\ =&\ \int \frac{1-\sin x-\left(-1\right)}{0-\cos x-0}\ dx
  \\ =&\ \int \frac{2-\sin x}{-\cos x}\ dx
  \\ =&\ \int \frac{\sin x-2}{\cos x}\ dx
  \\ =&\ \int \frac{\sin x}{\cos x}-\frac{2}{\cos x}\ dx
  \\ =&\ -\int \frac{-\sin x}{\cos x}-2\int \sec x\ dx
  \\ =&\ -\ln\left(\cos x\right)-2\ln\left(\sec x+\tan x\right)-c
\end{align*}
```
