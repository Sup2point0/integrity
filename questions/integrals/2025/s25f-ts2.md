---
topic: integrals
title: quippy love
desc: 
date: 2025 May 26
tags:
  - trig
methods:
  - acc
---


## Question
```math
\int
  \frac
    { \sec(x-\pi/4) }
    { \sin(x+\pi/4) }
\ dx
```


## Hints

### 1
Translate!

### 2
$\cos(x) = \cos(-x)$.

### 3
$\sin(x)$ = $\cos(\pi/2 - x)$.


## Answer
```math
-\cot\left(x+\frac{\pi}{4}\right)-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{\sec\left(x-\pi/4\right)}{\sin\left(x+\pi/4\right)}\ dx
  \\ =&\ \int \left(\sin\left(x+\frac{\pi}{4}\right)\cos\left(x-\frac{\pi}{4}\right)\right)^{-1}\ dx
  \\ =&\ \int \left(\sin\left(x+\frac{\pi}{4}\right)\cos\left(\frac{\pi}{4}-x\right)\right)^{-1}\ dx
  \\ =&\ \int \left(\sin\left(x+\frac{\pi}{4}\right)\sin\left(\frac{\pi}{2}-\left(\frac{\pi}{4}-x\right)\right)\right)^{-1}\ dx
  \\ =&\ \int \left(\sin\left(x+\frac{\pi}{4}\right)\sin\left(\frac{\pi}{4}+x\right)\right)^{-1}\ dx
  \\ =&\ \int \csc\left(x+\frac{\pi}{4}\right)^{2}\ dx
  \\ =&\ -\cot\left(x+\frac{\pi}{4}\right)-c
\end{align*}
```
