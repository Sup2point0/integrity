---
topic: complete-square
title: why
desc: I, too, am a huge fan of completing the square.
date: 2024 November
tags:
  - horror
---


## Question
```math
6x\sin\left(\frac{\pi}{6}\right)-\frac{6x+1}{6x}
```


## Hint

### 1
What is $\sin{\frac{\pi}{6}}$?

### 2
Multiply through by $x$ (but remember to divide by it at the end!).


## Answer
```math
\frac{3}{x}\left(x-\frac{1}{6}\right)^{2}-\frac{1}{4x}
```


## Solution

### Rewrite
```math
\begin{align}
 A &= 3x-\frac{6x+1}{6x}
\\ &= 3x-\left(1+\frac{1}{6x}\right)
\\ &= 3x-1-\frac{1}{6x}
\end{align}
```

### Divide
```math
\begin{align}
&= \frac{1}{x}\left(3x^{2}-x-\frac{1}{6}\right)
\\ &= \frac{1}{x}\left(3\left(x^{2}-\frac{1}{3}x\right)-\frac{1}{6}\right)
\\ &= \frac{1}{x}\left(3\left(x-\frac{1}{6}\right)^{2}-\frac{1}{12}-\frac{1}{6}\right)
\\ &= \frac{3}{x}\left(x-\frac{1}{6}\right)^{2}-\frac{1}{4x}
\end{align}
```
