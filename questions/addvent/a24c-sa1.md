---
topic: addvent
title: Day 11
desc: 
date: 2024 December 17
tags:
  - algebra
methods:
  - factorise
---


## Question

Suppose a 16-year-old is lying down in a snow field, peacefully drawing snow angels.

They have arms of length $r$ and legs of length $s$, where $r$ and $s$ are integers. $r + s$ is less than their age, and their legs are, in fact, longer than their arms.

They cast their arms and legs around in circular motions, with each arm drawing out an area of $r/2$ and each leg $s/2$.

Magically, it turns out that if you double the total area they’ve drawn and add their age to it, you get exactly the product $rs$.

<strong>Can you find the total area they drew?</strong>


## Hints

### 1
What is the total area they drew out in terms of $r$ and $s$?

### 2
Set up an equation involving $r$ and $s$.

### 3
$r$ and $s$ are integers!


## Answer

$13$


## Solution

Let’s distil all the wordy information in the question into mathematical relationships.

We’re given that their age is $16$, so we have $r + s < 16$. Since their legs are longer than their arms, we also have $r < s$.

Assuming the 16-year-old has 2 arms and 2 legs, the total area they draw is given by $2 \times \frac{r}{2} + 2 \times \frac{s}{2} = r + s$.

We know that if we double this and add their age $(16)$ to it we get $rs$.

```math
2(r + s) + 16 = rs
```

Expanding out and rearranging:

```math
\begin{align*}
  2r + 2s + 16 &= rs
  \\        16 &= rs - 2r - 2s
\end{align*}
```

We can now factorise this (also known as *completing the rectangle*) as

```math
\begin{align*}
     (r - 2)(s - 2) - 4 &= 16
  \\ (r - 2)(s - 2) &= 20
\end{align*}
```

This is helpful because we’re given that $r$ and $s$ are integers – which means $r - 2$ and $s - 2$ are integers too. We know that they multiply to give $20$, so $r - 2$ and $s - 2$ must be factors of $20$.

Therefore, we can deduce a set of solutions for $r$ and $s$ by considering the factors of 20. Since $r < s$ we only need to consider the factors one way round.

| $r - 2$ | $s - 2$ | $r$ | $s$ |
| :------ | :------ | :-- | :-- |
| 1 | 20 | 3 | 22 |
| 2 | 10 | 4 | 12 |
| 4 | 5 | 6 | 7 |

Knowing that $r + s < 16$ we see the only valid solution is $r = 6, s = 7$.

Hence the total area is $r + s = 6 + 7 = 13$.
