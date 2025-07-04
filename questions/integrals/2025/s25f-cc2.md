---
topic: integrals
title: integration is a cycle
desc: 
date: 2025 March 27
difficulty: manifold
tags:
  - dread
  - trig
  - exp
methods:
  - fun
  - long
---


## Question
```math
\int
  e^x \sin(x)^3
\ dx
```


## Hints

### 1
Parts.

### 2
Parts!

### 3
Parts!!!


## Answer
```math
\frac{1}{10}e^{x}\left(3\sin x-6\cos x+3\cos^{3}x+\sin^{3}x\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int e^{x}\sin\left(x\right)^{3}\ dx
  \\ =&\ \int e^{x}\left(\sin x\right)\left(1-\cos^{2}x\right)\ dx
  \\ =&\ \int e^{x}\sin x\ dx-\int e^{x}\cdot\sin x\cos^{2}x\ dx
\end{align*}
```

We quote the solution to $\int e^x \sin{x} \ dx$ as $\frac{1}{2} e^x \left( \sin{x}-\cos{x} \right)$.

```math
= \frac{1}{2}e^{x}\left(\sin x-\cos x\right)+\int e^{x}\left(-\sin x\right)\cos^{2}x\ dx
```

### Parts (1)
```math
\begin{align*}
      f &= e^x \quad&\quad g' &= \left(-\sin x\right)\cos^{2}x
  \\ f' &= e^x \quad&\quad g &= \frac{1}{3}\cos^{3}x
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  &\ \frac{1}{2}e^{x}\left(\sin x-\cos x\right)+\left(fg-\int f'g\ dx\right)
  \\ =&\ \frac{1}{2}e^{x}\left(\sin x-\cos x\right)+e^{x}\cdot\frac{1}{3}\cos^{3}x-\int e^{x}\cdot\frac{1}{3}\cos^{3}x\ dx
  \\ =&\ \frac{1}{2}e^{x}\left(\sin x-\cos x\right)+\frac{1}{3}e^{x}\cos^{3}x-\frac{1}{3}\int e^{x}\left(\cos x\right)\left(1-\sin^{2}x\right)\ dx
  \\ =&\ \frac{1}{2}e^{x}\left(\sin x-\cos x\right)+\frac{1}{3}e^{x}\cos^{3}x-\frac{1}{3}\int e^{x}\cos x\ dx+\frac{1}{3}\int e^{x}\cdot\cos x\sin^{2}x\ dx
  \\ =&\ \frac{1}{2}e^{x}\left(\sin x-\cos x\right)+\frac{1}{3}e^{x}\cos^{3}x-\frac{1}{6}e^{x}\left(\sin x+\cos x\right)+\frac{1}{3}\int e^{x}\cdot\cos x\sin^{2}x\ dx
  \\ =&\ \frac{1}{6}e^{x}\left(3\sin x-3\cos x\right)+\frac{1}{3}e^{x}\cos^{3}x-\frac{1}{6}e^{x}\left(\sin x+\cos x\right)+\frac{1}{3}\int e^{x}\cdot\cos x\sin^{2}x\ dx
  \\ =&\ \frac{1}{6}e^{x}\left(2\sin x-4\cos x\right)+\frac{1}{3}e^{x}\cos^{3}x+\frac{1}{3}\int e^{x}\cdot\cos x\sin^{2}x\ dx
  \\ =&\ \frac{1}{3}e^{x}\left(\sin x-2\cos x\right)+\frac{1}{3}e^{x}\cos^{3}x+\frac{1}{3}\int e^{x}\cdot\cos x\sin^{2}x\ dx
\end{align*}
```

### Parts (2)
```math
\begin{align*}
      p &= e^x \quad&\quad q' &= \cos x\sin^{2}x
  \\ p' &= e^x \quad&\quad q &= \frac{1}{3}\sin^{3}x
\end{align*}
```

### Solve (2)
```math
\begin{align*}
  &\ \frac{1}{3}e^{x}\left(\sin x-2\cos x\right)+\frac{1}{3}e^{x}\cos^{3}x+\frac{1}{3}\left(pq-\int p'q\ dx\right)
  \\ =&\ \frac{1}{3}e^{x}\left(\sin x-2\cos x\right)+\frac{1}{3}e^{x}\cos^{3}x+\frac{1}{3}\left(e^{x}\cdot\frac{1}{3}\sin^{3}x-\int e^{x}\cdot\frac{1}{3}\sin^{3}x\ dx\right)
  \\ =&\ \frac{1}{3}e^{x}\left(\sin x-2\cos x\right)+\frac{1}{3}e^{x}\cos^{3}x+\frac{1}{9}e^{x}\sin^{3}x-\frac{1}{9}\int e^{x}\sin^{3}x\ dx
  \\ =&\ \frac{1}{3}e^{x}\left(\sin x-2\cos x\right)+\frac{1}{9}e^{x}\left(3\cos^{3}x+\sin^{3}x\right)-\frac{1}{9}\int e^{x}\sin^{3}x\ dx
\end{align*}
```

Hence

```math
\begin{align*}
  \textcolor{#4d9dcd}{\int e^{x}\sin\left(x\right)^{3}\ dx}
    &= \frac{1}{3}e^{x}\left(\sin x-2\cos x\right)+\frac{1}{9}e^{x}\left(3\cos^{3}x+\sin^{3}x\right)-\textcolor{#4d9dcd}{\frac{1}{9}\int e^{x}\sin\left(x\right)^{3}\ dx}
  \\ \frac{10}{9}\int e^{x}\sin\left(x\right)^{3}\ dx
    &= \frac{1}{3}e^{x}\left(\sin x-2\cos x\right)+\frac{1}{9}e^{x}\left(3\cos^{3}x+\sin^{3}x\right)
  \\ \int e^{x}\sin\left(x\right)^{3}
    &= \frac{9}{10}\left(\frac{1}{3}e^{x}\left(\sin x-2\cos x\right)+\frac{1}{9}e^{x}\left(3\cos^{3}x+\sin^{3}x\right)\right)
    \\ &= \frac{3}{10}e^{x}\left(\sin x-2\cos x\right)+\frac{1}{10}e^{x}\left(3\cos^{3}x+\sin^{3}x\right)
    \\ &= \frac{1}{10}e^{x}\left(3\sin x-6\cos x+3\cos^{3}x+\sin^{3}x\right)-c
\end{align*}
```
