---
topic: integrals
title: unstable concoction
desc: 
date: 2025 April 1
tags:
 - trig
methods:
  - speed
---


## Question
```math
\int
  \frac
    { \sin{x} \sec{x} \tan{x} }
    { \cos{x} \csc{x} \cot{x} }
\ dx
```


## Answer
```math
\frac{1}{3}\tan^{3}x-\tan x+x-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{\sin x\sec x\tan x}{\cos x\csc x\cot x}\ dx
  \\ =&\ \int \frac{\sin x\cdot\frac{1}{\cos x}\cdot\frac{\sin x}{\cos x}}{\cos x\cdot\frac{1}{\sin x}\cdot\frac{\cos x}{\sin x}}\ dx
  \\ =&\ \int \frac{\sin^{4}x}{\cos^{4}x}\ dx
  \\ =&\ \int \tan^{4}x\ dx
  \\ =&\ \int \left(\tan^{2}x\right)\left(\sec^{2}x-1\right)\ dx
  \\ =&\ \int \sec^{2}x\tan^{2}x-\tan^{2}x\ dx
  \\ =&\ \frac{1}{3}\tan^{3}x-\int \sec^{2}x-1\ dx
  \\ =&\ \frac{1}{3}\tan^{3}x-\tan x+x-c
\end{align*}
```
