---
topic: integrals
title: polytypical
desc: 
date: 2024 December 24
tags:
  - poly
  - frac
methods:
  - work
  - poly div
  - arctan
---


## Question
```math
\int \frac{x+x^{2}-x^{3}}{x-x^{2}+x^{3}}\ dx
```


## Answer
```math
\frac{4\sqrt{3}}{3}\tan^{-1}\left(\frac{2\sqrt{3}}{3}x-\frac{\sqrt{3}}{3}\right)-x-c
```


## Solution

### Polynomial Division
```math
\begin{align*}
  &\ \int \frac{x+x^{2}-x^{3}}{x-x^{2}+x^{3}}\ dx
  \\ =&\ -\int \frac{-x-x^{2}+x^{3}}{x-x^{2}+x^{3}}\ dx
  \\ =&\ -\int \frac{x-x^{2}+x^{3}}{x-x^{2}+x^{3}}-\frac{2x}{x-x^{2}+x^{3}}\ dx
  \\ =&\ -\int 1-\frac{2}{1-x+x^{2}}\ dx
\end{align*}
```

### Solve
```math
\begin{align*}
  &= -x+\int \frac{2}{x^{2}-x+1}\ dx
  \\ &= -x+2\int \frac{1}{\left(x-\frac{1}{2}\right)^{2}+\frac{3}{4}}\ dx
  \\ &= -x+2\cdot\sqrt{\frac{4}{3}}\tan^{-1}\left(\sqrt{\frac{4}{3}}\left(x-\frac{1}{2}\right)\right)
  \\ &= \frac{4\sqrt{3}}{3}\tan^{-1}\left(\frac{2\sqrt{3}}{3}x-\frac{\sqrt{3}}{3}\right)-x-c
\end{align*}
```
