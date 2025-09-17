---
topic: integrals
title: JMWCQ
desc: 
date: 2025 April 16
difficulty: manifold
tags:
  - sqrt
  - trig
methods:
  - tough
  - spot
---


## Question
```math
\int
  \frac
    { \sin{x} - \cos{x} }
    { \sqrt{
      1 + \sin{x}\cos{x}
    } }
\ dx
```


## Hints

### 1
What is the numerator the derivative of?

### 2
How could you get that within the $\sqrt{}$?

### 3
Multiply the inside of the $\sqrt{}$ by $2$.

### 4
Write $2$ as $1 + 1$.

### 5
What identity equals $1$?

### 6
Starts with “f” and rhymes with *tractorise*.


## Answer
```math
-\sqrt{2}\sinh^{-1}\left(\sin x+\cos x\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{\sin x-\cos x}{\sqrt{1+\sin x\cos x}}\ dx
  \\ =&\ \int \frac{\sin x-\cos x}{\sqrt{1+\sin x\cos x}}\cdot\frac{\sqrt{2}}{\sqrt{2}}\ dx
  \\ =&\ \sqrt{2}\int \frac{\sin x-\cos x}{\sqrt{2+2\sin x\cos x}}\ dx
  \\ =&\ \sqrt{2}\int \frac{\sin x-\cos x}{\sqrt{1+2\sin x\cos x+1}}\ dx
  \\ =&\ \sqrt{2}\int \frac{\sin x-\cos x}{\sqrt{\sin^{2}x+\cos^{2}x+2\sin x\cos x+1}}\ dx
  \\ =&\ \sqrt{2}\int \frac{\sin x-\cos x}{\sqrt{\left(\sin x+\cos x\right)^{2}+1}}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \sin x+\cos x &= t
  \\ \left(\cos x-\sin x\right)\ dx &= dt
  \\ \left(\sin x-\cos x\right)\ dx &= -dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \sqrt{2}\int \frac{1}{\sqrt{t^{2}+1}}\cdot-dt
  \\ &= -\sqrt{2}\int \frac{1}{\sqrt{t^{2}+1}}\ dt
  \\ &= -\sqrt{2}\sinh^{-1}\left(t\right)
  \\ &= -\sqrt{2}\sinh^{-1}\left(\sin x+\cos x\right)-c
\end{align*}
```
