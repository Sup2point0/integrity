---
topic: integrals
title: rejoice
desc: IT’s FINALLY OVER
date: 2025 January 7
tags:
  - trig
  - fun
methods:
  - spot
  - sub
---


## Question
```math
\int \frac{\sin\left(e^{x}+\frac{\pi}{2}\right)}{\sin\left(e^{x}-\frac{\pi}{2}\right)}\ dx
```


## Hints

What if it wasn’t $e^x$, but just $x$?


## Answer
```math
-x-c
```


## Solution

### Substitute
```math
\begin{align*}
  e^{x}+\frac{\pi}{2} &= t\quad \to\quad e^{x}=t-\frac{\pi}{2}
  \\ e^{x}\ dx &= dt\quad \to\quad dx=\frac{1}{t-\frac{\pi}{2}}\ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ \int \frac{\sin\left(e^{x}+\frac{\pi}{2}\right)}{\sin\left(e^{x}-\frac{\pi}{2}\right)}\ dx
  \\ =&\ \int \frac{\sin t}{\sin\left(t-\pi\right)}\cdot\frac{1}{t-\frac{\pi}{2}}\ dt
  \\ =&\ \int \frac{\sin t}{-\sin t}\cdot\frac{1}{t-\frac{\pi}{2}}\ dt
  \\ =&\ -\int \frac{1}{t-\frac{\pi}{2}}\ dx
  \\ =&\ -\ln\left|t-\frac{\pi}{2}\right|
  \\ =&\ -\ln\left|e^{x}+\frac{\pi}{2}-\frac{\pi}{2}\right|
  \\ =&\ -\ln\left|e^{x}\right|
  \\ =&\ -x-c
\end{align*}
```


## Alternates

We don’t actually have to do the $e^x$ substitution to show the integrand is $-1$.

```math
\frac{\sin\left(e^{x}+\frac{\pi}{2}\right)}{\sin\left(e^{x}-\frac{\pi}{2}\right)}\ dx
```

Since $\sin$ is periodic we can add the same ‘offset’ to both inputs:

```math
\begin{align*}
  &= \frac{\sin\left(e^{x}+\frac{\pi}{2}+\frac{\pi}{2}\right)}{\sin\left(e^{x}+\frac{\pi}{2}-\frac{\pi}{2}\right)}
  \\ &= \frac{\sin\left(e^{x}+\pi\right)}{\sin\left(e^{x}\right)}
  \\ &= \frac{-\sin\left(e^{x}\right)}{\sin\left(e^{x}\right)}
  \\ &= -1
\end{align*}
```

And so we’re left with

```math
\begin{align*}
  &\ \int -1\ dx
  \\ =&\ -x-c
\end{align*}
```
