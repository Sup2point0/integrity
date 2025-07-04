---
topic: integrals
title: counting words
desc: 
date: 2025 April 19
difficulty: manifold
tags:
  - sqrt
methods:
  - work
  - hyp trig sub
---


## Question
```math
\int \frac{1}{\sqrt{x^{2}-1}+\sqrt{x^{2}+1}}\ dx
```


## Hints

### 1
Substituting is hard when the $\sqrt{}$ terms are in the denominator.

### 2
How could you get the $\sqrt{}$ terms in the numerator?

### 3
Multiply through by something!


## Answer
```math
\frac{1}{4}\left[\ln\left(x+\sqrt{x^{2}+1}\right)+\ln\left(x+\sqrt{x^{2}-1}\right)\right]+\frac{1}{4}x\left[\sqrt{x^{2}+1}-\sqrt{x^{2}-1}\right]-c
```


## Solution

### Difference of Squares
```math
\begin{align*}
  &\ \int \frac{1}{\sqrt{x^{2}-1}+\sqrt{x^{2}+1}}\cdot\frac{\sqrt{x^{2}-1}-\sqrt{x^{2}+1}}{\sqrt{x^{2}-1}-\sqrt{x^{2}+1}}\ dx
  \\ =&\ \int \frac{\sqrt{x^{2}-1}-\sqrt{x^{2}+1}}{\left(\sqrt{x^{2}-1}\right)^{2}-\left(\sqrt{x^{2}+1}\right)^{2}}\ dx
  \\ =&\ \int \frac{\sqrt{x^{2}-1}-\sqrt{x^{2}+1}}{\left(x^{2}-1\right)-\left(x^{2}+1\right)}\ dx
  \\ =&\ \int \frac{\sqrt{x^{2}-1}-\sqrt{x^{2}+1}}{-2}\ dx
  \\ =&\ \frac{1}{2}\int \sqrt{x^{2}+1}-\sqrt{x^{2}-1}\ dx
  \\ =&\ \frac{1}{2}\int \sqrt{x^{2}+1}\ dx-\frac{1}{2}\int \sqrt{x^{2}-1}\ dx
\end{align*}
```

### Left / Hyp Trig Sub
```math
\begin{align*}
  x &= \sinh t
  \\ dx &= \cosh t\ dt
\end{align*}
```

```math
\begin{align*}
  &\ \frac{1}{2}\int \sqrt{x^{2}+1}dx
  \\ =&\ \frac{1}{2}\int \sqrt{\sinh^{2}t+1}\cdot\cosh t\ dt
  \\ =&\ \frac{1}{2}\int \cosh^{2}t\ dt
  \\ =&\ \frac{1}{4}\int 1+\cosh2t\ dt
  \\ =&\ \frac{1}{4}\left(t+\sinh t\cosh t\right)
  \\ =&\ \frac{1}{4}\left(\sinh^{-1}x+x\sqrt{x^{2}+1}\right)
\end{align*}
```

### Right / Hyp Trig Sub
```math
\begin{align*}
  x &= \cosh t
  \\ dx &= \sinh t\ dt
\end{align*}
```

```math
\begin{align*}
  &\ \frac{1}{2}\int \sqrt{x^{2}-1}\ dx
  \\ =&\ \frac{1}{2}\int \sqrt{\cosh^{2}t-1}\cdot\sinh t\ dt
  \\ =&\ \frac{1}{2}\int \sinh^{2}t\ dt
  \\ =&\ \frac{1}{4}\int \cosh2t-1\ dt
  \\ =&\ \frac{1}{4}\left(\sinh t\cosh t-t\right)
  \\ =&\ \frac{1}{4}\left(x\sqrt{x^{2}-1}-\cosh^{-1}x\right)
\end{align*}
```

### Merge
```math
\begin{align*}
  &\ \frac{1}{2}\int \sqrt{x^{2}+1}\ dx-\frac{1}{2}\int \sqrt{x^{2}-1}\ dx
  \\ =&\ \frac{1}{4}\left(\sinh^{-1}x+x\sqrt{x^{2}+1}\right)-\frac{1}{4}\left(x\sqrt{x^{2}-1}-\cosh^{-1}x\right)
  \\ =&\ \frac{1}{4}\left(\sinh^{-1}x+\cosh^{-1}x+x\sqrt{x^{2}+1}-x\sqrt{x^{2}-1}\right)-c
  \\ =&\ \frac{1}{4}\left[\ln\left(x+\sqrt{x^{2}+1}\right)+\ln\left(x+\sqrt{x^{2}-1}\right)\right]+\frac{1}{4}x\left[\sqrt{x^{2}+1}-\sqrt{x^{2}-1}\right]-c
\end{align*}
```
