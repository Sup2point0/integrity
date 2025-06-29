---
topic: integrals
title: slacking
desc: 
date: 2025 April 17
tags:
  - trig
methods:
  - fun
  - spot
  - poly angle
---


## Question
```math
\int \frac{\cos2x}{1+\left(\sin x-\cos x\right)^{2}}\ dx
```


## Hints

### 1
What’s the derivative of $\sin(x)-\cos(x)$?

### 2
How else could you write $\cos(2x)$?

### 3
$\cos(2x)$ happens to split very nicely when factorised (equivalently, it factorises very nicely when split).


## Answer
```math
-\frac{1}{2}\ln\left(\left(\sin x-\cos x\right)^{2}+1\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{\cos2x}{1+\left(\sin x-\cos x\right)^{2}}\ dx
  \\ =&\ \int \frac{\cos^{2}x-\sin^{2}x}{1+\left(\sin x-\cos x\right)^{2}}\ dx
  \\ =&\ \int \frac{\left(\cos x-\sin x\right)\left(\cos x+\sin x\right)}{1+\left(\sin x-\cos x\right)^{2}}\ dx
  \\ =&\ -\int \frac{\left(\sin x-\cos x\right)\left(\cos x+\sin x\right)}{1+\left(\sin x-\cos x\right)^{2}}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \sin x-\cos x &= t
  \\ \left(\cos x+\sin x\right)\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= -\int \frac{t}{1+t^{2}}\ dt
  \\ &= -\frac{1}{2}\int \frac{2t}{t^{2}+1}\ dt
  \\ &= -\frac{1}{2}\ln\left(t^{2}+1\right)
  \\ &= -\frac{1}{2}\ln\left(\left(\sin x-\cos x\right)^{2}+1\right)-c
\end{align*}
```
