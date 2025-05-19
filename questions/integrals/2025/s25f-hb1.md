---
topic: integrals
title: seven
desc: 
date: 2025 May 9
tags:
  - scare
  - trig
  - ln
methods:
  - spot
---


## Question
```math
\int
  \left(
    \sin{x} + x\cos{x} - x\sin{x}\tan{x}
  \right)
  \left(
    \sec{x}
  \right)
  \left(
    \ln{x}
  \right)
\ dx
```


## Hints

### 1
Multiply out the $(\sec{x})$.

### 2
The stuff inside the left parentheses looks awfully like inverse product rule, doesn’t it?

### 3
Differentiate $x\tan(x)$.


## Answer
```math
x\left(\ln x\right)\left(\tan x\right)+\ln\left(\cos x\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \left(\sin x+x\cos x+x\sin x\tan x\right)\left(\sec x\right)\left(\ln x\right)\ dx
  \\ =&\ \int \left(\frac{\sin x+x\cos x+x\sin x\tan x}{\cos x}\right)\left(\ln x\right)\ dx
  \\ =&\ \int \left(\tan x+x+x\tan^{2}x\right)\left(\ln x\right)\ dx
  \\ =&\ \int \left(\tan x+x+x\left(\sec^{2}x-1\right)\right)\left(\ln x\right)\ dx
  \\ =&\ \int \left(\tan x+x\sec^{2}x\right)\left(\ln x\right)\ dx
\end{align*}
```

Notice

```math
\begin{align*}
  \frac{d}{dx}\left(x\tan x\right) &= 1\cdot\tan x+x\cdot\sec^{2}x
  \\ &= \tan x+x\sec^{2}x
\end{align*}
```

### Parts
```math
\begin{align*}
      f &= \ln x \quad&\quad g' &= \tan x+x\sec^{2}x
  \\ f' &= \frac{1}{x} \quad&\quad g &= x\tan x
\end{align*}
```

### Reshape
```math
\begin{align*}
  &\ fg-\int f'g\ dx
  \\ =&\ \left(\ln x\right)\left(x\tan x\right)-\int \frac{1}{x}\left(x\tan x\right)\ dx
  \\ =&\ x\left(\ln x\right)\left(\tan x\right)-\int \tan x\ dx
  \\ =&\ x\left(\ln x\right)\left(\tan x\right)+\ln\left(\cos x\right)-c
\end{align*}
```
