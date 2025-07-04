---
topic: integrals
title: delayed delivery
desc: 
date: 2025 May 15
difficulty: incline
tags:
  - trig
methods:
  - layer cake
---


## Question
```math
\int \frac{1}{x}\left(\frac{x-\sin\left(\ln x\right)}{x+\cos\left(\ln x\right)}\right)\ dx
```


## Answer
```math
\ln\left(x+\cos\left(\ln x\right)\right)-c
```


## Solution

### Straight-Up Layer Cake
```math
\begin{align*}
  \frac{d}{dx}\left(x+\cos\left(\ln x\right)\right)
    &= 1-\frac{\sin\left(\ln x\right)}{x}
  \\ &= \frac{x-\sin\left(\ln x\right)}{x}
  \\ \Rightarrow \int \frac{1}{x}\left(\frac{x-\sin\left(\ln x\right)}{x+\cos\left(\ln x\right)}\right)\ dx
    &= \ln\left(x+\cos\left(\ln x\right)\right)-c
\end{align*}
```


## Alternates

```math
\begin{align*}
  \ln x=t
  \\ x=e^{t}
  \\ dx=e^{t}\ dt
\end{align*}
```

```math
\begin{align*}
  &\ \int \frac{1}{x}\left(\frac{x-\sin\left(\ln x\right)}{x+\cos\left(\ln x\right)}\right)\ dx
  \\ =&\ \int \frac{1}{e^{t}}\left(\frac{e^{t}-\sin t}{e^{t}+\cos t}\right)\cdot e^{t}\ dt
  \\ =&\ \int \frac{e^{t}-\sin t}{e^{t}+\cos t}\ dt
  \\ =&\ \ln\left(e^{t}+\cos t\right)
  \\ =&\ \ln\left(x+\cos\left(\ln x\right)\right)-c
\end{align*}
```
