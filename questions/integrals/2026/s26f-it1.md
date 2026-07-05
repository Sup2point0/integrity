---
topic: integrals
title: carrot
desc:  I feel the oxidation from within
date:  2026 July 5
difficulty: chaos
tags:
  - horror
  - limit
  - prod
  - trig
methods:
  - induction
  - long
---


## Question
```math
\lim_{n\to\infin}\int 2^{n}\sin\left(x\right)\sin\left(\frac{1}{2^{n}}\cos x\right)\prod_{k=0}^{n}\cos\left(\frac{1}{2^{k}}\cos x\right)\ dx
```


## Hints

### 1
Ignore the limit, and see how you can manipulate the integrand.

### 2
Constructs like factorials ($x!$), summations ($\sum$) and products ($\prod$) are really just [syntactic sugar<sup>↗</sup>](https://en.wikipedia.org/wiki/Syntactic_sugar).

### 3
A key consequence is that you can ‘unwrap’ the syntactic sugar yourself: $n! = n \cdot (n-1)!$

### 4
$\prod$ are just a long chain of multiplications, just like factorials.

### 5
Use the fact that

```math
\prod_{n=0}^{k} f(n) \ = \ f(k) \cdot \prod_{n=0}^{k-1} f(n)
```


## Answer
```math
\frac{1}{4}\cos\left(2\cos x\right)-c
```


## Solution

### Pull Out
```math
\begin{align*}
  &\ \lim_{n\to\infin}\int 2^{n}\sin\left(x\right)\sin\left(\frac{1}{2^{n}}\cos x\right)\prod_{k=0}^{n}\cos\left(\frac{1}{2^{k}}\cos x\right)\ dx
  \\ =&\ \lim_{n\to\infin}\left[2^{n}\int \sin\left(x\right)\sin\left(\frac{1}{2^{n}}\cos x\right)\prod_{k=0}^{n}\cos\left(\frac{1}{2^{k}}\cos x\right)\ dx\right]
  \\ =&\ \lim_{n\to\infin}\left[2^{n}\int \sin\left(x\right)\sin\left(\frac{1}{2^{n}}\cos x\right)\cos\left(\frac{1}{2^{n}}\cos x\right)\prod_{k=0}^{n-1}\cos\left(\frac{1}{2^{k}}\cos x\right)\ dx\right]
  \\ =&\ \lim_{n\to\infin}\left[2^{n-1}\int \sin\left(x\right)\cdot2\sin\left(\frac{1}{2^{n}}\cos x\right)\cos\left(\frac{1}{2^{n}}\cos x\right)\cdot\prod_{k=0}^{n-1}\cos\left(\frac{1}{2^{k}}\cos x\right)\ dx\right]
\end{align*}
```

### Induction on Trigonometric Identities
Using $2\sin(x)\cos(x) = \sin(2x)$:

```math
\begin{align*}
  &= \lim_{n\to\infin}\left[2^{n-1}\int \sin\left(x\right)\cdot \textcolor{#4d9dcd}{2\sin\left(\frac{1}{2^{n}}\cos x\right)\cos\left(\frac{1}{2^{n}}\cos x\right)}\cdot\prod_{k=0}^{n-1}\cos\left(\frac{1}{2^{k}}\cos x\right)\ dx\right]
  \\ &= \lim_{n\to\infin}\left[2^{n-1}\int \sin\left(x\right)\textcolor{#4d9dcd}{\sin\left(\frac{1}{2^{\left(n-1\right)}}\cos x\right)}\prod_{k=0}^{n-1}\cos\left(\frac{1}{2^{k}}\cos x\right)\ dx\right]
\end{align*}
```

Repeating inductively for each term in the product...

```math
\begin{align*}
  &= 2^{\textcolor{#4d9dcd}{n-2}}\int \sin\left(x\right)\sin\left(\frac{1}{2^{\textcolor{#4d9dcd}{n-2}}}\cos x\right)\prod_{k=0}^{\textcolor{#4d9dcd}{n-2}}\cos\left(\frac{1}{2^{k}}\cos x\right)\ dx
  \\ &= 2^{\textcolor{#4d9dcd}{n-3}}\int \sin\left(x\right)\sin\left(\frac{1}{2^{\textcolor{#4d9dcd}{n-3}}}\cos x\right)\prod_{k=0}^{\textcolor{#4d9dcd}{n-3}}\cos\left(\frac{1}{2^{k}}\cos x\right)\ dx
  \\ & \quad ...
  \\ &= 2^{\textcolor{#4d9dcd}{0}}\int \sin\left(x\right)\sin\left(\frac{1}{2^{\textcolor{#4d9dcd}{0}}}\cos x\right)\prod_{k=0}^{\textcolor{#4d9dcd}{0}}\cos\left(\frac{1}{2^{k}}\cos x\right)\ dx
  \\ &= \int \sin\left(x\right)\sin\left(\cos x\right)\cdot\left.\cos\left(\frac{1}{2^{k}}\cos x\right)\right|_{k=0}\ dx
  \\ &= \int \sin\left(x\right)\sin\left(\cos x\right)\cdot\cos\left(\frac{1}{2^{0}}\cos x\right)\ dx
  \\ &= \int \sin\left(x\right)\sin\left(\cos x\right)\cos\left(\cos x\right)\ dx
  \\ &= -\frac{1}{2}\int -\sin\left(x\right)\cdot2\sin\left(\cos x\right)\cos\left(\cos x\right)\ dx
  \\ &= -\frac{1}{2}\int -\sin\left(x\right)\sin\left(2\cos x\right)\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \cos{x} &= t
  \\ -\sin x\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= -\frac{1}{2}\int \sin2t\ dt
  \\ &= \frac{1}{4}\int -2\sin2t\ dt
  \\ &= \frac{1}{4}\cos2t
  \\ &= \frac{1}{4}\cos\left(2\cos x\right)-c
\end{align*}
```
