---
topic: integrals
title: MISFITS
desc: 
date: 2025 March 27
tags:
 - poly
  - sqrt
methods:
  - sub
---


## Question
```math
\int
  \frac
    { \sqrt{1 - x^{9099}} }
    { x }
\ dx
```


## Hints

### 1
Honestly, sometimes you can just substitute and hope for the best.


## Answer
```math
\frac{2}{9099}\left(\sqrt{1-x^{9099}}-\tanh^{-1}\sqrt{1-x^{9099}}\right)-c
```


## Solution

### Substitute (1)
```math
\begin{align*}
  1-x^{9099} &= t \quad\to\quad x^{9099}=1-t
  \\ -9099x^{9098}\ dx &= dt
  \\ dx &= -\frac{1}{9099x^{9098}}\ dt
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  &\ \int \frac{\sqrt{1-x^{9099}}}{x}\ dx
  \\ =&\ \int \frac{\sqrt{t}}{x}\cdot-\frac{1}{9099x^{9098}}\ dt
  \\ =&\ -\frac{1}{9099}\int \frac{\sqrt{t}}{x^{9099}}\ dt
  \\ =&\ -\frac{1}{9099}\int \frac{\sqrt{t}}{1-t}\ dt
  \\ =&\ \frac{1}{9099}\int \frac{\sqrt{t}}{t-1}\ dt
\end{align*}
```

### Substitute (2)
```math
\begin{align*}
  \sqrt{t} &= v
  \\ t &= v^{2}
  \\ dt &= 2v\ dv
\end{align*}
```

### Solve (2)
```math
\begin{align*}
  &= \frac{1}{9099}\int \frac{v}{v^{2}-1}\cdot2v\ dv
  \\ &= \frac{2}{9099}\int \frac{v^{2}}{v^{2}-1}\ dv
  \\ &= \frac{2}{9099}\int \frac{v^{2}-1+1}{v^{2}-1}\ dv
  \\ &= \frac{2}{9099}\int 1+\frac{1}{v^{2}-1}\ dv
  \\ &= \frac{2}{9099}\int 1-\frac{1}{1-v^{2}}\ dv
  \\ &= \frac{2}{9099}\left(v-\tanh^{-1}v\right)
  \\ &= \frac{2}{9099}\left(\sqrt{t}-\tanh^{-1}\sqrt{t}\right)
  \\ &= \frac{2}{9099}\left(\sqrt{1-x^{9099}}-\tanh^{-1}\sqrt{1-x^{9099}}\right)-c
\end{align*}
```
