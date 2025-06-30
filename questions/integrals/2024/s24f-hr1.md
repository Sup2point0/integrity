---
topic: integrals
title: workable
desc: 'Warning: this is long.'
date: 2024 December 13
difficulty: incline
tags:
  - dread
  - poly
methods:
  - work
  - long
  - partials
---


## Question
```math
\int \left(1-2x^{-1}-3x^{-2}\right)^{-2}\ dx
```


## Hints

You’re on your own here.


## Answer
```math
x+\frac{135}{32}\ln\left(x-3\right)-\frac{81}{16\left(x-3\right)}-\frac{7}{32}\ln\left(x+1\right)-\frac{1}{16\left(x+1\right)}-c
```


## Solution

### Clean
```math
\begin{align*}
  &= \int \left(1-2x^{-1}-3x^{-2}\right)^{-2}\ dx
  \\ &= \int \left(1-\frac{2}{x}-\frac{3}{x^{2}}\right)^{-2}\ dx
  \\ &= \int \left(\frac{x^{2}-2x-3}{x^{2}}\right)^{-2}\ dx
  \\ &= \int \left(\frac{x^{2}}{\left(x-3\right)\left(x+1\right)}\right)^{2}\ dx
  \\ &= \int \frac{x^{4}}{\left(x-3\right)^{2}\left(x+1\right)^{2}}\ dx
\end{align*}
```

### Polynomial Division
```math
\begin{align*}
  &\ \left(x-3\right)^{2}\left(x+1\right)^{2}
  \\ =&\ \left(x^{2}-6x+9\right)\left(x^{2}+2x+1\right)
  \\ =&\ x^{4}+2x^{3}+x^{2}-6x^{3}-12x^{2}-6x+9x^{2}+18x+9
  \\ =&\ x^{4}-4x^{3}-2x^{2}+12x+9
\end{align*}
```

```math
\begin{align*}
  &\Rightarrow \int \frac{\left(x-3\right)^{2}\left(x+1\right)^{2}-\left(-4x^{3}-2x^{2}+12x+9\right)}{\left(x-3\right)^{2}\left(x+1\right)^{2}}\ dx
  \\ &= \int 1+\frac{4x^{3}+2x^{2}-12x-9}{\left(x-3\right)^{2}\left(x+1\right)^{2}}\ dx
\end{align*}
```

### Partial Fractions
```math
\begin{align*}
  \frac{4x^{3}+2x^{2}-12x-9}{\left(x-3\right)^{2}\left(x+1\right)^{2}} &= \frac{p}{x-3}+\frac{q}{\left(x-3\right)^{2}}+\frac{r}{x+1}+\frac{s}{\left(x+1\right)^{2}}
  \\ 4x^{3}+2x^{2}-12x-9 &= p\left(x-3\right)\left(x+1\right)^{2}+q\left(x+1\right)^{2}+r\left(x-3\right)^{2}\left(x+1\right)+s\left(x-3\right)^{2}
\end{align*}
```

Let $x = 3$:

```math
\begin{align*}
  4\cdot3^{3}+2\cdot3^{2}-12\cdot3-9 &= 0+q\left(3+1\right)^{2}+0+0
  \\ 16q &= 81
  \\ q &= \frac{81}{16}
\end{align*}
```

Let $x = -1$:

```math
\begin{align*}
  -4+2+12-9 &= 0+0+0+s\left(-1-3\right)^{2}
  \\ 16s &= 1
  \\ s &= \frac{1}{16}
\end{align*}
```

Equate coefficients of $x^3$:

```math
\begin{align*}
  4 &= p+r
  \\ r &= 4-p
\end{align*}
```

Equate coefficients of $x^0$ (constant):

```math
\begin{align*}
  -9 &= -3p+q+9r+9s
  \\ 3p-9\left(4-p\right) &= 9+\frac{81}{16}+9\cdot\frac{1}{16}
  \\ 12p &= 9+\frac{81}{16}+\frac{9}{16}+36
  \\ p &= \frac{135}{32}
\end{align*}
```

```math
\begin{align*}
  \Rightarrow r &= 4-\frac{135}{32}
  \\  &= -\frac{7}{32}
\end{align*}
```

So we have $p=\frac{135}{32}, q=\frac{81}{16}, r=-\frac{7}{32}, s=\frac{1}{16}$

### Solve
```math
\begin{align*}
  &= \int dx+\int \frac{p}{x-3}+\frac{q}{\left(x-3\right)^{2}}+\frac{r}{x+1}+\frac{s}{\left(x+1\right)^{2}}\ dx
  \\ &= x+\int \frac{135}{32\left(x-3\right)}+\frac{81}{16\left(x-3\right)^{2}}-\frac{7}{32\left(x+1\right)}+\frac{1}{16\left(x+1\right)^{2}}\ dx
  \\ &= x+\frac{135}{32}\ln\left(x-3\right)-\frac{81}{16\left(x-3\right)}-\frac{7}{32}\ln\left(x+1\right)-\frac{1}{16\left(x+1\right)}-c
\end{align*}
```
