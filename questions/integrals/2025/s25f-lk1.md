---
topic: integrals
title: lockin
desc: 
date: 2025 June 19
difficulty: based
tags:
  - ln
  - trig
methods:
  - speed
  - parts
---


## Question
```math
\int
  \sin\left(
    \ln(1/x)
  \right)
\ dx
```


## Hints

### 1
Substitution after substitution!

### 2
Signs may be a hassle, but this is parts.


## Answer
```math
\frac{1}{2}x\left(\sin\left(-\ln x\right)+\cos\left(-\ln x\right)\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \sin\left(\ln\left(1/x\right)\right)\ dx
  \\ =&\ \int \sin\left(\ln\left(x^{-1}\right)\right)\ dx
  \\ =&\ \int \sin\left(-\ln x\right)\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  -\ln x &= t
  \\ x &= e^{-t}
  \\ dx &= -e^{-t}\ dt
\end{align*}
```

### Simplfy
```math
\begin{align*}
  &= \int \sin\left(t\right)\cdot-e^{-t}\ dt
  \\ &= \int -e^{-t}\sin t\ dt
\end{align*}
```

### Parts
```math
\begin{align*}
      f &= \sin{t} \quad&\quad g' &= -e^{-t}
  \\ f' &= \cos{t} \quad&\quad g &= e^{-t}
\end{align*}
```

### Parts Duplication
```math
\begin{align*}
  \int -e^{-t}\sin t\ dt
    &= e^{-t}\sin t-\int e^{-t}\cos t\ dt
  \\ &= e^{-t}\sin t+\int -e^{-t}\cos t\ dt
  \\ &= e^{-t}\sin t+\left[e^{-t}\cos t-\int e^{-t}\cdot-\sin t\ dt\right]
  \\ &= e^{-t}\sin t+e^{-t}\cos t-\textcolor{#4d9dcd}{\int -e^{-t}\sin t\ dt}
  \\ 2\int -e^{-t}\sin t\ dt
    &= e^{-t}\left(\sin t+\cos t\right) 
  \\ \int -e^{-t}\sin t\ dt
    &= \frac{1}{2}e^{-t}\left(\sin t+\cos t\right)
  \\ &= \frac{1}{2}x\left(\sin\left(-\ln x\right)+\cos\left(-\ln x\right)\right)-c
\end{align*}
```
