---
topic: integrals
title: sprout
desc: 
date: 2025 March 25
difficulty: incline
tags:
  - poly
methods:
  - sub
---


## Question
```math
\int
  \frac
    { (1-x)^2 }
    { (x+1)^{404} }
\ dx
```


## Answer
```math
\frac{1}{\left(x+1\right)^{403}}\left(-\frac{1}{401}\left(x+1\right)^{2}+\frac{4}{402}\left(x+1\right)-\frac{4}{403}\right)-c
```


## Solution

### Substitute
```math
\begin{align*}
  x+1 &= t
  \\ x &= t-1
  \\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ \int \frac{\left(1-x\right)^{2}}{\left(x+1\right)^{404}}\ dx
  \\ =&\ \int \frac{\left(1-\left(t-1\right)\right)^{2}}{t^{404}}\ dt
  \\ =&\ \int \frac{\left(2-t\right)^{2}}{t^{404}}\ dt
  \\ =&\ \int \frac{t^{2}-4t+4}{t^{404}}\ dt
  \\ =&\ \int \frac{1}{t^{402}}-\frac{4}{t^{403}}+\frac{4}{t^{404}}\ dt
  \\ =&\ -\frac{1}{401t^{401}}+\frac{4}{402t^{402}}-\frac{4}{403t^{403}}
  \\ =&\ \frac{1}{t^{403}}\left(-\frac{1}{401}t^{2}+\frac{4}{402}t-\frac{4}{403}\right)
  \\ =&\ \frac{1}{\left(x+1\right)^{403}}\left(-\frac{1}{401}\left(x+1\right)^{2}+\frac{4}{402}\left(x+1\right)-\frac{4}{403}\right)-c
\end{align*}
```
