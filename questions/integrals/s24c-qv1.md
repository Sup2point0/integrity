---
topic: integrals
title: tractorisation
desc: 
date: 2024 September
tags:
  - sqrt
methods:
  - spot
---


## Question
```math
\int \frac{2\sqrt{x-1}+x}{\sqrt{x-1}+1}\ dx
```


## Hints

### 1
What does the denominator tell you?

### 2
What does $\sqrt{x-1}$ square to?

### 3
If all else fails, just substitute.


## Answer
```math
\frac{2}{3}\left(x-1\right)^{3/2}+x-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{2\sqrt{x-1}+x}{\sqrt{x-1}+1}\ dx
  \\ =&\ \int \frac{2\sqrt{x-1}+\left(x-1\right)+1}{\sqrt{x-1}+1}\ dx
  \\ =&\ \int \frac{\left(\sqrt{x-1}+1\right)^{2}}{\sqrt{x-1}+1}\ dx
  \\ =&\ \int \sqrt{x-1}+1\ dx
  \\ =&\ \frac{2}{3}\left(x-1\right)^{3/2}+x-c
\end{align*}
```
