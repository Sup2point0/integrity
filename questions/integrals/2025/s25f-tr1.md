---
topic: integrals
title: laughable
desc: 
date: 2025 February 1
tags:
  - sqrt
methods:
  - sub
---


## Question
```math
\int \left(10-\sqrt{x}\right)^{10}\ dx
```


## Answer
```math
\frac{1}{66}\left(\sqrt{x}-10\right)^{11}\left(11\sqrt{x}+10\right)-c
```


## Solution

### Substitute
```math
\begin{align*}
  10-\sqrt{x} &= t
  \\ x &= \left(10-t\right)^{2}
  \\ dx &= -2\left(10-t\right)\ dt
  \\ &= 2t-20
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ \int \left(10-\sqrt{x}\right)^{10}\ dx
  \\ =&\ \int t^{10}\cdot\left(2t-20\right)\ dt
  \\ =&\ \int 2t^{11}-20t^{10}\ dt
  \\ =&\ \frac{2}{12}t^{12}-\frac{20}{11}t^{11}
  \\ =&\ \frac{1}{66}t^{11}\left(11t-120\right)
  \\ =&\ =\frac{1}{66}\left(10-\sqrt{x}\right)^{11}\left(11\left(10-\sqrt{x}\right)-120\right)
  \\ =&\ =\frac{1}{66}\left(10-\sqrt{x}\right)^{11}\left(-11\sqrt{x}-10\right)
  \\ =&\ =\frac{1}{66}\left(10-\sqrt{x}\right)^{11}\cdot-\left(11\sqrt{x}+10\right)
  \\ =&\ \frac{1}{66}\left(\sqrt{x}-10\right)^{11}\left(11\sqrt{x}+10\right)-c
\end{align*}
```
