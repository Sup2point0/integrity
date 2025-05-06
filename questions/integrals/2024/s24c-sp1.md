---
topic: integrals
title: drawn and quartered
desc: 
date: 2024 September
tags:
  - scare
  - poly
methods:
  - 
---


## Question
```math
\int \frac{x^{4}+x^{3}+x^{2}+x+1}{x^{2}+1}\ dx
```


## Hints

### 1
What if you reorder the terms in the numerator?

### 2
What if you group the terms in the numerator?

### 3
What in the numerator is divisible by $x^2 + 1$?


## Answer
```math
\frac{1}{3}x^{3}+\frac{1}{2}x^{2}+\tan^{-1}x-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{x^{4}+x^{3}+x^{2}+x+1}{x^{2}+1}\ dx
  \\ =&\ \int \frac{\left(x^{4}+x^{2}\right)+\left(x^{3}+x\right)+1}{x^{2}+1}\ dx
  \\ =&\ \int \frac{x^{2}\left(x^{2}+1\right)+x\left(x^{2}+1\right)+1}{x^{2}+1}\ dx
  \\ =&\ \int x^{2}+x+\frac{1}{x^{2}+1}\ dx
  \\ =&\ \frac{1}{3}x^{3}+\frac{1}{2}x^{2}+\tan^{-1}x-c
\end{align*}
```
