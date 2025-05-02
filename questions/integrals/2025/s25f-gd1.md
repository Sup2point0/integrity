---
topic: integrals
title: wishes
desc: 
date: 2025 February 26
tags:
 - poly
  - sqrt
  - inverse trig
methods:
  - sub
---


## Question
```math
\int
  \frac{1}{
    2x^{3/2} - 2x + x^{1/2}
  }
  \left[
    2 \tan^{-1}\left(
      2\sqrt{x}-1
    \right)
  \right]^2
\ dx
```


## Hints

### 1
What does $\sqrt{x}$ differentiate to?

### 2
What does $2\sqrt{x}$ square to?

### 3
What does the derivative of $\tan^{-1}{x}$ look like?


## Answer
```math
\frac{8}{3}\tan^{-1}\left(2\sqrt{x}-1\right)^{3}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{1}{2x^{3/2}-2x+x^{1/2}}\left[2\tan^{-1}\left(2\sqrt{x}-1\right)\right]^{2}\ dx
  \\ =&\ \int \frac{1}{\sqrt{x}\left(2x-2\sqrt{x}+1\right)}\left[2\tan^{-1}\left(2\sqrt{x}-1\right)\right]^{2}\ dx
\end{align*}
```

### Substitute (1)
```math
\begin{align*}
  2\sqrt{x}-1 &= t
  \\ \frac{1}{\sqrt{x}}\ dx &= dt
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  &= \int \frac{1}{2x-2\sqrt{x}+1}\left(2\tan^{-1}t\right)^{2}\ dt
  \\ &= \int \frac{2}{4x-4\sqrt{x}+2}\left(2\tan^{-1}t\right)^{2}\ dt
  \\ &= 2\int \frac{1}{\left(2\sqrt{x}\right)^{2}-2\left(2\sqrt{x}\right)+1+1}\left(2\tan^{-1}t\right)^{2}\ dt
  \\ &= 2\int \frac{1}{\left(2\sqrt{x}-1\right)^{2}+1}\left(2\tan^{-1}t\right)^{2}\ dt
  \\ &= 2\int \frac{1}{t^{2}+1}\left(2\tan^{-1}t\right)^{2}\ dt
  \\ &= 8\int \frac{1}{1+t^{2}}\left(\tan^{-1}t\right)^{2}\ dt
\end{align*}
```

### Substitute (2)
```math
\begin{align*}
  \tan^{-1}t &= v
  \\ \frac{1}{1+t^{2}}\ dt &= dv
\end{align*}
```

### Solve (2)
```math
\begin{align*}
  &= 8\int v^{2}\ dv
  \\ &= \frac{8}{3}v^{3}
  \\ &= \frac{8}{3}\left(\tan^{-1}t\right)^{3}
  \\ &= \frac{8}{3}\tan^{-1}\left(2\sqrt{x}-1\right)^{3}-c
\end{align*}
```
