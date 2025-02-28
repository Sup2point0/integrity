---
topic: integrals
title: kurtosis
desc: 
date: 2025 January 10
tags:
  - frac
  - poly
  - sqrt
methods:
  - trig sub
---


## Question
```math
\int \frac{x^{31}}{\sqrt{4-x^{16}}}\ dx
```


## Answer
```math
-\frac{1}{24}\sqrt{4-x^{16}}\left(x^{16}+8\right)-c
```


## Solution

### Substitute (1)
```math
\begin{align*}
  x^{16} &= 4\sin^{2}t
  \\ 16x^{15}\ dx &= 8\sin t\cos t\ dt
  \\ dx &= \frac{1}{2x^{15}}\sin t\cos t\ dt
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  &\ \int \frac{x^{31}}{\sqrt{4-x^{16}}}\ dx
  \\ =&\ \int \frac{x^{16}\cdot x^{15}}{\sqrt{4-x^{16}}}\cdot\frac{1}{2x^{15}}\sin t\cos t\ dt
  \\ =&\ \frac{1}{2}\int \frac{4\sin^{2}t}{\sqrt{4-4\sin^{2}t}}\cdot\sin t\cos t\ dt
  \\ =&\ \frac{4}{2}\int \frac{\sin^{2}t}{2\cos t}\cdot\sin t\cos t\ dt
  \\ =&\ \int \sin^{3}t\ dt
  \\ =&\ \int \left(\sin t\right)\left(\sin^{2}t\right)\ dt
  \\ =&\ -\int \left(-\sin t\right)\left(1-\cos^{2}t\right)\ dt
\end{align*}
```

### Substitute (2)
```math
\begin{align*}
  \cos t &= v
  \\ -\sin t\ dt &= dv
\end{align*}
```

### Solve (2)
```math
\begin{align*}
  &= -\int 1-v^{2}\ dv
  \\ &= -v+\frac{1}{3}v^{3}
  \\ &= v\left(\frac{1}{3}v^{2}-1\right)
  \\ &= \left(\cos t\right)\left(\frac{1}{3}\left(\cos t\right)^{2}-1\right)
  \\ &= \left(\cos t\right)\left(\frac{1}{3}\cos^{2}t-\frac{1}{3}-\frac{2}{3}\right)
  \\ &= \left(\cos t\right)\left(\frac{1}{3}\left(\cos^{2}t-1\right)-\frac{2}{3}\right)
  \\ &= \left(\cos t\right)\left(-\frac{1}{3}\sin^{2}t-\frac{2}{3}\right)
  \\ &= -\frac{1}{3}\left(\cos t\right)\left(\sin^{2}t+2\right)
\end{align*}
```

### Reformulate
```math
\begin{align*}
  x^{16} &= 4\sin^{2}t
  \\ x^{8} &= 2\sin t
  \\ \sin t &= \frac{1}{2}x^{8}
  \\ \cos t &= \sqrt{1-\sin^2{t}}
  \\ \cos t &= \sqrt{1-\frac{1}{4}x^{16}}
\end{align*}
```

### Solve (3)
```math
\begin{align*}
  &= -\frac{1}{3}\sqrt{1-\frac{1}{4}x^{16}}\left(\frac{1}{4}x^{16}+2\right)
  \\ &= -\frac{1}{6}\sqrt{4-x^{16}}\left(\frac{1}{4}x^{16}+2\right)
  \\ &= -\frac{1}{24}\sqrt{4-x^{16}}\left(x^{16}+8\right)-c
\end{align*}
```
