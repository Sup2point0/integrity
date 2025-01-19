---
topic: integrals
title: secanthropic
desc: 
date: 2025 January 9
tags:
  - horror
  - trig
  - frac
method:
  - spot
  - algebra
---


## Question
```math
\int
  \frac
    {1 + \tan{x}}
    {
        \sec^4{x}
      + \sec{x}\tan{x}
      - 2\sec^2{x}\tan^2{x}
      + \sec{x}
      + \tan{x}
      + \tan^4{x}
    }
\ dx
```


## Hints

### 1

### 2

### 3


## Answer
```math
x+\cot x-\csc x-c
```


## Solution

### Reform
```math
\begin{align*}
  &\ \int\frac{1 + \tan{x}}{\sec^4{x}+\sec{x}\tan{x}-2\sec^2{x}\tan^2{x}+\sec{x}+\tan{x}+\tan^4{x}}\ dx
  \\ =&\ \int \frac{1+\tan x}{\left(\sec^{4}x-2\sec^{2}x\tan^{2}x+\tan^{4}x\right)+\left(\sec x\tan x+\sec x\right)+\tan x}\ dx
  \\ =&\ \int \frac{1+\tan x}{\left(\sec^{2}x-\tan^{2}x\right)^{2}+\left(\sec x\right)\left(\tan x+1\right)+\tan x}\ dx
\end{align*}
```

We can show that $\sec^2{x} - \tan^2{x} = 1$:

```math
\begin{align*}
  &\ \sec^2{x} - \tan^2{x}
  \\ =&\ \frac{1}{\cos^{2}x}-\frac{\sin^{2}x}{\cos^{2}x}
  \\ =&\ \frac{1-\sin^{2}x}{\cos^{2}x}
  \\ =&\ \frac{\cos^{2}x}{\cos^{2}x}
  \\ =&\ 1
\end{align*}
```

So we have

```math
= \int \frac{1+\tan x}{1+\left(\sec x\right)\left(\tan x+1\right)+\tan x}\ dx
```

### Factorise
```math
\begin{align*}
  &= \int \frac{1+\tan x}{1+\left(\sec x\right)\left(\tan x+1\right)+\tan x}\ dx
  \\ &= \int \frac{1+\tan x}{\left(1+\tan x\right)+\left(\sec x\right)\left(1+\tan x\right)}\ dx
  \\ &= \int \frac{1+\tan x}{\left(1+\tan x\right)\left(1+\sec x\right)}\ dx
  \\ &= \int \frac{1}{1+\sec x}\ dx
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int \frac{\cos x}{\cos x+1}\ dx
  \\ &= \int \frac{\cos x+1}{\cos x+1}-\frac{1}{\cos x+1}\ dx
  \\ &= \int dx-\int \frac{1}{1+\cos x}\ dx
  \\ &= x-\int \frac{1-\cos x}{\left(1+\cos x\right)\left(1-\cos x\right)}\ dx
  \\ &= x-\int \frac{1-\cos x}{1-\cos^{2}x}\ dx
  \\ &= x-\int \frac{1-\cos x}{\sin^{2}x}\ dx
  \\ &= x-\int \frac{1}{\sin^{2}x}\ dx+\int \frac{\cos}{\sin^{2}x}\ dx
  \\ &= x-\int \csc^{2}x\ dx+\int \frac{\cos x}{\sin x}\cdot\frac{1}{\sin x}\ dx
  \\ &= x+\int -\csc^{2}x\ dx-\int -\cot x\csc x\ dx
  \\ &= x+\cot x-\csc x-c
\end{align*}
```
