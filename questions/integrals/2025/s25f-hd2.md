---
topic: integrals
title: azimuth
desc: 
date: 2025 March 9
difficulty: incline
tags:
  - definite
  - poly
  - series
methods:
  - spot
---


## Question
```math
\int_{0}^{1/2}\frac{1-\sqrt{x}}{2}\left(x^{1/2}+x+x^{3/2}+x^{2}+...\right)\ dx
```


## Hints

### 1
What values does $x$ take?

### 2
How else can you write the infinite sum?

### 3
What’s the relationship between each term in the infinite series?


## Answer
```math
\frac{1}{3\left(\sqrt{2}\right)^{3}}
```


## Solution

### Reshape
```math
\begin{align*}
  &\ x^{1/2}+x+x^{3/2}+x^{2}+...
  \\ =&\ x^{1/2}+x^{2/2}+x^{3/2}+x^{4/2}+...
\end{align*}
```

This is a geometric series with $a = r = x^{1/2}$. Note that our indefinite integral is from $x = 0$ to $x = 1/2$, so $|x| < 1$ for all $x$. This means the series converges, so we can collapse it to the sum of a converging infinite geometric series:

```math
\frac{a}{1-r}=\frac{x^{1/2}}{1-x^{1/2}}
```

### Solve
```math
\begin{align*}
  &\ \int \frac{1-\sqrt{x}}{2}\left(x^{1/2}+x+x^{3/2}+x^{2}+...\right)\ dx
  \\ =&\ \frac{1}{2}\int \left(1-\sqrt{x}\right)\cdot\frac{x^{1/2}}{1-x^{1/2}}\ dx
  \\ =&\ \frac{1}{2}\int \frac{\left(1-\sqrt{x}\right)\sqrt{x}}{1-\sqrt{x}}\ dx
  \\ =&\ \frac{1}{2}\int \sqrt{x}\ dx
  \\ =&\ \frac{1}{2}\cdot\frac{2}{3}x^{3/2}
  \\ =&\ \frac{1}{3}x^{3/2}-c
\end{align*}
```

### Evaluate
```math
\begin{align*}
  &\ \int_{0}^{1/2}\frac{1-\sqrt{x}}{2}\left(x^{1/2}+x+x^{3/2}+x^{2}+...\right)\ dx
  \\ =&\ \frac{1}{3}\left[x^{3/2}\right]_{0}^{1/2}
  \\ =&\ \frac{1}{3}\left(\frac{1}{2}\right)^{3/2}-0
  \\ =&\ \frac{1}{3\left(\sqrt{2}\right)^{3}}
\end{align*}
```
