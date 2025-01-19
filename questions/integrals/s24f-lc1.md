---
topic: integrals
title: blink
desc: 
date: 2024 December 9
tags:
  - horror
  - trig
  - frac
method:
  - layer cake
---


## Question
```math
\int \frac{1+x^{-1}\cot x^{-1}}{x\ln\left(x^{-1}\sin\left(x^{-1}\right)\right)}\ dx
```


## Hints

### 1
Let’s start by rewriting those $x^{-1}$.

### 2
There’s not much algebraic manipulation we can do here, so try a substitution.

### 3
Substitute $\frac{1}{x}$.


## Answer
```math
-\ln\left(\ln\left(\sin\left(\frac{1}{x}\right)\right)-\ln x\right)-c
```


## Solution

### Clean
```math
\begin{align*}
  &= \int \frac{1}{x}\cdot\frac{1+\left(\frac{1}{x}\right)\cot\left(\frac{1}{x}\right)}{\ln\left(\left(\frac{1}{x}\right)\sin\left(\frac{1}{x}\right)\right)}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \frac{1}{x}=t\ \to\ x &= \frac{1}{t}
  \\ dx &= -\frac{1}{t^{2}}\ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int t\cdot\frac{1+t\cot t}{\ln\left(t\sin t\right)}\cdot-\frac{1}{t^{2}}\ dt
  \\ &= -\int \frac{\frac{1}{t}+\cot t}{\ln\left(t\sin t\right)}\ dt
  \\ &= -\int \frac{\frac{1}{t}+\frac{\cos t}{\sin t}}{\ln\left(t\right)+\ln\left(\sin t\right)}\ dt
  \\ &= -\ln\left(\ln\left(t\right)+\ln\left(\sin t\right)\right)
  \\ &= -\ln\left(\ln\left(\frac{1}{x}\right)+\ln\left(\sin\left(\frac{1}{x}\right)\right)\right)
  \\ &= -\ln\left(\ln\left(\sin\left(\frac{1}{x}\right)\right)-\ln x\right)-c
\end{align*}
```
