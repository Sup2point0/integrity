---
topic: integrals
title: hypertrauma
desc: 
date: 2025 March 17
tags:
  - frac
  - hyp trig
  - complex
methods:
  - speed
---


## Question
```math
\int
  \frac
    { \sinh(ix) \cosh(ix) }
    { \tanh(ix) \operatorname{sech}(ix) }
\ dx
```


## Hints

### 1
What’s the definition of $\sin(x)$?

### 2
What’s the definition of $\sin(x)$ in terms of $\sinh(x)$?

### 3
How can you get rid of all the $i$-s?


## Answer
```math
\sin x-\frac{1}{3}\left(\sin x\right)^{3}-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{\sinh\left(ix\right)\cosh\left(ix\right)}{\tanh\left(ix\right)\operatorname{sech}\left(ix\right)}\ dx
  \\ =&\ \int \frac{i\sin\left(x\right)\cos\left(x\right)}{i\tan\left(x\right)\sec\left(x\right)}\ dx
  \\ =&\ \int \frac{\sin\left(x\right)\cos\left(x\right)}{\tan\left(x\right)\sec\left(x\right)}\ dx
  \\ =&\ \int \sin\left(x\right)\cos\left(x\right)\cdot\frac{\cos\left(x\right)}{\sin\left(x\right)}\cdot\cos\left(x\right)\ dx
  \\ =&\ \int \cos\left(x\right)^{3}\ dx
  \\ =&\ \int \left(\cos x\right)\left(1-\sin^{2}x\right)\ dx
  \\ =&\ \int \cos x-\cos x\sin^{2}x\ dx
  \\ =&\ \sin x-\frac{1}{3}\left(\sin x\right)^{3}-c
\end{align*}
```
