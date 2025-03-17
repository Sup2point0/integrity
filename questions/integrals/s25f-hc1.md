---
topic: integrals
title: heavy is the chain
desc: 
date: 2025 March 13
tags:
  - poly
methods:
  - trig sub
---


## Question
```math
\int
  \frac
    { 1 }
    { x^{2160}\sqrt{1 - x^{2159}} }
\ dx
```


## Hints

### 1
We will need to substitute $x^{2159}$. What power of $x$ would you require in the numerator to make this substitution?

### 2
$2160 = 2159 + 1$.


## Answer
```math
-\frac{1}{2159}\left(\frac{\sqrt{1-x^{2159}}}{x^{2159}}+\ln\left(\frac{1+\sqrt{1-x^{2159}}}{\sqrt{x^{2159}}}\right)\right)-c
```


## Solution

### Substitute (1)
```math
\begin{align*}
  x^{2159} &= t
  \\ 2159x^{2158}\ dx &= dt
  \\ dx &= \frac{1}{2159x^{2158}}\ dt
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  &\ \int \frac{1}{x^{2160}\sqrt{1-x^{2159}}}\ dx
  \\ =&\ \int \frac{1}{x^{2160}\sqrt{1-t}}\cdot\frac{1}{2159x^{2158}}\ dt
  \\ =&\ \frac{1}{2159}\int \frac{1}{x^{4318}\sqrt{1-t}}\ dt
  \\ =&\ \frac{1}{2159}\int \frac{1}{\left(x^{2159}\right)^{2}\sqrt{1-t}}\ dt
  \\ =&\ \frac{1}{2159}\int \frac{1}{t^{2}\sqrt{1-t}}\ dt
\end{align*}
```

### Substitute (2)
```math
\begin{align*}
  t &= \cos^{2}v
  \\ dt &= \left(2\cos v\cdot-\sin v\ \right)\ dv
  \\ &= -2\sin v\cos v\ dv
\end{align*}
```

### Solve (2)
```math
\begin{align*}
  &= \frac{1}{2159}\int \frac{1}{\left(\cos^{2}v\right)^{2}\sqrt{1-\cos^{2}v}}\cdot-2\sin v\cos v\ dv
  \\ &= -\frac{2}{2159}\int \frac{\left(\sin v\right)\left(\cos v\right)}{\left(\cos v\right)^{4}\left(\sin v\right)}\ dv
  \\ &= -\frac{2}{2159}\int \frac{1}{\left(\cos v\right)^{3}}\ dv
  \\ &= -\frac{2}{2159}\int \sec^{3}v\ dv
  \\ &= -\frac{2}{2159}\cdot\frac{1}{2}\left(\sec v\tan v+\ln\left(\sec v+\tan v\right)\right)
  \\ &= -\frac{1}{2159}\left(\frac{\sin v}{\cos^{2}v}+\ln\left(\frac{1+\sin v}{\cos v}\right)\right)
  \\ &= -\frac{1}{2159}\left(\frac{\sqrt{1-t}}{t}+\ln\left(\frac{1+\sqrt{1-t}}{\sqrt{t}}\right)\right)
  \\ &= -\frac{1}{2159}\left(\frac{\sqrt{1-x^{2159}}}{x^{2159}}+\ln\left(\frac{1+\sqrt{1-x^{2159}}}{\sqrt{x^{2159}}}\right)\right)-c
\end{align*}
```
