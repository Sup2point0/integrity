---
topic: integrals
title: sonus
desc:  when doing the thing you love destroys your very ability to do that thing
date:  2025 June 14
difficulty: incline
tags:
  - definite
  - inverse trig
methods:
  - work
---


## Question
```math
\int_{20}^{20000}
  x \sin^{-1}\left(
    \frac{x}{20000}
  \right)
\ dx
```


## Hints

### 1
The integral can be solved indefinitely.

### 2
It’s $\sin^{-1}(x)$, so you of course want parts!

### 3
Substitute in the limits and simplify as far as you can.


## Answer
```math
10^{8}\arcsin\left(1\right)+\left(10^{8}-200\right)\arcsin\left(0.001\right)-100\sqrt{10^{6}-1}
```


## Solution

### Substitute
```math
\begin{align*}
  \frac{x}{20000} &= t
  \\ x &= 20000t
  \\ dx &= 20000\ dt
\end{align*}
```

### Solve Indefinitely
```math
\begin{align*}
  &\  x\arcsin\left(\frac{x}{20000}\right)\ dx
  \\ =&\  20000t\arcsin t\cdot20000\ dt
  \\ =&\ 4\cdot10^{8} t\arcsin t\ dt
  \\ =&\ 4\cdot10^{8}\left[\frac{1}{2}t^{2}\arcsin t- \frac{1}{2}t^{2}\cdot\frac{1}{\sqrt{1-t^{2}}}\ dt\right]
  \\ =&\ 2\cdot10^{8}t^{2}\arcsin t-2\cdot10^{8} \frac{t^{2}}{\sqrt{1-t^{2}}}\ dt
\end{align*}
```

### Substitute
```math
\begin{align*}
  t &= \sin v
  \\ dt &= \cos v\ dv
\end{align*}
```

### Solve Indefinitely
```math
\begin{align*}
  &= 2\cdot10^{8}t^{2}\arcsin t-2\cdot10^{8} \frac{\sin^{2}v}{\sqrt{1-\sin^{2}v}}\cdot\cos v\ dv
  \\ &= 2\cdot10^{8}t^{2}\arcsin t-2\cdot10^{8} \sin^{2}v\ dv
  \\ &= 2\cdot10^{8}t^{2}\arcsin t-10^{8} 1-\cos2v\ dv
  \\ &= 2\cdot10^{8}t^{2}\arcsin t-10^{8}v+\frac{10^{8}}{2}\sin2v
  \\ &= 2\cdot10^{8}t^{2}\arcsin t-10^{8}v+10^{8}\sin v\cos v
  \\ &= 2\cdot10^{8}t^{2}\arcsin t-10^{8}\arcsin t+10^{8}t\sqrt{1-t^{2}}
  \\ &= 10^{8}\left(\arcsin t\right)\left(2t^{2}-1\right)+10^{8}t\sqrt{1-t^{2}}
  \\ &= 10^{8}\arcsin\left(\frac{x}{20000}\right)\left(2\left(\frac{x}{20000}\right)^{2}-1\right)+10^{8}\left(\frac{x}{20000}\right)\sqrt{1-\left(\frac{x}{20000}\right)^{2}}-c
  \\ &= \left(\frac{1}{2}x^{2}-10^{8}\right)\arcsin\left(\frac{x}{20000}\right)+5000x\sqrt{1-\left(\frac{x}{20000}\right)^{2}}-c
\end{align*}
```

### Evaluate
```math
\begin{align*}
  &\ \int_{20}^{20000}x\sin^{-1}\left(\frac{x}{20000}\right)\ dx
  \\ =&\ \left[\left(\frac{1}{2}x^{2}-10^{8}\right)\arcsin\left(\frac{x}{20000}\right)+5000x\sqrt{1-\left(\frac{x}{20000}\right)^{2}}\right]_{20}^{20000}
  \\ =&\ \left[\left(\frac{1}{2}\cdot20000^{2}-10^{8}\right)\arcsin\left(\frac{20000}{20000}\right)+5000\cdot20000\sqrt{1-\left(\frac{20000}{20000}\right)^{2}}\right]-\left[\left(\frac{1}{2}\cdot20^{2}-10^{8}\right)\arcsin\left(\frac{20}{20000}\right)+5000\cdot20\sqrt{1-\left(\frac{20}{20000}\right)^{2}}\right]
  \\ =&\ \left[10^{8}\arcsin\left(1\right)+10^{8}\sqrt{1-1}\right]-\left[\left(200-10^{8}\right)\arcsin\left(0.001\right)+10^{5}\sqrt{1-10^{-6}}\right]
  \\ =&\ 10^{8}\arcsin\left(1\right)-\left(200-10^{8}\right)\arcsin\left(0.001\right)-10^{5}\sqrt{1-10^{-6}}
  \\ =&\ 10^{8}\arcsin\left(1\right)+\left(10^{8}-200\right)\arcsin\left(0.001\right)-10^{5}\sqrt{\frac{10^{6}-1}{10^{6}}}
  \\ =&\ 10^{8}\arcsin\left(1\right)+\left(10^{8}-200\right)\arcsin\left(0.001\right)-100\sqrt{10^{6}-1}
\end{align*}
```

(Numerical answer is irrelevant, fun is in the algebra ;)
