---
topic: integrals
title: apropos
desc: 
date: 2025 May 20
difficulty: incline
tags:
  - exp
  - ln
methods:
  - spot
  - layer cake
---


## Question
```math
\int
  \frac
    { 1 + x\ln{x} + 2xe^x }
    { xe^x + x\ln{x} }
\ dx
```


## Hints

### 1
The coefficient of $2$ in front of $xe^x$ means you can split it in two.

### 2
How can you factorise the denominator?

### 3
How can you get the denominator in the numerator?


## Answer
```math
x+\ln\left(e^{x}+\ln x\right)-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{1+x\ln x+2xe^{x}}{xe^{x}+x\ln x}\ dx
  \\ =&\ \int \frac{1+x\ln x+2xe^{x}}{x\left(e^{x}+\ln x\right)}\ dx
  \\ =&\ \int \frac{x\ln x+xe^{x}}{x\left(e^{x}+\ln x\right)}+\frac{1+xe^{x}}{x\left(e^{x}+\ln x\right)}\ dx
  \\ =&\ \int 1+\frac{e^{x}+1/x}{e^{x}+\ln x}\ dx
  \\ =&\ x+\ln\left(e^{x}+\ln x\right)-c
\end{align*}
```
