---
topic: integrals
title: init
desc: 
date: 2024 September
tags:
  - poly
methods:
  - speed
---


## Question
```math
\int \frac{1+x}{1+x^{2}}\ dx
```


## Hints

### 1
Focus on the numerator.

### 2
You can split up the numerator!


## Answer
```math
\tan^{-1}x+\frac{1}{2}\ln\left(1+x^{2}\right)-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{1+x}{1+x^{2}}\ dx
  \\ =&\ \int \frac{1}{1+x^{2}}+\frac{x}{1+x^{2}}\ dx
  \\ =&\ \tan^{-1}x+\frac{1}{2}\ln\left(1+x^{2}\right)-c
\end{align*}
```
