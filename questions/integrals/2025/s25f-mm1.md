---
topic: integrals
title: metaphoric malapropism
desc: 
date: 2025 May 13
difficulty: manifold
tags:
  - definite
  - combinatorics
methods:
  - fun
---


## Question
```math
\int_{0}^{9}
  { \lceil{x}\rceil \choose \lfloor{x}\rfloor }
\ dx
```


## Hints

### 1
Consider just the interval $0 \leq x \leq 1$.

### 2
What’s $\lfloor x \rfloor$ when $x = 0.1$? What about when $x = 0.9$?

### 3
In the interval $0 \leq x \leq 1$, the integrand remains $\displaystyle{1 \choose 0}$ for any $x$.


## Answer
$45$


## Solution

```math
\begin{align*}
  &\ \int_{0}^{9} { \lceil{x}\rceil \choose \lfloor{x}\rfloor } \ dx
  \\ =&\ \int_{0}^{1} {1 \choose 0}\ dx+\int_{1}^{2} {2 \choose 1}\ dx+\int_{2}^{3} {3 \choose 2}\ dx+...+\int_{8}^{9} {9 \choose 8}\ dx
  \\ =&\ \left[\int_{0}^{1}dx\right]\left[ {1 \choose 0}+ {2 \choose 1}+ {3 \choose 2}+...+ {9 \choose 8}\right]
  \\ =&\ 1\cdot\left[1+2+3+...+9\right]
  \\ =&\ 45
\end{align*}
```


## Alternates

Just for fun, why don’t we generalise it.

```math
\begin{align*}
  &\ \int_{0}^{k} { \lceil{x}\rceil \choose \lfloor{x}\rfloor } \ dx
  \\ =&\ \sum_{n=1}^{k}\int_{n-1}^{n}{n \choose n-1}\ dx
  \\ =&\ \sum_{n=1}^{k}\left[{n \choose 1}\int_{n-1}^{n}\ dx\right]
  \\ =&\ \sum_{n=1}^{k}\left[n\cdot1\right]
  \\ =&\ \sum_{n=1}^{k}n
  \\ =&\ \frac{k\left(k+1\right)}{2}
\end{align*}
```
