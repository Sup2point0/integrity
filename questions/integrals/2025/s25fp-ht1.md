---
topic: integrals
title: unending luminescence
desc: 
date: 2025 April 16
tags:
  - horror
  - poly
  - inverse hyp trig
methods:
  - fun
  - spot
---


## Question
```math
\int \frac{\sinh^{-1}x}{2}\left(x+\sqrt{x^{2}+1}+\frac{1}{x+\sqrt{x^{2}+1}}\right)\ dx
```


## Hints

### 1
I wouldn’t recommend starting with a substitution, it could get messy.

### 2
Try combining the 2 terms inside the brackets.

### 3
What does $\sqrt{x^2+1}$ square to?

### 4
Multiply the fraction by the denominator’s conjugate.

### 5
That is, multiply by $x-\sqrt{x^2+1}$.


## Answer
```math
\frac{1}{8}\left(2\ln\left(x+\sqrt{x^{2}+1}\right)^{2}+4x\sqrt{x^{2}+1}\ln\left(x+\sqrt{x^{2}+1}\right)-2x^{2}-1\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{\sinh^{-1}x}{2}\left(x+\sqrt{x^{2}+1}+\frac{1}{x+\sqrt{x^{2}+1}}\right)\ dx
  \\ =&\ \int \frac{\sinh^{-1}x}{2}\left(x+\sqrt{x^{2}+1}+\frac{1}{x+\sqrt{x^{2}+1}}\cdot\frac{x-\sqrt{x^{2}+1}}{x-\sqrt{x^{2}+1}}\right)\ dx
  \\ =&\ \int \frac{\sinh^{-1}x}{2}\left(x+\sqrt{x^{2}+1}+\frac{x-\sqrt{x^{2}+1}}{x^{2}-\left(\sqrt{x^{2}+1}\right)^{2}}\right)\ dx
  \\ =&\ \int \frac{\sinh^{-1}x}{2}\left(x+\sqrt{x^{2}+1}+\frac{x-\sqrt{x^{2}+1}}{x^{2}-\left(x^{2}+1\right)}\right)\ dx
  \\ =&\ \int \frac{\sinh^{-1}x}{2}\left(x+\sqrt{x^{2}+1}-\left(x-\sqrt{x^{2}+1}\right)\right)\ dx
  \\ =&\ \int \frac{\sinh^{-1}x}{2}\left(2\sqrt{x^{2}+1}\right)\ dx
  \\ =&\ \int \left(\sinh^{-1}x\right)\sqrt{x^{2}+1}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \sinh^{-1}x &= t
  \\ x &= \sinh t
  \\ dx &= \cosh t\ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int t\sqrt{\sinh^{2}+1}\cdot\cosh t\ dt
  \\ &= \int t\cosh^{2}t\ dt
  \\ &= \frac{1}{2}\int t\left(1+\cosh2t\right)\ dt
  \\ &= \frac{1}{2}\int t\ dt+\frac{1}{2}\int t\cosh2t\ dt
  \\ &= \frac{1}{4}t^{2}+\frac{1}{2}\left(t\cdot\frac{1}{2}\sinh2t-\int \frac{1}{2}\sinh2t\ dt\right)
  \\ &= \frac{1}{4}t^{2}+\frac{1}{2}\left(\frac{1}{2}t\sinh2t-\frac{1}{4}\cosh2t\right)
\end{align*}
```

### Reformulate
```math
\begin{align*}
  &= \frac{1}{4}t^{2}+\frac{1}{2}\left(t\sinh t\cosh t-\frac{1}{4}\left(\sinh^{2}t+\cosh^{2}t\right)\right)
  \\ &= \frac{1}{4}\left(\sinh^{-1}x\right)^{2}+\frac{1}{2}\left(x\sqrt{x^{2}+1}\left(\sinh^{-1}x\right)-\frac{1}{4}\left(x^{2}+\left(x^{2}+1\right)\right)\right)
  \\ &= \frac{1}{4}\ln\left(x+\sqrt{x^{2}+1}\right)^{2}+\frac{1}{2}x\sqrt{x^{2}+1}\ln\left(x+\sqrt{x^{2}+1}\right)-\frac{1}{8}\left(2x^{2}+1\right)
  \\ &= \frac{1}{4}\ln\left(x+\sqrt{x^{2}+1}\right)^{2}+\frac{1}{2}x\sqrt{x^{2}+1}\ln\left(x+\sqrt{x^{2}+1}\right)-\frac{1}{4}x^{2}-\frac{1}{8}
  \\ &= \frac{1}{8}\left(2\ln\left(x+\sqrt{x^{2}+1}\right)^{2}+4x\sqrt{x^{2}+1}\ln\left(x+\sqrt{x^{2}+1}\right)-2x^{2}-1\right)-c
\end{align*}
```


## Alternate

If you’re really familiar with hyp trig you might see a shortcut (kinda?) to the reduced form:

```math
\begin{align*}
  &\ \int \frac{\sinh^{-1}x}{2}\left(x+\sqrt{x^{2}+1}+\frac{1}{x+\sqrt{x^{2}+1}}\right)\ dx
  \\ =&\ \int \frac{\sinh^{-1}x}{2}\left(e^{\ln\left(x+\sqrt{x^{2}+1}\right)}+e^{-\ln\left(x+\sqrt{x^{2}+1}\right)}\right)\ dx
  \\ =&\ \int \frac{\sinh^{-1}x}{2}\left(e^{\left(\sinh^{-1}x\right)}+e^{-\left(\sinh^{-1}x\right)}\right)\ dx
  \\ =&\ \int \left(\sinh^{-1}x\right)\cosh\left(\sinh^{-1}x\right)\ dx
  \\ =&\ \int \left(\sinh^{-1}x\right)\sqrt{\sinh\left(\sinh^{-1}x\right)^{2}+1}\ dx
  \\ =&\ \int \left(\sinh^{-1}x\right)\sqrt{x^{2}+1}\ dx
\end{align*}
```
