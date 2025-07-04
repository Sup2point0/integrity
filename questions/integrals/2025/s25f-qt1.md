---
topic: integrals
title: folder
desc: 
date: 2025 January 11
difficulty: based
tags:
  - sqrt
methods:
  - work
---


## Question
```math
\int \sqrt{\frac{x}{1-\frac{1}{x}}}\ dx
```


## Answer
```math
\frac{2}{3}\sqrt{x-1}\left(x+2\right)-c
```


## Solution

### Solve
```math
\begin{align*}
  &\ \int \sqrt{\frac{x}{1-\frac{1}{x}}}\ dx
  \\ =&\ \int \sqrt{\frac{x^{2}}{x-1}}\ dx
  \\ =&\ \int \frac{x}{\sqrt{x-1}}\ dx
  \\ =&\ \int \frac{x-1}{\sqrt{x-1}}+\frac{1}{\sqrt{x-1}}\ dx
  \\ =&\ \int \left(x-1\right)^{\frac{1}{2}}\ dx+\int \left(x-1\right)^{-\frac{1}{2}}\ dx
  \\ =&\ \frac{2}{3}\left(x-1\right)^{\frac{3}{2}}+2\left(x-1\right)^{\frac{1}{2}}-c
\end{align*}
```

### Factorise
```math
\begin{align*}
  &= \frac{2}{3}\sqrt{x-1}\left(\left(x-1\right)+3\right)
  \\ &= \frac{2}{3}\sqrt{x-1}\left(x+2\right)-c
\end{align*}
```
