---
topic: integrals
title: simplify
desc: 
date: 2024 September
tags:
  - horror
  - sqrt
methods:
  - spot
  - trig sub
---


## Question
```math
\int \frac{x\sqrt{1-x}\sqrt{1+x}-\sqrt{1+x}\sqrt{1-x}}{1-x}\ dx
```


## Hints

### 1
You can start by combining the square roots.

### 2
What does the denominator tell you?

### 3
Starts with “f” and rhymes with <em>tractorise</em>.


## Answer
```math
-\frac{1}{2}\sin^{-1}x-\frac{1}{2}x\sqrt{1-x^{2}}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{x\sqrt{1-x}\sqrt{1+x}-\sqrt{1+x}\sqrt{1-x}}{1-x}\ dx
  \\ =&\ \int \frac{x\sqrt{1-x^{2}}-\sqrt{1-x^{2}}}{1-x}\ dx
  \\ =&\ \int \frac{\left(x-1\right)\sqrt{1-x^{2}}}{1-x}\ dx
  \\ =&\ -\int \frac{\left(1-x\right)\sqrt{1-x^{2}}}{1-x}\ dx
  \\ =&\ -\int \sqrt{1-x^{2}}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  x &= \sin t
  \\ dx &= \cos t\ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= -\int \sqrt{1-\sin^{2}t}\cdot\cos t\ dt
  \\ &= -\int \cos^{2}t\ dt
  \\ &= -\frac{1}{2}\int 1+\cos2t\ dt
  \\ &= -\frac{1}{2}t-\frac{1}{4}\sin2t
  \\ &= -\frac{1}{2}t-\frac{1}{2}\sin t\cos t
  \\ &= -\frac{1}{2}\sin^{-1}x-\frac{1}{2}x\sqrt{1-x^{2}}-c
\end{align*}
```
