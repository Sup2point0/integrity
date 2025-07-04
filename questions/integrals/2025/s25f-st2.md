---
topic: integrals
title: sTaTiSTiCs
desc: 
date: 2025 June 6
difficulty: manifold
tags:
  - definite
  - improper
  - elite
  - horror
  - pi
methods:
  - spot
  - acc
flags:
  - guide
---


## Question
```math
\int_{0}^{\infin}
  \frac
    { \pi^{\lfloor x \rfloor} e^{1-\pi} }
    { {\lceil x-1 \rceil}! }
\ dx
```


## Hints

### 1
What’s the relationship between $\lfloor x \rfloor$ and $\lceil x \rceil$?

### 2
How can you turn one into the other?

### 3
If your integral has only $\lfloor x \rfloor$ or $\lceil x \rceil$, you can turn it into a summation.

### 4
You’ll need the Poisson distribution for this.


## Answer
$e$


## Solution

```math
\begin{align*}
  &\ \int_{0}^{\infty}\frac{\pi^{\lfloor x \rfloor}e^{1-\pi}}{\lceil x-1 \rceil!}\ dx
  \\ =&\ \int_{0}^{\infty}\frac{\pi^{\lfloor x \rfloor}e^{1}e^{-\pi}}{\lceil x-1 \rceil!}\ dx
  \\ =&\ e\int_{0}^{\infty}\frac{\pi^{\lfloor x \rfloor}e^{-\pi}}{\lceil x-1 \rceil!}\ dx
\end{align*}
```

Rounding up a number to $p$ is the same as adding $1$ and rounding down to $p$. So

```math
\begin{align*}
  \lceil x \rceil &= \lfloor{x+1}\rfloor
  \\ \lceil x-1 \rceil &= \lfloor x \rfloor
\end{align*}
```

Which gives

```math
\begin{align*}
  &= e\int_{0}^{\infty}\frac{\pi^{\lfloor x \rfloor}e^{-\pi}}{\lfloor x \rfloor!}\ dx
  \\ &= e\sum_{n=0}^{\infty}\frac{\pi^{x}e^{-\pi}}{x!}
  \\ &= e\sum_{n=0}^{\infty}\frac{\lambda^{x}}{x!}e^{-\lambda} \vert_{\lambda=\pi}
\end{align*}
```

This is the probability density function of a Poisson distribution $\text{Po}(\pi)$. A pdf integrated over the domain of the random variable must equal $1$. Since a Poisson distribution takes values over $x \in \mathbb{N}$, this means the infinite sum converges to $1$.

```math
\begin{align*}
  &= e\cdot1
  \\ &= e
\end{align*}
```
