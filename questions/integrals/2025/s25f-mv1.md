---
topic: integrals
title: 魔
desc:  
date:  2025 June 11
difficulty: manifold
tags:
  - horror
  - trig
methods:
  - elite
---


## Question
```math
\int
  \frac
    {
      \left( 4\cos^3{x} + 3\sin{x} \right) -
      \left( 4\sin^3{x} + 3\cos{x} \right)
    }
    { \sec{3x} + \csc{3x} }
\ dx
```


## Hints

### 1
$\sec()$ and $\csc()$ are horrible.

### 2
You’ll need [de Moivre’s theorem<sup>↗</sup>](https://wikipedia.org/wiki/De_Moivre%27s_formula) for this integral. If you haven’t learnt that, doing it might be rough!

### 3
What is $\cos(3x)$ equivalent to, using de Moivre?

### 4
The denominator is a hint ;)


## Answer
```math
-\frac{1}{12}\cos6x-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{\left(4\cos^{3}x+3\sin x\right)-\left(4\sin^{3}x+3\cos x\right)}{\sec3x+\csc3x}\ dx
  \\ =&\ \int \frac{4\cos^{3}x+3\sin x-4\sin^{3}x-3\cos x}{\frac{1}{\cos3x}+\frac{1}{\sin3x}}\ dx
  \\ =&\ \int \frac{4\cos^{3}x+3\sin x-4\sin^{3}x-3\cos x}{\frac{1}{\cos3x}+\frac{1}{\sin3x}}\cdot\frac{\sin3x\cos3x}{\sin3x\cos3x}\ dx
  \\ =&\ \int \frac{4\cos^{3}x+3\sin x-4\sin^{3}x-3\cos x}{\sin3x+\cos3x}\cdot\sin3x\cos3x\ dx
\end{align*}
```

### De Moivre’s Theorem
Using de Moivre’s theorem:

```math
\begin{align*}
  \cos3x+i\sin3x
    &= \left(\cos x+i\sin x\right)^{3}
  \\ &= \left(\cos x\right)^{3}+3i\left(\cos x\right)^{2}\left(\sin x\right)-3\left(\cos x\right)\left(\sin x\right)^{2}-i\left(\sin x\right)^{3}
\end{align*}
```

```math
\begin{align*}
  \cos3x &= \operatorname{real}\left[\left(\cos x+i\sin x\right)^{3}\right]
  \\ &= \left(\cos x\right)^{3}-3\left(\cos x\right)\left(\sin x\right)^{2}
  \\ &= \cos^{3}x-3\left(\cos x\right)\left(1-\cos^{2}x\right)
  \\ &= 4\cos^{3}x-3\cos x
\end{align*}
```

```math
\begin{align*}
  \sin3x
    &= \operatorname{imag}\left[\left(\cos x+i\sin x\right)^{3}\right]
  \\ &= 3\left(\cos x\right)^{2}\left(\sin x\right)-\left(\sin x\right)^{3}
  \\ &= 3\left(1-\sin^{2}x\right)\left(\sin x\right)-\left(\sin x\right)^{3}
  \\ &= 3\sin x-4\sin^{3}x
\end{align*}
```

Hence

```math
\begin{align*}
  \cos3x+\sin3x
    &= 4\cos^{3}x-3\cos x+3\sin x-4\sin^{3}x
  \\ &= 4\cos^{3}x+3\sin x-4\sin^{3}x-3\cos x
  \\ \frac{4\cos^{3}x+3\sin x-4\sin^{3}x-3\cos x}{\sin3x+\cos3x} &= 1
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ \int \frac{4\cos^{3}x+3\sin x-4\sin^{3}x-3\cos x}{\sin3x+\cos3x}\cdot\sin3x\cos3x\ dx
  \\ =&\ \int \sin3x\cos3x\ dx
  \\ =&\ \frac{1}{2}\int \sin6x\ dx
  \\ =&\ -\frac{1}{12}\cos6x-c
\end{align*}
```
