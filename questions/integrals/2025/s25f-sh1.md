---
topic: integrals
title: jaywalking
desc: 
date: 2025 May 11
tags:
  - horror
  - sqrt
  - trig
  - exp
methods:
  - work
  - sub
  - spot
---


## Question
```math
\int
  \frac
    {
      2x - 2\cos(e^x) - e^x\sin(2e^x) + 2xe^x \sin(e^x)
    } {
      \left( \cos(e^x) - x \right) \sqrt{x - \cos(e^x)}
    }
\ dx
```


## Hints

### 1
$\sin(2e^x)$ is different to all the rest, so expand that out first.

### 2
Starts with “f” and rhymes with <em>tractorise</em>.

### 3
Exactly 2 terms in the numerator have a factor of $x$, and exactly 2 have a factor of $e^x$.

### 4
The same applies for factors of $\sin(x)$ and $\cos(x)$.


## Answer
```math
-4\sqrt{x-\cos\left(e^{x}\right)}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{2x-2\cos\left(e^{x}\right)-e^{x}\sin\left(2e^{x}\right)+2xe^{x}\sin\left(e^{x}\right)}{\left(\cos\left(e^{x}\right)-x\right)\sqrt{x-\cos\left(e^{x}\right)}}\ dx
  \\ =&\ -\int \frac{2x-2\cos\left(e^{x}\right)-2e^{x}\sin\left(e^{x}\right)\cos\left(e^{x}\right)+2xe^{x}\sin\left(e^{x}\right)}{\left(x-\cos\left(e^{x}\right)\right)\sqrt{x-\cos\left(e^{x}\right)}}\ dx
  \\ =&\ -2\int \frac{x-\cos\left(e^{x}\right)-e^{x}\sin\left(e^{x}\right)\cos\left(e^{x}\right)+xe^{x}\sin\left(e^{x}\right)}{\left(x-\cos\left(e^{x}\right)\right)^{3/2}}\ dx
  \\ =&\ -2\int \frac{x-\cos\left(e^{x}\right)-e^{x}\sin\left(e^{x}\right)\left(\cos\left(e^{x}\right)-x\right)}{\left(x-\cos\left(e^{x}\right)\right)^{3/2}}\ dx
  \\ =&\ -2\int \frac{x-\cos\left(e^{x}\right)+e^{x}\sin\left(e^{x}\right)\left(x-\cos\left(e^{x}\right)\right)}{\left(x-\cos\left(e^{x}\right)\right)^{3/2}}\ dx
  \\ =&\ -2\int \frac{\left(1+e^{x}\sin\left(e^{x}\right)\right)\left(x-\cos\left(e^{x}\right)\right)}{\left(x-\cos\left(e^{x}\right)\right)^{3/2}}\ dx
  \\ =&\ -2\int \frac{1+e^{x}\sin\left(e^{x}\right)}{\sqrt{x-\cos\left(e^{x}\right)}}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  x-\cos\left(e^{x}\right) &= t
  \\ 1+e^{x}\sin\left(e^{x}\right)\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= -2\int \frac{1}{\sqrt{t}}\ dt
  \\ &= -4\sqrt{t}
  \\ &= -4\sqrt{x-\cos\left(e^{x}\right)}-c
\end{align*}
```
