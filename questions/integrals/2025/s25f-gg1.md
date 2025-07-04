---
topic: integrals
title: relapse
desc: 
date: 2025 January 30
difficulty: based
tags:
  - scare
  - trig
methods:
  - speed
---


## Question
```math
\int
  \frac
    { \tan(x)^{29} }
    { \sec(x)^{30} }
\ dx
```


## Answer
```math
\frac{1}{30}\sin\left(x\right)^{30}-c
```


## Solution

### Solve
```math
\begin{align*}
  &\ \int \frac{\tan\left(x\right)^{29}}{\sec\left(x\right)^{30}}\ dx
  \\ =&\ \int \frac{\sin\left(x\right)^{29}}{\cos\left(x\right)^{29}}\cdot\cos\left(x\right)^{30}\ dx
  \\ =&\ \int \sin\left(x\right)^{29}\cos\left(x\right)\ dx
  \\ =&\ \frac{1}{30}\sin\left(x\right)^{30}-c
\end{align*}
```
