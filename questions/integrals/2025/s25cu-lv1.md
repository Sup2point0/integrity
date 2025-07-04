---
topic: integrals
title: leverage
desc: 
date: 2025 March 20
difficulty: incline
tags:
  - trig
methods:
  - archain
---


## Question
```math
\int
  \frac{1}{x^2}
  \sec\left( 1 - \frac{1}{x} \right)
  \tan\left( \frac{x-1}{x} \right)
\ dx
```


## Hints

### 1
How can you rewrite the expression within $\tan()$?


## Answer
```math
\sec\left(1-\frac{1}{x}\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{1}{x^{2}}\sec\left(1-\frac{1}{x}\right)\tan\left(\frac{x-1}{x}\right)\ dx
  \\ =&\ \int \frac{1}{x^{2}}\sec\left(1-\frac{1}{x}\right)\tan\left(\frac{x}{x}-\frac{1}{x}\right)\ dx
  \\ =&\ 
\end{align*}
```

### Substitute
```math
\begin{align*}
  1-\frac{1}{x} &= t
  \\ \frac{1}{x^{2}}\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int \sec t\tan t\ dt
  \\ &= \sec t
  \\ &= \sec\left(1-\frac{1}{x}\right)-c
\end{align*}
```
