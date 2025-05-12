---
topic: integrals
title: rigidity
desc: 
date: 2025 April 15
tags:
  - dread
  - sqrt
methods:
  - long
  - hyp trig sub
---


## Question
```math
\int
  \sqrt{x - \sqrt{2x}}
\ dx
```


## Hints

### 1
You can write $\sqrt{2x}$ in terms of $\sqrt{x}$.

### 2
Factor out a $\sqrt{2}$.

### 3
A substitution may help clean things up.

### 4
Hyp trig sub will be easier than trig sub.


## Answer
```math
\frac{1}{6\sqrt{2}}\left[2\left(2x-2\sqrt{2x}\right)^{3/2}+3\left(\sqrt{2x-2\sqrt{2x}}\left(\sqrt{2x}-1\right)-\cosh^{-1}\left(\sqrt{2x}-1\right)\right)\right]-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \sqrt{x-\sqrt{2x}}\ dx
  \\ =&\ \int \sqrt{x-\sqrt{2}\sqrt{x}}\ dx
\end{align*}
```

### Root Substitution
```math
\begin{align*}
  \sqrt{x} &= t
  \\ x &= t^{2}
  \\ dx &= 2t\ dt
\end{align*}
```

### Complete the Square
```math
\begin{align*}
  &= \int \sqrt{t^{2}-\sqrt{2}t}\cdot2t\ dt
  \\ &= 2\int t\sqrt{t^{2}-\sqrt{2}t}\ dt
  \\ &= 2\int t\sqrt{\left(t-\frac{\sqrt{2}}{2}\right)^{2}-\left(\frac{\sqrt{2}}{2}\right)^{2}}\ dt
  \\ &= 2\int t\sqrt{\left(t-\frac{1}{\sqrt{2}}\right)^{2}-\frac{1}{2}}\ dt
\end{align*}
```

### Hyperbolic Trigonometric Substitution
```math
\begin{align*}
  \left(t-\frac{1}{\sqrt{2}}\right)^{2} &= \frac{1}{2}\cosh^{2}v
  \\ t-\frac{1}{\sqrt{2}} &= \frac{1}{\sqrt{2}}\cosh v
  \\ t &= \frac{1}{\sqrt{2}}\cosh v+\frac{1}{\sqrt{2}}
  \\ dt &= \frac{1}{\sqrt{2}}\sinh v\ dv
\end{align*}
```

### Substitute
```math
\begin{align*}
  &= 2\int \left(\frac{1}{\sqrt{2}}\cosh v+\frac{1}{\sqrt{2}}\right)\sqrt{\frac{1}{2}\cosh^{2}v-\frac{1}{2}}\cdot\frac{1}{\sqrt{2}}\sinh v\ dv
  \\ &= 2\int \left(\frac{1}{\sqrt{2}}\cosh v+\frac{1}{\sqrt{2}}\right)\left(\frac{1}{\sqrt{2}}\sinh v\right)^{2}\ dv
  \\ &= \frac{1}{\sqrt{2}}\int \left(\cosh v+1\right)\sinh^{2}v\ dv
  \\ &= \frac{1}{\sqrt{2}}\int \left(\cosh v\right)\left(\sinh v\right)^{2}+\left(\sinh v\right)^{2}\ dv
  \\ &= \frac{1}{\sqrt{2}}\cdot\frac{1}{3}\left(\sinh v\right)^{3}+\frac{1}{2\sqrt{2}}\int \cosh2v-1\ dv
  \\ &= \frac{1}{3\sqrt{2}}\left(\sinh v\right)^{3}+\frac{1}{2\sqrt{2}}\left(\sinh v\cosh v-v\right)
\end{align*}
```

### Reformulate
```math
\begin{align*}
  t-\frac{1}{\sqrt{2}} &= \frac{1}{\sqrt{2}}\cosh v
  \\ \sqrt{2}t-1 &= \cosh v
  \\ v &= \cosh^{-1}\left(\sqrt{2}t-1\right)
\end{align*}
```

```math
\begin{align*}
  \sinh v &= \sqrt{\cosh^{2}v-1}
  \\ &= \sqrt{2\left(t-\frac{1}{\sqrt{2}}\right)^{2}-1}
  \\ &= \sqrt{2\left(t^{2}-\frac{2}{\sqrt{2}}t+\frac{1}{2}\right)-1}
  \\ &= \sqrt{2t^{2}-\frac{4}{\sqrt{2}}t}
\end{align*}
```

```math
\begin{align*}
  &\ \frac{1}{3\sqrt{2}}\left(\sinh v\right)^{3}+\frac{1}{2\sqrt{2}}\left(\sinh v\cosh v-v\right)
  \\ =&\ \frac{1}{6\sqrt{2}}\left[2\left(\sinh v\right)^{3}+3\left(\sinh v\cosh v-v\right)\right]
  \\ =&\ \frac{1}{6\sqrt{2}}\left[2\left(2t^{2}-\frac{4}{\sqrt{2}}t\right)^{3/2}+3\left(\sqrt{2t^{2}-\frac{4}{\sqrt{2}}t}\left(\sqrt{2}t-1\right)-\cosh^{-1}\left(\sqrt{2}t-1\right)\right)\right]
  \\ =&\ \frac{1}{6\sqrt{2}}\left[2\left(2x-\frac{4}{\sqrt{2}}\sqrt{x}\right)^{3/2}+3\left(\sqrt{2x-\frac{4}{\sqrt{2}}\sqrt{x}}\left(\sqrt{2}\sqrt{x}-1\right)-\cosh^{-1}\left(\sqrt{2}\sqrt{x}-1\right)\right)\right]
  \\ =&\ \frac{1}{6\sqrt{2}}\left[2\left(2x-2\sqrt{2x}\right)^{3/2}+3\left(\sqrt{2x-2\sqrt{2x}}\left(\sqrt{2x}-1\right)-\cosh^{-1}\left(\sqrt{2x}-1\right)\right)\right]-c
\end{align*}
```
