---
topic: integrals
title: hope for the best
desc: 
date: 2025 March 27
difficulty: manifold
tags:
  - scare
  - exp
methods:
  - sub
---


## Question
```math
\int
  \frac
    { x+1 }
    { x }
  (xe^x)^{9699}
\ dx
```


## Hints

### 1
What substitution might you make?

### 2
How might you manipulate the outside so it facilitates that substitution?

### 3
Could you take out an $xe^x$ from the $9699$ of them you have?


## Answer
```math
\frac{1}{9699}\left(xe^{x}\right)^{9699}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{x+1}{x}\left(xe^{x}\right)^{9699}\ dx
  \\ =&\ \int \frac{x+1}{x}\left(xe^{x}\right)^{9698}\cdot xe^{x}\ dx
  \\ =&\ \int e^{x}\left(x+1\right)\left(xe^{x}\right)^{9698}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  xe^{x} &= t
  \\ e^{x}\left(x+1\right)\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int t^{9698}\ dt
  \\ &= \frac{1}{9699}t^{9699}
  \\ &= \frac{1}{9699}\left(xe^{x}\right)^{9699}-c
\end{align*}
```
