---
topic: integrals
title: like it or not
desc: 
date: 2025 February 27
tags:
  - trig
methods:
  - work
---


## Question
```math
\int \frac{1}{x^{14/17}}\sec\left(x^{1/17}\right)^{2}\tan\left(x^{1/17}\right)\ dx
```


## Answer
```math
\frac{17}{2}x^{2/17}\sec\left(x^{1/17}\right)^{2}-17x^{1/17}\tan\left(x^{1/17}\right)-17\ln\left(\cos\left(x^{1/17}\right)\right)-c
```


## Solution

### Substitute
```math
\begin{align*}
  x^{1/17} &= t
  \\ x &= t^{17}
  \\ dx &= 17t^{16}\ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ \int \frac{1}{x^{14/17}}\sec\left(x^{1/17}\right)^{2}\tan\left(x^{1/17}\right)\ dx
  \\ =&\ \int x^{-14/17}\sec\left(t\right)^{2}\tan\left(t\right)\cdot17t^{16}\ dt
  \\ =&\ 17\int \left(x^{1/17}\right)^{-14}\sec\left(t\right)^{2}\tan\left(t\right)\cdot t^{16}\ dt
  \\ =&\ 17\int t^{-14}\sec\left(t\right)^{2}\tan\left(t\right)\cdot t^{16}\ dt
  \\ =&\ 17\int t^{2}\sec^{2}t\tan t\ dt
\end{align*}
```

### Parts
```math
\begin{align*}
  &= 17\left(t^{2}\cdot\frac{1}{2}\sec^{2}t-\int 2t\cdot\frac{1}{2}\sec^{2}t\ dt\right)
  \\ &= 17\left(\frac{1}{2}t^{2}\sec^{2}t-\int t\sec^{2}t\ dt\right)
  \\ &= 17\left(\frac{1}{2}t^{2}\sec^{2}t-\left(t\tan t-\int \tan t\ dt\right)\right)
  \\ &= 17\left(\frac{1}{2}t^{2}\sec^{2}t-\left(t\tan t+\ln\left(\cos t\right)\right)\right)
  \\ &= 17\left(\frac{1}{2}t^{2}\sec^{2}t-t\tan t-\ln\left(\cos t\right)\right)
  \\ &= \frac{17}{2}x^{2/17}\sec\left(x^{1/17}\right)^{2}-17x^{1/17}\tan\left(x^{1/17}\right)-17\ln\left(\cos\left(x^{1/17}\right)\right)-c
\end{align*}
```
