---
topic: integrals
title: kindred
desc: 
date: 2025 January 25
difficulty: manifold
tags:
  - trig
methods:
  - layer cake
---


## Question
```math
\int
  \frac
    {\cos(3x)}
    {\sin(x)\cos(2x)}
\ dx
```


## Hints

### 1
Expanding the top might be of help.

### 2
Expanding the bottom, however, might not be.

### 3
What do you get if you expand $\cos(3x)$ as $\cos(x+2x)$?


## Answer
```math
\ln\left|\sin\left(x\right)\cos\left(2x\right)\right|-\frac{1}{2}\ln\left|\cos\left(2x\right)\right|-c
```


## Solution

### Solve
```math
\begin{align*}
  &\ \int \frac{\cos\left(3x\right)}{\sin\left(x\right)\cos\left(2x\right)}\ dx
  \\ =&\ \int \frac{\cos\left(x\right)\cos\left(2x\right)-\sin\left(x\right)\sin\left(2x\right)}{\sin\left(x\right)\cos\left(2x\right)}\ dx
  \\ =&\ \int \frac{\cos\left(x\right)\cos\left(2x\right)-2\sin\left(x\right)\sin\left(2x\right)}{\sin\left(x\right)\cos\left(2x\right)}+\frac{\sin\left(x\right)\sin\left(2x\right)}{\sin\left(x\right)\cos\left(2x\right)}\ dx
  \\ =&\ \ln\left|\sin\left(x\right)\cos\left(2x\right)\right|-\frac{1}{2}\int \frac{-2\sin\left(2x\right)}{\cos\left(2x\right)}\ dx
  \\ =&\ \ln\left|\sin\left(x\right)\cos\left(2x\right)\right|-\frac{1}{2}\ln\left|\cos\left(2x\right)\right|-c
  \\ =&\ \ln\left|\sin\left(x\right)\sqrt{\left|\cos2x\right|}\right|-c
\end{align*}
```
