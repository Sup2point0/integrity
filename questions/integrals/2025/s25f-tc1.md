---
topic: integrals
title: brittle
desc: 
date: 2025 January 24
tags:
  - trig
methods:
  - spot
---


## Question
```math
\int \sec(x)\csc(x) \ dx
```


## Hints

### 1
No tricks here.


## Answer
```math
\ln\left|\tan{x}\right|-c
```


## Solution

### Solve
```math
\begin{align*}
  &\ \int \sec\left(x\right)\csc\left(x\right)\ dx
  \\ =&\ \int \frac{1}{\sin x\cos x}\ dx
  \\ =&\ \int \frac{\sec x}{\sin x}\ dx
  \\ =&\ \int \frac{\sec x}{\sin x}\cdot\frac{\sec x}{\sec x}\ dx
  \\ =&\ \int \frac{\sec^{2}x}{\left(\frac{\sin x}{\cos x}\right)}\ dx
  \\ =&\ \int \frac{\sec^{2}x}{\tan x}\ dx
  \\ =&\ \ln\left|\tan x\right|-c
\end{align*}
```
