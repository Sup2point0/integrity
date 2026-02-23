---
topic: integrals
title: unforgettable
desc:  
date:  2025 October 17
difficulty: incline
tags:
  - elite
  - sqrt
methods:
  - hype trig sub
---


## Question
```math
\int \frac{1}{\sqrt{x}+\sqrt{x+1}}\ dx
```


## Hints

### 1
You’ll need hyperbolic trigonometric substitution for this one.

### 2
Substitute $x = \sinh^2{t}$.

### 3
To express $e^t$ in terms of $x$, first express $t$ in terms of $x$.


## Answer
```math
\frac{1}{2}\left(\sqrt{x}+\sqrt{x+1}\right)+\frac{1}{6}\left(\sqrt{x}+\sqrt{x+1}\right)^{-3}-c
```


## Solution

### Substitute
```math
\begin{align*}
  x &= \sinh^{2}t
  \\ dx &= 2\sinh t\cosh t\ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ \int \frac{1}{\sqrt{x}+\sqrt{x+1}}\ dx
  \\ =&\ \int \frac{1}{\sqrt{\sinh^{2}t}+\sqrt{\sinh^{2}t+1}}\cdot2\sinh t\cosh t\ dt
  \\ =&\ 2\int \frac{\sinh t\cosh t}{\sinh t+\cosh t}\ dt
  \\ =&\ 2\int \frac{\frac{1}{2}\left(e^{t}-e^{-t}\right)\cdot\frac{1}{2}\left(e^{t}+e^{-t}\right)}{\frac{1}{2}\left(e^{t}-e^{-t}\right)+\frac{1}{2}\left(e^{t}+e^{-t}\right)}\ dt
  \\ =&\ \int \frac{e^{2t}-e^{-2t}}{2e^{t}}\ dt
  \\ =&\ \frac{1}{2}\int e^{t}-e^{-3t}\ dt
  \\ =&\ \frac{1}{2}e^{t}+\frac{1}{6}e^{-3t}-c
\end{align*}
```

### Reformulate
```math
\begin{align*}
  \sinh^{2}t &= x
  \\ \sinh t &= \sqrt{x}
  \\ t &= \sinh^{-1}\sqrt{x}
  \\ t &= \ln\left(\sqrt{x}+\sqrt{x+1}\right)
  \\ e^{t} &= \sqrt{x}+\sqrt{x+1}
\end{align*}
```

```math
= \frac{1}{2}\left(\sqrt{x}+\sqrt{x+1}\right)+\frac{1}{6}\left(\sqrt{x}+\sqrt{x+1}\right)^{-3}-c
```
