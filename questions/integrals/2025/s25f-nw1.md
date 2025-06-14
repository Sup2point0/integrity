---
topic: integrals
title: networking
desc: 256 integrals on <em>Integrity</em>!
date: 2025 April 28
tags:
  - trig
methods:
  - fun
---


## Question
```math
\int \frac{\tan x}{\tan^{2}x-1}\ dx
```


## Hints

### 1
Write $\tan(x)$ as $\sin(x)$ and $\cos(x)$ primitives.

### 2
Cancel out the mini denominators.

### 3
How can you combine $\cos^2{x} - \sin^2{x}$?


## Answer
```math
\frac{1}{4}\ln\left(\cos2x\right)-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{\tan x}{\tan^{2}x-1}\ dx
  \\ =&\ \int \frac{\frac{\sin x}{\cos x}}{\frac{\sin^{2}x}{\cos^{2}x}-1}\ dx
  \\ =&\ \int \frac{\frac{\sin x}{\cos x}}{\frac{\sin^{2}x}{\cos^{2}x}-1}\cdot\frac{\cos^{2}x}{\cos^{2}x}\ dx
  \\ =&\ \int \frac{\sin x\cos x}{\sin^{2}x-\cos^{2}x}\ dx
  \\ =&\ -\frac{1}{2}\int \frac{2\sin x\cos x}{\cos^{2}x-\sin^{2}x}\ dx
  \\ =&\ -\frac{1}{2}\int \frac{\sin2x}{\cos2x}\ dx
  \\ =&\ \frac{1}{4}\int \frac{-2\sin2x}{\cos2x}\ dx
  \\ =&\ \frac{1}{4}\ln\left(\cos2x\right)-c
\end{align*}
```
