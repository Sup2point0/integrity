---
topic: integrals
title: déjà vu
desc: Oh nope, there is no respite here.
date: 2024 December 13
tags:
  - dread
  - sqrt
  - frac
  - pi
method:
  - work
  - long
  - trig sub
  - parts
---


## Question
```math
\int \frac{-x+\sqrt{x^{2}-4ex}}{2\pi}\ dx
```


## Hints

### 1
That division by $2 \pi$ isn’t doing anything here.

### 2
The stuff inside the $\sqrt{}$ is pretty messy.

### 3
Shall we complete the square on it?


## Answer
```math
-\frac{1}{4\pi}x^{2}+\frac{\left(x-2e\right)\sqrt{x^{2}-4ex}}{4\pi}-\frac{e^{2}}{\pi}\ln\left(\frac{x-2e+\sqrt{x^{2}-4ex}}{2e}\right)-c
```


## Solution

### Complete the Square
```math
\begin{align*}
  &= \int \frac{-x+\sqrt{x^{2}-4ex}}{2\pi}\ dx
  \\ &= \frac{1}{2\pi}\int -x+\sqrt{x^{2}-4ex}\ dx
  \\ &= -\frac{1}{2\pi}\int x\ dx+\frac{1}{2\pi}\int \sqrt{\left(x-2e\right)^{2}-4e^{2}}\ dx
  \\ &= -\frac{1}{4\pi}x^{2}+\frac{1}{2\pi}\int \sqrt{4e^{2}\left(\frac{1}{4e^{2}}\left(x-2e\right)^{2}-1\right)}\ dx
\end{align*}
```

### Trigonometric Substitution
```math
\begin{align*}
  \frac{1}{4e^{2}}\left(x-2e\right)^{2} &= \sec^{2}t
  \\ \frac{1}{2e}\left(x-2e\right) &= \sec t
  \\ \frac{1}{2e}dx &= \sec t\tan t\ dt
  \\ dx & =2e\sec t\tan t\ dt
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  &= -\frac{1}{4\pi}x^{2}+\frac{1}{2\pi}\int 2e\sqrt{\sec^{2}-1}\ \cdot2e\sec t\tan t\ dt
  \\ &= -\frac{1}{4\pi}x^{2}+\frac{4e^{2}}{2\pi}\int \tan t\sec t\tan t\ dt
  \\ &= -\frac{1}{4\pi}x^{2}+\frac{2e^{2}}{\pi}\int \sec t\tan^{2}t\ dt
\end{align*}
```

### Parts
```math
\begin{align*}
  \int \sec t\tan^{2}t\ dt &= \int \tan t\left(\sec t\tan t\right)\ dt
  \\ &= \sec t\tan t-\int \sec^{2}t\sec t\ dt
  \\ &= \sec t\tan t-\ \int \sec t\left(\tan^{2}t+1\right)\ dt
  \\ &= \sec t\tan t-\int \sec t\tan^{2}t\ dt-\int \sec t\ dt
  \\ 2\int \sec t\tan^{2}t\ dt &= \sec t\tan t-\ln\left(\sec t+\tan t\right)
  \\ \int \sec t\tan^{2}t\ dt &= \frac{1}{2}\sec t\tan t-\frac{1}{2}\ln\left(\sec t+\tan t\right)
\end{align*}
```

### Solve (2)
```math
\begin{align*}
  &= -\frac{1}{4\pi}x^{2}+\frac{2e^{2}}{\pi}\left(\frac{1}{2}\sec t\tan t-\frac{1}{2}\ln\left(\sec t+\tan t\right)\right)
  \\ &= -\frac{1}{4\pi}x^{2}+\frac{e^{2}}{\pi}\left(\sec t\tan t-\ln\left(\sec t+\tan t\right)\right)
  \\ &= -\frac{1}{4\pi}x^{2}+\frac{e^{2}}{\pi}\left(\frac{x-2e}{2e}\cdot\frac{\sqrt{\left(x-2e\right)^{2}-4e^{2}}}{2e}-\ln\left(\frac{x-2e}{2e}+\frac{\sqrt{\left(x-2e\right)^{2}-4e^{2}}}{2e}\right)\right)
\end{align*}
```

### Reformulate

```math
\begin{align*}
  \sec t &= \frac{x-2e}{2e}
  \\ \tan t &= \sqrt{\sec^{2}t-1}
  \\ &= \frac{\sqrt{\left(x-2e\right)^{2}-4e^{2}}}{2e}
\end{align*}
```

### Solve (3)
```math
\begin{align*}
  &= -\frac{1}{4\pi}x^{2}+\frac{e^{2}}{\pi}\left(\frac{x-2e}{2e}\cdot\frac{\sqrt{\left(x-2e\right)^{2}-4e^{2}}}{2e}-\ln\left(\frac{x-2e}{2e}+\frac{\sqrt{\left(x-2e\right)^{2}-4e^{2}}}{2e}\right)\right)
  \\ &= -\frac{1}{4\pi}x^{2}+\frac{e^{2}}{\pi}\left(\frac{\left(x-2e\right)\sqrt{x^{2}-4ex}}{4e^{2}}-\ln\left(\frac{x-2e+\sqrt{x^{2}-4ex}}{2e}\right)\right)
  \\ &= -\frac{1}{4\pi}x^{2}+\frac{\left(x-2e\right)\sqrt{x^{2}-4ex}}{4\pi}-\frac{e^{2}}{\pi}\ln\left(\frac{x-2e+\sqrt{x^{2}-4ex}}{2e}\right)-c
\end{align*}
```
