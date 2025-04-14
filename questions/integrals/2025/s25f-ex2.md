---
topic: integrals
title: hydraulic
desc: 
date: 2025 February 8
tags:
  - sqrt
  - exp
methods:
  - spot
---


## Question
```math
\int \sqrt{e^{6x}-e^{9x}}\ dx
```


## Hints

### 1
Starts with “f” and rhymes with <em>tractorise</em>.


## Answer
```math
-\frac{2}{9}\left(1-e^{3x}\right)^{3/2}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \sqrt{e^{6x}-e^{9x}}\ dx
  \\ =&\ \int \sqrt{e^{6x}\left(1-e^{3x}\right)}\ dx
  \\ =&\ \int e^{3x}\sqrt{1-e^{3x}}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  1-e^{3x} &= t
  \\ -3e^{3x}\ dx &= dt
  \\ dx &= -\frac{1}{3}e^{3x}\ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= -\frac{1}{3}\int \sqrt{t}\ dt
  \\ &= -\frac{1}{3}\cdot\frac{2}{3}t^{3/2}
  \\ &= -\frac{2}{9}\left(1-e^{3x}\right)^{3/2}-c
\end{align*}
```
