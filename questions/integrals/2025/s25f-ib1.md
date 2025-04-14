---
topic: integrals
title: acrid
desc: 
date: 2025 January 31
tags:
  - series
  - poly
methods:
  - spot
---


## Question
```math
\int
  \left(
    x
  + \frac{1}{2} x^4
  + \frac{3}{8} x^7
  + \frac{5}{16} x^{10}
  + \frac{35}{64} x^{13}
  + ...
  \right)^2
\ dx
```


## Hints

### 1
Ignore the coefficients for now, just focus on the powers of $x$.

### 2
What can you factorise out of the series?

### 3
What do you notice about the leftover powers of $x$?

### 4
This isn’t a geometric series, but another kind of infinite series.

### 5
Does $1 + k_1x + k_2x^2 + k_3x^3 + ...$ look familiar to you?

### 6
What about $1 + nx + \frac{n(n-1)}{2!}x^2$?


## Answer
```math
-\frac{1}{3}\ln\left(1-x^{3}\right)-c
```


## Solution

### Binomial Expansion
```math
\begin{align*}
  &\ \int \left(x+\frac{1}{2}x^{4}+\frac{3}{8}x^{7}+\frac{5}{16}x^{10}+\frac{35}{64}x^{13}+...\right)^{2}\ dx
  \\ =&\ \int \left(x\left(1+\frac{1}{2}x^{3}+\frac{3}{8}x^{6}+\frac{5}{16}x^{9}+\frac{35}{64}x^{12}+...\right)\right)^{2}\ dx
  \\ =&\ \int x^{2}\left(1+\frac{1}{2}\left(x^{3}\right)+\frac{3}{8}\left(x^{3}\right)^{2}+\frac{5}{16}\left(x^{3}\right)^{3}+\frac{35}{64}\left(x^{3}\right)^{4}+...\right)^{2}\ dx
  \\ =&\ \int x^{2}\left(\left(1-x^{3}\right)^{-1/2}\right)^{2}\ dx
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int \frac{x^{2}}{1-x^{3}}\ dx
  \\ &= -\frac{1}{3}\int \frac{-3x^{2}}{1-x^{3}}\ dx
  \\ &= -\frac{1}{3}\ln\left(1-x^{3}\right)-c
\end{align*}
```
