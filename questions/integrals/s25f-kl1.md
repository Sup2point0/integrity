---
topic: integrals
title: reminiscence
desc: 
date: 2025 March 24
tags:
  - frac
  - trig
methods:
  - tough
  - spot
---


## Question
```math
\int
  \frac{1}{1-\tan{x}}
\ dx
```


## Hints

### 1
Multiplying by the conjugate won’t actually do anything for us here.

### 2
Start by writing the integrand in terms of $\sin{x}$ and $\cos{x}$ primitives.

### 3
How could you write the numerator so it’s either equal to the denominator, or is the derivative?

### 4
What happens if you multiply the numerator by $2$?

### 5
Write $2\cos{x}$ as $\cos{x} + \cos{x}$.

### 6
You can perform polynomial division when the numerator is $2\cos{x}$.


## Answer
```math
\frac{1}{2}x-\frac{1}{2}\ln\left(\sin x-\cos x\right)-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{1}{1-\tan x}\ dx
  \\ =&\ \int \frac{1}{1-\tan x}\cdot\frac{\cos x}{\cos x}\ dx
  \\ =&\ \int \frac{\cos x}{\cos x-\sin x}\ dx
  \\ =&\ \frac{1}{2}\int \frac{2\cos x}{\cos x-\sin x}\ dx
  \\ =&\ \frac{1}{2}\int \frac{2\cos x+\sin x-\sin x}{\cos x-\sin x}\ dx
  \\ =&\ \frac{1}{2}\left(\int \frac{\cos x-\sin x}{\cos x-\sin x}\ dx+\int \frac{\cos x+\sin x}{\cos x-\sin x}\ dx\right)
  \\ =&\ \frac{1}{2}\int \ dx-\frac{1}{2}\int \frac{\cos x+\sin x}{\sin x-\cos x}\ dx
  \\ =&\ \frac{1}{2}x-\frac{1}{2}\ln\left(\sin x-\cos x\right)-c
\end{align*}
```
