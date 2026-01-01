---
topic: integrals
title: postmodern
desc:  
date:  2025 April 27
difficulty: incline
tags:
  - sqrt
methods:
  - trig sub
---


## Question
```math
\int \frac{1}{x^{2}+\sqrt{x^{2}+1}+1}\ dx
```


## Hints

### 1
Use the fact $\tan^2{x} + 1 = \sec^2{x}$.

### 2
Multiply by the conjugate!


## Answer
```math
\frac{\sqrt{x^{2}+1}-1}{x}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{1}{x^{2}+\sqrt{x^{2}+1}+1}\ dx
  \\ =&\ \int \frac{1}{x^{2}+1+\sqrt{x^{2}+1}}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  x &= \tan{t}
  \\ dx &= \sec^2{t} \ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int \frac{1}{\tan^{2}t+1+\sqrt{\tan^{2}t+1}}\cdot\sec^{2}t\ dt
  \\ &= \int \frac{\sec^{2}t}{\sec^{2}t+\sec t}\ dt
  \\ &= \int \frac{1}{1+\cos t}\ dt
  \\ &= \int \frac{1}{1+\cos t}\cdot\frac{1-\cos t}{1-\cos t}\ dt
  \\ &= \int \frac{1-\cos t}{1-\cos^{2}t}\ dt
  \\ &= \int \frac{1}{\sin^{2}t}-\frac{\cos t}{\sin^{2}t}\ dt
  \\ &= \int \csc^{2}t-\csc t\cot t\ dt
  \\ &= -\int -\csc^{2}t\ dt+\int -\csc t\cot t\ dt
  \\ &= -\cot t+\csc t
  \\ &= -\frac{1}{x}+\frac{\sqrt{x^{2}+1}}{x}
  \\ &= \frac{\sqrt{x^{2}+1}-1}{x}-c
\end{align*}
```
