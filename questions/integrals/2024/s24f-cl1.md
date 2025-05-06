---
topic: integrals
title: skylight
desc: 
date: 2024 December 22
tags:
  - inverse trig
methods:
  - parts
  - inverse chain rule
---


## Question
```math
\int \frac{\tan^{-1}\left(3x\right)}{1+9x^{2}}\ dx
```


## Hints

### 1
Try writing the integral as a product of 2 expressions.

### 2
What do you notice?


## Answer
```math
\frac{1}{6}\left(\tan^{-1}\left(3x\right)\right)^{2}-c
```


## Solution

### Clean
```math
\begin{align*}
  &\ \int \frac{\tan^{-1}\left(3x\right)}{1+9x^{2}}\ dx
  \\ =&\ \int \frac{1}{1+9x^{2}}\cdot\tan^{-1}\left(3x\right)\ dx
  \\ =&\ \int \frac{1}{9\left(\frac{1}{9}+x^{2}\right)}\cdot\tan^{-1}\left(3x\right)\ dx
  \\ =&\ \frac{1}{9}\int \frac{1}{\frac{1}{9}+x^{2}}\cdot\tan^{-1}\left(3x\right)\ dxc
\end{align*}
```

### Parts
```math
\begin{align*}
  f\left(x\right) &= \tan^{-1}\left(3x\right)
  \\ f'\left(x\right) &= \frac{3}{1+\left(3x\right)^{2}}
  \\ g'\left(x\right) &= \frac{1}{\frac{1}{9}+x^{2}}
  \\ g\left(x\right) &= 3\tan^{-1}\left(3x\right)
\end{align*}
```

### Solve
```math
\begin{align*}
  \int \frac{\tan^{-1}\left(3x\right)}{1+9x^{2}}\ dx &= \frac{1}{9}\left(fg-\int f'g\ dx\right)
  \\ &= \frac{1}{9}\left(\tan^{-1}\left(3x\right)\cdot3\tan^{-1}\left(3x\right)-\int \frac{3}{1+\left(3x\right)^{2}}\cdot3\tan^{-1}\left(3x\right)\right)
  \\ &= \frac{3}{9}\left(\tan^{-1}\left(3x\right)\right)^{2}-\frac{1}{9}\int \frac{9\tan^{-1}\left(3x\right)}{1+9x^{2}}\ dx
  \\ &= \frac{1}{3}\left(\tan^{-1}\left(3x\right)\right)^{2}-\int \frac{\tan^{-1}\left(3x\right)}{1+9x^{2}}\ dx
  \\ 2\int \frac{\tan^{-1}\left(3x\right)}{1+9x^{2}}\ dx &= \frac{1}{3}\left(\tan^{-1}\left(3x\right)\right)^{2}
  \\ \int \frac{\tan^{-1}\left(3x\right)}{1+9x^{2}}\ dx &= \frac{1}{6}\left(\tan^{-1}\left(3x\right)\right)^{2}-c
\end{align*}
```
