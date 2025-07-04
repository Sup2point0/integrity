---
topic: integrals
title: astigmatism
desc: 
date: 2025 May 25
difficulty: manifold
tags:
  - definite
  - improper
  - dread
  - arctrig
methods:
  - tough
  - fun
  - spot
---


## Question
```math
\int_{0}^{\infty}
  \frac{\arctan\left(x^{3}\right)}{x^{2}}
\ dx
```


## Hints

### 1
You know how to differentiate $\arctan(x)$.

### 2
You know how to integrate $\frac{1}{x^2}$.

### 3
Parts!

### 4
$x^6$ is famously equivalent to $(x^2)^3$.

### 5
Take limits and trust in the process!


## Answer
```math
\frac{\pi}{\sqrt{3}}
```


## Solution

### Parts
```math
\begin{align*}
      f &= \arctan\left(x^{3}\right) \quad&\quad g' &= \frac{1}{x^{2}}
  \\ f' &= \frac{1}{\left(x^{3}\right)^{2}+1}\cdot3x^{2} \quad&\quad g &= -\frac{1}{x}
  \\ &= \frac{3x^{2}}{x^{6}+1}
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  &\ fg-\int f'g\ dx
  \\ =&\ \arctan\left(x^{3}\right)\left(-\frac{1}{x}\right)-\int \frac{3x^{2}}{x^{6}+1}\left(-\frac{1}{x}\right)\ dx
  \\ =&\ -\frac{\arctan\left(x^{3}\right)}{x}+3\int \frac{x}{x^{6}+1}\ dx
  \\ =&\ -\frac{\arctan\left(x^{3}\right)}{x}+\frac{3}{2}\int \frac{2x}{\left(x^{2}\right)^{3}+1}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  x^{2} &= t
  \\ 2x\ dx &= dt
\end{align*}
```

### Solve (2)
```math
\begin{align*}
  &= -\frac{\arctan\left(x^{3}\right)}{x}+\frac{3}{2}\int \frac{1}{t^{3}+1}\ dt
  \\ &= -\frac{\arctan\left(x^{3}\right)}{x}+\frac{3}{2}\int \frac{1}{\left(t+1\right)\left(t^{2}-t+1\right)}\ dt
  \\ &= -\frac{\arctan\left(x^{3}\right)}{x}+\frac{3}{2}\left(\frac{1}{6}\left(2\ln\left(t+1\right)-\ln\left(t^{2}-t+1\right)+2\sqrt{3}\tan^{-1}\left(\frac{2t-1}{\sqrt{3}}\right)\right)\right)
  \\ &= -\frac{\arctan\left(x^{3}\right)}{x}+\frac{1}{2}\ln\left(t+1\right)-\frac{1}{4}\ln\left(t^{2}-t+1\right)+\frac{\sqrt{3}}{2}\tan^{-1}\left(\frac{2t-1}{\sqrt{3}}\right)
  \\ &= -\frac{\arctan\left(x^{3}\right)}{x}+\frac{1}{2}\ln\left(x^{2}+1\right)-\frac{1}{4}\ln\left(x^{4}-x^{2}+1\right)+\frac{\sqrt{3}}{2}\tan^{-1}\left(\frac{2x^{2}-1}{\sqrt{3}}\right)-c
\end{align*}
```

### Evaluate
```math
\begin{align*}
  &\ \int_{0}^{\infty}\frac{\arctan\left(x^{3}\right)}{x^{2}}\ dx
  \\ =&\ \left[-\frac{\arctan\left(x^{3}\right)}{x}+\frac{1}{2}\ln\left(x^{2}+1\right)-\frac{1}{4}\ln\left(x^{4}-x^{2}+1\right)+\frac{\sqrt{3}}{2}\tan^{-1}\left(\frac{2x^{2}-1}{\sqrt{3}}\right)\right]_{0}^{\infty}
  \\ =&\ \left[-\frac{\arctan\left(x^{3}\right)}{x}+\frac{1}{4}\ln\left(\left(x^{2}+1\right)^{2}\right)-\frac{1}{4}\ln\left(x^{4}-x^{2}+1\right)+\frac{\sqrt{3}}{2}\tan^{-1}\left(\frac{2x^{2}-1}{\sqrt{3}}\right)\right]_{0}^{\infty}
  \\ =&\ \left[-\frac{\arctan\left(x^{3}\right)}{x}+\frac{1}{4}\ln\left(\frac{x^{4}+2x^{2}+1}{x^{4}-x^{2}+1}\right)+\frac{\sqrt{3}}{2}\tan^{-1}\left(\frac{2x^{2}-1}{\sqrt{3}}\right)\right]_{0}^{\infty}
  \\ =&\ \left[-\frac{\arctan\left(x^{3}\right)}{x}\right]_{0}^{\infty}-\frac{1}{4}\left[\ln\left(\frac{x^{4}+2x^{2}+1}{x^{4}-x^{2}+1}\right)\right]_{0}^{\infty}+\frac{\sqrt{3}}{2}\left[\tan^{-1}\left(\frac{2x^{2}-1}{\sqrt{3}}\right)\right]_{0}^{\infty}
\end{align*}
```

