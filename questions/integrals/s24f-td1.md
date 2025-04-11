---
topic: integrals
title: linked
desc: 
date: 2024 November
tags:
  - frac
  - trig
methods:
  - spot
  - layer cake
---


## Question
```math
\int \frac{1-\tan x}{1+\tan x}\ dx
```


## Hints

### 1
Write $\tan(x)$ as $\frac{\sin(x)}{\cos(x)}$.

### 2
How could you simplify $\tan(x)$?

### 3
Multiply through by $\cos(x)$.


## Answer
```math
\ln\left(\sin x+\cos x\right)-c
```


## Solution

### Layer Cake
```math
\begin{align*}
  &\ \int \frac{1-\tan x}{1+\tan x}\ dx
  \\ =&\ \int \frac{1-\tan x}{1+\tan x}\cdot\frac{\cos x}{\cos x}\ dx
  \\ =&\ \int \frac{\cos x-\sin x}{\cos x+\sin x}\ dx
  \\ =&\ \int \frac{\cos x-\sin x}{\sin x+\cos x}\ dx
  \\ =&\ \ln\left(\sin x+\cos x\right)-c
\end{align*}
```
