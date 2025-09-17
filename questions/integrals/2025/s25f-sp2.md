---
topic: integrals
title: duality
desc: Celebrating 200 integrals on <em>Integrity</em>!!
date: 2025 April 15
difficulty: incline
tags:
  - scare
  - exp
  - ln
methods:
  - fun
  - sub
flags:
  - feat
---


## Question
```math
\int
  \frac
    { \log_{200}(x) }
    { x }
  \, 200^{\,\ln{x}}
\ dx
```


## Hints

### 1
Start by rewriting $\log_{200}(x)$.

### 2
Then rewrite $200^{\,\ln{x}}$.

### 3
If you’re stuck, there are at least 199 other integrals on *Integrity*! :P

### 4
Sometimes, parts is acceptable.


## Answer
```math
\frac{x^{\left(\ln200\right)}}{\ln\left(200\right)^{3}}\left(\ln200\ln x-1\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{\log_{200}\left(x\right)}{x}200^{\ln x}\ dx
  \\ =&\ \int \frac{1}{x}\cdot\frac{\ln x}{\ln200}\cdot e^{\left(\ln200\right)\left(\ln x\right)}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \ln x & =t
  \\ \frac{1}{x}\ dx & =dt
\end{align*}
```

### Parts
```math
\begin{align*}
  &= \int \frac{t}{\ln200}e^{\left(\ln200\right)t}\ dt
  \\ &= \frac{1}{\ln200}\left(t\cdot\frac{1}{\ln200}e^{\left(\ln200\right)t}-\int \frac{1}{\ln200}e^{\left(\ln200\right)t}\ dt\right)
  \\ &= \frac{1}{\ln200}\left(t\cdot\frac{1}{\ln200}e^{\left(\ln200\right)t}-\frac{1}{\left(\ln200\right)^{2}}e^{\left(\ln200\right)t}\right)
  \\ &= \frac{1}{\left(\ln200\right)^{2}}\left(t\cdot200^{t}-\frac{1}{\ln200}200^{t}\right)
  \\ &= \frac{200^{t}}{\left(\ln200\right)^{3}}\left(t\ln200-1\right)
  \\ &= \frac{200^{\left(\ln x\right)}}{\left(\ln200\right)^{3}}\left(\ln200\ln x-1\right)-c
  \\ &= \frac{x^{\ln200}}{\left(\ln200\right)^{3}}\left(\ln200\ln x-1\right)-c
\end{align*}
```


## Alternates

### Straight-Up Parts
You can also just head straight in without the substitution!

```math
\begin{align*}
  &\ \int \frac{\log_{200}\left(x\right)}{x}200^{\ln x}\ dx
  \\ =&\ \int \frac{1}{x}\cdot\frac{\ln x}{\ln200}\cdot e^{\left(\ln200\right)\left(\ln x\right)}\ dx
  \\ =&\ \frac{1}{\ln200}\int \frac{\ln x}{x}\cdot x^{\left(\ln200\right)}\ dx
  \\ =&\ \frac{1}{\ln200}\int \ln x\cdot x^{\left(\ln200-1\right)}\ dx
\end{align*}
```

```math
\begin{align*}
      f &= \ln x \quad&\quad g' &= x^{\left(\ln200-1\right)}
  \\ f' &= \frac{1}{x} \quad&\quad g &= \frac{1}{\ln200}x^{\left(\ln200\right)}
\end{align*}
```

```math
\begin{align*}
  &\ \frac{1}{\ln200}\left(fg-\int f'g\ dx\right)
  \\ =&\ \frac{1}{\ln200}\left(\ln x\cdot\frac{1}{\ln200}x^{\left(\ln200\right)}-\int \frac{1}{x}\cdot\frac{1}{\ln200}x^{\left(\ln200\right)}\ dx\right)
  \\ =&\ \frac{1}{\ln200}\left(\frac{\ln x}{\ln200}x^{\left(\ln200\right)}-\frac{1}{\ln200}\int x^{\left(\ln200-1\right)}\ dx\right)
  \\ =&\ \frac{1}{\ln200}\left(\frac{\ln x}{\ln200}x^{\left(\ln200\right)}-\frac{1}{\left(\ln200\right)^{2}}x^{\left(\ln200\right)}\right)
  \\ =&\ \frac{x^{\left(\ln200\right)}}{\ln\left(200\right)^{2}}\left(\ln x-\frac{1}{\ln200}\right)
  \\ =&\ \frac{x^{\left(\ln200\right)}}{\ln\left(200\right)^{3}}\left(\ln200\ln x-1\right)-c
\end{align*}
```
