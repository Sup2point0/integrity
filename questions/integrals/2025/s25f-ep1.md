---
topic: integrals
title: nature
desc: 
date: 2025 February 5
tags:
 - exp
methods:
  - spot
---


## Question
```math
\int \frac{1}{1+e^{x}+e^{-x}}\ dx
```


## Hints

### 1
How could you get rid of $e^{-x}$?

### 2
You can always just substitute $e^x = t$.


## Answer
```math
\frac{2\sqrt{3}}{3}\tan^{-1}\left(\frac{2\sqrt{3}}{3}\left(e^{x}+\frac{1}{2}\right)\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{1}{1+e^{x}+e^{-x}}\ dx
  \\ =&\ \int \frac{1}{1+e^{x}+e^{-x}}\cdot\frac{e^{x}}{e^{x}}\ dx
  \\ =&\ \int \frac{e^{x}}{e^{x}+e^{2x}+1}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  e^x &= t
  \\ e^x \ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int \frac{1}{t+t^{2}+1}\ dt
  \\ &= \int \frac{1}{\left(t+\frac{1}{2}\right)^{2}+\frac{3}{4}}\ dt
  \\ &= \sqrt{\frac{4}{3}}\tan^{-1}\left(\sqrt{\frac{4}{3}}\left(t+\frac{1}{2}\right)\right)
  \\ &= \frac{2\sqrt{3}}{3}\tan^{-1}\left(\frac{2\sqrt{3}}{3}\left(e^{x}+\frac{1}{2}\right)\right)-c
\end{align*}
```
