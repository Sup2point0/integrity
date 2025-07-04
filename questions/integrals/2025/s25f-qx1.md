---
topic: integrals
title: pretend like it’s the first time
desc: 
date: 2025 March 27
difficulty: based
tags:
  - scare
  - sqrt
methods:
  - speed
---


## Question
```math
\int
  \sqrt{ \sqrt{ \sqrt{x} } }
\ dx
```


## Answer
```math
\frac{8}{9}x^{9/8}-c
```


## Solution

### Substitute (1)
```math
\begin{align*}
  \sqrt{x} &= t
  \\ x &= t^2
  \\ dx &= 2t \ dt
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  &\ \int \sqrt{\sqrt{\sqrt{x}}}\ dx
  \\ =&\ \int \sqrt{\sqrt{t}}\cdot2t\ dt
  \\ =&\ 2\int t\cdot\sqrt{\sqrt{t}}\ dt
\end{align*}
```

### Substitute (2)
```math
\begin{align*}
  \sqrt{t} &= v
  \\ t &= v^2
  \\ dt &= 2v \ dt
\end{align*}
```

### Solve (2)
```math
\begin{align*}
  &= 2\int v^{2}\cdot\sqrt{v}\cdot2v\ dv
  \\ &= 4\int v^{3}\cdot\sqrt{v}\ dv
\end{align*}
```

### Substitute (3)
```math
\begin{align*}
  \sqrt{v} &= w
  \\ v &= w^2
  \\ dv &= 2w \ dt
\end{align*}
```

### Solve (3)
```math
\begin{align*}
  &= 4\int \left(w^{2}\right)^{3}\cdot w\cdot2w\ dw
  \\ &= 8\int w^{8}\ dw
  \\ &= \frac{8}{9}w^{9}
  \\ &= \frac{8}{9}\left(\sqrt{v}\right)^{9}
  \\ &= \frac{8}{9}\left(\sqrt{\sqrt{t}}\right)^{9}
  \\ &= \frac{8}{9}\left(\sqrt{\sqrt{\sqrt{x}}}\right)^{9}-c
\end{align*}
```


## Alternates

Alternatively, we may recognise this as power rule (this method is very hard):

```math
\begin{align*}
  &\ \int \sqrt{\sqrt{\sqrt{x}}}\ dx
  \\ =&\ \int x^{1/8}\ dx
  \\ =&\ \frac{8}{9}x^{9/8}-c
\end{align*}
```
