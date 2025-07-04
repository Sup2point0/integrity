---
topic: integrals
title: hallucinations
desc: 
date: 2025 March 27
difficulty: incline
tags:
  - sqrt
methods:
  - hyp trig sub
---


## Question
```math
\int
  \sqrt{
    \frac
      { x }
      { x + 1/3 }
  }
\ dx
```


## Hints

### 1
Trig sub here could get messy.

### 2
Try hyp trig sub.


## Answer
```math
\frac{1}{3}\sinh^{-1}\sqrt{3x}+\frac{1}{3}\sqrt{3x}\sqrt{3x+1}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \sqrt{\frac{x+1/3}{x}}\ dx
  \\ =&\ \int \frac{\sqrt{x+1/3}}{\sqrt{x}}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  x &= \frac{1}{3}\sinh^{2}t
  \\ dx &= \frac{2}{3}\sinh t\cosh t\ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int \frac{\sqrt{\frac{1}{3}\sinh^{2}t+\frac{1}{3}}}{\sqrt{\frac{1}{3}\sinh^{2}t}}\cdot\frac{2}{3}\sinh t\cosh t\ dt
  \\ &= \frac{2}{3}\int \frac{\frac{1}{\sqrt{3}}\cosh t}{\frac{1}{\sqrt{3}}\sinh t}\cdot\sinh t\cosh t\ dt
  \\ &= \frac{2}{3}\int \cosh^{2}t\ dt
  \\ &= \frac{1}{3}\int 1+\cosh2t\ dt
  \\ &= \frac{1}{3}t+\frac{1}{6}\sinh2t
  \\ &= \frac{1}{3}t+\frac{1}{3}\sinh t\cosh t
\end{align*}
```

### Reformulate
```math
\begin{align*}
  x &= \frac{1}{3}\sinh^{2}t
  \\ 3x &= \sinh^{2}t
  \\ \sqrt{3x} &= \sinh t
  \\ t &= \sinh^{-1}\sqrt{3x}
\end{align*}
```

```math
\begin{align*}
  \cosh t &= \sqrt{\sinh^{2}t+1}
  \\ &= \sqrt{3x+1}
\end{align*}
```

```math
\frac{1}{3}t+\frac{1}{3}\sinh t\cosh t
  = \frac{1}{3}\sinh^{-1}\sqrt{3x}+\frac{1}{3}\sqrt{3x}\sqrt{3x+1}-c
```
