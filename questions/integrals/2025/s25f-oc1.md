---
topic: integrals
title: overcharge
desc: 
date: 2025 April 16
difficulty: incline
tags:
  - sqrt
  - ln
methods:
  - parts
---


## Question
```math
\int
  \ln \left(
    1 + \sqrt{x} + x
  \right)
\ dx
```


## Hints

### 1
Integrating $\ln(x)$ is hard, but differentiating it is doable.

### 2
Polynomial division isn’t that bad.

### 3
It’s just recursive division. Keep going, you can do it!


## Answer
```math
\left(x+\frac{1}{2}\right)\ln\left(1+\sqrt{x}+x\right)-x+\sqrt{x}-\sqrt{3}\tan^{-1}\left(\frac{2\sqrt{3}}{3}\left(\sqrt{x}+\frac{1}{2}\right)\right)-c
```


## Solution

### Parts
```math
\begin{align*}
      f &= \ln\left(1+\sqrt{x}+x\right) \quad&\quad g' &= 1
  \\ f' &= \frac{\frac{1}{2\sqrt{x}}+1}{1+\sqrt{x}+x} \quad&\quad g &= x
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  &\ fg-\int f'g\ dx
  \\ =&\ x\ln\left(1+\sqrt{x}+x\right)-\int \frac{\frac{1}{2\sqrt{x}}+1}{1+\sqrt{x}+x}\cdot x\ dx
  \\ =&\ x\ln\left(1+\sqrt{x}+x\right)-\frac{1}{2}\int \frac{\sqrt{x}+2x}{1+\sqrt{x}+x}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \sqrt{x} &= t
  \\ x &= t^{2}
  \\ dx &= 2t\ dt
\end{align*}
```

### Solve (2)
```math
\begin{align*}
  &= x\ln\left(1+\sqrt{x}+x\right)-\frac{1}{2}\int \frac{t+2t^{2}}{1+t+t^{2}}\cdot2t\ dt
  \\ &= x\ln\left(1+\sqrt{x}+x\right)-\int \frac{t^{2}+2t^{3}}{1+t+t^{2}}\ dt
  \\ &= x\ln\left(1+\sqrt{x}+x\right)-\int \frac{\left(1+t+t^{2}\right)\left(2t-1\right)-t+1}{1+t+t^{2}}\ dt
  \\ &= x\ln\left(1+\sqrt{x}+x\right)-\int \frac{\left(1+t+t^{2}\right)\left(2t-1\right)}{1+t+t^{2}}+\frac{-t+1}{1+t+t^{2}}\ dt
  \\ &= x\ln\left(1+\sqrt{x}+x\right)-\int 2t-1-\frac{t-1}{t^{2}+t+1}\ dt
  \\ &= x\ln\left(1+\sqrt{x}+x\right)-t^{2}+t+\int \frac{t-1}{t^{2}+t+1}\ dt
  \\ &= x\ln\left(1+\sqrt{x}+x\right)-t^{2}+t+\frac{1}{2}\int \frac{2t-2}{t^{2}+t+1}\ dt
  \\ &= x\ln\left(1+\sqrt{x}+x\right)-t^{2}+t+\frac{1}{2}\int \frac{2t+1}{t^{2}+t+1}-\frac{3}{t^{2}+t+1}\ dt
  \\ &= x\ln\left(1+\sqrt{x}+x\right)-t^{2}+t+\frac{1}{2}\ln\left(t^{2}+t+1\right)-\frac{3}{2}\int \frac{1}{\left(t+1/2\right)^{2}+3/4}\ dt
  \\ &= x\ln\left(1+\sqrt{x}+x\right)-t^{2}+t+\frac{1}{2}\ln\left(t^{2}+t+1\right)-\frac{3}{2}\sqrt{\frac{4}{3}}\tan^{-1}\left(\sqrt{\frac{4}{3}}\left(t+\frac{1}{2}\right)\right)
  \\ &= x\ln\left(1+\sqrt{x}+x\right)-x+\sqrt{x}+\frac{1}{2}\ln\left(x+\sqrt{x}+1\right)-\sqrt{3}\tan^{-1}\left(\frac{2\sqrt{3}}{3}\left(\sqrt{x}+\frac{1}{2}\right)\right)
  \\ &= \left(x+\frac{1}{2}\right)\ln\left(1+\sqrt{x}+x\right)-x+\sqrt{x}-\sqrt{3}\tan^{-1}\left(\frac{2\sqrt{3}}{3}\left(\sqrt{x}+\frac{1}{2}\right)\right)-c
\end{align*}
```
