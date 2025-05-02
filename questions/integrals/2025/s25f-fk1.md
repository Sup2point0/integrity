---
topic: integrals
title: forklift
desc: 
date: 2025 April 15
tags:
  - scare
  - funny
 - poly
methods:
  - speed
---


## Question
```math
\int \frac{x^{14443}}{1+x^{28888}}\ dx
```


## Hints

### 1
What’s half of $28888$?


## Answer
```math
\frac{1}{14444}\tan^{-1}\left(x^{14444}\right)-c
```


## Solution

### Substitute
```math
\begin{align*}
  x^{14444} &= t
  \\ 14444x^{14443}\ dx &= dt
  \\ x^{14443}\ dx &= \frac{1}{14444}dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ \int \frac{x^{14443}}{1+x^{28888}}\ dx
  \\ =&\ \int \frac{1}{1+t^{2}}\cdot\frac{1}{14444}\ dt
  \\ =&\ \frac{1}{14444}\tan^{-1}t
  \\ =&\ \frac{1}{14444}\tan^{-1}\left(x^{14444}\right)-c
\end{align*}
```
