---
topic: integrals
title: day by day
desc: 
date: 2025 June 14
difficulty: manifold
tags:
  - horror
  - poly
  - sqrt
methods:
  - 
---


## Question
```math
\int
  \sqrt{
    x^{183} + 9x^{146} + 27x^{109} + 27x^{72}
  }
\ dx
```


## Hints

### 1
There’s a common power of $x$ here.

### 2
Factorise out a power of $x$.

### 3
This leaves a common base power of $x$.

### 4
$\sqrt{x^4}$ simplifies to $x^2$.


## Answer
```math
\frac{2}{185}\left(x^{37}+3\right)^{5/2}-c
```


## Solution

### Factorise
```math
\begin{align*}
  &\ \int \sqrt{x^{183}+9x^{146}+27x^{109}+27x^{72}}\ dx
  \\ =&\ \int \sqrt{x^{72}\left(x^{111}+9x^{74}+27x^{37}+27\right)}\ dx
  \\ =&\ \int x^{36}\sqrt{x^{111}+9x^{74}+27x^{37}+27}\ dx
  \\ =&\ \int x^{36}\sqrt{\left(x^{37}\right)^{3}+3\cdot3\left(x^{37}\right)^{2}+3\cdot3^{2}\left(x^{37}\right)+3^{3}}\ dx
  \\ =&\ \int x^{36}\sqrt{\left(x^{37}+3\right)^{3}}\ dx
  \\ =&\ \frac{1}{37}\int 37x^{36}\left(x^{37}+3\right)^{3/2}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  x^{37}+3 &= t
  \\ 37x^{36}\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \frac{1}{37}\int t^{3/2}\ dt
  \\ &= \frac{1}{37}\cdot\frac{2}{5}t^{5/2}
  \\ &= \frac{2}{185}\left(x^{37}+3\right)^{5/2}-c
\end{align*}
```
