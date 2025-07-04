---
topic: integrals
title: waiting for your wind
desc: 
date: 2025 June 11
difficulty: based
tags:
  - definite
  - improper
  - poly
methods:
  - speed
---


## Question
```math
\int_{0}^{\infin}
  \frac{1}
    { x^2 + 4x + 8 }
\ dx
```


## Hints

### 1
You can handle the indefinite integral first.

### 2
Complete the square!


## Answer
```math
\frac{\pi}{8}
```


## Solution

```math
\begin{align*}
  &\ \int_{0}^{\infty}\frac{1}{x^{2}+4x+8}\ dx
  \\ =&\ \int_{0}^{\infty}\frac{1}{\left(x+2\right)^{2}-2^{2}+8}\ dx
  \\ =&\ \int_{0}^{\infty}\frac{1}{\left(x+2\right)^{2}+4}\ dx
  \\ =&\ \left[\frac{1}{2}\tan^{-1}\left(\frac{1}{2}\left(x+2\right)\right)\right]_{0}^{\infty}
  \\ =&\ \frac{1}{2}\left[\tan^{-1}\left(\infty\right)-\tan^{-1}\left(1\right)\right]
  \\ =&\ \frac{1}{2}\left(\frac{\pi}{2}-\frac{\pi}{4}\right)
  \\ =&\ \frac{\pi}{8}
\end{align*}
```
