---
topic: integrals
title: premonition
desc: 
date: 2025 June 9
tags:
  - horror
  - poly
methods:
  - spot
---


## Question
```math
\int
  \frac
    { x^2 + 2x + 17 }
    { 2x^3 + x^2 + 32x + 16}
\ dx
```


## Hints

### 1
What might the coefficients of $16$ and $32$ suggest?

### 2
Factorise $x^2$ out.

### 3
Does $2x+1$ ring any bells?


## Answer
```math
\frac{1}{2}\ln\left(2x+1\right)+\frac{1}{4}\tan^{-1}\left(\frac{x}{4}\right)-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{x^{2}+2x+17}{2x^{3}+x^{2}+32x+16}\ dx
  \\ =&\ \int \frac{x^{2}+2x+17}{x^{2}\left(2x+1\right)+16\left(2x+1\right)}\ dx
  \\ =&\ \int \frac{x^{2}+2x+17}{\left(x^{2}+16\right)\left(2x+1\right)}\ dx
  \\ =&\ \int \frac{x^{2}+2x+1+16}{\left(x^{2}+16\right)\left(2x+1\right)}\ dx
  \\ =&\ \int \frac{x^{2}+16}{\left(x^{2}+16\right)\left(2x+1\right)}+\frac{2x+1}{\left(x^{2}+16\right)\left(2x+1\right)}\ dx
  \\ =&\ \int \frac{1}{2x+1}+\frac{1}{x^{2}+16}\ dx
  \\ =&\ \frac{1}{2}\ln\left(2x+1\right)+\frac{1}{4}\tan^{-1}\left(\frac{x}{4}\right)-c
\end{align*}
```
