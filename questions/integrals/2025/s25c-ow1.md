---
topic: integrals
title: welcome to the arena
desc: 
date: 2025 March 17
difficulty: manifold
tags:
  - poly
methods:
  - 
---


## Question
```math
\int
  \frac
    { 24x^4 + 64x^3 + 9x^2 + 12x + 3 }
    { 1 + 3x^2 + 8x^4 }
\ dx
```


## Hints

### 1
The constant term will help you.

### 2
The highest power of $x$ will also help you.

### 3
The numerator could either be a multiple of the bottom, or a multiple of its derivative.


## Answer
```math
3x+2\ln\left(1+3x^{2}+8x^{4}\right)-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{24x^{4}+64x^{3}+9x^{2}+12x+3}{1+3x^{2}+8x^{4}}\ dx
  \\ =&\ \int \frac{\left(3+9x^{2}+24x^{4}\right)+\left(12x+64x^{3}\right)}{1+3x^{2}+8x^{4}}\ dx
  \\ =&\ \int \frac{3\left(1+3x^{2}+8x^{4}\right)}{1+3x^{2}+8x^{4}}+\frac{2\left(6x+32x^{3}\right)}{1+3x^{2}+8x^{4}}\ dx
  \\ =&\ \int 3\ dx+2\int \frac{6x+32x^{3}}{1+3x^{2}+8x^{4}}\ dx
  \\ =&\ 3x+2\ln\left(1+3x^{2}+8x^{4}\right)-c
\end{align*}
```
