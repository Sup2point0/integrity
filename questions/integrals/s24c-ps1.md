---
topic: integrals
title: spotted
desc: 
date: 2024 October
tags:
  - frac
  - trig
  - exp
methods:
  - spot
  - inverse product
---


## Question
```math
\int \frac{e^{x}\left(1+\tan x\right)}{\sec x}\ dx
```


## Hints

### 1
Leave $e^x$ out of it.

### 2
Divide through by $\sec(x)$.

### 3
Inverse product rule!


## Answer
```math
e^{x}\sin x-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{e^{x}\left(1+\tan x\right)}{\sec x}\ dx
  \\ =&\ \int e^{x}\left(\cos x+\sin x\right)\ dx
  \\ =&\ \int e^{x}\sin x+e^{x}\cos x\ dx
  \\ =&\ e^{x}\sin x-c
\end{align*}
```
