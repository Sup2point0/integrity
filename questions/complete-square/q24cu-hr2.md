---
topic: complete-square
title: class
desc: 
date: 2024 November
tags:
  - horror
  - pi
  - trig
method:
  - work
---


## Question
```math
\frac{x^{2}\left(e^{2}-1\right)}{2\pi}-\left(1-e^{2}\right)x-\sin{30\degree}
```


## Hint

### 1
What’s $\sin{30 \degree}$

### 2
$e^2 - 1$ and $1 - e^2$ look a little sus...


## Answer
```math
\frac{e^{2}-1}{2\pi}\left(x+\pi\right)^{2}-\frac{1+\pi\left(e^{2}-1\right)}{2}
```


## Solution

```math
\begin{align*}
  &= \frac{x^{2}\left(e^{2}-1\right)}{2\pi}-\left(1-e^{2}\right)x-\sin{30\degree}
  \\ &= x^{2}\left(\frac{e^{2}-1}{2\pi}\right)+x\left(e^{2}-1\right)-\frac{1}{2}
  \\ &= \frac{e^{2}-1}{2\pi}\left(x^{2}+2\pi x\right)-\frac{1}{2}
  \\ &= \frac{e^{2}-1}{2\pi}\left(\left(x+\pi\right)^{2}-\pi^{2}\right)-\frac{1}{2}
  \\ &= \frac{e^{2}-1}{2\pi}\left(x+\pi\right)^{2}-\frac{\pi\left(e^{2}-1\right)}{2}-\frac{1}{2}
  \\ &= \frac{e^{2}-1}{2\pi}\left(x+\pi\right)^{2}-\frac{1+\pi\left(e^{2}-1\right)}{2}
\end{align*}
```
