---
topic: integrals
title: flyby
desc: 
date: 2024 December 24
tags:
  - exp
  - poly
method:
  - spot
  - work
  - sub
  - parts
---


## Question
```math
\int \frac{1+x^{2}}{x^{5}}e^{\left(1+\frac{1}{x^{2}}\right)}\ dx
```


## Hints

### 1
Expanding the exponent probably won’t help here.

### 2
The thing on the outside looks quite similar to the thing inside the exponent, doesn’t it?

### 3
Substitute!


## Answer
```math
-\frac{1}{2x^{2}}e^{\left(1+\frac{1}{x^{2}}\right)}-c
```


## Solution

### Substitute
```math
\begin{align*}
  1+\frac{1}{x^{2}} &= t
  \\ -\frac{2}{x^{3}}\ dx &= dt
  \\ dx &= -\frac{x^{3}}{2}\ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ \int \frac{1+x^{2}}{x^{5}}e^{\left(1+\frac{1}{x^{2}}\right)}\ dx
  \\ =&\ \int \frac{1+x^{2}}{x^{5}}e^{t}\cdot-\frac{x^{3}}{2}\ dt
  \\ =&\ -\frac{1}{2}\int e^{t}\cdot\frac{1+x^{2}}{x^{5}}\cdot x^{3}\ dt
  \\ =&\ -\frac{1}{2}\int e^{t}\cdot\frac{1+x^{2}}{x^{2}}\ dt
  \\ =&\ -\frac{1}{2}\int e^{t}\left(\frac{1}{x^{2}}+\frac{x^{2}}{x^{2}}\right)\ dt
  \\ =&\ -\frac{1}{2}\int e^{t}\left(1+\frac{1}{x^{2}}\right)\ dt
  \\ =&\ =-\frac{1}{2}\int te^{t}\ dt
\end{align*}
```

### Parts
```math
\begin{align*}
  &= -\frac{1}{2}\left(te^{t}-\int e^{t}\ dt\right)
  \\ &= -\frac{1}{2}\left(te^{t}-e^{t}\right)
  \\ &= \frac{1}{2}e^{t}\left(1-t\right)
  \\ &= \frac{1}{2}e^{\left(1+\frac{1}{x^{2}}\right)}\left(1-\left(1+\frac{1}{x^{2}}\right)\right)
  \\ &= \frac{1}{2}e^{\left(1+\frac{1}{x^{2}}\right)}\left(-\frac{1}{x^{2}}\right)
  \\ &= -\frac{1}{2x^{2}}e^{\left(1+\frac{1}{x^{2}}\right)}-c
\end{align*}
```
