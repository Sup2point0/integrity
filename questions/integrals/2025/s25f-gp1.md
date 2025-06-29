---
topic: integrals
title: magpie
desc: 
date: 2025 June 12
tags:
  - arctrig
methods:
  - acc
  - parts
---


## Question
```math
\int
  x \arcsin \left(
    x^{2/3}
  \right)
\ dx
```


## Hints

### 1
You’ll defo need parts at some point.

### 2
You’ll also defo need a substitution at some point.

### 3
Either order works.


## Answer
```math
\frac{1}{2}x^{2}\arcsin\left(x^{2/3}\right)+\frac{1}{2}\sqrt{1-x^{4/3}}-\frac{1}{6}\left(1-x^{4/3}\right)^{3/2}-c
```


## Solution

### Parts
```math
\begin{align*}
      f &= \arcsin\left(x^{2/3}\right) \quad&\quad g' &= x
  \\ f' &= \frac{1}{\sqrt{1-\left(x^{2/3}\right)^{2}}}\cdot\frac{2}{3}x^{-1/3} \quad&\quad g &= \frac{1}{2}x^{2}
  \\ &= \frac{2}{3x^{1/3}\sqrt{1-x^{4/3}}}
\end{align*}
```

### Simplify
```math
\begin{align*}
  &\ fg-\int f'g\ dx
  \\ =&\ \frac{1}{2}x^{2}\arcsin\left(x^{2/3}\right)-\int \frac{1}{2}x^{2}\cdot\frac{2}{3x^{1/3}\sqrt{1-x^{4/3}}}\ dx
  \\ =&\ \frac{1}{2}x^{2}\arcsin\left(x^{2/3}\right)-\frac{1}{3}\int \frac{x^{5/3}}{\sqrt{1-x^{4/3}}}\ dx
  \\ =&\ \frac{1}{2}x^{2}\arcsin\left(x^{2/3}\right)-\frac{1}{3}\int \frac{x^{4/3}\cdot x^{1/3}}{\sqrt{1-x^{4/3}}}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  1-x^{4/3} &= t
  \\ x^{4/3} &= 1-t
  \\ \frac{4}{3}x^{1/3}\ dx &= -dt
  \\ x^{1/3}\ dx &= -\frac{3}{4}\ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \frac{1}{2}x^{2}\arcsin\left(x^{2/3}\right)-\frac{1}{3}\int \frac{1-t}{\sqrt{t}}\cdot-\frac{3}{4}\ dx
  \\ &= \frac{1}{2}x^{2}\arcsin\left(x^{2/3}\right)+\frac{1}{4}\int \frac{1-t}{\sqrt{t}}\ dx
  \\ &= \frac{1}{2}x^{2}\arcsin\left(x^{2/3}\right)+\frac{1}{4}\int \frac{1}{\sqrt{t}}-\sqrt{t}\ dx
  \\ &= \frac{1}{2}x^{2}\arcsin\left(x^{2/3}\right)+\frac{1}{2}\sqrt{t}-\frac{1}{4}\cdot\frac{2}{3}t^{3/2}
  \\ &= \frac{1}{2}x^{2}\arcsin\left(x^{2/3}\right)+\frac{1}{2}\sqrt{1-x^{4/3}}-\frac{1}{6}\left(1-x^{4/3}\right)^{3/2}-c
\end{align*}
```


## Alternates

### _
You can also substitute first!

```math
\begin{align*}
  x^{2/3} &= t
  \\ x &= t^{3/2}
  \\ dx &= \frac{3}{2}t^{1/2}\ dt
\end{align*}
```

### Parts
```math
\begin{align*}
  &\ \int x\arcsin\left(x^{2/3}\right)\ dx
  \\ =&\ \int t^{3/2}\arcsin\left(t\right)\cdot\frac{3}{2}t^{1/2}\ dt
  \\ =&\ \frac{3}{2}\int t^{2}\arcsin t\ dt
  \\ =&\ \frac{3}{2}\left[\frac{1}{3}t^{3}\arcsin t-\int \frac{1}{3}t^{3}\cdot\frac{1}{\sqrt{1-t^{2}}}\ dt\right]
  \\ =&\ \frac{1}{2}t^{3}\arcsin t-\frac{1}{2}\int \frac{t^{3}}{\sqrt{1-t^{2}}}\ dt
  \\ =&\ \frac{1}{2}t^{3}\arcsin t-\frac{1}{4}\int \frac{t^{2}\cdot2t}{\sqrt{1-t^{2}}}\ dt
\end{align*}
```

### Substitute
```math
\begin{align*}
  1-t^{2} &= v
  \\ t^{2} &= 1-v
  \\ 2t\ dt &= -dv
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \frac{1}{2}t^{3}\arcsin t-\frac{1}{4}\int \frac{1-v}{\sqrt{v}}\cdot-dv
  \\ &= \frac{1}{2}t^{3}\arcsin t+\frac{1}{4}\int \frac{1}{\sqrt{v}}-\sqrt{v}\ dv
  \\ &= \frac{1}{2}t^{3}\arcsin t+\frac{1}{2}\sqrt{v}-\frac{1}{4}\cdot\frac{2}{3}v^{3/2}
  \\ &= \frac{1}{2}t^{3}\arcsin t+\frac{1}{2}\sqrt{1-t^{2}}-\frac{1}{6}\left(1-t^{2}\right)^{3/2}
  \\ &= \frac{1}{2}x^{2}\arcsin\left(x^{2/3}\right)+\frac{1}{2}\sqrt{1-x^{4/3}}-\frac{1}{6}\left(1-x^{4/3}\right)^{3/2}-c
\end{align*}
```
