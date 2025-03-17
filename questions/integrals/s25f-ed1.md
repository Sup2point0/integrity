---
topic: integrals
title: closure
desc: 
date: 2025 February 26
tags:
  - sqrt
  - trig
  - ln
methods:
  - tough
  - spot
---


## Question
```math
\int
  \frac
    { 1 + \sqrt{x} }
    {x}
  \cot\left(
      1 - 2\sqrt{x} - \ln{x}
    \right)
\ dx
```


## Hints

### 1
How could you rewrite the coefficient on the outside?

### 2
How could you rewrite the terms of $x$ on the inside?

### 3
What substitution might you make, and what derivative would you hence look for?


## Answer
```math
-\ln\left(\sin\left(1-2\sqrt{x}-\ln x\right)\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{1+\sqrt{x}}{x}\cot\left(1-2\sqrt{x}-\ln x\right)\ dx
  \\ =&\ \int \frac{1+\sqrt{x}}{x}\cot\left(1-\left(2\sqrt{x}+\ln x\right)\right)\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  2\sqrt{x}+\ln x &= t
  \\ \left(\frac{1}{\sqrt{x}}+\frac{1}{x}\right)\ dx &= dt
  \\ \frac{\sqrt{x}+1}{x}\ dx &= dt
\end{align*}
```

### Substitute
```math
\begin{align*}
  &= \int \cot\left(1-t\right)\ dt
  \\ &= -\int \frac{-\cos\left(1-t\right)}{\sin\left(1-t\right)}\ dt
  \\ &= -\ln\left(\sin\left(1-t\right)\right)
  \\ &= -\ln\left(\sin\left(1-2\sqrt{x}-\ln x\right)\right)-c
\end{align*}
```
