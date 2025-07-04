---
topic: integrals
title: tenosynovitis
desc: 
date: 2025 June 19
difficulty: incline
tags:
  - scare
methods:
  - parts
---


## Question
```math
\int
  x^2 \left(
    \frac{1}{
      x+0.00001
    }
  \right)^{100000}
\ dx
```


## Hints

### 1
Expanding might not be of help here.

### 2
$x^2$ can be easily differentiated.

### 3
$\left(\frac{1}{x+0.00001}\right)^{100000}$ can also be integrated.


## Answer
```math
-\frac{x^{2}}{99999\left(x+10^{-5}\right)^{99999}}-\frac{2x}{99999\cdot99998\left(x+10^{-5}\right)^{99998}}-\frac{2}{99999\cdot99998\cdot99997\left(x+10^{-5}\right)^{99997}}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int x^{2}\left(\frac{1}{x+0.00001}\right)^{100000}\ dx
  \\ =&\ \int x^{2}\left(x+10^{-5}\right)^{-100000}\ dx
\end{align*}
```

### Parts (1)
```math
\begin{align*}
      f &= x^{2} \quad&\quad g' &= \left(x+10^{-5}\right)^{-100000}
  \\ f' &= 2x \quad&\quad g &= -\frac{1}{99999}\left(x+10^{-5}\right)^{-99999}
\end{align*}
```

### Simplify
```math
\begin{align*}
  &\ fg-\int f'g\ dx
  \\ =&\ x^{2}\cdot-\frac{1}{99999}\left(x+10^{-5}\right)^{-99999}-\int 2x\cdot-\frac{1}{99999}\left(x+10^{-5}\right)^{-99999}\ dx
  \\ =&\ -\frac{x^{2}}{99999\left(x+10^{-5}\right)^{99999}}+\frac{2}{99999}\int x\left(x+10^{-5}\right)^{-99999}\ dx
\end{align*}
```

### Parts (2)
```math
\begin{align*}
      p &= x \quad&\quad q' &= \left(x+10^{-5}\right)^{-99999}
  \\ p' &= 1 \quad&\quad q &= -\frac{1}{99998}\left(x+10^{-5}\right)^{-99998}
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ -\frac{x^{2}}{99999\left(x+10^{-5}\right)^{99999}}+\frac{2}{99999}\left[pq-\int p'q\ dx\right]
  \\ =&\ -\frac{x^{2}}{99999\left(x+10^{-5}\right)^{99999}}+\frac{2}{99999}\left[x\cdot-\frac{1}{99998}\left(x+10^{-5}\right)^{-99998}-\int -\frac{1}{99998}\left(x+10^{-5}\right)^{-99998}\ dx\right]
  \\ =&\ -\frac{x^{2}}{99999\left(x+10^{-5}\right)^{99999}}+\frac{2}{99999}\left[-\frac{x}{99998}\left(x+10^{-5}\right)^{-99998}+\frac{1}{99998}\int \left(x+10^{-5}\right)^{-99998}\ dx\right]
  \\ =&\ -\frac{x^{2}}{99999\left(x+10^{-5}\right)^{99999}}+\frac{2}{99999}\left[-\frac{x}{99998}\left(x+10^{-5}\right)^{-99998}-\frac{1}{99998\cdot99997}\left(x+10^{-5}\right)^{-99997}\right]
  \\ =&\ -\frac{x^{2}}{99999\left(x+10^{-5}\right)^{99999}}-\frac{2x}{99999\cdot99998\left(x+10^{-5}\right)^{99998}}-\frac{2}{99999\cdot99998\cdot99997\left(x+10^{-5}\right)^{99997}}-c
\end{align*}
```
