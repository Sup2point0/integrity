---
topic: integrals
title: oh look, constants!
desc: 
date: 2025 January 19
tags:
  - wack
  - series
  - fun
method:
  - care
---


## Question
```math

```


## Hints

### 1

### 2

### 3


## Answer
```math
\underbrace{\int ... \int}_{20}
  ( 20! \, x )
\ dx \, ... \, dx
```


## Solution

Each time we integrate the expression, we raise the power of $x$ by $1$ and divide by the new power.

So iteration 1, the power increases to $2$ and we divide by $2$. Iteration 2, power to $3$, divide by $3$. More generally, on iteration $n$ the power is $n+1$ and we’ve divided by all the positive integers up to $n$. In other words, $n!$

So we end up with

```math
\begin{align*}
  &\ \frac{1}{21}\times\frac{1}{20}\times...\times\frac{1}{3}\times\frac{1}{2}\times20!\times x^{21}
  \\ =&\ \frac{1}{21}x^{21}
\end{align*}
```

But of course, we can’t forget the constants... each time we integrate, we add another constant, and that’ll get integrated too. So...

```math
= \frac{1}{21}x^{21}+\frac{1}{20!}c_{1}x^{20}+\frac{1}{19}c_{2}x^{19}+...\frac{1}{3}c_{16}x^{3}+\frac{1}{2}c_{17}x^{2}+c_{18}x+c_{19}
```

Perfect!


## Alternates

Alternatively, we can just write $P(x)$ to denote any polynomial of degree $20$ or less:

```math
= \frac{1}{21}x^{21}+P\left(x\right)
```
