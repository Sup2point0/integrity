---
topic: integrals
title: certified banger
desc: 
date: 2025 April 18
tags:
  - trig
methods:
  - sub
---


## Question
```math
\int
  \frac
    { \sec^4{x} }
    { \sqrt{1 - \tan^2{x}} }
\ dx
```


## Hints

### 1
Which of the trig functions might you substitute?

### 2
How else can you write $\sec(x)^4$?

### 3
The derivative of $\tan(x)$ is $\sec(x)^2$.


## Answer
```math
\ln\left(\tan^{2}x-1\right)-2\ln\left(\tan x-1\right)-\tan x-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{\sec^{4}x}{1-\tan^{2}x}\ dx
  \\ =&\ \int \frac{\sec^{2}x\cdot\sec^{2}x}{1-\tan^{2}x}\ dx
  \\ =&\ \int \frac{\left(\tan^{2}x+1\right)\left(\sec^{2}x\right)}{1-\tan^{2}x}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \tan{x} &= t
  \\ \sec^2{x} \ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int \frac{t^{2}+1}{1-t^{2}}\ dt
  \\ &= -\int \frac{t^{2}+1}{t^{2}-1}\ dt
  \\ &= -\int \frac{t^{2}+2t+1}{t^{2}-1}-\frac{2t}{t^{2}-1}\ dt
  \\ &= -\int \frac{\left(t+1\right)^{2}}{\left(t-1\right)\left(t+1\right)}\ dt+\int \frac{2t}{t^{2}-1}\ dt
  \\ &= -\int \frac{t+1}{t-1}\ dt+\ln\left(t^{2}-1\right)
  \\ &= \ln\left(t^{2}-1\right)-\int \frac{t-1}{t-1}+\frac{2}{t-1}\ dt
  \\ &= \ln\left(t^{2}-1\right)-\int dt-2\int \frac{1}{t-1}\ dt
  \\ &= \ln\left(t^{2}-1\right)-t-2\ln\left(t-1\right)
  \\ &= \ln\left(\tan^{2}x-1\right)-2\ln\left(\tan x-1\right)-\tan x-c
\end{align*}
```
