---
topic: integrals
title: quality of life
desc: 
date: 2025 April 10
difficulty: incline
tags:
  - sqrt
  - poly
methods:
  - long
  - sub
---


## Question
```math
\int \frac{\sqrt{x^{4}+1}}{x^{3}}\ dx
```


## Hints

### 1
If you multiply through by $x$, what do you notice?

### 2
Write $x^4$ as $\left(x^2\right)^2$.

### 3
Proceed with a trig sub.


## Answer
```math
-\frac{\sqrt{x^{4}+1}}{2x^{2}}+\frac{1}{2}\sinh^{-1}\left(x^{2}\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{\sqrt{x^{4}+1}}{x^{3}}\ dx
  \\ =&\ \int \frac{\sqrt{x^{4}+1}}{x^{3}}\cdot\frac{x}{x}\ dx
  \\ =&\ \int \frac{x\sqrt{x^{4}+1}}{x^{4}}\ dx
  \\ =&\ \frac{1}{2}\int \frac{2x\sqrt{\left(x^{2}\right)^{2}+1}}{\left(x^{2}\right)^{2}}\ dx
\end{align*}
```

### Substitute (1)
```math
\begin{align*}
  x^2 &= t
  \\ 2x \ dx &= dt
\end{align*}
```

```math
= \frac{1}{2}\int \frac{\sqrt{t^{2}+1}}{t^{2}}\ dt
```

### Substitute (2)
```math
\begin{align*}
  t &= \sinh v
  \\ dt &= \cosh v\ dv
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \frac{1}{2}\int \frac{\sqrt{\sinh^{2}v+1}}{\sinh^{2}v}\cdot\cosh v\ dv
  \\ &= \frac{1}{2}\int \frac{\cosh^{2}v}{\sinh^{2}v}\ dv
  \\ &= \frac{1}{2}\int \coth^{2}v\ dv
  \\ &= \frac{1}{2}\int \operatorname{csch}^{2}v+1\ dv
  \\ &= -\frac{1}{2}\coth v+\frac{1}{2}v
\end{align*}
```

### Reformulate
```math
\begin{align*}
  &= -\frac{\cosh v}{2\sinh v}+\frac{1}{2}v
  \\ &= -\frac{\sqrt{t^{2}+1}}{2t}+\frac{1}{2}\sinh^{-1}t
  \\ &= -\frac{\sqrt{x^{4}+1}}{2x^{2}}+\frac{1}{2}\sinh^{-1}\left(x^{2}\right)-c
\end{align*}
```


## Alternate

### Trigonometric Substitution
```math
\frac{1}{2}\int \frac{\sqrt{t^{2}+1}}{t^{2}}\ dt
```

At this step, we could also proceed with a non-hyperbolic trigonometric substitution to take a more scenic route:

```math
\begin{align*}
  t &= \tan v
  \\ dt &= \sec^{2}v\ dv
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  &= \frac{1}{2}\int \frac{\sqrt{\tan^{2}v+1}}{\tan^{2}v}\cdot\sec^{2}v\ dv
  \\ &= \frac{1}{2}\int \frac{\sec^{3}v}{\tan^{2}v}\ dv
  \\ &= \frac{1}{2}\int \frac{1}{\cos^{3}v}\cdot\frac{\cos^{2}v}{\sin^{2}v}\ dv
  \\ &= \frac{1}{2}\int \frac{1}{\sin^{2}v\cos v}\ dv
  \\ &= \frac{1}{2}\int \frac{1}{\sin^{2}v\cos v}\cdot\frac{\cos v}{\cos v}\ dv
  \\ &= \frac{1}{2}\int \frac{\cos v}{\sin^{2}v\cos^{2}v}\ dv
  \\ &= \frac{1}{2}\int \frac{\cos v}{\left(\sin^{2}v\right)\left(1-\sin^{2}v\right)}\ dv
\end{align*}
```

### Substitute
```math
\begin{align*}
  \sin v &= w
  \\ \cos v\ dv &= dw
\end{align*}
```

```math
= \frac{1}{2}\int \frac{1}{w^{2}\left(1-w^{2}\right)}\ dw
```

### Partial Fractions
Write $w^2 = z$:

```math
\begin{align*}
  \frac{1}{w^{2}\left(1-w^{2}\right)}
    &= \frac{1}{z\left(1-z\right)}
  \\ \frac{1}{z\left(1-z\right)}
    &= \frac{p}{z}+\frac{q}{1-z}
  \\ 1 &= p\left(1-z\right)+qz
\end{align*}
```

Let $z = 0$:

```math
\begin{align*}
  1 &= p\left(1-0\right)+0
  \\ p &= 1
\end{align*}
```

Let $z = 1$:

```math
\begin{align*}
  1 &= 0+q
  \\ q &= 1
\end{align*}
```

Hence:

```math
\begin{align*}
  \frac{1}{z\left(1-z\right)}
    &= \frac{1}{z}+\frac{1}{1-z}
  \\ \frac{1}{w^{2}\left(1-w^{2}\right)}
    &= \frac{1}{w^{2}}+\frac{1}{1-w^{2}}
\end{align*}
```

### Solve (2)
```math
\begin{align*}
  &\ \frac{1}{2}\int \frac{1}{w^{2}\left(1-w^{2}\right)}\ dw
  \\ =&\ \frac{1}{2}\int \frac{1}{w^{2}}+\frac{1}{1-w^{2}}\ dw
  \\ =&\ -\frac{1}{2w}+\frac{1}{2}\tanh^{-1}w
  \\ =&\ -\frac{1}{2\sin v}+\frac{1}{2}\tanh^{-1}\left(\sin v\right)
  \\ =&\ -\frac{\sqrt{t^{2}+1}}{2t}+\frac{1}{2}\tanh^{-1}\left(\frac{t}{\sqrt{t^{2}+1}}\right)
  \\ =&\ -\frac{\sqrt{x^{4}+1}}{2x^{2}}+\frac{1}{2}\tanh^{-1}\left(\frac{x^{2}}{\sqrt{x^{4}+1}}\right)-c
\end{align*}
```
