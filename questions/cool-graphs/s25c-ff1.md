---
topic: integrals
title: dreams of light
desc: The final integral for our Integration Bee 2025.
date: 2025 April 2
tags:
  - frac
  - trig
  - exp
methods:
  - sub
  - parts
flags:
  - feat
---


## Question
```math
\int
  \frac
    { 2025^{\,\sin{x}} }
    { \tan{x} + \cot{x} }
\ dx
```


## Hints

### 1
Write the denominator in terms of $\sin$ and $\cos$ primitives.

### 2
What could you multiply through by?

### 3
What’s the relationship between $\sin$ and $\cos$?

### 4
Write the integral like

```math
\int \sin{x} \cdot 2025^{\sin{x}} \cdot \cos{x} \ dx
```


## Answer
```math
\frac{1}{2\ln45}45^{2\sin x}\left(\sin x-\frac{1}{2\ln45}\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{2025^{\sin x}}{\tan x+\cot x}\ dx
  \\ =&\ \int 2025^{\sin x}\cdot\frac{1}{\frac{\sin x}{\cos x}+\frac{\cos x}{\sin x}}\ dx
  \\ =&\ \int 2025^{\sin x}\cdot\frac{1}{\frac{\sin x}{\cos x}+\frac{\cos x}{\sin x}}\cdot\frac{\sin x\cos x}{\sin x\cos x}\ dx
  \\ =&\ \int 2025^{\sin x}\cdot\frac{\sin x\cos x}{\sin^{2}x+\cos^{2}x}\ dx
  \\ =&\ \int 2025^{\sin x}\cdot\sin x\cos x\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \sin x &= t
  \\ \cos x\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int 2025^{t}\cdot t\ dt
  \\ &= \int te^{\left(\ln2025\right)t}
\end{align*}
```

### Parts
```math
\begin{align*}
  &= t\cdot\frac{1}{\ln2025}e^{\left(\ln2025\right)t}-\int \frac{1}{\ln2025}e^{\left(\ln2025\right)t}\ dt
  \\ &= \frac{t}{\ln2025}2025^{t}-\frac{1}{\left(\ln2025\right)^{2}}2025^{t}
  \\ &= \frac{1}{\ln2025}2025^{t}\left(t-\frac{1}{\ln2025}\right)
  \\ &= \frac{1}{2\ln45}45^{2t}\left(t-\frac{1}{2\ln45}\right)
  \\ &= \frac{1}{2\ln45}45^{2\sin x}\left(\sin x-\frac{1}{2\ln45}\right)-c
\end{align*}
```
