---
topic: integrals
title: fantastically bananas
desc: 
date: 2025 February 9
tags:
  - trig
  - frag
methods:
  - spot
---


## Question
```math
\int
  \frac
    { 1 + \sin^2{x} + \cos^2{x} - \cot^2{x} }
    { ( \sin^2{x} + \cos^2{x} + \tan^2{x} )^{-1} }
  \sin(2x)
\ dx
```


## Hints

### 1
Some stuff simplifies here!

### 2
Reducing to $\sin$ and $\cos$ primitives will help you spot a lot of things.


## Answer
```math
-2\ln\left|\sin{2x}\right|-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{\sin^{2}x+\cos^{2}x-\cot^{2}x}{\left(\sin^{2}x+\cos^{2}x+\tan^{2}x\right)^{-1}}\sin\left(2x\right)\ dx
  \\ =&\ \int \frac{1-\cot^{2}x}{\left(1+\tan^{2}x\right)^{-1}}\sin\left(2x\right)\ dx
  \\ =&\ \int \frac{1-\cot^{2}x}{\left(\sec^{2}x\right)^{-1}}\sin\left(2x\right)\ dx
  \\ =&\ \int \frac{1}{\cos^{2}x}\left(1-\frac{\cos^{2}x}{\sin^{2}x}\right)\sin\left(2x\right)\ dx
  \\ =&\ \int \frac{1}{\cos^{2}x}\left(\frac{\sin^{2}x-\cos^{2}x}{\sin^{2}x}\right)\sin\left(2x\right)\ dx
  \\ =&\ -\int \frac{\left(\cos^{2}x-\sin^{2}x\right)\sin\left(2x\right)}{\left(\cos^{2}x\right)\left(\sin^{2}x\right)}\ dx
  \\ =&\ -\int \frac{\cos\left(2x\right)\sin\left(2x\right)}{\left(\sin x\cos x\right)^{2}}\ dx
  \\ =&\ -4\int \frac{\sin\left(2x\right)\cos\left(2x\right)}{\left(2\sin x\cos x\right)^{2}}\ dx
  \\ =&\ -4\int \frac{\sin\left(2x\right)\cos\left(2x\right)}{\sin\left(2x\right)^{2}}\ dx
  \\ =&\ -2\int \frac{2\cos2x}{\sin2x}\ dx
  \\ =&\ -2\ln\left|\sin2x\right|-c
\end{align*}
```
