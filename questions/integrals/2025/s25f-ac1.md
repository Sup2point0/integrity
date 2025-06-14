---
topic: integrals
title: asterism
desc: 
date: 2025 June 7
tags:
  - trig
methods:
  - speed
---


## Question
```math
\int \frac{1+\cos x}{1-\cos x}\ dx
```


## Hints

### 1
How would you cancel out the denominator?


## Answer
```math
-x-2\csc x-2\cot x-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{1+\cos x}{1-\cos x}\ dx
  \\ =&\ \int \frac{1+\cos x}{1-\cos x}\cdot\frac{1+\cos x}{1+\cos x}\ dx
  \\ =&\ \int \frac{\left(1+\cos x\right)^{2}}{1-\cos^{2}x}\ dx
  \\ =&\ \int \frac{\cos x^{2}+2\cos x+1}{\sin^{2}x}\ dx
  \\ =&\ \int \cot^{2}x+2\csc x\cot x+\csc^{2}x\ dx
  \\ =&\ \int \csc^{2}x-1+\csc^{2}x\ dx+2\int \csc x\cot x\ dx
  \\ =&\ -\int 1-2\csc^{2}x\ dx-2\int -\csc x\cot x\ dx
  \\ =&\ -\left(x+2\cot x\right)-2\csc x
  \\ =&\ -x-2\csc x-2\cot x-c
\end{align*}
```