### Left
```math
\begin{align*}
  &\ \left[-\frac{\arctan\left(x^{3}\right)}{x}\right]_{0}^{\infty}
  \\ =&\ \left[\frac{\frac{3x^{2}}{x^{6}+1}}{1}\right]_{\infty}^{0}
  \\ =&\ \left[\frac{3x^{2}}{x^{6}+1}\right]_{\infty}^{0}
  \\ =&\ \left[0-0\right]
  \\ =&\ 0
\end{align*}
```

### Middle
```math
\begin{align*}
  &\ -\frac{1}{4}\left[\ln\left(\frac{x^{4}+2x^{2}+1}{x^{4}-x^{2}+1}\right)\right]_{0}^{\infty}
  \\ =&\ -\frac{1}{4}\left[\left(\lim_{x\to\infty}\ln\left(\frac{x^{4}+2x^{2}+1}{x^{4}-x^{2}+1}\cdot\frac{x^{-4}}{x^{-4}}\right)\right)-\left(\lim_{x\to 0}\ln\left(\frac{x^{4}+2x^{2}+1}{x^{4}-x^{2}+1}\right)\right)\right]
  \\ =&\ -\frac{1}{4}\left[\left(\lim_{x\to\infty}\ln\left(\frac{1+2x^{-2}+x^{-4}}{1-x^{-2}+x^{-4}}\right)\right)-\left(\lim_{x\to 0}\ln\left(\frac{x^{4}+2x^{2}+1}{x^{4}-x^{2}+1}\right)\right)\right]
  \\ =&\ -\frac{1}{4}\left[\ln\left(\frac{1}{1}\right)-\ln\left(\frac{1}{1}\right)\right]
  \\ =&\ -\frac{1}{4}\left[0-0\right]
  \\ =&\ 0
\end{align*}
```

### Right
```math
\begin{align*}
  &\ \frac{\sqrt{3}}{2}\left[\tan^{-1}\left(\frac{2x^{2}-1}{\sqrt{3}}\right)\right]_{0}^{\infty}
  \\ =&\ \frac{\sqrt{3}}{2}\left[\tan^{-1}\left(\infty\right)-\tan^{-1}\left(-\frac{1}{\sqrt{3}}\right)\right]
  \\ =&\ \frac{\sqrt{3}}{2}\left[\frac{\pi}{2}-\left(-\frac{\pi}{6}\right)\right]
  \\ =&\ \frac{\sqrt{3}}{2}\left[\frac{3\pi}{6}+\frac{\pi}{6}\right]
  \\ =&\ \frac{\sqrt{3}}{2}\cdot\frac{4\pi}{2\cdot3}
  \\ =&\ \frac{\pi}{\sqrt{3}}
\end{align*}
```

### Merge
```math
\begin{align*}
  &\ \left[-\frac{\arctan\left(x^{3}\right)}{x}\right]_{0}^{\infty}-\frac{1}{4}\left[\ln\left(\frac{x^{4}+2x^{2}+1}{x^{4}-x^{2}+1}\right)\right]_{0}^{\infty}+\frac{\sqrt{3}}{2}\left[\tan^{-1}\left(\frac{2x^{2}-1}{\sqrt{3}}\right)\right]_{0}^{\infty}
  \\ =&\ 0 + 0 + \frac{\pi}{\sqrt{3}}
  \\ =&\ \frac{\pi}{\sqrt{3}}
\end{align*}
```

Solution kindly assisted by the mathematicians of [Math Stack Exchange<sup>↗</sup>](https://math.stackexchange.com/questions/5070497/prove-int-0-infty-frac-arctanx3x2-dx-frac-pi-sqrt3).
