---
topic: integrals
title: jelly
desc: 
date: 2025 February 15
tags:
  - poly
methods:
  - work
---


## Question
```math
\int
  \frac
    { x^4 + 12x^3 + 54x^2 + 108x + 84 }
    { x+3 }
\ dx
```


## Hints

### 1
Factorisation will make things much less painful.


## Answer
```math
\frac{1}{4}\left(x+3\right)^{4}+3\ln\left(x+3\right)-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{x^{4}+12x^{3}+54x^{2}+108x+84}{x+3}\ dx
  \\ =&\ \int \frac{x^{4}+12x^{3}+54x^{2}+108x+81+3}{x+3}\ dx
  \\ =&\ \int \frac{\left(x+3\right)^{4}}{x+3}+\frac{3}{x+3}\ dx
  \\ =&\ \int \left(x+3\right)^{3}+\frac{3}{x+3}\ dx
  \\ =&\ \frac{1}{4}\left(x+3\right)^{4}+3\ln\left(x+3\right)-c
\end{align*}
```
