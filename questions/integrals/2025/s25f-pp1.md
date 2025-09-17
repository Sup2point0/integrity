---
topic: integrals
title: aggregrate
desc: 
date: 2025 January 21
difficulty: manifold
tags:
  - poly
methods:
  - long
  - work
  - partials
---


## Question
```math
\int
  \frac
    {480}
    {x^5 - 17x^3 + 16x}
\ dx
```


## Hints

### 1
STARTS WITH <strong>F</strong> AND RHYMES WITH *TRACTORISE*


## Answer
```math
30\ln\left|x\right|-16\ln\left|x^{2}-1\right|+\ln\left|x^{2}-16\right|-c
```


## Solution

### Factorise
```math
\begin{align*}
  &\ \int \frac{480}{x^{5}-17x^{3}+16x}\ dx
  \\ =&\ \int \frac{480}{x\left(x^{4}-17x^{2}+16\right)}\ dx
  \\ =&\ \int \frac{480}{x\left(x-1\right)\left(x^{3}+x^{2}-16x-16\right)}\ dx
  \\ =&\ \int \frac{480}{x\left(x-1\right)\left(x+1\right)\left(x^{2}-16\right)}\ dx
  \\ =&\ \int \frac{480}{x\left(x-1\right)\left(x+1\right)\left(x-4\right)\left(x+4\right)}\ dx
\end{align*}
```

### Partials
```math
\begin{align*}
  \frac{480}{x\left(x-1\right)\left(x+1\right)\left(x-4\right)\left(x+4\right)} &= \frac{p}{x}+\frac{q}{x-1}+\frac{r}{x+1}+\frac{s}{x-4}+\frac{t}{x+4}
  \\ 480 &= p\left(x^{2}-1\right)\left(x^{2}-16\right)+qx\left(x+1\right)\left(x^{2}-16\right)+rx\left(x-1\right)\left(x^{2}-16\right)
    \\ & +sx\left(x^{2}-1\right)\left(x+4\right)+tx\left(x^{2}-1\right)\left(x-4\right)
\end{align*}
```

Let $x = 0$:

```math
\begin{align*}
  480 &= p\left(0-1\right)\left(0-16\right)+0+0+0+0
  \\ 480 &= 16p
  \\ p &= 30
\end{align*}
```

Let $x = 1$:

```math
\begin{align*}
  480 &= 0+q\left(1\right)\left(1+1\right)\left(1-16\right)+0+0+0
  \\ 480 &= -30q
  \\ q &= -16
\end{align*}
```

Let $x = -1$:

```math
\begin{align*}
  480 &= 0+0+r\left(-1\right)\left(-1-1\right)\left(1-16\right)+0+0
  \\ 480 &= -30r
  \\ r &= -16
\end{align*}
```

Let $x = 4$:

```math
\begin{align*}
  480 &= 0+0+0+s\left(4\right)\left(16-1\right)\left(4+4\right)+0
  \\ 480 &= 480s
  \\ s &= 1
\end{align*}
```

Let $x = -4$:

```math
\begin{align*}
  480 &= 0+0+0+0+t\left(-4\right)\left(16-1\right)\left(-4-4\right)
  \\ 480 &= 480t
  \\ t &= 1
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ \int \frac{480}{x\left(x-1\right)\left(x+1\right)\left(x-4\right)\left(x+4\right)}\ dx
  \\ =&\ \int \frac{30}{x}-\frac{16}{x-1}-\frac{16}{x+1}+\frac{1}{x-4}+\frac{1}{x+4}\ dx
  \\ =&\ 30\ln\left|x\right|-16\ln\left|x-1\right|-16\ln\left|x+1\right|+\ln\left|x-4\right|+\ln\left|x+4\right|
  \\ =&\ 30\ln\left|x\right|-16\ln\left|x^{2}-1\right|+\ln\left|x^{2}-16\right|-c
\end{align*}
```
