---
topic: integrals
title: melatonin
desc: doesn’t look like one that can integrated, innit.
date: 2025 May 12
tags:
  - trig
  - hyp trig
methods:
  - fun
  - parts
flags:
  - feat
---


## Question
```math
\int
  \sin(x) \sinh(x)
\ dx
```


## Hints

### 1
No substitution’s gonna work here.

### 2
What you <em>do</em> know is how to differentiate and integrate trig functions.

### 3
Parts...?

### 4
Couldn’t hurt.


## Answer
```math
\frac{1}{2}\left[\sin\left(x\right)\cosh\left(x\right)-\cos\left(x\right)\sinh\left(x\right)\right]-c
```


## Solution

### Parts (1)
```math
\begin{align*}
      f &= \sin x \quad&\quad g' &= \sinh x
  \\ f' &= \cos x \quad&\quad g &= \cosh x
\end{align*}
```

### Simplify
```math
\begin{align*}
  &\ fg-\int f'g\ dx
  \\ =&\ \sin\left(x\right)\cosh\left(x\right)-\int \cos\left(x\right)\cosh\left(x\right)\ dx
\end{align*}
```

### Parts (2)
```math
\begin{align*}
      p &= \cos x \quad&\quad q' &= \cosh x
  \\ p' &= -\sin x \quad&\quad q &= \sinh x
\end{align*}
```

### Parts Duplication
```math
\begin{align*}
  &= \sin\left(x\right)\cosh\left(x\right)-\left(pq-\int p'q\ dx\right)
  \\ &= \sin\left(x\right)\cosh\left(x\right)-pq+\int p'q\ dx
  \\ \textcolor{#4d9dcd}{\int \sin\left(x\right)\sinh\left(x\right)\ dx}
    &= \sin\left(x\right)\cosh\left(x\right)-\cos\left(x\right)\sinh\left(x\right)-\textcolor{#4d9dcd}{\int \sin\left(x\right)\sinh\left(x\right)\ dx}
  \\ 2\int \sin\left(x\right)\sinh\left(x\right)\ dx
    &= \sin\left(x\right)\cosh\left(x\right)-\cos\left(x\right)\sinh\left(x\right)
  \\ \int \sin\left(x\right)\sinh\left(x\right)\ dx
    &= \frac{1}{2}\left[\sin\left(x\right)\cosh\left(x\right)-\cos\left(x\right)\sinh\left(x\right)\right]-c
\end{align*}
```
