---
topic: integrals
title: experience
desc: 
date: 2024 September
tags:
 - exp
methods:
  - spot
---


## Question
```math
\int \frac{1}{1+e^{x}}\ dx
```


## Hints

### 1
What would the derivative of the denominator be?

### 2
How could you make the numerator the same as the denominator?

### 3
Try adding zero.


## Answer
```math
x-\ln\left(1+e^{x}\right)-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{1}{1+e^{x}}\ dx
  \\ =&\ \int \frac{1+e^{x}-e^{x}}{1+e^{x}}\ dx
  \\ =&\ \int 1-\frac{e^{x}}{1+e^{x}}\ dx
  \\ =&\ x-\ln\left(1+e^{x}\right)-c
\end{align*}
```


## Alternates

```math
\begin{align*}
  &\ \int \frac{1}{1+e^{x}}\ dx
  \\ =&\ \int \frac{1}{1+e^{x}}\cdot\frac{e^{-x}}{e^{-x}}\ dx
  \\ =&\ \int \frac{e^{-x}}{e^{-x}+1}\ dx
  \\ =&\ -\int \frac{-e^{-x}}{e^{-x}+1}\ dx
  \\ =&\ -\ln\left(e^{-x}+1\right)-c
\end{align*}
```
