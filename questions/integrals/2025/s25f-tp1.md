---
topic: integrals
title: cirrus
desc: 
date: 2025 March 8
tags:
  - frac
  - trig
  - exp
methods:
  - spot
---


## Question
```math
\int
  \frac
    { \cos{x} + \sin{x} }
    { e^{-x} \cos^2{x} }
\ dx
```


## Hints

### 1
$e^{-x}$ is quite nasty.

### 2
Does $\cos^2{x}$ in the denominator remind you of anything?

### 3
You can’t integrate $e^x/\sin{x}$, so you’ll need to spot a trick.


## Answer
```math
\frac{e^{x}}{\cos x}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{\cos x+\sin x}{e^{-x}\cos^{2}x}\ dx
  \\ =&\ \int \frac{\cos x+\sin x}{e^{-x}\cos^{2}x}\cdot\frac{e^{x}}{e^{x}}\ dx
  \\ =&\ \int \frac{e^{x}\left(\cos x-\left(-\sin x\right)\right)}{\cos^{2}x}\ dx
\end{align*}
```

### Inverse Quotient Rule
```math
\begin{align*}
  \frac{d}{dx}\left(\frac{e^{x}}{\cos x}\right)
    &= \frac{e^{x}\cos x-e^{x}\left(-\sin x\right)}{\cos^{2}x}
  \\ \Rightarrow \int \frac{e^{x}\left(\cos x-\left(-\sin x\right)\right)}{\cos^{2}x}\ dx
    &= \frac{e^{x}}{\cos x}-c
\end{align*}
```
