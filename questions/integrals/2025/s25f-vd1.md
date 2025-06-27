---
topic: integrals
title: rewarp
desc: 
date: 2025 January 21
tags:
  - scare
  - poly
methods:
  - trig sub
---


## Question
```math
\int
  \frac
    {x^{34}}
    {(1 - x)^{36}}
\ dx
```


## Hints

### 1
Does $1-x$ look familiar?

### 2
What could you turn $1-x$ into?

### 3
What if you try make the exponents in the numerator and denominator the same?


## Answer
```math
\frac{1}{35}\left(\frac{x}{1-x}\right)^{35}-c
```


## Solution

### Substitute (1)
```math
\begin{align*}
  x &= \sin^{2}t
  \\ dx &= 2\sin t\cos t\ dt
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  &\ \int \frac{x^{34}}{\left(1-x\right)^{36}}\ dx
  \\ =&\ \int \frac{\left(\sin^{2}t\right)^{34}}{\left(1-\sin^{2}t\right)^{36}}\cdot2\sin t\cos t\ dt
  \\ =&\ 2\int \frac{\left(\sin t\right)^{69}}{\left(\cos t\right)^{71}}\ dt
  \\ =&\ 2\int \left(\tan t\right)^{69}\left(\sec^{2}t\right)\ dt
\end{align*}
```

### Substitute (2)
```math
\begin{align*}
  \tan{t} &= v
  \\ \sec^2{t}\ dt &= dv
\end{align*}
```

### Solve (2)
```math
\begin{align*}
  &= 2\int v^{69}\ dv
  \\ &= \frac{2}{70}\ v^{70}
  \\ &= \frac{1}{35}\left(\tan t\right)^{70}
  \\ &= \frac{1}{35}\left(\frac{\sin t}{\cos t}\right)^{70}
  \\ &= \frac{1}{35}\left(\frac{\sqrt{x}}{\sqrt{1-x}}\right)^{70}
  \\ &= \frac{x^{35}}{35\left(1-x\right)^{35}}-c
  \\ &= \frac{1}{35}\left(\frac{x}{1-x}\right)^{35}-c
\end{align*}
```


## Alternates

### _
Thanks to my friend <a target="_blank" href="https://github.com/itechnicals">iTechnical</a> for finding this (probably simpler) solution!

```math
\int \frac{x^{34}}{\left(1-x\right)^{36}}\ dx
```

### Substitute (1)
```math
\begin{align*}
  1-x &= t \quad\to\quad x = 1-t
  \\ -dx &= dt
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  &= \int \frac{\left(1-t\right)^{34}}{t^{36}}\cdot-dt
  \\ &= \int \frac{\left(1-t\right)^{34}}{t^{34}}\cdot-\frac{1}{t^{2}}\ dt
  \\ &= \int \left(\frac{1-t}{t}\right)^{34}\cdot-\frac{1}{t^{2}}\ dt
  \\ &= \int \left(\frac{1}{t}-1\right)^{34}\cdot-\frac{1}{t^{2}}\ dt
\end{align*}
```

### Substitute (2)
```math
\begin{align*}
  \frac{1}{t}-1 &= v
  \\ -\frac{1}{t^{2}}\ dt &= dv
\end{align*}
```

### Solve (2)
```math
\begin{align*}
  &= \int v^{34}\ dv
  \\ &= \frac{1}{35}v^{35}
  \\ &= \frac{1}{35}\left(\frac{1}{t}-1\right)^{35}
  \\ &= \frac{1}{35}\left(\frac{1-t}{t}\right)^{35}
  \\ &= \frac{1}{35}\left(\frac{x}{1-x}\right)^{35}-c
\end{align*}
```
