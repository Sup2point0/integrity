---
topic: integrals
title: salient
desc: 
date: 2025 February 15
tags:
 - sqrt
methods:
  - spot
---


## Question
```math
\int
  \frac
    { \sqrt{\pi} + \sqrt{x} }
    { 2x + \sqrt{x} }
\ dx
```


## Answer
```math
\sqrt{x}+\left(\sqrt{\pi}-\frac{1}{2}\right)\ln\left(2\sqrt{x}+1\right)-c
```


## Solution

### Substitute
```math
\begin{align*}
  \sqrt{x} &= t
  \\ x &= t^{2}
  \\ dx &= 2t\ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ \int \frac{\sqrt{\pi}+\sqrt{x}}{2x+\sqrt{x}}\ dx
  \\ =&\ \int \frac{\sqrt{\pi}+t}{2t^{2}+t}\cdot2t\ dt
  \\ =&\ \int \frac{2\sqrt{\pi}+2t}{2t+1}\ dt
  \\ =&\ \int \frac{2t+1}{2t+1}+\frac{2\sqrt{\pi}-1}{2t+1}\ dt
  \\ =&\ \int dt+\left(\sqrt{\pi}-\frac{1}{2}\right)\int \frac{2}{2t+1}\ dt
  \\ =&\ t+\left(\sqrt{\pi}-\frac{1}{2}\right)\ln\left(2t+1\right)
  \\ =&\ \sqrt{x}+\left(\sqrt{\pi}-\frac{1}{2}\right)\ln\left(2\sqrt{x}+1\right)-c
\end{align*}
```
