---
topic: integral
title: awkward silence
desc:  
date:  2026 July 31
difficulty: manifold
tags:
  - e
methods:
  - spot
  - flip
flags:
  - definite
---


## Question
```math
\int_{0}^{1}\frac{e^{-1/x}}{e^{-1/x}+e^{-1/\left(1-x\right)}}\ dx
```


## Hints

### 1
The bounds are helpful.

### 2
The integrand is rotationally symmetric around $(0.5, 0.5)$.

### 3
What happens if you substitute $1-x$?


## Answer
```math
\frac{1}{2}
```


## Solution

### Equivalence
Let

```math
f\left(x\right)=\frac{e^{-1/x}}{e^{-1/x}+e^{-1/\left(1-x\right)}}
```

Then

```math
\begin{align*}
  f\left(1-x\right) &= \frac{e^{-1/\left(1-x\right)}}{e^{-1/\left(1-x\right)}+e^{-1/\left(1-\left(1-x\right)\right)}}
  \\ &= \frac{e^{-1/\left(1-x\right)}}{e^{-1/\left(1-x\right)}+e^{-1/x}}
\end{align*}
```

So

```math
\begin{align*}
  &\ f\left(x\right)\ +f\left(1-x\right)
  \\ =&\ \frac{e^{-1/x}}{e^{-1/x}+e^{-1/\left(1-x\right)}}+\frac{e^{-1/\left(1-x\right)}}{e^{-1/\left(1-x\right)}+e^{-1/x}}
  \\ =&\ \frac{e^{-1/x}+e^{-1/\left(1-x\right)}}{e^{-1/x}+e^{-1/\left(1-x\right)}}
  \\ =&\ 1
\end{align*}
```

### Symmetry
```math
\begin{align*}
  I &= \int_{0}^{1}f\left(x\right)\ dx
  \\ 2I &= \int_{0}^{1}f\left(x\right)\ dx+\int_{0}^{1}f\left(x\right)\ dx
\end{align*}
```

Substitute

```math
\begin{align*}
  1-x &= t
  \\ x &= 1-t
  \\ dx &= -dt
\end{align*}
```

Hence

```math
\begin{align*}
  2I &= \int_{0}^{1}f\left(x\right)\ dx+\int_{1-0}^{1-1}f\left(1-t\right)\cdot-dt
  \\ &= \int_{0}^{1}f\left(x\right)\ dx+\int_{0}^{1}f\left(1-t\right)\ dt
  \\ &= \int_{0}^{1}f\left(x\right)+f\left(1-x\right)\ dx
  \\ &= \int_{0}^{1}dx
  \\ 2I &= 1
  \\ I &= \frac{1}{2}
\end{align*}
```

If you plot the curve, you’ll see it’s one that splits the unit square in half, and so has area $1/2$.

The key is to show that if we approach from both ends ($x$ and $1-x$), the $y$-values have a mean of $1/2$, or equivalently, add up to $1$.
