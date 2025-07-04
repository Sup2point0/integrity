---
topic: integrals
title: as is
desc: 
date: 2025 March 27
difficulty: based
tags:
  - sqrt
methods:
  - speed
---


## Question
```math
\int
  \frac
    { \sqrt{x+1} \sqrt{1-x^2} }
    { \sqrt{x-1} }
\ dx
```


## Answer
```math
\frac{1}{2}x^{2}+x-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{\sqrt{x+1}\sqrt{1-x^{2}}}{\sqrt{1-x}}\ dx
  \\ =&\ \int \frac{\sqrt{x+1}\sqrt{\left(1-x\right)\left(1+x\right)}}{\sqrt{1-x}}\ dx
  \\ =&\ \int \frac{\sqrt{x+1}\sqrt{1-x}\sqrt{1+x}}{\sqrt{1-x}}\ dx
  \\ =&\ \int \sqrt{x+1}\sqrt{1+x}\ dx
  \\ =&\ \int x+1\ dx
  \\ =&\ \frac{1}{2}x^{2}+x-c
\end{align*}
```
