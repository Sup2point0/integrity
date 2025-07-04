---
topic: integrals
title: estranged trailblazer
desc: 
date: 2025 May 12
difficulty: manifold
tags:
  - definite
  - trig
methods:
  - spot
---


## Question
```math
\int_{0}^{\pi}\frac{\sin x-x\cos x}{\left(x+\sin x\right)^{2}}\ dx
```


## Hints

### 1
What might the squared denominator suggest?

### 2
If the $-$ were $+$ instead, it’d look like product rule. But it’s a $-$.

### 3
Quotient rule has a $-$!

### 4
You’ll need l’Hôpital’s for this one.


## Answer
$\frac{1}{2}$


## Solution

### Reshape
```math
\begin{align*}
  &\ \int_{0}^{\pi}\frac{\sin x-x\cos x}{\left(x+\sin x\right)^{2}}\ dx
  \\ =&\ \int_{0}^{\pi}\frac{\sin x-x\cos x+x-x}{\left(x+\sin x\right)^{2}}\ dx
  \\ =&\ \int_{0}^{\pi}\frac{\left(x+\sin x\right)-x\left(1+\cos x\right)}{\left(x+\sin x\right)^{2}}\ dx
\end{align*}
```

### Inverse Quotient Rule
```math
\begin{align*}
  \frac{d}{dx}\left(\frac{x}{x+\sin x}\right)
    &= \frac{1\left(x+\sin x\right)-x\left(1+\cos x\right)}{\left(x+\sin x\right)^{2}}
  \\ \Rightarrow \int_{0}^{\pi}\frac{\left(x+\sin x\right)-x\left(1+\cos x\right)}{\left(x+\sin x\right)^{2}}\ dx
    &= \left[\frac{x}{x+\sin x}\right]_{0}^{\pi}
\end{align*}
```

### l’Hôpital’s Rule
```math
\begin{align*}
  &= \left[\frac{\pi}{\pi+\sin\pi}\right]-\lim_{x\to0}\left[\frac{x}{x+\sin x}\right]
  \\ &= \frac{\pi}{\pi+0}-\lim_{x\to0}\left[\frac{1}{1+\cos x}\right]
  \\ &= \frac{\pi}{\pi}-\frac{1}{1+1}
  \\ &= 1-\frac{1}{2}
  \\ &= \frac{1}{2}
\end{align*}
```


## Alternates

Courtesy of my friend <a target="_blank" href="https://github.com/itechnicals">iTechnical</a>!

```math
\begin{align*}
  &\ \int_{0}^{\pi}\frac{\sin x-x\cos x}{\left(x+\sin x\right)^{2}}\ dx
  \\ =&\ \int_{0}^{\pi}\frac{\left(\sin x-x\cos x\right)}{\left(x+\sin x\right)^{2}}\cdot\frac{1/x^{2}}{1/x^{2}}\ dx
  \\ =&\ \int_{0}^{\pi}\frac{\frac{1}{x^{2}}\sin x-\frac{1}{x}\cos x}{\left(1+\frac{1}{x}\sin x\right)^{2}}\ dx
  \\ =&\ -\int_{0}^{\pi}\frac{-\frac{1}{x^{2}}\sin x+\frac{1}{x}\cos x}{\left(1+\frac{1}{x}\sin x\right)^{2}}\ dx
\end{align*}
```

Substitute

```math
\begin{align*}
  1+\frac{1}{x}\sin x &= t
  \\ \left(-\frac{1}{x^{2}}\sin x+\frac{1}{x}\cos x\right)\ dx &= dt
\end{align*}
```

Hence

```math
\begin{align*}
  &= -\int_{1+1}^{1+0}\frac{1}{t^{2}}\ dt
  \\ &= \int_{2}^{1}-\frac{1}{t^{2}}\ dt
  \\ &= \left[\frac{1}{t}\right]_{2}^{1}
  \\ &= \frac{1}{1}-\frac{1}{2}
  \\ &= \frac{1}{2}
\end{align*}
```
