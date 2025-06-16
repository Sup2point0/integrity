---
topic: integrals
title: evolver
desc: 
date: 2025 June 12
tags:
  - funny
  - ln
methods:
  - parts
---


## Question
```math
\int
  \left( \ln{x} \right)
  \left(
    \frac{d^{\,2}}{dx^2} \,
      x(\ln{x})^2
  \right)
\ dx
```


## Hints

### 1
The antiderivative of a derivative is the original expression.

### 2
If you use parts, you don’t need to carry out the differentation.

### 3
You know how to differentiate $\ln(x)$.


## Answer
```math
\left(\ln x\right)^{2}\left(\frac{2}{3}\ln x+1\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \left(\ln x\right)\left(\frac{d^{2}}{dx^{2}} \, x\left(\ln x\right)^{2}\right)\ dx
  \\ =&\ \int \left(\ln x\right)\frac{d}{dx}\left(\frac{d}{dx} \, x\left(\ln x\right)^{2}\right)\ dx
  \\ =&\ \int \left(\ln x\right)\frac{d}{dx}\left(\left(\ln x\right)^{2}+x\cdot\frac{2\left(\ln x\right)}{x}\right)\ dx
  \\ =&\ \int \left(\ln x\right)\frac{d}{dx}\left(\left(\ln x\right)^{2}+2\ln x\right)\ dx
\end{align*}
```

### Parts
```math
\begin{align*}
      f &= \ln x \quad&\quad g' &= \frac{d}{dx}\left(\left(\ln x\right)^{2}+2\ln x\right)
  \\ f' &= \frac{1}{x} \quad&\quad g &= \left(\ln x\right)^{2}+2\ln x
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ fg-\int f'g\ dx
  \\ =&\ \left(\ln x\right)\left(\left(\ln x\right)^{2}+2\ln x\right)-\int \frac{1}{x}\left(\left(\ln x\right)^{2}+2\ln x\right)\ dx
  \\ =&\ \left(\ln x\right)\left(\left(\ln x\right)^{2}+2\ln x\right)-\int \frac{\left(\ln x\right)^{2}}{x}dx-\int \frac{2\ln x}{x}\ dx
  \\ =&\ \left(\ln x\right)\left(\left(\ln x\right)^{2}+2\ln x\right)-\frac{1}{3}\left(\ln x\right)^{3}-\left(\ln x\right)^{2}-c
  \\ =&\ \left(\ln x\right)\left(\left(\left(\ln x\right)^{2}+2\ln x\right)-\frac{1}{3}\left(\ln x\right)^{2}-\left(\ln x\right)\right)
  \\ =&\ \left(\ln x\right)^{2}\left(\ln x+2-\frac{1}{3}\ln x-1\right)
  \\ =&\ \left(\ln x\right)^{2}\left(\frac{2}{3}\ln x+1\right)-c
\end{align*}
```
