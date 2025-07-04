---
topic: integrals
title: hyperformant
desc: Messy much
date: 2025 January 23
difficulty: manifold
tags:
  - horror
  - exp
  - sqrt
methods:
  - spot
  - sub
flags:
  - feat
---


## Question
```math
\int
  \frac
    { (2+e^{-x/2})(1-x+e^{-x/2}) }
    { \sqrt{x-e^{-x/2}} }
\ dx
```


## Hints

### 1
The expression inside a $\sqrt{}$ is often a great hint for a substitution.

### 2
When you differentiate $e^{-x/2}$, what comes out?

### 3
How can you write all the terms in terms (heh) of your substitution?


## Answer
```math
\frac{2}{3}\sqrt{x-e^{-x/2}}\left(3-x+e^{-x/2}\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{\left(2+e^{-x/2}\right)\left(1-x+e^{-x/2}\right)}{\sqrt{x-e^{-x/2}}}\ dx
  \\ =&\ \int \frac{1-\left(x-e^{-x/2}\right)}{\sqrt{x-e^{-x/2}}}\cdot2\left(1+\frac{1}{2}e^{-x/2}\right)\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  x-e^{-x/2} &= t
  \\ \left(1+\frac{1}{2}e^{-x/2}\right)\ dx &= dt
\end{align*}
```

### Solve

```math
\begin{align*}
  &= 2\int \frac{1-t}{\sqrt{t}}\ dt
  \\ &= 2\int \frac{1}{\sqrt{t}}-\sqrt{t}\ dt
  \\ &= 4\sqrt{t}-\frac{4}{3}t\sqrt{t}
  \\ &= \frac{4}{3}\sqrt{t}\left(3-t\right)
  \\ &= \frac{4}{3}\sqrt{x-e^{-x/2}}\left(3-\left(x-e^{-x/2}\right)\right)
  \\ &= \frac{2}{3}\sqrt{x-e^{-x/2}}\left(3-x+e^{-x/2}\right)-c
\end{align*}
```
