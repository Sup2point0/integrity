---
topic: integrals
title: absolute horror.
desc: 
date: 2025 June 9
difficulty: chaos
tags:
  - horror
  - trig
  - ln
methods:
  - tough
  - spot
---


## Question
```math
\int
  \frac
    { \tan{x} + \left( x\ln{x} \right)^{-1} }
    {
      \left( \ln{x}\tan{x} \right)^2 +
      \left( \ln{x} + 1 \right)^2 -
      \ln( x^2 )
    }
\ dx
```


## Hints

### 1
Start by simplifying the denominator.

### 2
Use the fact that $\tan(x)^2 + 1 = \sec(x)^2$.

### 3
Try getting the denominator into a form involving only $\ln(x)\sec(x)$.

### 4
Now substitute!

### 5
The rest is partial fractions.


## Answer
```math
\ln\left(\ln x\sec x\right)-\frac{1}{2}\ln\left(\left(\ln x\sec x\right)^{2}+1\right)
```


## Solution

### Factorise
```math
\begin{align*}
  &\ \frac{\tan x+\left(x\ln x\right)^{-1}}{\left(\ln x\tan x\right)^{2}+\left(\ln x+1\right)^{2}-\ln\left(x^{2}\right)}
  \\ =&\ \int \frac{\tan x+\left(x\ln x\right)^{-1}}{\left(\ln x\right)^{2}\left(\tan x\right)^{2}+\left(\ln x\right)^{2}+2\ln x+1-2\ln x}\ dx
  \\ =&\ \int \frac{\tan x+\left(x\ln x\right)^{-1}}{\left(\ln x\right)^{2}\left(\tan^{2}x+1\right)+1}\ dx
  \\ =&\ \int \frac{\tan x+\left(x\ln x\right)^{-1}}{\left(\ln x\right)^{2}\left(\sec^{2}x\right)+1}\ dx
  \\ =&\ \int \frac{\tan x+\left(x\ln x\right)^{-1}}{\left(\ln x\sec x\right)^{2}+1}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \ln x\sec x &= t
  \\ \left(\frac{1}{x}\sec x+\ln x\sec x\tan x\right)\ dx &= dt
  \\ \left(\frac{1}{x\ln x}\left(\ln x\sec x\right)+\left(\ln x\sec x\right)\left(\tan x\right)\right)\ dx &= dt
  \\ \left(\ln x\sec x\right)\left(\left(x\ln x\right)^{-1}+\tan x\right)\ dx &= dt
  \\ \left(\tan x+\left(x\ln x\right)^{-1}\right)\ dx &= \frac{1}{t}\ dt
\end{align*}
```

### Simplify
```math
\begin{align*}
  &= \int \frac{1}{t^{2}+1}\cdot\frac{1}{t}\ dt
  \\ &= \int \frac{1}{t\left(t^{2}+1\right)}\ dt
\end{align*}
```

### Partial Fractions
```math
\begin{align*}
  \frac{1}{t\left(t^{2}+1\right)} &= \frac{p}{t}+\frac{qt+r}{t^{2}+1}
  \\ 1 &= p\left(t^{2}+1\right)+qt^{2}+rt
\end{align*}
```

Let $t = 0$:

```math
\begin{align*}
  1 &= p\left(0+1\right)+0+0
  \\ p &= 1
\end{align*}
```

Equate coefficients of $t^2$:

```math
\begin{align*}
  0 &= p+q
  \\ q &= -p
  \\   &= -1
\end{align*}
```

Equate coefficients of $t$:

```math
0 = r
```

### Solve
```math
\begin{align*}
  &\ \int \frac{1}{t\left(t^{2}+1\right)}\ dt
  \\ =&\ \int \frac{1}{t}-\frac{t}{t^{2}+1}\ dt
  \\ =&\ \ln t-\frac{1}{2}\ln\left(t^{2}+1\right)
  \\ =&\ \ln\left(\ln x\sec x\right)-\frac{1}{2}\ln\left(\left(\ln x\sec x\right)^{2}+1\right)
\end{align*}
```
