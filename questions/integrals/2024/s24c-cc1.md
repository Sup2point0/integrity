---
topic: integrals
title: connection
desc: 
date: 2024 November
difficulty: based
tags:
  - poly
methods:
  - acc
  - speed
---


## Question
```math
\int \frac{x}{x-1}\ dx-\int \frac{x}{x+1}\ dx
```


## Hints

### 1
Can you combine the integrands?


## Answer
```math
\ln\left(x^{2}-1\right)-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{x}{x-1}\ dx-\int \frac{x}{x+1}\ dx
  \\ =&\ \int \frac{x}{x-1}-\frac{x}{x+1}\ dx
  \\ =&\ \int \frac{x\left(x+1\right)-x\left(x-1\right)}{\left(x-1\right)\left(x+1\right)}\ dx
  \\ =&\ \int \frac{x^{2}+x-x^{2}+x}{x^{2}-1}\ dx
  \\ =&\ \int \frac{2x}{x^{2}-1}\ dx
  \\ =&\ \ln\left(x^{2}-1\right)-c
\end{align*}
```
