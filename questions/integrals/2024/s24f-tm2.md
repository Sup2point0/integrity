---
topic: integrals
title: isomorphism
desc: 
date: 2024 December 24
difficulty: based
tags:
  - trig
methods:
  - spot
---


## Question
```math
\int \sin\left(2x\right)\cos\left(x-\pi\right)\ dx
```


## Hints

### 1
We want our trigonometric functions in terms of the same input expression.

### 2
In other words, $\sin{x}$ and $\cos{x}$.

### 3
What does adding an integer multiple of $\pi$ to the input of $\cos$ do?


## Answer
```math
\frac{2}{3}\cos\left(x\right)^{3}-c
```


## Solution

### Solve
```math
\begin{align*}
  &\ \int \sin\left(2x\right)\cos\left(x-\pi\right)\ dx
  \\ =&\ \int 2\sin\left(x\right)\cos\left(x\right)\cdot-\cos\left(x\right)\ dx
  \\ =&\ 2\int -\sin\left(x\right)\cos\left(x\right)^{2}\ dx
  \\ =&\ \frac{2}{3}\cos\left(x\right)^{3}-c
\end{align*}
```
