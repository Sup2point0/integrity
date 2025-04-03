---
topic: integrals
title: curse me
desc: 
date: 2025 March 27
tags:
  - trig
  - inverse trig
methods:
  - tough
  - trig sub
---


## Question
```math
\int
  \sin \left(
    \tan^{-1}{x}
  \right)^2
\ dx
```


## Hints

### 1
Can you simplify $\sin\left( \tan^{-1}{x} \right)$?

### 2
Draw a triangle.

### 3
Treat $\tan^{-1}{x}$ as an angle.


## Answer
```math
x-\tan^{-1}x-c
```


## Solution

### Substitute
```math
\begin{align*}
  \tan^{-1}x &= t
  \\ x &= \tan t
  \\ \frac{x}{1} &= \frac{\sin t}{\cos t}
  \\ \sin t &= \frac{x}{\sqrt{x^{2}+1}}
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ \int \sin\left(\tan^{-1}x\right)^{2}\ dx
  \\ =&\ \int \sin\left(t\right)^{2}\ dx
  \\ =&\ \int \left(\frac{x}{\sqrt{x^{2}+1}}\right)^{2}\ dx
  \\ =&\ \int \frac{x^{2}}{x^{2}+1}\ dx
  \\ =&\ \int \frac{x^{2}+1-1}{x^{2}+1}\ dx
  \\ =&\ \int 1-\frac{1}{x^{2}+1}\ dx
  \\ =&\ x-\tan^{-1}x-c
\end{align*}
```
