---
topic: integrals
title: fiver
desc: 
date: 2025 February 14
difficulty: incline
tags:
  - poly
methods:
  - tough
  - spot
  - sub
---


## Question
```math
\int
  \frac
    { (x^5 + 1)^4 }
    { x }
  \left(
    x \left(
      x^5 + 1
    \right)^5
    + x
  \right)^5
\ dx
```


## Hints

### 1
What substitution might you make?

### 2
What derivative would you need on the outside to make that substitution?

### 3
What can factorise out from the large bracket?


## Answer
```math
\frac{1}{150}\left(\left(x^{5}+1\right)^{5}+1\right)^{6}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{\left(x^{5}+1\right)^{4}}{x}\left(x\left(x^{5}+1\right)^{5}+x\right)^{5}\ dx
  \\ =&\ \int \frac{\left(x^{5}+1\right)^{4}}{x}\left[x\left(\left(x^{5}+1\right)^{5}+1\right)\right]^{5}\ dx
  \\ =&\ \int x^{4}\left(x^{5}+1\right)^{4}\left[\left(x^{5}+1\right)^{5}+1\right]^{5}\ dx
\end{align*}
```

### Substitute (1)
```math
\begin{align*}
  x^{5}+1 &= t
  \\ 5x^{4}\ dx &= dt
\end{align*}
\\ \Rightarrow \frac{1}{5}\int t^{4}\left(t^{5}+1\right)^{5}\ dt
```

### Substitute (2)
```math
\begin{align*}
  t^{5}+1 &= v
  \\ 5t^{4}\ dt &= dv
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \frac{1}{25}\int v^{5}\ dv
  \\ &= \frac{1}{150}v^{6}
  \\ &= \frac{1}{150}\left(t^{5}+1\right)^{6}
  \\ &= \frac{1}{150}\left(\left(x^{5}+1\right)^{5}+1\right)^{6}-c
\end{align*}
```
