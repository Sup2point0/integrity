---
topic: integrals
title: intensity
desc: 
date: 2025 March 22
difficulty: chaos
tags:
  - dread
  - poly
methods:
  - parts
---


## Question
```math
\int \frac{\left(x^{2}+2x\right)\left(1-2x^{3}\right)}{\left(x^{3}+1\right)^{2}}\ dx
```


## Hints

### 1
Write the integral as

```math
\int \left(x^{2}+2x\right)\cdot\frac{\left(x^{3}+1\right)-3x^{3}}{\left(x^{3}+1\right)^{2}}\ dx
```

### 2
$3x^3$ looks suspiciously like $3x^2 \cdot x$.

### 3
If you know what the fraction is the derivative of, you can integrate the fraction.


## Answer
```math
\frac{x^{3}+2x^{2}}{x^{3}+1}-\ln\left(x^{2}-x+1\right)-\frac{2\sqrt{3}}{3}\tan^{-1}\left(\frac{2\sqrt{3}}{3}\left(x-\frac{1}{2}\right)\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{\left(x^{2}+2x\right)\left(1-2x^{3}\right)}{\left(x^{3}+1\right)^{2}}\ dx
  \\ =&\ \int \left(x^{2}+2x\right)\cdot\frac{\left(x^{3}+1\right)-3x^{3}}{\left(x^{3}+1\right)^{2}}\ dx
\end{align*}
```

### Parts
Notice

```math
\begin{align*}
  \frac{d}{dx}\left(\frac{x}{x^{3}+1}\right)
    &= \frac{\left(x^{3}+1\right)-x\left(3x^{2}\right)}{\left(x^{3}+1\right)^{2}}
  \\ &= \frac{x^{3}+1-3x^{3}}{\left(x^{3}+1\right)^{2}}
\end{align*}
```

So we can integrate by parts:

```math
\begin{align*}
  f &= x^2+2x \quad&\quad g' &= \frac{\left(x^{3}+1\right)-3x^{3}}{\left(x^{3}+1\right)^{2}}
  \\ f' &= 2x+2 \quad&\quad g &= \frac{x}{x^{3}+1}
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ fg-\int f'g\ dx
  \\ =&\ \left(x^{2}+2x\right)\left(\frac{x}{x^{3}+1}\right)-\int \left(2x+2\right)\left(\frac{x}{x^{3}+1}\right)\ dx
  \\ =&\ \frac{x\left(x^{2}+2x\right)}{x^{3}+1}-\int \frac{x\left(2x+2\right)}{x^{3}+1}\ dx
  \\ =&\ \frac{x^{3}+2x^{2}}{x^{3}+1}-\int \frac{2x\left(x+1\right)}{\left(x+1\right)\left(x^{2}-x+1\right)}\ dx
  \\ =&\ \frac{x^{3}+2x^{2}}{x^{3}+1}-\int \frac{2x}{x^{2}-x+1}\ dx
  \\ =&\ \frac{x^{3}+2x^{2}}{x^{3}+1}-\int \frac{2x-1+1}{x^{2}-x+1}\ dx
  \\ =&\ \frac{x^{3}+2x^{2}}{x^{3}+1}-\int \frac{2x-1}{x^{2}-x+1}+\frac{1}{\left(x-1/2\right)^{2}+3/4}\ dx
  \\ =&\ \frac{x^{3}+2x^{2}}{x^{3}+1}-\ln\left(x^{2}-x+1\right)-\sqrt{\frac{4}{3}}\tan^{-1}\left(\sqrt{\frac{4}{3}}\left(x-\frac{1}{2}\right)\right)
  \\ =&\ \frac{x^{3}+2x^{2}}{x^{3}+1}-\ln\left(x^{2}-x+1\right)-\frac{2\sqrt{3}}{3}\tan^{-1}\left(\frac{2\sqrt{3}}{3}\left(x-\frac{1}{2}\right)\right)-c
\end{align*}
```
