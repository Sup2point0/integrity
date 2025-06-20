---
topic: integrals
title: origami
desc: 
date: 2025 January 12
tags:
  - ln
methods:
  - spot
  - sub
---


## Question
```math
\int
  \frac
    {\ln\left(\ln\left(x^e\right)\right)}
    {ex\ln\left(x^e\right)}
\ dx
```


## Hints

### 1
Those $x^e$ look scary, but they don’t actually mean anything!

### 2
Start with a substitution.

### 3
You’ll need many more substitutions.


## Answer
```math
\frac{1}{2e^{2}}\left(\ln\left(e\ln x\right)\right)^{2}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{\ln\left(\ln\left(x^e\right)\right)}{ex\ln\left(x^e\right)}\ dx
  \\ =&\ \int \frac{\ln\left(e\ln x\right)}{e^{2}x\ln x}\ dx
\end{align*}
```

### Substitute (1)
```math
\begin{align*}
  \ln{x} &= t
  \\ \frac{1}{x}\ dx &= dt
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  &= \int \frac{\ln\left(et\right)}{e^{2}t}\ dt
  \\ &= \frac{1}{e}\int \frac{\ln\left(et\right)}{et}\ dt
\end{align*}
```

### Substitute (2)
```math
\begin{align*}
  et &= v
  \\ e\ dt &= dv
  \\ dt &= \frac{1}{e}\ dv
\end{align*}
```

### Solve (2)
```math
\begin{align*}
  &= \frac{1}{e}\int \frac{\ln\left(v\right)}{v}\cdot\frac{1}{e}\ dv
  \\ &= \frac{1}{e^{2}\ }\int \frac{1}{v}\ln v\ dv
\end{align*}
```

### Substitute (3)
```math
\begin{align*}
  \ln{v} &= w
  \\ \frac{1}{v}\ dv &= dw
\end{align*}
```

### Solve (3)
```math
\begin{align*}
  &= \frac{1}{e^{2}}\int w\ dw
  \\ &= \frac{1}{2e^{2}}w^{2}
  \\ &= \frac{1}{2e^{2}}\left(\ln v\right)^{2}
  \\ &= \frac{1}{2e^{2}}\left(\ln\left(et\right)\right)^{2}
  \\ &= \frac{1}{2e^{2}}\left(\ln\left(e\ln x\right)\right)^{2}-c
\end{align*}
```


## Alternates

You may also spot the whole denominator is the derivative of the numerator:

```math
\begin{align*}
  &\ \int \frac{\ln\left(\ln\left(x^e\right)\right)}{ex\ln\left(x^e\right)}\ dx
  \\ =&\ \int \frac{1}{e^{2}x\ln x}\ln\left(e\ln x\right)\ dx
  \\ =&\ \int \frac{1}{e^{2}}\cdot\frac{1}{e\ln x}\cdot\frac{e}{x}\cdot\ln\left(e\ln x\right)\ dx
  \\ =&\ \int \frac{1}{e^{2}}\cdot\frac{1}{e\ln x}\cdot\frac{e}{x}\cdot\ln\left(e\ln x\right)\ dx
\end{align*}
```

Substituting the numerator:

```math
\begin{align*}
  \ln\left(e\ln x\right) &= t
  \\ \frac{1}{e\ln x}\cdot\frac{e}{x}\ dx &= dt
\end{align*}
```

So we have:

```math
\begin{align*}
  &= \frac{1}{e^{2}}\int t\ dt
  \\ &= \frac{1}{2e^{2}}t^{2}
  \\ &= \frac{1}{2e^{2}}\left(\ln\left(e\ln x\right)\right)^{2}-c
\end{align*}
```
