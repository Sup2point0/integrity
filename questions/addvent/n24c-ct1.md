---
topic: addvent
title: Day 1
desc: A simple classic to get us started.
date: 2024 December 2
tags:
  - sequences
---


## Question

My Christmas tree has $12$ layers. Each layer $n$ has $n$ branches, each of length $n$.

**What is the total length of all branches on my Christmas tree?**


## Hints

### 1
Layer 1 has 1 branch of length 1.
Layer 2 has 2 branches of length 2.

### 2
What is the total length of all branches on layer 3?

### 3
What is the total length of all branches on any layer $n$?


## Answer
650


## Solution

Each layer has $n$ branches of length $n$, so the total length in each layer is $n^2$. Hence the total across all 12 layers is

```math
\begin{align}
  1^1 + 2^2 + 3^3 + \text{...} + 11^{11} + 12^{12}
  \\ &= 1 + 4 + 9 + \text{...} + 121 + 144
  \\ &= 650
\end{align}
```

## Alternatives

We may also recognise this as the sum of $n$ square numbers, which is given by the formula

```math
S_n = \frac{1}{6} n(n + 1)(2n + 1)
```

Hence substituting $n = 12$ we obtain

```math
\begin{align}
  S_12 &= \frac{1}{6} \cdot 12 \cdot 13 \cdot 25
    \\ &= 650
\end{align}
```
