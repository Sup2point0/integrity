---
topic: integrals
title: ammunition
desc: 
date: 2025 January 4
tags:
  - trig
  - exp
  - fun
method:
  - spot
  - sub
---


## Question
```math
\int \frac{e^{\left(1+\sqrt{\tan x}\right)}}{\cos^{2}x\sqrt{\tan x}}\ dx
```


## Hints

### 1
Dividing by $\cos^2{x}$ should look familiar...

### 2
There’s a lot of substitutions we could do here.

### 3
It doesn’t matter how large of a substitution you make, just try stuff and keep reducing!


## Answer
```math
2e^{\left(1+\sqrt{\tan x}\right)}-c
```


## Solution

### Clean
```math
\begin{align*}
  &\ \int \frac{e^{\left(1+\sqrt{\tan x}\right)}}{\cos^{2}x\sqrt{\tan x}}\ dx
  \\ =&\ \int e^{\left(1+\sqrt{\tan x}\right)}\cdot\frac{1}{\sqrt{\tan x}}\cdot\sec^{2}x\ dx
\end{align*}
```

### Substitute (1)
```math
\begin{align*}
  \tan{x} &= t
  \\ \sec^2{x}\ dx &= dt
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  &= \int e^{\left(1+\sqrt{t}\right)}\cdot\frac{1}{\sqrt{t}}\ dt
\end{align*}
```

### Substitute (2)
```math
\begin{align*}
  \sqrt{t} &= v
  \\ t &= v^2
  \\ dt &= 2v\ dv
\end{align*}
```

### Solve (2)
```math
\begin{align*}
  &= \int e^{\left(1+v\right)}\cdot\frac{1}{v}\cdot2v\ dv
  \\ &= 2\int e^{\left(1+v\right)}\ dv
  \\ &= 2e^{\left(1+v\right)}
  \\ &= 2e^{\left(1+\sqrt{t}\right)}
  \\ &= 2e^{\left(1+\sqrt{\tan x}\right)}-c
\end{align*}
```


## Alternates

Especially eager-eyed integrators may spot the substitution in one step:

```math
\begin{align*}
  1 + \sqrt{\tan{x}} &= t
  \\ \frac{\sec^2{x}}{2\sqrt{\tan{x}}}\ dx &= dt
\end{align*}
```

This cancels everything out immediately:

```math
\begin{align*}
  &\ \int \frac{e^{\left(1+\sqrt{\tan x}\right)}}{\cos^{2}x\sqrt{\tan x}}\ dx
  \\ =&\ 2\int e^{t}\ dt
  \\ =&\ 2e^{t}
  \\ =&\ 2e^{\left(1+\sqrt{\tan x}\right)}-c
\end{align*}
```
