---
topic: integrals
title: polymorphism
desc: 
date: 2024 December 23
tags:
  - trig
  - horror
methods:
  - factorise
flags:
  - feat
---


## Question
```math
\int \sin\left(x\right)^{2}\cos\left(x+e\right)^{2}-\sin\left(x+e\right)^{2}\cos\left(x\right)^{2}\ dx
```


## Hints

### 1
There’s a lot of squaring going on here.

### 2
What if you group the terms that are being squared?

### 3
We have $P^2 - Q^2$. What can we do with that?


## Answer
```math
-\frac{1}{2}\sin\left(-e\right)\cos\left(2x+e\right)-c
```


## Solution

### Difference of 2 Squares
```math
\begin{align*}
  &\ \int \sin\left(x\right)^{2}\cos\left(x+e\right)^{2}-\sin\left(x+e\right)^{2}\cos\left(x\right)^{2}\ dx
  \\ =&\ \int \left(\sin\left(x\right)\cos\left(x+e\right)-\cos\left(x\right)\sin\left(x+e\right)\right)\cdot\left(\sin\left(x\right)\cos\left(x+e\right)+\cos\left(x\right)\sin\left(x+e\right)\right)\ dx
\end{align*}
```

### Compound Angle Identities
```math
\begin{align*}
  &= \int \sin\left(x-\left(x+e\right)\right)\cdot\sin\left(x+\left(x+e\right)\right)\ dx
  \\ &= \int \sin\left(-e\right)\sin\left(2x+e\right)\ dx
  \\ &= -\sin\left(e\right)\int \sin\left(2x+e\right)\ dx
  \\ &= -\frac{1}{2}\sin\left(-e\right)\cos\left(2x+e\right)-c
\end{align*}
```
