---
topic: integrals
title: divide and conquer
desc: 
date: 2024 December 27
tags:
  - exp
method:
  - work
---


## Question
```math
\int \left(2^{x}-x\right)^{2}\ dx
```


## Hint

### 1
Yeah, this is just work.

### 2
Nope, no tricks.

### 3
Enjoy.


## Answer
```math
\frac{1}{2\ln2}2^{x}\left(2^{x}-4x+\frac{4}{\ln2}\right)+\frac{1}{3}x^{3}-c
```


## Solution

```math
\begin{align*}
  &\ \int \left(2^{x}-x\right)^{2}\ dx
  \\ =&\ \int 2^{2x}-2x\cdot2^{x}+x^{2}\ dx
  \\ =&\ \int e^{\left(2\ln2\right)x}\ dx-2\int xe^{\left(\ln2\right)x}\ dx+\int x^{2}\ dx
  \\ =&\ \frac{1}{2\ln2}e^{\left(2\ln2\right)x}-2\left(\frac{x}{\ln2}e^{\left(\ln2\right)x}-\frac{1}{\ln2}\int e^{\left(\ln2\right)x}\ dx\right)+\frac{1}{3}x^{3}
  \\ =&\ \frac{1}{2\ln2}2^{2x}-\frac{2x}{\ln2}2^{x}+\frac{2}{\left(\ln2\right)^{2}}2^{x}+\frac{1}{3}x^{3}
  \\ =&\ \frac{1}{2\ln2}2^{x}\left(2^{x}-4x+\frac{4}{\ln2}\right)+\frac{1}{3}x^{3}-ccd
\end{align*}
```
