---
topic: integrals
title: abstruse trilemma
desc:  
date:  2025 April 25
difficulty: incline
tags:
  - elite
  - sqrt
  - ln
  - hyp trig
methods:
  - spot
---


## Question
```math
\int \frac{\ln\left(x^{2}+\sqrt{x^{4}-1}\right)}{x^{3}}\ dx
```


## Hints

### 1
Does the structure inside the $\ln()$ expression remind you of anything?

### 2
Use the fact that $\cosh^{-1}(x) = \ln(x+\sqrt{x^2-1})$.

### 3
Substitute $t = x^2$.


## Answer
```math
-\frac{1}{2x^{2}}\cosh^{-1}\left(x^{2}\right)+\tan^{-1}\left(x^{2}+\sqrt{x^{4}-1}\right)-c
```


## Solution

### Inverse Hyperbolic Cosine
```math
\begin{align*}
  &\ \int \frac{\ln\left(x^{2}+\sqrt{x^{4}-1}\right)}{x^{3}}\ dx
  \\ =&\ \int \frac{\cosh^{-1}\left(x^{2}\right)}{x^{3}}\ dx
  \\ =&\ \int \frac{\cosh^{-1}\left(x^{2}\right)}{x^{3}}\cdot\frac{2x}{2x}\ dx
  \\ =&\ \frac{1}{2}\int \frac{2x\cosh^{-1}\left(x^{2}\right)}{x^{4}}\ dx
\end{align*}
```

### Substitute (1)
```math
\begin{align*}
  x^2 &= t
  \\ 2x\ dx &= dt
\end{align*}
```

```math
= \frac{1}{2}\int \frac{\cosh^{-1}t}{t^{2}}\ dt
```

### Substitute (2)
```math
\begin{align*}
  \cosh^{-1}t &= v
  \\ t &= \cosh v
  \\ dt &= \sinh v\ dv
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  &= \frac{1}{2}\int \frac{v}{\cosh^{2}v}\cdot\sinh v\ dv
  \\ &= \frac{1}{2}\int v\operatorname{sech}v\tanh v\ dv
\end{align*}
```

### Parts
```math
\begin{align*}
      f &= v \quad&\quad g' &= \operatorname{sech}v\tanh v
  \\ f' &= 1 \quad&\quad g &= -\operatorname{sech}v
\end{align*}
```

### Solve (2)
```math
\begin{align*}
  &\ \frac{1}{2}\left[fg-\int f'g\ dx\right]
  \\ =&\ \frac{1}{2}\left[v\left(-\operatorname{sech}v\right)-\int -\operatorname{sech}v\ dv\right]
  \\ =&\ -\frac{1}{2}v\operatorname{sech}v+\frac{1}{2}\int \frac{2}{e^{v}+e^{-v}}\ dv
  \\ =&\ -\frac{1}{2}v\operatorname{sech}v+\int \frac{1}{e^{v}+e^{-v}}\cdot\frac{e^{v}}{e^{v}}\ dv
  \\ =&\ -\frac{1}{2}v\operatorname{sech}v+\int \frac{e^{v}}{e^{2v}+1}\ dv
  \\ =&\ -\frac{1}{2}v\operatorname{sech}v+\tan^{-1}\left(e^{v}\right)
  \\ =&\ -\frac{1}{2}v\cdot\frac{1}{\cosh v}+\tan^{-1}\left(e^{v}\right)
  \\ =&\ -\frac{1}{2}\cosh^{-1}t\cdot\frac{1}{t}+\tan^{-1}\left(\exp\left(\ln\left(t+\sqrt{t^{2}-1}\right)\right)\right)
  \\ =&\ -\frac{1}{2t}\cosh^{-1}t+\tan^{-1}\left(t+\sqrt{t^{2}-1}\right)
  \\ =&\ -\frac{1}{2x^{2}}\cosh^{-1}\left(x^{2}\right)+\tan^{-1}\left(x^{2}+\sqrt{x^{4}-1}\right)-c
\end{align*}
```
