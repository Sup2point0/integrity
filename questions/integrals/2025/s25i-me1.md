---
topic: integrals
title: unfazed!
desc: 
date: 2025 January 23
tags:
  - trig
  - exp
methods:
  - tough
  - spot
---


## Question
```math
\int
  \frac
    {\sin{x}}
    {\left( e^x+\sin{x} \right) + \left( e^x+\cos{x} \right)}
\ dx
```


## Hints

### 1
Tangent half-angle substitution won’t work here.

### 2
Nor will any trigonometric or exponential substitution.

### 3
Maybe it’s not substitution?


## Answer
```math
-\frac{1}{2}\ln\left|2+e^{-x}\left(\sin x+\cos x\right)\right|-c
```


## Solution

### Solve
```math
\begin{align*}
  &\ \int \frac{\sin x}{\left(e^{x}+\sin x\right)+\left(e^{x}+\cos x\right)}\ dx
  \\ =&\ \int \frac{\sin x}{2e^{x}+\sin x+\cos x}\ dx
  \\ =&\ \int \frac{\sin x}{2e^{x}+\sin x+\cos x}\cdot\frac{e^{-x}}{e^{-x}}\ dx
  \\ =&\ \int \frac{e^{-x}\sin x}{2+e^{-x}\sin x+e^{-x}\cos x}\ dx
\end{align*}
```

Then note

```math
\begin{align*}
  &\ \frac{d}{dx}\left(2+e^{-x}\sin x+e^{-x}\cos x\right)
  \\ =&\ -e^{-x}\sin x+e^{-x}\cos x-e^{-x}\cos x-e^{-x}\sin x
  \\ =&\ -2e^{-x}\sin x
\end{align*}
```

Hence

```math
\begin{align*}
  &= -\frac{1}{2}\int \frac{-2e^{-x}\sin x}{2+e^{-x}\sin x+e^{-x}\cos x}\ dx
  \\ &= -\frac{1}{2}\ln\left|2+e^{-x}\sin x+e^{-x}\cos x\right|
  \\ &= -\frac{1}{2}\ln\left|2+e^{-x}\left(\sin x+\cos x\right)\right|-c
\end{align*}
```


## Alternates

Thanks to my friend <a target="_blank" href="https://github.com/itechnicals">iTechnical</a> for finding this alternative solution!

```math
\begin{align*}
  &\ \int \frac{\sin x}{\left(e^{x}+\sin x\right)+\left(e^{x}+\cos x\right)}\ dx
  \\ =&\ \frac{1}{2}\int \frac{2\sin x}{2e^{x}+\sin x+\cos x}\ dx
  \\ =&\ \frac{1}{2}\int \frac{2e^{x}+\sin x+\cos x}{2e^{x}+\sin x+\cos x}-\frac{2e^{x}-\sin x+\cos x}{2e^{x}+\sin x+\cos x}\ dx
  \\ =&\ \frac{1}{2}\int 1-\frac{2e^{x}+\cos x-\sin x}{2e^{x}+\sin x+\cos x}\ dx
  \\ =&\ \frac{1}{2}x-\frac{1}{2}\ln\left|2e^{x}+\sin x+\cos x\right|-c
\end{align*}
```
