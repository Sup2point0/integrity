---
topic: integrals
title: dreadnought
desc: 
date: 2025 January 12
tags:
  - horror
  - trig
  - hyp trig
methods:
  - work
flags:
  - guide
---


## Question
```math
\int
  \frac
    { \cos(3^x-\pi/3) + \cos(3^x+\pi/3) }
    { \sinh(x+\pi/3)+ \cosh(x-\pi/3) }
\ dx
```


## Hints

### 1
You’ll need angle addition formulae for this one.

### 2
Remember you can write $\sinh{x}$ and $\cosh{x}$ in terms of $e^x$.

### 3
Trust in the process, and a lot of things will cancel out...


## Answer
```math
e^{\pi/3}\sin\left(e^{x}\right)-c
```


## Solution

### Reshape
Let’s start by expanding the numerator:

```math
\begin{align*}
  &\ \cos\left(e^{x}-\frac{\pi}{3}\right)+\cos\left(e^{x}+\frac{\pi}{3}\right)
  \\ =&\ \left(\cos\left(e^{x}\right)\cos\left(\pi/3\right)+\sin\left(e^{x}\right)\sin\left(\pi/3\right)\right)+\left(\cos\left(e^{x}\right)\cos\left(\pi/3\right)-\sin\left(e^{x}\right)\sin\left(\pi/3\right)\right)
\end{align*}
```

Notice both brackets contain like terms, and when we combine them, the $\sin$ products cancel out!

```math
= 2\cos\left(e^{x}\right)\cos\left(\pi/3\right)
```

Now let’s expand the denominator:

```math
\begin{align*}
  &\ \cosh\left(x+\pi/3\right)-\sinh\left(x+\pi/3\right)
  \\ =&\ \frac{1}{2}\left(e^{\left(x+\pi/3\right)}+e^{-\left(x+\pi/3\right)}\right)-\frac{1}{2}\left(e^{\left(x+\pi/3\right)}-e^{-\left(x+\pi/3\right)}\right)
\end{align*}
```

Again, both brackets contain like terms, and this time the positive powers of $e$ cancel out:

```math
\begin{align*}
  &= \left(\frac{1}{2}e^{\left(x+\pi/3\right)}-\frac{1}{2}e^{\left(x+\pi/3\right)}\right)+\left(\frac{1}{2}e^{-\left(x+\pi/3\right)}+\frac{1}{2}e^{-\left(x+\pi/3\right)}\right)
  \\ &= e^{-\left(x+\pi/3\right)}
\end{align*}
```

Putting it together, our integral is now

```math
\begin{align*}
  &\ \int \frac{2\cos\left(e^{x}\right)\cos\left(\pi/3\right)}{e^{-\left(x+\pi/3\right)}}\ dx
  \\ =&\ 2\cos\left(\pi/3\right)\int \cos\left(e^{x}\right)e^{\left(x+\pi/3\right)}\ dx
  \\ =&\ 2\cdot\frac{1}{2}\int \cos\left(e^{x}\right)e^{x}\cdot e^{\pi/3}\ dx
  \\ =&\ e^{\pi/3}\int e^{x}\cos\left(e^{x}\right)\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  e^x &= t
  \\ e^x\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= e^{\pi/3}\int \cos t\ dt
  \\ &= e^{\pi/3}\sin t
  \\ &= e^{\pi/3}\sin\left(e^{x}\right)-c
\end{align*}
```
