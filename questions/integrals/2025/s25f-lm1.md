---
topic: integrals
title: last mourn
desc: 
date: 2025 May 8
tags:
  - horror
  - poly
  - arctrig
methods:
  - sub
  - spot
---


## Question
```math
\int \frac{x^{2}\left(\arcsin x\right)\sqrt{1-x^{2}}+x\left(\arcsin x\right)^{2}\left(1-x^{2}\right)}{\left(x-1\right)^{2}-2\left(1-x\right)}\sqrt{1-x\arcsin x}\sqrt{1+x\arcsin x}\ dx
```


## Hints

### 1
What can you do with the $\sqrt{}$ terms on the right?

### 2
What can you do with the denominator?

### 3
What can you take out of the numerator?

### 4
What substitution are you making?

### 5
Write $\frac{x}{\sqrt{1-x^2}}$ as $x \cdot \frac{1}{\sqrt{1-x^2}}$.


## Answer
```math
\frac{1}{3}\left(1-\left(x\arcsin x\right)^{2}\right)^{3/2}-c
```


## Solution

### Factorise
```math
\begin{align*}
  &\ \int \frac{x^{2}\left(\arcsin x\right)\sqrt{1-x^{2}}+x\left(\arcsin x\right)^{2}\left(1-x^{2}\right)}{\left(x-1\right)^{2}-2\left(1-x\right)}\sqrt{1-x\arcsin x}\sqrt{1+x\arcsin x}\ dx
  \\ =&\ \int \frac{x^{2}\left(\arcsin x\right)\sqrt{1-x^{2}}+x\left(\arcsin x\right)^{2}\left(1-x^{2}\right)}{x^{2}-2x+1-2+2x}\sqrt{1-x\arcsin x}\sqrt{1+x\arcsin x}\ dx
  \\ =&\ \int \frac{x^{2}\left(\arcsin x\right)\sqrt{1-x^{2}}+x\left(\arcsin x\right)^{2}\left(1-x^{2}\right)}{x^{2}-1}\sqrt{1-x\arcsin x}\sqrt{1+x\arcsin x}\ dx
  \\ =&\ \int \left(x\arcsin x\right)\frac{x\sqrt{1-x^{2}}+\left(\arcsin x\right)\left(1-x^{2}\right)}{x^{2}-1}\sqrt{1-\left(x\arcsin x\right)^{2}}\ dx
  \\ =&\ -\int \left(x\arcsin x\right)\frac{x\sqrt{1-x^{2}}+\left(\arcsin x\right)\left(1-x^{2}\right)}{1-x^{2}}\sqrt{1-\left(x\arcsin x\right)^{2}}\ dx
  \\ =&\ -\int \left(x\arcsin x\right)\left(\frac{x}{\sqrt{1-x^{2}}}+\arcsin x\right)\sqrt{1-\left(x\arcsin x\right)^{2}}\ dx
\end{align*}
```

### Substitute (1)
```math
\begin{align*}
  x\arcsin x &= t
  \\ \left(\arcsin x+\frac{x}{\sqrt{1-x^{2}}}\right)\ dx &= dt
\end{align*}
```

### Simplify
```math
\begin{align*}
  &= -\int t\sqrt{1-t^{2}}\ dt
  \\ &= \frac{1}{2}\int -2t\sqrt{1-t^{2}}\ dt
\end{align*}
```

### Substitute (2)
```math
\begin{align*}
  1-t^{2} &= v
  \\ -2t\ dt &= dv
\end{align*}
```

### Substitute
```math
\begin{align*}
  &= \frac{1}{2}\int \sqrt{v}\ dv
  \\ &= \frac{1}{2}\cdot\frac{2}{3}v^{3/2}
  \\ &= \frac{1}{3}\left(1-t^{2}\right)^{3/2}
  \\ &= \frac{1}{3}\left(1-\left(x\arcsin x\right)^{2}\right)^{3/2}-c
\end{align*}
```
