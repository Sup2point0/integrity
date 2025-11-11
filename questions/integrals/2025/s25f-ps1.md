---
topic: integrals
title: one of the most integral I’ve ever seen
desc: 
date: 2025 May 15
difficulty: incline
tags:
  - elite
methods:
  - troll
---


## Question
```math
\int
  \mathbb{E} \left[
    \operatorname{Po} \left( x^2 \right)
  \right]
\ dx
```


## Hints

### 1
$\operatorname{Po}(\lambda)$ here represents a Poisson distribution.

### 2
What’s the expected value of a Poisson distribution with parameter $\lambda$?

### 3
If you haven’t done statistics before (or haven’t done it in a while), it’s $\lambda$.


## Answer
```math
\frac{1}{3}x^{3}-c
```


## Solution

The expected value (mean) of a Poisson distribution with parameter $\lambda$ is just $\lambda$, so

```math
\begin{align*}
  &\ \int \mathbb{E} \left[\operatorname{Po} \left(x^2\right)\right]\ dx
  \\ =&\ \int x^{2}\ dx
  \\ =&\ \frac{1}{3}x^{3}-c
\end{align*}
```

Thanks to [syan212<sup>↗</sup>](https://github.com/syan212) for pointing out an error in the solution!
