---
topic: integrals
title: covert operations
desc: 
date: 2025 April 15
tags:
  - frac
  - sqrt
  - poly
methods:
  - spot
  - algebra
---


## Question
```math
\int
  \frac{x-2}{x^2-2x+1}
  \sqrt{
    1 - \frac{x}{x-1}
  }
\ dx
```


## Hints

### 1
How could you rewrite the term inside the $\sqrt{}$?

### 2
How could you rewrite $x^2-2x+1$?

### 3
You’ll need to split the numerator eventually.


## Answer
```math
-\frac{2}{3\sqrt{1-x}}\left(\frac{1}{1-x}+3\right)-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{x-2}{x^{2}-2x+1}\sqrt{1-\frac{x}{x-1}}\ dx
  \\ =&\ \int \frac{x-2}{x^{2}-2x+1}\sqrt{\frac{x-1}{x-1}-\frac{x}{x-1}}\ dx
  \\ =&\ \int \frac{x-2}{x^{2}-2x+1}\sqrt{\frac{-1}{x-1}}\ dx
  \\ =&\ \int \frac{x-2}{\left(1-x\right)^{2}}\sqrt{\frac{1}{1-x}}\ dx
  \\ =&\ \int \frac{x-2}{\left(1-x\right)^{2}}\cdot\frac{1}{\sqrt{1-x}}\ dx
  \\ =&\ \int \frac{x-2}{\left(1-x\right)^{5/2}}\ dx
  \\ =&\ -\int \frac{2-x}{\left(1-x\right)^{5/2}}\ dx
  \\ =&\ -\int \frac{1}{\left(1-x\right)^{5/2}}+\frac{1-x}{\left(1-x\right)^{5/2}}\ dx
  \\ =&\ \int -\left(1-x\right)^{-5/2}-\left(1-x\right)^{-3/2}\ dx
  \\ =&\ -\frac{2}{3}\left(1-x\right)^{-3/2}-2\left(1-x\right)^{-1/2}-c
  \\ =&\ -\frac{2}{3\sqrt{1-x}}\left(\frac{1}{1-x}+3\right)-c
\end{align*}
```
