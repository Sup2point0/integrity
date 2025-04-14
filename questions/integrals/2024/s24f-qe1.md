---
topic: integrals
title: monster
desc: Have fun!
date: 2024 December
tags:
  - dread
  - long
  - exp
  - sqrt
methods:
  - work
  - sub
  - partials
---


## Question
```math
\int \sqrt{1+\sqrt{1+e^{x}}}\ dx
```


## Hints

### 1
You’re gonna need substitution for this one.

### 2
A <em>lot</em> of substitution.

### 3
Start with $1 + e^x = t$.


## Answer
```math
4\sqrt{1+\sqrt{1+e^{x}}}+\sqrt{2}\ln\left(\frac{\sqrt{1+\sqrt{1+e^{x}}}-\sqrt{2}}{\sqrt{1+\sqrt{1+e^{x}}}+\sqrt{2}}\right)-c
```


## Solution

### Substitute (1)
```math
\begin{align*}
  1+e^{x} &=  \quad\to\quad ^{x}=t-1
  \\ e^{x}\ dx &= d \quad\to\quad x=\frac{dt}{t-1}
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  &= \int \sqrt{1+\sqrt{t}}\cdot\frac{1}{t-1}\ dt
  \\ &= \int \frac{\sqrt{1+\sqrt{t}}}{t-1}\ dt
\end{align*}
```

### Substitute (2)
```math
\begin{align*}
  1+\sqrt{t} &= v
  \\ t &= \left(v-1\right)^{2}
  \\ dt &= 2\left(v-1\right)\ dv
\end{align*}
```

### Solve (2)
```math
\begin{align*}
  &= \int \frac{\sqrt{v}}{\left(v-1\right)^{2}-1}\cdot2\left(v-1\right)\ dv
  \\ &= 2\int \frac{\sqrt{v}\left(v-1\right)}{v\left(v-2\right)}\ dv
  \\ &= 2\int \frac{v-1}{\sqrt{v}\left(v-2\right)}\ dv
\end{align*}
```

### Substitute (3)
```math
\begin{align*}
  \sqrt{v} &= r\ 
  \\ v &= r^{2}
  \\ dv &= 2r\ dr
\end{align*}
```

### Solve (3)
```math
\begin{align*}
  &= 2\int \frac{r^{2}-1}{r\left(r^{2}-2\right)}\cdot2r\ dr
  \\ &= 4\int \frac{r^{2}-1}{r^{2}-2}\ dr
  \\ &= 4\int \frac{r^{2}-2}{r^{2}-2}+\frac{1}{r^{2}-2}\ dr
  \\ &= 4r+4\int \frac{p}{r-\sqrt{2}}+\frac{q}{r+\sqrt{2}}\ dr
\end{align*}
```

### Partial Fractions
```math
\begin{align*}
  &= 1=p\left(r+\sqrt{2}\right)+q\left(r-\sqrt{2}\right)
\end{align*}
```

Put $r = \sqrt{2}$:

```math
\begin{align*}
  1 &= p\left(\sqrt{2}+\sqrt{2}\right)
  \\ p &= \frac{1}{2\sqrt{2}}
  \\   &= \frac{\sqrt{2}}{4}
\end{align*}
```

Put $r = -\sqrt{2}$:

```math
\begin{align*}
  1 &= q\left(-\sqrt{2}-\sqrt{2}\right)
  \\ q & =-\frac{1}{2\sqrt{2}}
  \\   &= -\frac{\sqrt{2}}{4}
\end{align*}
```

### Solve (4)
```math
\begin{align*}
  &= 4r+4\int \frac{\sqrt{2}}{4\left(r-\sqrt{2}\right)}-\frac{\sqrt{2}}{4\left(r+\sqrt{2}\right)}\ dr
  \\ &= 4r+\sqrt{2}\ln\left(r-\sqrt{2}\right)-\sqrt{2}\ln\left(r+\sqrt{2}\right)
  \\ &= 4r+\sqrt{2}\ln\left(\frac{r-\sqrt{2}}{r+\sqrt{2}}\right)
  \\ &= 4\sqrt{v}+\sqrt{2}\ln\left(\frac{\sqrt{v}-\sqrt{2}}{\sqrt{v}+\sqrt{2}}\right)
  \\ &= 4\sqrt{1+\sqrt{t}}+\sqrt{2}\ln\left(\frac{\sqrt{1+\sqrt{t}}-\sqrt{2}}{\sqrt{1+\sqrt{t}}+\sqrt{2}}\right)
  \\ &= 4\sqrt{1+\sqrt{1+e^{x}}}+\sqrt{2}\ln\left(\frac{\sqrt{1+\sqrt{1+e^{x}}}-\sqrt{2}}{\sqrt{1+\sqrt{1+e^{x}}}+\sqrt{2}}\right)-c
\end{align*}
```
