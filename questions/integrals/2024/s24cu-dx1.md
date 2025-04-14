---
topic: integrals
title: dreams of integrity
desc: The integral that came to me in a dream.
date: 2024 October 22
tags:
  - trig
methods:
  - spot
---


## Question
```math
\int \frac{\left(\sin^{2}x\right)^{2}}{\tan x+\cot x}\ dx
```


## Answer
```math
=\frac{1}{6}\left(\sin x\right)^{6}-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{\left(\sin^{2}x\right)^{2}}{\tan x+\cot x}\ dx
  \\ =&\ \int \left(\sin x\right)^{4}\cdot\frac{1}{\frac{\sin x}{\cos x}+\frac{\cos}{\sin x}}\ dx
  \\ =&\ \int \left(\sin x\right)^{4}\cdot\frac{1}{\frac{\sin x}{\cos x}+\frac{\cos}{\sin x}}\cdot\frac{\sin x\cos x}{\sin x\cos x}\ dx
  \\ =&\ \int \left(\sin x\right)^{4}\cdot\frac{\sin x\cos x}{\sin^{2}x+\cos^{2}x}\ dx
  \\ =&\ \int \left(\sin x\right)^{5}\cos x\ dx
  \\ =&\ =\frac{1}{6}\left(\sin x\right)^{6}-c
\end{align*}
```
