---
topic: integrals
title: in my heart
desc: 
date: 2024 December 28
tags:
  - fun
  - sqrt
  - poly
  - ln
methods:
  - speed
---


## Question
```math
\int \ln\left(\sqrt{x\sqrt{x^{2}+4x-21}}\right)\ dx
```


## Hints

### 1
There’s quite a few ways we could clear this up.

### 2
Log laws!

### 3
Starts with “f” and rhymes with <em>tractorise</em>.


## Answer
```math
\frac{1}{2}x\left(\ln x-1\right)+\frac{1}{4}\left(x-3\right)\left(\ln\left(x-3\right)-1\right)+\frac{1}{4}\left(x+7\right)\left(\ln\left(x+7\right)-1\right)-c
```


## Solution

### Solve
```math
\begin{align*}
  &\ \int \ln\left(\sqrt{x\sqrt{x^{2}+4x-21}}\right)\ dx
  \\ =&\ \int \frac{1}{2}\ln\left(x\sqrt{x^{2}+4x-21}\right)\ dx
  \\ =&\ \frac{1}{2}\int \ln x+\ln\left(\sqrt{x^{2}+4x-21}\right)\ dx
  \\ =&\ \frac{1}{2}\int \ln x\ +\frac{1}{2}\ln\left(x^{2}+4x-21\right)\ dx
  \\ =&\ \frac{1}{2}\int \ln x\ +\frac{1}{2}\ln\left(\left(x-3\right)\left(x+7\right)\right)\ dx
  \\ =&\ \frac{1}{2}\int \ln x\ +\frac{1}{2}\ln\left(x-3\right)+\frac{1}{2}\ln\left(x+7\right)\ dx
  \\ =&\ \frac{1}{2}x\left(\ln x-1\right)+\frac{1}{4}\left(x-3\right)\left(\ln\left(x-3\right)-1\right)+\frac{1}{4}\left(x+7\right)\left(\ln\left(x+7\right)-1\right)-c
\end{align*}
```
