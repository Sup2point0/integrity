---
topic: integrals
title: digit diversity
desc: 
date: 2025 May 20
tags:
  - trig
methods:
  - spot
---


## Question
```math
\int \frac{\sqrt{2}\sin\left(x+5\pi/3\right)}{\sqrt{3}\sin x-3\cos x}\ dx
```


## Hints

### 1
Write the denominator in terms of the numerator.

### 2
If their arguments are the same, you can write $P\sin(x) + Q\cos(x)$ as $R\sin(x+\phi)$.

### 3
You can derive $\phi$ through trigonometric angle addition formulae.

### 4
You can compare coefficients.


## Answer
```math
\frac{1}{\sqrt{6}}x-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{\sqrt{2}\sin\left(x+5\pi/3\right)}{\sqrt{3}\sin x-3\cos x}\ dx
  \\ =&\ \frac{\sqrt{2}}{\sqrt{3}}\int \frac{\sin\left(x+5\pi/3\right)}{\sin x-\sqrt{3}\cos x}\ dx
\end{align*}
```

### Trigonometric Merge
```math
\sin x-\sqrt{3}\cos x=R\sin\left(x+\phi\right)
```

```math
\begin{align*}
  R^{2} &= \left(1\right)^{2}+\left(-\sqrt{3}\right)^{2}
  \\ R &= \sqrt{1+3}
  \\  &= 2
\end{align*}
```

```math
\begin{align*}
  2\sin\left(x+\phi\right) &= \sin x-\sqrt{3}\cos x
  \\ 2\left[\sin\left(x\right)\cos\left(\phi\right)+\cos\left(x\right)\sin\left(\phi\right)\right] &= \sin x-\sqrt{3}\cos x
\end{align*}
```

Compare coefficients of $\sin(x)$:

```math
\begin{align*}
  2\cos\phi &= 1
  \\ \cos\phi &= \frac{1}{2}
  \\ \phi &= \frac{\pi}{3},\ -\frac{\pi}{3}
\end{align*}
```

Compare coefficients of $\cos(x)$:

```math
\begin{align*}
  2\sin\phi &= -\sqrt{3}
  \\ \sin\phi &= -\frac{\sqrt{3}}{2}
  \\ \phi &= -\frac{\pi}{3},\ -\frac{2\pi}{3}
\end{align*}
```

Hence

```math
\phi=-\frac{\pi}{3}
\\ \sqrt{3}\sin x-3\cos x=2\sqrt{3}\sin\left(x-\frac{\pi}{3}\right)
```

### Solve
```math
\begin{align*}
  &\ \frac{\sqrt{2}}{\sqrt{3}}\int \frac{\sin\left(x+5\pi/3\right)}{\sin x-\sqrt{3}\cos x}\ dx
  \\ =&\ \frac{\sqrt{2}}{\sqrt{3}}\int \frac{\sin\left(x+5\pi/3\right)}{2\sin\left(x-\pi/3\right)}\ dx
  \\ =&\ \frac{\sqrt{2}\sqrt{3}}{2\cdot3}\int \frac{\sin\left(x+5\pi/3-2\pi\right)}{\sin\left(x-\pi/3\right)}\ dx
  \\ =&\ \frac{1}{\sqrt{6}}\int \frac{\sin\left(x-\pi/3\right)}{\sin\left(x-\pi/3\right)}\ dx
  \\ =&\ \frac{1}{\sqrt{6}}\int dx
  \\ =&\ \frac{1}{\sqrt{6}}x-c
\end{align*}
```
