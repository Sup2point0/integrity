---
topic: integrals
title: crossfire
desc: 
date: 2025 February 1
difficulty: incline
tags:
  - poly
  - ln
methods:
  - spot
---


## Question
```math
\int x\left(x^{2}+5\right)^{3}\ln x\ dx
```


## Answer
```math
\frac{1}{8}\left(x^{2}+5\right)^{4}\left(\ln x\right)-\frac{1}{64}x^{8}-\frac{5}{12}x^{6}-\frac{75}{16}x^{4}-\frac{250}{8}x^{2}-\frac{625}{8}\ln x-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int x\left(x^{2}+5\right)^{3}\ln x\ dx
  \\ =&\ \frac{1}{2}\int 2x\left(x^{2}+5\right)^{3}\ln x\ dx
\end{align*}
```

### Parts
```math
\begin{align*}
  f &= \ln{x}
    &\quad g &= \frac{1}{4}\left(x^{2}+5\right)^{4}
  \\ f' &= \frac{1}{x}
    &\quad g' &= 2x\left(x^{2}+5\right)^{3}
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \frac{1}{2}\left(fg-\int f'g\right)
  \\ &= \frac{1}{2}\left(\frac{1}{4}\left(x^{2}+5\right)^{4}\left(\ln x\right)-\frac{1}{4}\int \frac{1}{x}\left(x^{2}+5\right)^{4}\ dx\right)
  \\ &= \frac{1}{8}\left(x^{2}+5\right)^{4}\left(\ln x\right)-\frac{1}{8}\int \frac{x^{8}+20x^{6}+150x^{4}+500x^{2}+625}{x}\ dx
  \\ &= \frac{1}{8}\left(x^{2}+5\right)^{4}\left(\ln x\right)-\frac{1}{8}\int x^{7}+20x^{5}+150x^{3}+500x+\frac{625}{x}\ dx
  \\ &= \frac{1}{8}\left(x^{2}+5\right)^{4}\left(\ln x\right)-\frac{1}{64}x^{8}-\frac{5}{12}x^{6}-\frac{75}{16}x^{4}-\frac{250}{8}x^{2}-\frac{625}{8}\ln x-c
\end{align*}
```

