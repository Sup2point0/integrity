---
topic: integrals
title: RECONNECTION
desc: 
date: 2025 March 8
difficulty: incline
tags:
  - trig
  - exp
methods:
  - parts
---


## Question
```math
\int_0^{\pi} x \cdot \frac{d}{dx} \left( \frac{e^x+\cos{x}}{e^x+\sin{x}} \right) \ dx
```


## Answer
```math
\frac{\pi}{2}\left(\frac{e^{\pi/2}}{e^{\pi/2}+1}\right)-\ln\left(e^{\pi/2}+1\right)
```


## Solution

### Parts
```math
\begin{align*}
  &\ \int x\cdot\frac{d}{dx}\left(\frac{e^{x}+\cos x}{e^{x}+\sin x}\right)\ dx
  \\ =&\ x\cdot\frac{e^{x}+\cos x}{e^{x}+\sin x}-\int \frac{e^{x}+\cos x}{e^{x}+\sin x}\ dx
  \\ =&\ x\cdot\frac{e^{x}+\cos x}{e^{x}+\sin x}-\ln\left(e^{x}+\sin x\right)-c
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ \int_{0}^{\pi/2}x\cdot\frac{d}{dx}\left(\frac{e^{x}+\cos x}{e^{x}+\sin x}\right)\ dx
  \\ =&\ \left[ x\cdot\frac{e^{x}+\cos x}{e^{x}+\sin x}-\ln\left|e^{x}+\sin x\right| \right]_0^{\pi/2}
  \\ =&\ \left[\frac{\pi}{2}\cdot\frac{e^{\pi/2}+\cos\left(\pi/2\right)}{e^{\pi/2}+\sin\left(\pi/2\right)}-\ln\left(e^{\pi/2}+\sin\left(\pi/2\right)\right)\right]-\left[0-\ln\left(e^{0}+\sin\left(0\right)\right)\right]
  \\ =&\ \frac{\pi}{2}\cdot\frac{e^{\pi/2}+0}{e^{\pi/2}+1}-\ln\left(e^{\pi/2}+1\right)+\ln\left(1+0\right)
  \\ =&\ \frac{\pi}{2}\left(\frac{e^{\pi/2}}{e^{\pi/2}+1}\right)-\ln\left(e^{\pi/2}+1\right)
\end{align*}
```
