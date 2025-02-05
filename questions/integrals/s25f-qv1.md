---
topic: integrals
title: fallenrect
desc: 
date: 2025 January 30
tags:
  - trig
  - sqrt
methods:
  - speed
---


## Question
```math
\int
  \sec\left(\sqrt{x}\right)^4 \tan\left(\sqrt{x}\right)
\ dx
```


## Answer
```math
\frac{1}{2}\sqrt{x}\sec\left(\sqrt{x}\right)^{4}-\frac{1}{6}\tan\left(\sqrt{x}\right)^{3}-\frac{1}{2}\tan\left(\sqrt{x}\right)-c
```


## Solution

### Substitute
```math
\begin{align*}
  \sqrt{x} &= t
  \\ x &= t^{2}
  \\ dx &= 2t\ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ \int \sec\left(\sqrt{x}\right)^{4}\tan\left(\sqrt{x}\right)\ dx
  \\ =&\ \int \sec\left(t\right)^{4}\tan\left(t\right)\cdot2t\ dt
  \\ =&\ 2\int t\sec\left(t\right)^{3}\sec\left(t\right)\tan\left(t\right)\ dt
\end{align*}
```

### Parts
```math
\begin{align*}
  \\ f &= t & g' &= \sec\left(t\right)^{3}\sec\left(t\right)\tan\left(t\right)
  \\ f' &= 1 & g &= \frac{1}{4}\sec\left(t\right)^{4}
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ 2\ fg-2\int f'g\ dx
  \\ =&\ 2t\cdot\frac{1}{4}\sec\left(t\right)^{4}-2\int \frac{1}{4}\sec\left(t\right)^{4}\ dt
  \\ =&\ \frac{1}{2}t\sec\left(t\right)^{4}-\frac{1}{2}\int \sec\left(t\right)^{2}\left(\tan\left(t\right)^{2}+1\right)\ dt
  \\ =&\ \frac{1}{2}t\sec\left(t\right)^{4}-\frac{1}{2}\int \sec\left(t\right)^{2}\tan\left(t\right)^{2}\ dt-\frac{1}{2}\int \sec\left(t\right)^{2}\ dt
  \\ =&\ \frac{1}{2}t\sec\left(t\right)^{4}-\frac{1}{6}\tan\left(t\right)^{3}-\frac{1}{2}\tan\left(t\right)
  \\ =&\ \frac{1}{2}\sqrt{x}\sec\left(\sqrt{x}\right)^{4}-\frac{1}{6}\tan\left(\sqrt{x}\right)^{3}-\frac{1}{2}\tan\left(\sqrt{x}\right)-c
\end{align*}
```
